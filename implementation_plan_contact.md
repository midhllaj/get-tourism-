# Implementation Plan - Contact Page Redesign

The goal is to redesign the contact page to feature a modern 2-column layout. The left column will display contact information and social links, while the right column will contain a "Request a Free Consultation" form box.

## Proposed Changes

### [Contact Page](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)

#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)
- Update the HTML structure:
    - Main container: `.contact-page-new`
    - Hero section remains or is integrated into the new layout.
    - Two main columns: `.contact-wrapper` -> `.contact-info-side` (left) and `.contact-form-side` (right).
    - Left side:
        - Heading: "Ready to Start Your Next Adventure?"
        - Subtext: "Contact us for a free consultation. Our experts are ready to guide you through your travel plans."
        - Info blocks for Phone, Email, and Address with SVG icons.
        - Social link icons at the bottom.
    - Right side:
        - Form container: `.contact-form-box`
        - Title: "Request a Free Consultation"
        - Input fields: Name, Email, Phone, Service (Select), Message (Textarea).
        - Submit button: "SEND INQUIRY" with an arrow icon.
- Update GSAP animations to target new elements.

### [Styles](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Add styles for `.contact-page-new` and its children.
- Implement flexbox/grid for the 2-column layout.
- Style the left side info blocks and icons.
- Style the `.contact-form-box` with a white background, rounded corners, and subtle shadows.
- Ensure responsiveness (stack columns on mobile).

## Verification Plan

### Automated Tests
- None.

### Manual Verification
- Navigate to the Contact page.
- Verify the layout matches the requested design (2 columns).
- Verify contact details are correct as per the image.
- Test form field interactions (inputs, select dropdown).
- Check responsiveness on mobile view (columns should stack).
