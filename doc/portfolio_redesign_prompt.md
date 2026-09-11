# React Portfolio Redesign Prompt — Terminal Editorial

You are working on an **EXISTING React personal portfolio website**.

## IMPORTANT

Do **not** rebuild the project from scratch.

Do **not** replace the existing application architecture.

Do **not** remove existing functionality.

Do **not** change existing portfolio content unless necessary for layout adaptation.

Your task is to **REDESIGN and REFACTOR the existing UI/UX** so it closely follows the provided design reference and the design system in `DESIGN.md`.

The final result should feel like a premium modern developer portfolio with a dark **Terminal Editorial** aesthetic.

---

# PRIMARY OBJECTIVE

Transform the current portfolio website into a:

- Modern
- Minimalist
- Dark
- Premium
- Professional
- Editorial
- Developer-focused
- Clean
- Highly readable

portfolio.

The visual direction should resemble a combination of:

**Modern developer portfolio + Technical editorial website + Premium SaaS / engineering interface**

Avoid making it look like a generic portfolio template.

The design should communicate:

> "Software engineer who builds production systems and data-driven applications."

---

# REFERENCE DESIGN

Use the provided portfolio screenshot as the **PRIMARY visual reference**.

The target visual hierarchy should approximately follow:

1. Sticky navigation
2. Hero / Introduction
3. About
4. Experience
5. Skills & Technologies
6. Certificates & Credentials
7. Selected Projects
8. Contact / Closing CTA
9. Minimal footer

The screenshot is a visual reference, not something to copy pixel-for-pixel.

Preserve the **EXISTING portfolio content** and replace only placeholder/example content if the existing project already contains real user data.

---

# DESIGN SYSTEM

Follow `DESIGN.md` strictly for visual tokens.

## Core Palette

### Background
`#0A0A0A`

### Secondary Background
`#111111`

### Card
`#171717`

### Hover
`#1F1F23`

### Border
`#27272A`

### Primary Text
`#F5F5F5`

### Secondary Text
`#A1A1AA`

### Metadata
`#71717A`

### Accent
`#10B981`

### Muted Emerald
`rgba(16, 185, 129, 0.1)`

Use emerald **ONLY as an accent**.

Do **NOT** flood the interface with green.

Green should primarily appear on:

- active navigation
- status indicators
- small labels
- CTA accents
- links
- hover states
- timeline indicators
- technology highlights

---

# TYPOGRAPHY

Use **Geist** for the main interface typography.

Use **JetBrains Mono** for:

- technical metadata
- dates
- technology badges
- section labels
- status indicators
- repository-related information
- small technical labels

Typography hierarchy should be strong.

## Headings

Use:

- Geist
- font-weight 500–600
- negative letter spacing
- generous whitespace

Avoid excessive bold typography.

## Body

Use:

`#A1A1AA`

## Primary Headings

Use:

`#F5F5F5`

## Metadata

Use:

`#71717A`

---

# GLOBAL LAYOUT

Use a maximum content width around **1120px** on desktop.

## Desktop

- centered content
- 12-column grid
- generous horizontal margins
- asymmetric editorial layouts where appropriate

## Tablet

- 8-column grid
- reduce spacing

## Mobile

- single-column layout
- approximately 20px horizontal padding
- readable typography
- stacked cards
- no horizontal overflow

Use generous vertical spacing between sections.

Whitespace is an important part of the design.

Do not make the page feel cramped.

---

# NAVIGATION

Create/refactor the existing navbar into a minimal sticky navigation.

## Desktop

### LEFT

`[Name / Monogram]`

### RIGHT

- About
- Experience
- Skills
- Certificates
- Projects

CTA:

`Contact`

Navigation should have:

```css
background: rgba(10,10,10,0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid #27272A;
```

The navbar should remain subtle and should **NOT** dominate the page.

Active navigation item:

`#10B981`

Use smooth scrolling.

## Mobile

- hide desktop links
- use a compact hamburger menu
- keep navigation minimal

---

# HERO SECTION

Redesign the hero as the strongest introduction.

Use a two-column layout on desktop.

## LEFT

Technical status label.

Example:

`● AVAILABLE FOR WORK`

Then:

`Hi, I'm [Existing Name].`

Highlight the person's name with a subtle emerald accent.

Below it:

Short professional description.

Example structure:

> "I build digital products, dashboards, and data-driven applications."

