---
name: Field Notes Minimal
colors:
  surface: '#fbf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fbf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f4ed'
  surface-container: '#f0eee7'
  surface-container-high: '#eae8e1'
  surface-container-highest: '#e4e2dc'
  on-surface: '#1b1c18'
  on-surface-variant: '#45464d'
  inverse-surface: '#30312c'
  inverse-on-surface: '#f3f1ea'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#a73a00'
  on-secondary: '#ffffff'
  secondary-container: '#fd651e'
  on-secondary-container: '#571a00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#ffdbce'
  secondary-fixed-dim: '#ffb599'
  on-secondary-fixed: '#370e00'
  on-secondary-fixed-variant: '#7f2b00'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#fbf9f2'
  on-background: '#1b1c18'
  surface-variant: '#e4e2dc'
typography:
  display:
    fontFamily: Plus Jakarta Sans
    fontSize: 3.25rem
    fontWeight: '700'
    lineHeight: 3.75rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.5rem
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.02em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.04em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-mobile: 1rem
  margin-tablet: 1.5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

The design system embodies the calculated precision of an archival field manual fused with contemporary digital product design. It targets technical practitioners, systems architects, and researchers who appreciate utilitarian clarity elevated by editorial grace.

The visual tone is calm, human, scholarly, and uncompromisingly structured. It avoids sterile corporate minimalism in favor of a warm, tangible quality reminiscent of premium drafting paper, technical logbooks, and archival blueprint typography. High contrast between deep ink and fibrous paper ensures rapid scanning, while disciplined monospace metadata creates a sense of methodical order.

## Colors

The palette reproduces tactile drafting materials with functional contrast:

- **Surface Tiers**: Base canvas uses `#F4F2EB` (Warm Parchment), elevated containers step into `#F8F7F4` (Clean Vellum), and recessed wells use `#EAE7DD`.
- **Ink System**: `#0F172A` acts as the primary drafting ink for headings and prominent containers. Secondary body text uses `#1E293B`, while muted metadata sits at `#64748B`.
- **Accents**: 
  - `#EA580C` (Burnt Orange) serves as the primary action accent, reminiscent of field markers, primary stamps, and active statuses.
  - `#2563EB` (Electric Blueprint Blue) functions as a tertiary technical accent for code highlights, reference links, and secondary indicators.
- **Rule & Grid Line**: Subtle technical divisions utilize `#E2DDD3`, providing reference structure without dominating content.

## Typography

The typographic hierarchy establishes a rigorous duality: modern geometric humanism for narrative thought and rigid monospace precision for data.

- **Primary Structure**: Plus Jakarta Sans provides natural, warm readability for all editorial copy, section headers, and running text. Tight letter spacing on headlines produces an intentional editorial feel.
- **Instrumental Metadata**: JetBrains Mono is strictly reserved for contextual labels, index numbers, timestamps, key-value tables, and status badges.
- **Case Rule**: Monospace labels (`label-sm`, `label-md`) should frequently use uppercase styling with open tracking to emulate industrial serial numbering and archival notations.

## Layout & Spacing

The layout is built upon an architectural 12-column grid system grounded in consistent 8px/4px sub-divisions, referencing drafting paper proportions:

- **Desktop (1024px+)**: 12-column fluid grid, `2rem` outer margins, `1.5rem` gutters. Maximum content width caps at `1280px` for readability.
- **Tablet (768px - 1023px)**: 8-column grid, `1.5rem` outer margins, `1rem` gutters. Sidebars fold into sequential collapsible panels.
- **Mobile (< 768px)**: 4-column fluid grid, `1rem` outer margins, `1rem` gutters. All technical side rails stack below primary content blocks.
- **Canvas Texture**: The primary canvas integrates a repeating 24px dot-grid or millimeter rule pattern rendered in `#E2DDD3` at 40% opacity, providing visual grounding without interfering with text scanability.

## Elevation & Depth

This system intentionally departs from standard drop shadows, prioritizing tactile and structural hierarchy through calibrated line work and tonal layering:

- **Tonal Tiers**: Depth is achieved through surface contrasts: Ground (`#F4F2EB`) → Sheet Container (`#F8F7F4`) → Inset Well (`#EAE7DD`).
- **Technical Outlines**: Containers and cards rely on a crisp `1px` border of `#E2DDD3`.
- **Hard Shadow Metaphor**: When active components (modals, dropdown popovers, floating toolbars) require physical detachment from the plane, use an offset hard shadow with zero blur radius: `2px 2px 0px 0px #0F172A` or `3px 3px 0px 0px rgba(15, 23, 42, 0.15)`. This creates an authentic stationery-cutout feel.

## Shapes

The geometry reflects industrial paper trimmers and index cards—softened just enough to avoid razor-sharp digital edges while maintaining mechanical precision.

- **Standard Containers & Cards**: Fixed `0.25rem` (4px) corner radius.
- **Sub-elements (Badges, Buttons, Inputs)**: `0.25rem` (4px) to retain structural alignment.
- **Utility Indicators**: Square chips and cut-corner indicators may be introduced for status flags to amplify the laboratory notebook theme.

## Components

### Buttons
- **Primary**: Background `#0F172A`, text `#F8F7F4`, `1px solid #0F172A`. In hover state, translate `-1px, -1px` with a `2px 2px 0px #EA580C` hard accent shadow.
- **Accent (Field Action)**: Background `#EA580C`, text `#FFFFFF`, borderless, high visual urgency.
- **Secondary**: Background `#F8F7F4`, text `#0F172A`, `1px solid #E2DDD3`.
- **Text/Link**: Text `#2563EB`, underlined with a `1px` dotted line spaced `2px` below baseline.

### Inputs & Selects
- Inputs utilize surface `#F8F7F4` framed with `1px solid #E2DDD3`. 
- Focus state switches the border to `1px solid #0F172A` and introduces an accent corner tag or `1px` hard shadow.
- Placeholder text is styled in `label-md` monospace font in `#64748B`.

### Cards & Panels
- Cards use `#F8F7F4` background over the `#F4F2EB` dot-grid canvas.
- Framed with `1px solid #E2DDD3`.
- Card headers feature an architectural metadata strip: section coordinates, index numbers, or timestamps in `label-sm` uppercase.

### Chips & Badges
- Compact rectangular forms with `0.25rem` radius.
- Background tinted softly to `#EAE7DD` with `1px solid #D8D3C5`.
- Text renders strictly in `label-sm` monospace. Active/Alert statuses introduce an `#EA580C` or `#2563EB` solid pip (4x4px dot) before the text.

### Checkboxes & Radios
- Checkboxes are 16x16px squares with `2px` roundedness, framed in `1.5px solid #0F172A`. Checked state fills `#0F172A` with an off-white, precise mathematical checkmark.
- Radio buttons maintain the same strict hairline styling with a centered solid disc when active.

### Data Tables & Log Lists
- Strict horizontal rules in `#E2DDD3`; no vertical row dividers.
- Table headers set in `label-sm` tracking uppercase.
- Alternating rows may utilize a faint tint of `#F4F2EB` on hover to aid row tracking.