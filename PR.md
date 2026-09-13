# PR: Mobile PWA, Internationalization, QR Match Sharing & UI Enhancements

## Summary

This PR turns TrucoTab into an installable Progressive Web App (PWA), adds full Spanish/English internationalization, introduces QR-code match sharing via URL state, adds header quick controls (theme & language), integrates Lucide React icons, and improves light mode contrast.

## Key Changes

- **PWA & Mobile Support**:
  - Added service worker (`public/sw.js`) and registration script for offline capabilities and app caching.
  - Added web app manifest (`public/manifest.json`), mobile meta tags, and icons (`public/icons/`).
  - Added `"sw"` script to `package.json` to build & preview the PWA locally.

- **Internationalization (i18n)**:
  - Added bilingual translations in `src/i18n/translations.js` for English (`en`) and Spanish (`es`).
  - Added `useTranslation` hook and integrated language preference into Redux settings slice.

- **Match Sharing via QR Code & URL**:
  - Added header control button to generate shareable URLs containing current match state (names, emojis, scores, match type).
  - Modal displays a QR code (`qrcode.react`) and copyable link. Opening the link on another device auto-populates the match state.

- **UI & Icon Enhancements**:
  - Replaced text/emoji controls with `lucide-react` icons (menu, QR share, theme toggle, nav items, close buttons, empty states).
  - Added quick theme (`🌙`/`☀️`) and language (`🇪🇸`/`🇬🇧`) toggle buttons in the site header.
  - Constrained main layout to `100dvh` viewport height with scrollable main area so the footer remains always visible.
  - Rendered app version from `package.json` in the always-visible site footer.
  - Added victory text `"Tremenda rompida de orto!"` in the winner modal for wins exceeding 14 points.
  - Enhanced light mode panel contrast, borders, and subtle elevation shadows across cards and tables.