Then a short paragraph describing the developer's focus.

CTA buttons:

- `View My Projects`
- `Download CV`

Social links:

- GitHub
- LinkedIn
- Email

## RIGHT

Use the **EXISTING profile image** if available.

Do not invent a person's photo.

The profile image should be treated as a monochrome / dark editorial portrait.

Place it inside a restrained bordered container.

Add subtle technical metadata around the image if appropriate.

Example:

`Full Stack & Data`

`AVAILABLE`

Do not use excessive glowing effects.

---

# SECTION LABELS

Every major section should have a small technical label above the heading.

Examples:

`01 / ABOUT`

`02 / EXPERIENCE`

`03 / SKILLS`

`04 / CERTIFICATES`

`05 / PROJECTS`

Use JetBrains Mono for these labels.

Make them small and subtle.

Use emerald sparingly.

---

# ABOUT SECTION

Create an editorial two-column layout.

## LEFT

Large statement.

Example:

> "Turning raw operational data and abstract product ideas into resilient, human-centered digital solutions."

## RIGHT

Existing About content.

Below the description, optionally show a small metadata card containing:

- Education
- Focus
- Location
- Current status

Do **not** invent information.

Only display information that already exists in the project.

---

# EXPERIENCE

Convert existing experience content into a clean vertical timeline.

Each experience item should contain:

- Company
- Position
- Date
- Description
- Responsibilities
- Technologies

Visual structure:

```text
vertical line
+
small circular timeline indicator
+
experience card
```

Cards should use:

```css
background: #171717;
border: 1px solid #27272A;
border-radius: 6px–8px;
```

Hover:

Border becomes slightly brighter.

Do **NOT** use large shadows.

Dates should use JetBrains Mono.

Technology badges should be small and understated.

---

# SKILLS

Create a 2-column grid on desktop.

Group existing skills into categories such as:

- Development
- Databases & Storage
- Data & Analytics
- Tools & Infrastructure

Only use categories that make sense based on the existing project data.

Each card contains:

- small icon / indicator
- category title
- short description
- technology badges

Technology badges:

```css
background: #111111;
border: 1px solid #27272A;
color: #A1A1AA;
font-family: "JetBrains Mono";
```

Do **NOT** use percentage progress bars.

Do **NOT** claim arbitrary skill percentages.

---

# CERTIFICATES

Redesign certificates into a clean card grid.

Each card should contain:

- certificate title
- issuer
- date
- credential ID if available
- verification status if available
- View Certificate action

Cards should feel like technical credentials rather than generic image galleries.

Use subtle emerald indicators.

If certificate images already exist in the project, preserve them.

Do not replace them with fake images.

---

# PROJECTS

Projects should become the **MAIN VISUAL FEATURE**.

Use a combination of:

- Featured project cards
- Smaller project cards

Featured projects should use a large asymmetric layout.

## Example Structure

### LEFT

- Project title
- Description
- Problem / purpose
- Technology badges
- CTA buttons

### RIGHT

- Project preview image

The layout should alternate between:

`text → image`

and

`image → text`

for different featured projects.

Use the **EXISTING project images**.

Do not generate or replace project images unless they are missing and the existing application already uses placeholders.

## Project Card Styling

```css
background: #171717;
border: 1px solid #27272A;
border-radius: 6px–8px;
```

No heavy shadows.

Hover:

- border becomes `#3F3F46`
- surface slightly changes toward `#1F1F23`

Primary CTA:

Solid light background with dark text.

Secondary CTA:

Dark background with border.

Example buttons:

- `Live Demo →`
- `GitHub ↗`

Smaller projects can use a 2-column grid.

---

# CONTACT / FINAL CTA

Create a strong but minimal closing section.

Large heading:

> "Let's build something useful together."

Supporting paragraph.

Display contact information and social links.

Optionally create a small technical visual / project preview on the right if the existing project has suitable assets.

Do not make the section visually noisy.

---

# FOOTER

Minimal footer.

Include:

- Name
- Short role
- GitHub
- LinkedIn
- Email
- Copyright

Keep the footer visually quiet.

---

# VISUAL RULES

## DO NOT USE

- excessive gradients
- neon green backgrounds
- cyberpunk styling
- excessive glassmorphism
- huge glowing effects
- excessive rounded cards
- giant decorative blobs
- excessive shadows
- unnecessary animations
- generic stock imagery
- random illustrations
- excessive icons

