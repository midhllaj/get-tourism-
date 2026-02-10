# Implementation Plan - Adding Booking Detail Fields

Enhance the contact form with specific detail boxes for all service types and improve the visual styling of these dynamic sections.

## Proposed Changes

### [Contact Page](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)

#### [MODIFY] [contact.js](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/src/pages/contact.js)
- Extend the `serviceSelect` event listener to handle `tour` and `other` service types.
- For `tour`: Add fields for Destination, Travelers, and Date Range.
- For `other`: Add a field to specify the service and additional details.

### [Styles](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)

#### [MODIFY] [styles.css](file:///c:/Users/sayed/Downloads/get-tourism--main/get-tourism--main/styles.css)
- Update `.dynamic-fields-container` to have:
    - `background: rgba(2, 24, 76, 0.03)`
    - `padding: 1.5rem`
    - `border-radius: 12px`
    - `border: 1px solid rgba(2, 24, 76, 0.1)`
- This will make it look like a distinct "box" inside the form.

## Verification Plan

### Manual Verification
- Navigate to the Contact page.
- Select each service type and verify that the correct "detail box" appears.
- Confirm the new styling makes the dynamic fields look like a distinct section within the form.
