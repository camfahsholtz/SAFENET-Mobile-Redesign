# Design System Strategy: The Editorial Archive

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Editorial Archive."** 

We are moving away from the generic "dashboard" look of government portals and toward a high-end, authoritative editorial experience. This system prioritizes the weight of information, using monumental typography and intentional asymmetry to guide the eye. Instead of rigid, boxed-in layouts, we use expansive white space and tonal shifts to create a sense of vast, organized intelligence. It is restrained, trustworthy, and evokes the permanence of a stone-carved inscription balanced with the precision of a modern field manual.

### The Signature Break
To break the "template" look:
- **Intentional Asymmetry:** Align primary content to a 12-column grid, but allow "Display" elements and "Surface Containers" to bleed off-edge or overlap grid lines.
- **Tonal Depth:** We do not use borders to separate ideas; we use layers of light and shadow, mimicking the way physical documents are stacked on a high-end desk.

---

## 2. Colors & Tonal Hierarchy
This design system utilizes a palette of muted earth tones and professional grays to convey stability. The hierarchy is defined not by lines, but by **Surface Tiers.**

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are prohibited for sectioning. Structural boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section sitting directly on a `surface` background provides all the definition a user needs without the visual "noise" of a line.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. 
- **Base Layer:** `surface` (#f8f9ff)
- **Nested Content:** Place a `surface-container-low` (#eef4ff) or `surface-container` (#e8eefa) block within the base to define a functional area.
- **Focus Cards:** Use `surface-container-lowest` (#ffffff) for high-priority cards to make them "pop" forward against darker backgrounds.

### The "Glass & Gradient" Rule
To avoid a flat, "out-of-the-box" feel:
- **Glassmorphism:** For floating navigation or utility panels, use semi-transparent surface colors with a `backdrop-blur` (20px–40px). This integrates the UI into the environment rather than feeling pasted on.
- **Signature Textures:** Apply a subtle linear gradient to Hero sections and Primary CTAs. Transition from `primary` (#20467b) to `primary-container` (#3b5e94) at a 135-degree angle. This adds "visual soul" and a metallic, official polish.

---

## 3. Typography
We use **Public Sans** to achieve a high-contrast, editorial hierarchy. The contrast between massive `display` scales and minute, utilitarian `labels` creates an atmosphere of technical expertise.

- **Display (Lg/Md/Sm):** Used for "Statement" headers. These should be set with tight letter-spacing (-0.02em) to feel monolithic.
- **Headlines & Titles:** These are the workhorses of the system. Use `headline-lg` (2rem) for section starts to command attention.
- **The Label Logic:** `label-md` and `label-sm` should be used for metadata, coordinates, or status indicators. Pair these with `secondary` (#b22a29) or `tertiary` (#534431) for a "stamped" official look.

---

## 4. Elevation & Depth
Elevation is expressed through **Tonal Layering** rather than traditional drop shadows.

### The Layering Principle
Depth is achieved by "stacking." Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, natural lift that mimics heavy-stock paper.

### Ambient Shadows
When a component must float (e.g., a high-priority modal or floating action):
- **Blur:** 40px to 60px.
- **Opacity:** 4% to 8%.
- **Color:** Use a tinted version of `on-surface` (#151c24). Never use pure black shadows; they feel "digital" and cheap.

### The "Ghost Border" Fallback
If accessibility requirements demand a border, use the **Ghost Border**:
- Token: `outline-variant` (#c3c6d1) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** High-contrast `primary` fill with an `on-primary` label. Apply a very subtle 2px roundedness (`sm` scale).
- **Secondary:** Use `tertiary-fixed-dim` (#d9c3aa) with a `ghost-border`. This provides a "field kit" aesthetic.
- **States:** On hover, shift the background color by 5%—do not use heavy shadows.

### Cards & Sections
- **Strict Rule:** No dividers. Separate content using `spacing-lg` (vertical white space) or by switching the background from `surface` to `surface-container`.
- **Layout:** Use asymmetrical padding (e.g., more padding on the left than the right) for editorial "pull-quotes" or high-level summaries.

### Input Fields
- **Style:** Minimalist. No four-sided boxes. Use a `surface-variant` background with a slightly heavier 2px bottom-weighted `outline` to ground the input.
- **Labels:** Always use `label-md` in `on-surface-variant` (#43474f), positioned top-left for maximum legibility.

### The Archive List (New Component)
For list-heavy federal data: Avoid lines. Use alternating tonal stripes (Zebra striping) using `surface` and `surface-container-low` with a `md` (0.375rem) corner radius on each row to make them feel like individual files.

---

## 6. Do’s and Don’ts

### Do:
- **Do** lean into white space. An official document is never "cramped."
- **Do** use `secondary` (#b22a29) sparingly. It is a "warning" or "action" color only; overusing it diminishes its authority.
- **Do** use `tertiary` (#534431) for environmental or "earth" contexts—it grounds the digital interface in the physical world.

### Don’t:
- **Don’t** use 100% opaque, high-contrast borders. They break the editorial flow.
- **Don’t** use "bouncy" or "playful" animations. Transitions should be linear or ease-out, suggesting mechanical precision.
- **Don’t** use generic iconography. Use thin-stroke, technical icons that match the `outline` token's weight.