## INSTEAD USE

- typography
- spacing
- borders
- tonal layering
- subtle hover effects
- restrained emerald accents
- editorial composition

The interface should feel **engineered rather than decorated**.

---

# ANIMATION

Use subtle animations only.

Recommended:

- fade-in on section reveal
- slight opacity transition
- border transition
- button hover
- navigation active-state transition
- subtle image scale on project hover

Animation duration:

`150–300ms`

Use `ease-out`.

Avoid:

- bouncing
- excessive parallax
- spinning elements
- distracting animations
- long loading animations

---

# RESPONSIVENESS

The website MUST be fully responsive.

## Desktop

`>1024px`

## Tablet

`768px–1024px`

## Mobile

`<768px`

## Mobile Requirements

- navigation becomes hamburger
- hero becomes single column
- profile image moves below/above text appropriately
- experience timeline remains readable
- skill cards become single column
- certificate cards stack
- project layouts become single column
- CTA buttons remain touch friendly
- no horizontal scrolling

Check the entire page at mobile widths.

---

# CODE QUALITY

This is an **EXISTING React application**.

Before modifying anything:

1. Inspect the current project structure.
2. Identify the main entry points.
3. Identify existing components.
4. Identify existing CSS / Tailwind configuration.
5. Identify existing data sources.
6. Identify existing images/assets.
7. Identify routing.
8. Identify existing reusable components.

Then modify the **EXISTING implementation** instead of rebuilding it.

Preserve:

- existing React architecture
- existing functionality
- existing routes
- existing links
- existing data
- existing assets
- existing interactions
- existing forms
- existing CV download functionality
- existing GitHub / LinkedIn links

Do not introduce unnecessary dependencies.

If Tailwind CSS is already installed, use the existing Tailwind setup.

If CSS modules / regular CSS are already being used, follow the existing architecture.

Do not migrate the entire styling system unless absolutely necessary.

---

# CONTENT RULE

The design reference contains example content such as:

- Alex Chen
- Data Analyst & Full-Stack Developer
- SIMPROTIK Mobile
- Financial Analytics Dashboard

These are **ONLY VISUAL REFERENCES**.

Do **NOT** replace the user's real portfolio information with those example values.

Use the actual data already present in the existing React project.

---

# IMPLEMENTATION PROCESS

## STEP 1

Inspect the existing React project.

## STEP 2

Understand the existing component structure and data.

## STEP 3

Identify which components correspond to:

- Navbar
- Hero
- About
- Experience
- Skills
- Certificates
- Projects
- Contact
- Footer

## STEP 4

Refactor the visual structure.

## STEP 5

Implement the Terminal Editorial design system.

## STEP 6

Apply responsive behavior.

## STEP 7

Add subtle interactions.

## STEP 8

Run the application.

## STEP 9

Check for:

- console errors
- broken images
- broken links
- layout overflow
- mobile responsiveness
- typography issues
- spacing inconsistencies

## STEP 10

Fix all visual and functional issues.

---

# FINAL RESULT

The final portfolio should look like a **professionally designed developer portfolio** rather than an AI-generated template.

Visual priorities:

1. Typography
2. Layout
3. Whitespace
4. Content hierarchy
5. Dark tonal layering
6. Thin borders
7. Emerald micro-accents
8. Subtle interactions

The result should look:

> "quietly impressive"

rather than:

> "visually loud".

Most importantly:

**KEEP THE EXISTING WEBSITE FUNCTIONAL.**

**REDESIGN THE UI, DON'T REBUILD THE PRODUCT.**

---

# VISUAL MATCHING PRIORITY

Use the provided screenshot as the strongest visual reference for composition.

Pay special attention to:

- narrow centered content width
- large empty spaces
- thin horizontal section dividers
- small green technical section labels
- large editorial headings
- dark charcoal cards
- subtle 1px borders
- compact technical badges
- asymmetric project layouts
- vertical experience timeline
- restrained emerald accents
- minimal footer
- high information density without feeling crowded

Do **NOT** interpret "modern dark portfolio" as a futuristic cyberpunk website.

The target is a **sophisticated engineering/editorial portfolio**.

Think:

> "Senior software engineer portfolio + technical design system + editorial website"

NOT:

> "Gaming website + neon cyberpunk + flashy SaaS landing page"
