# Implementation Plan - Navbar Scroll Color

Change navbar text and icon colors from black to dark blue (#02184C) when scrolling.

## Proposed Changes

### [Navbar Component](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/components/Navbar.js)
- Change `.navbar.scrolled .burger-line` color to `#02184C`.
- Change `setSolid` colors:
    - From `rgb(0, 0, 0)` to `rgb(2, 24, 76)`.

### [Home Page](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/home.js)
- Update `initAnimations` scroll trigger `onUpdate`:
    - Instead of `Math.round(255 * (1 - t))` for all channels, interpolate R, G, B individually to reach `rgb(2, 24, 76)`.

## Verification Plan
1. Scroll on the home page and check if navbar text turns dark blue.
2. Navigate to other pages (About, Contact, Services) and scroll to check consistency.
