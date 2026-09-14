# PR: Mobile Layout Optimization, Larger Score Display & Toast Button Text Wrap Fix

## Summary

Improves mobile layout responsiveness by hiding keyboard shortcuts on small screens, expanding player cards to fill available height, enlarging score font sizes, and preventing text wrapping on toast confirmation buttons.

## Key Changes

- **Hidden Mobile Shortcuts**: Added CSS rule to hide `.shortcuts` helper text on mobile viewports (`@media (max-width: 720px)`).
- **Expanded Mobile Player Panels**: Made `.board` and `.player` cards flex containers that expand to fill available height (`flex: 1`, `min-height: 0`).
- **Enlarged Responsive Scores**: Set `.points` font size to `clamp(3.2rem, 11vh, 5.5rem)` with `white-space: nowrap` for max visibility without line wrapping.
- **Fixed Toast Button Wrapping**: Updated `.toast-confirm` and `.toast-cancel` buttons to use `width: auto`, `min-width: 90px`, and `white-space: nowrap` so confirmation text ("Confirmar", "Cancelar") stays on a single line.
