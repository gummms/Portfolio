# Mobile UI/UX Layout Specification
[TARGET_AUDIENCE] = "AI Coding Agent"
[CONTEXT] = "Portfolio layout adaptation for devices < 768px (`min-width: 768px` breakpoint)"

## 1. Current State Assessment
- **Global**: 3-column horizontal layout via `.Home` (`flex-direction: row` on `min-width: 768px`). Default is `column` but children sections enforce structural constraints tailored to desktop.
- **`.about-section`**: Hardcoded `width: 20%; height: 100vh;`. On mobile, it's vertically full height but horizontally compressed.
- **`.study-cases-section`**: Hardcoded heavy margins and `flex: 2`. Contains `.wipBox` with `margin: 5rem 10rem` and `6rem` fonts which will overflow/break on mobile viewports.
- **`.logos-section`**: `min-width: 15%`. On mobile, vertical list adds unnecessary infinite page length, violating the "always in sight" design philosophy.

## 2. Core UX Strategy for Mobile
1. **Vertical Hierarchy**: About (Hero) -> Study Cases (Main Content) -> Logos (Footer/Carousel).
2. **Contact Accessibility**: Satisfy "Always on display information" by making contact links sticky or condensing them into a tight horizontal row at the top.
3. **Controlled Scroll Mitigation**: Transform the Logo section from a vertical stack to a horizontal snap-scroll to preserve vertical brevity.

## 3. Implementation Directives per Component
Refactor CSS to use mobile-first methodologies OR wrap current desktop defaults inside `@media (min-width: 768px)`.

### 3.1. `Home.css`
- Allow native scrolling on mobile: `overflow-y: auto`.
- Remove horizontal overflow restrictions unless absolutely necessary.

### 3.2. `About.css`
- **Mobile overrides:**
  - `width: 100%`, `height: auto`
  - `border-right: none`, `border-bottom: 1px solid #c4c4c4`
  - `padding: 1.5rem 1rem`
- **UX Layout:** Convert `.about-contact` / `.contact-list` to a `position: sticky; top: 0` or change layout to a horizontal space-between grid, ensuring contact info remains accessible.

### 3.3. `StudyCases.css`
- **Mobile overrides:**
  - `width: 100%`, `border-right: none`, `border-bottom: 1px solid #c4c4c4`
  - `.wipBox`: Change `margin: 5rem 10rem` to `margin: 2rem 1rem`, `padding: 1.5rem`.
  - `.wipBox h1`: Reduce `font-size: 6rem` to `font-size: 2.5rem` or `3rem`.

### 3.4. `Logos.css`
- **Mobile overrides:**
  - `width: 100%`, `padding-bottom: 2rem`
  - Convert `.logos-list` to horizontal layout: `flex-direction: row; overflow-x: auto; scroll-snap-type: x mandatory; padding: 1rem 0; gap: 1rem;`
  - Ensure `.logo-box` acts as snap points: `scroll-snap-align: center; flex: 0 0 60%;` Hide scrollbars (`::-webkit-scrollbar { display: none; }`).

## 4. Execution Workflow
1. Move default structural styles in `About.css`, `StudyCases.css`, and `Logos.css` (e.g., widths, borders, 100vh bindings) to `@media (min-width: 768px)`.
2. Define base class styles for the mobile DOM flow (100% widths, auto heights, structural borders moved to bottom).
3. Validate layout using Chrome DevTools mobile view. Contact buttons should be immediately visible or sticky, Study cases stack properly, and Logos scroll horizontally.
