import { useRef, useSyncExternalStore } from "react";

export function useMediaQuery({ query }: { query: string }) {
	const mediaQuery = useRef(window.matchMedia(query));
	return useSyncExternalStore(
		(callback) => {
			mediaQuery.current.addEventListener("change", callback);
			return () => mediaQuery.current.removeEventListener("change", callback);
		},
		() => mediaQuery.current.matches
	);
}
