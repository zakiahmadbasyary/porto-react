---
name: Terminal Editorial
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c6c6cf'
  on-secondary: '#2f3037'
  secondary-container: '#45464e'
  on-secondary-container: '#b4b4bd'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e2e1eb'
  secondary-fixed-dim: '#c6c6cf'
  on-secondary-fixed: '#1a1b22'
  on-secondary-fixed-variant: '#45464e'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-mobile:
    fontFamily: Geist
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.025em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-status:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 3rem
---

## Brand & Style

This design system embodies the ethos of precision engineering and meticulous data architecture. Rooted in technical minimalism and high-end editorial layout, the aesthetic merges the restrained, austere discipline of code editors with the typographically sensitive layout of an architect's monograph.

The emotional signature is quiet competence, clarity, and uncompromising craft. It rejects loud decorations, skeuomorphic noise, and aggressive neon gradients in favor of deep atmospheric blacks, immaculate typographic hierarchy, and razor-thin borders. The interface recedes entirely, serving as a pristine gallery frame for production systems, telemetry, architectural designs, and open-source contributions.

Key design anchors:
- **Atmospheric Obsidian:** Deep layered neutrals provide an immersive, quiet dark canvas.
- **Micro-Precision Accents:** Emerald green is used strictly as a telemetry signal (active states, live services, focused actions), never as a dominant decorative wash.
- **Editorial Typography:** High-contrast scale pairings, disciplined tracking, and generous line spacing convey deliberate maturity and intellect.

## Colors

The palette is engineered for prolonged visual comfort in dark environments, using a tiered grayscale spectrum to establish architectural surfaces without visual fatigue:

- **Canvas Background (`#0A0A0A`):** The foundational void, grounding full-page layouts.
- **Sub-surface / Structural Background (`#111111`):** Applied to alternate bands, side rails, sticky headers, and segmented panels.
- **Card & Elevated Surface (`#171717`):** Interactive containers, project cards, and code inspect panels.
- **Surface Hover (`#1F1F23`):** Instant, subdued feedback layer for active interactive modules.
- **Structural Borders (`#27272A`):** Ultra-refined 1px boundary lines that define components without visual clutter.
- **Primary Text (`#F5F5F5`):** Pristine, high-legibility display copy for headlines and primary data anchors.
- **Secondary / Body Text (`#A1A1AA`):** Calibrated muted neutral for long-form engineering essays and project descriptions.
- **Tertiary / Metadata Text (`#71717A`):** Muted timestamps, tags, commit hashes, and status metrics.
- **Accent Emerald (`#10B981`):** Strategic telemetry color for system statuses ("Available for work", "Pipeline active"), focused text links, and primary CTA micro-indicators.
- **Accent Emerald Muted (`rgba(16, 185, 129, 0.1)`): Micro-chip backgrounds and subtle focus halos.

## Typography

Typography functions as the primary visual architecture of this design system.

- **Headlines (Geist):** Sculpted with negative letter-spacing (-0.02em to -0.035em) to yield tight, editorial impact. Weights stay between 500 (Medium) and 600 (SemiBold), purposefully avoiding heavy weights to retain a light, precision-crafted look.
- **Body Text (Geist):** Prioritizes reading endurance and narrative cadence. Generous line heights (up to 1.7x font size) provide an open, breathable reading experience for technical case studies and engineering write-ups.
- **Technical & Metric Metadata (JetBrains Mono):** Reserved for technical indicators, performance metrics, repository stats, syntax displays, status chips, and date markers. This monospaced contrast reinforces data engineering rigor without breaking editorial elegance.

## Layout & Spacing

The layout is built upon an 8pt baseline rhythm inside a structured 12-column responsive grid, bounded by a maximum reading width of 1120px for wide layouts and 720px for technical case narratives.

### Grid & Breakpoints
- **Mobile (<768px):** 4 columns, `margin` of 1.25rem, `gutter` of 1rem. Single-column stacks for project cards, chronological logs, and data visualizations.
- **Tablet (768px - 1024px):** 8 columns, `margin` of 2.5rem, `gutter` of 1.5rem. Split asymmetric grids (4-column technical metadata alongside 4-column summaries).
- **Desktop (>1024px):** 12 columns, `margin` of 4rem, `gutter` of 2rem. Asymmetric compositions: 4-column sticky sidebar/context column paired with an 8-column main content stream.

