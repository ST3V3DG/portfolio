const CACHE_NAME = "web-cv-v1";
const STATIC_CACHE = "web-cv-static-v1";
const DYNAMIC_CACHE = "web-cv-dynamic-v1";

const STATIC_ASSETS = [
	"/",
	"/fr",
	"/en",
	"/offline.html",
	"/offline.css",
	"/images/favicon-196.png",
	"/images/apple-icon-180.png",
	"/images/manifest-icon-192.maskable.png",
	"/images/manifest-icon-512.maskable.png",
];

const _FONT_EXTENSIONS = [".woff2", ".woff", ".ttf", ".otf"];
const _IMAGE_EXTENSIONS = [
	".png",
	".jpg",
	".jpeg",
	".gif",
	".svg",
	".webp",
	".ico",
];
const FONT_URL_PATTERN = /\/(fonts\/.*\.(?:woff2?|ttf|otf))/;
const IMAGE_URL_PATTERN = /\/(images\/.*\.(?:png|jpg|jpeg|gif|svg|webp|ico))/;
const SVG_URL_PATTERN = /\/(svgs\/.*\.svg)/;

function isValidUrl(url) {
	try {
		new URL(url);
		return true;
	} catch {
		return false;
	}
}

function isStaticAsset(url) {
	if (!isValidUrl(url)) return false;
	const pathname = new URL(url).pathname;
	return (
		FONT_URL_PATTERN.test(pathname) ||
		IMAGE_URL_PATTERN.test(pathname) ||
		SVG_URL_PATTERN.test(pathname) ||
		pathname.startsWith("/_next/static/")
	);
}

function isPageRequest(url) {
	if (!isValidUrl(url)) return false;
	const pathname = new URL(url).pathname;
	return (
		pathname === "/" ||
		pathname === "/fr" ||
		pathname === "/en" ||
		pathname.startsWith("/fr/") ||
		pathname.startsWith("/en/")
	);
}

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches.open(STATIC_CACHE).then((cache) => {
			return cache.addAll(STATIC_ASSETS);
		}),
	);
	self.skipWaiting();
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames
					.filter((name) => {
						return (
							name.startsWith("web-cv-") &&
							name !== CACHE_NAME &&
							name !== STATIC_CACHE &&
							name !== DYNAMIC_CACHE
						);
					})
					.map((name) => {
						return caches.delete(name);
					}),
			);
		}),
	);
	self.clients.claim();
});

self.addEventListener("fetch", (event) => {
	const { request } = event;

	if (request.method !== "GET") {
		return;
	}

	if (!isValidUrl(request.url)) {
		return;
	}

	const url = new URL(request.url);

	if (url.origin !== self.location.origin) {
		return;
	}

	if (isStaticAsset(request.url)) {
		event.respondWith(cacheFirst(request));
		return;
	}

	if (
		isPageRequest(request) ||
		request.headers.get("accept")?.includes("text/html")
	) {
		event.respondWith(staleWhileRevalidate(request));
		return;
	}

	event.respondWith(networkFirst(request));
});

async function cacheFirst(request) {
	const cachedResponse = await caches.match(request);
	if (cachedResponse) {
		return cachedResponse;
	}

	try {
		const networkResponse = await fetch(request);
		if (networkResponse.ok) {
			const cache = await caches.open(STATIC_CACHE);
			cache.put(request, networkResponse.clone());
		}
		return networkResponse;
	} catch (_error) {
		return new Response("Offline", {
			status: 503,
			statusText: "Service Unavailable",
		});
	}
}

async function staleWhileRevalidate(request) {
	const cache = await caches.open(DYNAMIC_CACHE);
	const cachedResponse = await cache.match(request);

	const fetchPromise = fetch(request)
		.then((networkResponse) => {
			if (networkResponse.ok) {
				cache.put(request, networkResponse.clone());
			}
			return networkResponse;
		})
		.catch(() => {
			if (cachedResponse) {
				return cachedResponse;
			}
			return caches.match("/offline.html");
		});

	return cachedResponse || fetchPromise;
}

async function networkFirst(request) {
	try {
		const networkResponse = await fetch(request);
		if (networkResponse.ok) {
			const cache = await caches.open(DYNAMIC_CACHE);
			cache.put(request, networkResponse.clone());
		}
		return networkResponse;
	} catch (_error) {
		const cachedResponse = await caches.match(request);
		if (cachedResponse) {
			return cachedResponse;
		}
		return new Response("Offline", {
			status: 503,
			statusText: "Service Unavailable",
		});
	}
}
