import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

export default async function proxy(request: NextRequest) {
	// Step 1: Use the incoming request (example)
	const defaultLocale = "en";

	// Step 2: Create and call the next-intl middleware (example)
	const handleI18nRouting = createMiddleware({
		locales: ["en", "fr"],
		defaultLocale,
	});
	const response = handleI18nRouting(request);

	// Step 3: Alter the response (example)
	response.headers.set("fr", defaultLocale);

	return response;
}

export const config = {
	// Match only internationalized pathnames
	matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
