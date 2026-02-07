# Adjust Service Box Width

Update the `.service-box` elements in the "Our Services" section to have a width equal to half of the section's width.

## Proposed Changes

### Styles

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Update `.service-box`:
    - Change `flex: 0 0 350px` to `flex: 0 0 50vw` (assuming the section is full viewport width).
    - If the section has horizontal padding, I will adjust to `flex: 0 0 calc(50vw - 1rem)` or similar if needed for exact "half section" appearance, but `50vw` usually reflects the user's "half section width" request best.

### Home Page Component

#### [MODIFY] [home.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/home.js)
- No functional changes expected as the GSAP calculation uses `scrollWidth` and `offsetWidth`, which will automatically account for the new box size.

## Verification Plan

### Manual Verification
1.  Open the application.
2.  Scroll to the "Our Services" section.
3.  Verify that each service box (plate) is significantly wider, taking up half the viewport width.
4.  Confirm the side-scroll animation still works smoothly.