### Spacing Principles
Whitespace is treated as an active architectural element. Section gaps lean wide (`space-xl` through double `space-xl`) to establish calm pace between project chapters, while atomic components maintain disciplined, tight internal padding (`space-sm` to `space-md`).

## Elevation & Depth

Visual depth is achieved exclusively through **tonal stacking** and **subtle 1px boundary lines**, entirely bypassing heavy, soft blur drop shadows.

1. **Layer 0 (Canvas Base):** `#0A0A0A` — The infinite bottom plane.
2. **Layer 1 (Card & Module Surfaces):** `#171717` bounded by a 1px continuous stroke of `#27272A`.
3. **Layer 2 (Overlays & Dialogs):** `#171717` elevated with an ultra-diffused, ambient perimeter shadow (`0 16px 40px -8px rgba(0, 0, 0, 0.7)`) and a crisper outline (`#3F3F46`).
4. **Interactive Hover States:** Elevation is expressed not through physical displacement or lifting, but through a chromatic brightening of the border (transitioning from `#27272A` to `#3F3F46` or subtle `rgba(16, 185, 129, 0.4)`) accompanied by a subtle surface shift to `#1F1F23`.
5. **Glass Overlays:** Sticky navigation bars use background-color `#0A0A0A` at 80% opacity with a `backdrop-filter: blur(12px)` and a bottom border of `#27272A`.

## Shapes

The design system employs a restrained **Soft (`1`)** shape language. Corners are slightly radiused to soften mechanical edges while preserving architectural precision:

- **Base Radius (0.25rem / 4px):** Applied to badges, inline code tokens, input checkboxes, and small interface triggers.
- **Container Radius (`rounded-lg` / 0.5rem / 8px):** Used across case study cards, code blocks, technical tables, interactive preview windows, and form fields.
- **Macro Radius (`rounded-xl` / 0.75rem / 12px):** Reserved solely for global modal sheets or standalone pinned interactive demos.
- **Pill Radius (`rounded-full`):** Strictly reserved for status pulses and telemetry live pills (e.g., active pipeline chips).

## Components

### Buttons
- **Primary Action:** Solid `#F5F5F5` background with `#0A0A0A` text, 0.25rem radius, Geist font weight 500. Micro-hover triggers a slight opacity shift to `0.9` and smooth scale transition.
- **Secondary Action:** `#171717` background, 1px `#27272A` border, `#F5F5F5` text. On hover, border shifts to `#3F3F46` and surface shifts to `#1F1F23`.
- **Telemetry / Live Trigger:** Translucent emerald tint (`rgba(16, 185, 129, 0.08)`), 1px border of `rgba(16, 185, 129, 0.3)`, text in `#10B981`. Features a pulsing 6px circular dot indicator.

### Cards & Project Containers
- Constructed on `#171717` with a 1px border of `#27272A` and 0.5rem radius.
- Padding uses `space-lg` (1.5rem) internally.
- On card hover: border color transitions via `ease-out 150ms` to `#3F3F46`, paired with an optional top-edge subtle line accent in `#10B981`.

### Technical Badges & Chips
- Monospaced typography via JetBrains Mono (`label-code`).
- Padding: 4px vertical, 8px horizontal.
- Surface: `#111111` with a 1px border of `#27272A`. Text color set to `#A1A1AA`.

### Inputs & Search Elements
- Height: 40px. Background `#111111`, border 1px `#27272A`, text `#F5F5F5`.
- Active focus state: Border transitions cleanly to `#10B981` without browser-native outlines, backed by a micro glow: `box-shadow: 0 0 0 1px #10B981`.
- Placeholder text in `#71717A`.

### Code Blocks & Telemetry Visualizers
- Surface: `#111111` nested within `#171717` parent modules.
- Header bar includes monospaced file location/branch metadata and copy-to-clipboard micro-button.
- Border: 1px `#27272A`. Typography uses JetBrains Mono with 1.6 line height.