# Update Button Colors to Footer Background

This plan updates all buttons that currently use black (or black-equivalent) colors to use the footer background color (`#0A94D9`).

## Proposed Changes

### Styles
#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Change `.enquire-btn` background from `var(--dark)` to `#0A94D9`.
- Change `.enquire-btn:hover` background from `#333` to a slightly darker blue (e.g., `#087bb5`).
- Change `.cta-button` text color from `#000` to `#0A94D9`.
- Change `.cta-icon-circle` background from `#000` to `#0A94D9`.
- Change `.navbar.solid .nav-btn` and `.navbar.solid .contact-info` color from `#000` to `#0A94D9`.
- Change `.navbar.solid .burger-line` background-color from `#000` to `#0A94D9`.

### Pages
#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)
- Change `.submit-btn` text color from `black` to `#0A94D9`.

#### [MODIFY] [countryDetail.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/countryDetail.js)
- Change inline style for `button.enquire-btn` text color from `black` to `#0A94D9`.

## Verification Plan

### Manual Verification
1.  Open the website in the browser.
2.  Scroll down to see the `.cta-button`. Verify the text and icon circle are now blue.
3.  Scroll to the "About Us" section. Verify the "MORE" button is now blue.
4.  Scroll until the navbar becomes solid. Verify the nav links and hamburger icon are now blue.
5.  Navigate to the Contact page. Verify the "Send Enquiry" button text is now blue.
6.  Navigate to a Country Detail page. Verify the "Book This Trip" button text is now blue.
