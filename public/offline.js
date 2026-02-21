const translations = {
	en: {
		heading: "You're Offline",
		paragraph:
			"It looks like you've lost your internet connection. Some features may not be available.",
		button: "Go Back Home",
	},
	fr: {
		heading: "Vous êtes hors ligne",
		paragraph:
			"Il semble que vous ayez perdu votre connexion internet. Certaines fonctionnalités peuvent ne pas être disponibles.",
		button: "Retour à l'accueil",
	},
};

const langMenu = document.getElementById("lang-menu");
const langMenuToggle = document.getElementById("lang-menu-toggle");
const currentLang = getCookie("NEXT_LOCALE") || "en";

function applyTranslations() {
	const lang = getCookie("NEXT_LOCALE") || "en";
	const t = translations[lang];

	document.getElementById("heading").textContent = t.heading;
	document.getElementById("paragraph").textContent = t.paragraph;
	document.getElementById("home-link").textContent = t.button;
	document.documentElement.lang = lang;
}

function showUp() {
	langMenu.classList.toggle("translate-y-full");
	langMenu.classList.toggle("opacity-0");
}

const langLink1 = document.getElementById("lang-link-1");
const langLink2 = document.getElementById("lang-link-2");
langMenuToggle.innerHTML = currentLang;

if (currentLang) {
	langLink1.href = `/${currentLang}`;
	langLink2.href = `/${currentLang}`;

	langLink1.innerHTML = currentLang === "en" ? "en" : "fr";
	langLink2.innerHTML = currentLang === "en" ? "fr" : "en";
}

langMenuToggle.addEventListener("click", showUp);

document.addEventListener("DOMContentLoaded", applyTranslations);

function getCookie(name) {
	const cookieName = `${name}=`;
	// Decode the cookie string to handle special characters
	const decodedCookie = decodeURIComponent(document.cookie);
	const cookieArray = decodedCookie.split(";");

	for (let i = 0; i < cookieArray.length; i++) {
		let cookie = cookieArray[i];
		// Trim leading spaces from the cookie string
		while (cookie.charAt(0) === " ") {
			cookie = cookie.substring(1);
		}
		// If the cookie name is found at the beginning of the trimmed string, return its value
		if (cookie.indexOf(cookieName) === 0) {
			return cookie.substring(cookieName.length, cookie.length);
		}
	}
	return ""; // Return an empty string if the cookie is not found
}
