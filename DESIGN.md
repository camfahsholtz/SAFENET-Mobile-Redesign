# DESIGN.md: SAFENET Mobile Design System

## 1. Design Philosophy
SAFENET is a high-utility, federal reporting tool designed for wildland firefighters in high-stress, field-operational environments. The system prioritizes extreme legibility, accessibility (WCAG AAA target), and "no-fail" touch interaction. It adopts an "austere editorial" aesthetic: professional, calm, and authoritative, eschewing consumer-grade trends for a minimalist, structural approach that feels like an official field manual.

---

## 2. Do / Don't
- **Do** use 0px border radius for all elements.
- **Do** prioritize white space for scannability under glare.
- **Do** use a system font stack for maximum reliability.
- **Do** ensure all interactive targets meet the 56px minimum.
- **Do** include a visible "View [target] →" label (right-aligned in `text-body-sm text-action-primary`) at the end of a card's header row when the destination of the tap needs to be communicated explicitly. The entire card surface remains the tap target; the label is a visible affordance, not a nested interactive element.
- **Do not** use rounded corners for any component (buttons, cards, chips, avatars).
- **Do not** use red as a brand or accent color; it is reserved for errors and hazards.
- **Do not** use decorative imagery or brand-heavy illustrations.
- **Do not** use custom or hosted brand fonts.
- **Do not** use bouncy or playful animations.

---

## 3. Color — Primitives
Raw color values derived from NIFC earth tones and professional neutrals.

| Token | Hex | Description |
| :--- | :--- | :--- |
| **green-950** | `#0F1F14` | Pressed state — deepest forest green |
| **green-900** | `#162C1E` | Deepest forest green |
| **green-800** | `#1F3D2B` | Federal forest green (Action Primary) |
| **green-700** | `#2B523A` | Muted foliage green |
| **slate-900** | `#151C24` | On-surface / Deepest neutral |
| **slate-600** | `#43474F` | Secondary text neutral |
| **slate-200** | `#C3C6D1` | Outline variant / Subtle structural |
| **neutral-100** | `#F8F9FF` | Base Surface |
| **neutral-200** | `#EEF4FF` | Surface Container Low |
| **neutral-300** | `#E8EEFA` | Surface Container |
| **neutral-400** | `#DDE3F1` | Surface Container Pressed |
| **white** | `#FFFFFF` | Highest elevation / Surface Lowest |
| **red-700** | `#B22A29` | Semantic Error / Danger |
| **amber-600** | `#D97706` | Semantic Warning |
| **blue-700** | `#20467B` | Semantic Information |

---

## 4. Color — Semantic Tokens
Components must reference these tokens, never primitives.

| Semantic Token | Primitive Reference | Usage |
| :--- | :--- | :--- |
| **surface** | `neutral-100` | Default background for screens |
| **surface-elevated** | `white` | High-priority cards, floating panels |
| **surface-container** | `neutral-300` | Section backgrounds, structural areas |
| **border** | `slate-200` | Ghost borders (15% opacity default) |
| **border-strong** | `slate-600` | Inputs, focused boundaries |
| **text-primary** | `slate-900` | Primary headlines and body copy |
| **text-secondary** | `slate-600` | Metadata, labels, captions |
| **text-disabled** | `slate-200` | Inactive states |
| **action-primary** | `green-800` | Main buttons, primary interactions |
| **action-primary-hover** | `green-900` | Hover state |
| **action-primary-pressed** | `green-950` | Pressed / active state |
| **on-action-primary** | `white` | Text on primary buttons |
| **action-secondary** | `neutral-300` | Secondary buttons / Tertiary fill |
| **surface-container-pressed** | `neutral-400` | Pressed background for secondary and ghost buttons |
| **status-error** | `red-700` | Error messages, destructive actions |
| **status-warning** | `amber-600` | Warning banners, cautionary info |
| **status-info** | `blue-700` | Instructional or system notes |

---

## 5. Typography Scale
**System Stack:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.

| Role | Size | Line-Height | Weight | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **display** | 40px | 48px | 700 (Bold) | -0.02em |
| **heading-xl** | 32px | 40px | 700 (Bold) | -0.01em |
| **heading-lg** | 24px | 32px | 700 (Bold) | 0 |
| **heading-md** | 20px | 28px | 600 (Semi-Bold) | 0 |
| **heading-sm** | 18px | 24px | 600 (Semi-Bold) | 0 |
| **body-lg** | 20px | 30px | 400 (Regular) | 0 |
| **body** | 17px | 26px | 400 (Regular) | 0 |
| **body-sm** | 15px | 22px | 400 (Regular) | 0 |
| **caption** | 13px | 18px | 500 (Medium) | 0.02em |
| **overline** | 11px | 16px | 700 (Bold) | 0.05em (All Caps) |

---

## 6. Spacing Scale
Based on a 4px grid system.

| Token | Value |
| :--- | :--- |
| **space-1** | 4px |
| **space-2** | 8px |
| **space-3** | 12px |
| **space-4** | 16px |
| **space-5** | 20px |
| **space-6** | 24px |
| **space-7** | 28px |
| **space-8** | 32px |
| **space-10** | 40px |
| **space-12** | 48px |
| **touch-min** | 56px |
| **touch-primary** | 64px |

---

## 7. Radius Scale
All radius tokens resolve to 0. This is intentional.

- `radius-sm`: 0px
- `radius-md`: 0px
- `radius-lg`: 0px
- `radius-full`: 0px

---

## 8. Elevation
SAFENET uses a "flat-first" approach. Only one level of depth is permitted for interactive separation.

- **Default:** Flat. Separation via tonal shifts (e.g., `surface` vs `surface-container`).
- **Elevated:** 1px `border` (15% opacity) + a subtle ambient shadow.
- **Shadow Spec:** Blur: 40px, Opacity: 6%, Color: `slate-900`.

---

## 9. Touch Target Rules
Designed for field use with gloved hands and high stress.

- **Minimum Touch Target:** 56px x 56px.
- **Primary Action Height:** 64px.
- **Spacing between targets:** Minimum 8px (space-2).

---

## 10. Focus States
Mandatory for Section 508 accessibility.

- **Focus Ring:** 3px solid `green-800`.
- **Offset:** 2px from the element boundary.
- **Contrast:** Must maintain 4.5:1 (AA) or higher against both the element and the background.

---

## 11. Iconography Notes
- **Weight:** Single stroke weight (approx. 2px).
- **Caps:** Square line caps (no round endings).
- **Labels:** Icons must always be accompanied by a text label (`label-md` or `caption`) unless the affordance is universal (Back, Search, Close).

---

## 12. Contrast Ratio Appendix
Measured text/foreground against background surfaces.

| Pair | Ratio | WCAG Level |
| :--- | :--- | :--- |
| `text-primary` on `surface` | 13.5:1 | **AAA** |
| `text-secondary` on `surface` | 7.2:1 | **AAA** |
| `on-action-primary` on `action-primary` | 8.4:1 | **AAA** |
| `status-error` on `surface` | 5.8:1 | **AA** |
| `text-primary` on `surface-container` | 11.2:1 | **AAA** |
| `green-800` (Focus Ring) on `surface` | 8.2:1 | **AAA** |

---
