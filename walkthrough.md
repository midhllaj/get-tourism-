# Walkthrough: Unified Global Components & Service Box UI

I have unified the Navbar and Footer behavior across all pages and adjusted the "Our Services" UI for a more prominent display.

## Changes Made

### 1. Service Box Width Adjustment
- Updated `.service-box` width in `styles.css` to `50vw`, making each service plate occupy exactly half of the viewport width.
- This provides a more immersive "panorama" feel as you scroll through the services.
- The GSAP side-scroll animation automatically recalculates to ensure smooth travel across the wider plates.

### 2. Global Navbar Logic
- **Hide/Show on Scroll**: Centralized the GSAP `ScrollTrigger` logic in `src/components/Navbar.js`. The navbar now hides when scrolling down and reveals when scrolling up on EVERY page.
- **State Management**: Added a `setSolid()` method to the Navbar. The `Router` now automatically makes the navbar solid on all pages except the Home page, ensuring readability against various page backgrounds.
- **Cleanup**: Removed redundant scroll logic from `home.js`.

### 3. Sticky Footer
- **Missing Footer**: Added the `Footer` component to `src/pages/countryDetail.js`.
- **Sticky Behavior**: Modified `src/components/Footer.js` and `styles.css` to support a "sticky" mode. On non-home pages, the footer now behaves as a standard sticky footer (staying at the bottom of the layout).
- **Reveal Effect**: Kept the "reveal" footer effect for the Home page to maintain its unique design.

### 4. Page Layout Consistency
- Updated `about.js`, `contact.js`, `destinations.js`, `services.js`, and `countryDetail.js` with solid backgrounds and proper layering (`z-index`) to ensure they interact correctly with the global fixed/sticky components.

## Verification
- [x] Service plates are half-width (`50vw`) on the Home page.
- [x] Navbar hides on scroll down and shows on scroll up on all pages.
- [x] Navbar is solid (white/blurred) on non-home pages.
- [x] Footer is present on the Country Detail page.
- [x] Footer stays at the bottom on all pages.
- [x] Home page animations and reveal effect are preserved.
