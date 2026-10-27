# Reste à faire (audit portfolio)

## Accessibilité & motion
- [x] Respecter `prefers-reduced-motion` dans tous les composants animés (guard + CSS media query).
- [x] Rendre le curseur custom désactivable / fallback natif sur appareils tactiles (conditionnel via `@media (pointer: fine)`).

## Performance Web
- [x] Ajouter `content-visibility: auto` + `contain-intrinsic-size` sur les sections sous la ligne de flottaison (contact, cta).
- [x] Optimiser les images : servir AVIF/WebP via config Next.js, ajouter `sizes`/`srcset` manquants.
- [x] Précharger la police ClashDisplay (`<link rel="preload" as="font" crossorigin>`).
- [x] Vérifier la synchronisation Lenis ↔ ticker GSAP (ScrollTrigger).

## Structure du code (GSAP / React)
- [ ] Remplacer les `document.getElementById` / `querySelector` dans `about.tsx` par des refs React.
- [ ] Ajouter un `scope` (ref) à tous les `useGSAP` (hero, about, cursor, header, lang-switcher, faq).
- [x] Recalculer `end` de ScrollTrigger dans `sticky-projects.tsx` au resize (`invalidateOnRefresh`).
- [x] Debouncer `ScrollTrigger.refresh()` dans le `ResizeObserver` de `sticky-projects.tsx`.
- [x] Ne pas tuer tous les ScrollTriggers dans le cleanup de `sticky-projects.tsx`.
- [x] Extraire les timelines créées hors `matchMedia` dans `about.tsx` dans les callbacks correspondants.

## Accessibilité
- [x] Ajouter des `alt` descriptifs aux images de projets.
- [x] Vérifier le contraste et les focus states (outline `:focus-visible`).

## Sécurité / SEO
- [x] Ajouter `metadataBase` dans `generateMetadata`.
- [x] Vérifier les en-têtes de sécurité (CSP, HSTS) côté déploiement.

## Nettoyage
- [x] Vérifier l'usage de `motion` et `react-use-measure` (gardés, utilisés).
- [x] Ignorer `.agents/` et `skills-lock.json` via `.gitignore`.