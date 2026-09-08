# Accessibility notes

This document describes implemented support and known limitations. It is not a formal WCAG conformance claim.

## Implemented support

- Keyboard navigation for progressive reveals and slides.
- Semantic buttons and labeled inputs.
- Visible focus indicators on the course portal and lecture controls.
- `aria-live` or output regions for several interactive results.
- Active and inactive slide state communicated with `aria-hidden`.
- Reduced-motion handling.
- Responsive layouts for narrow screens.
- Text feedback in addition to correct/incorrect colors.
- Accessible labeling for the bus graphic.
- Print styles that expose progressive fragments.
- Reflowing instructor walkthroughs with mobile table adaptations.
- Keyboard-operable Starter/Complete code controls with pressed-state semantics, 44px mobile targets, and live copy feedback.

## Usage guidance

- Use browser zoom rather than enlarging only the slide stage.
- Open the HTML walkthroughs instead of a generated PDF when reflow or text selection is important.
- Press `Tab` to reach interactive controls; slide navigation keys pause while a control has focus.
- Enable the operating system’s reduced-motion preference if transitions are uncomfortable.

## Known limitations

- Progressive elements are visually hidden with opacity, so some screen readers may encounter content before it is visually revealed.
- Quiz announcement behavior still requires testing across multiple browser and screen-reader combinations.
- A 16:9 slide format can require zoom or scrolling on very narrow screens.
- Browser-generated PDFs are not guaranteed to be tagged PDFs.
- Accessibility of the licensed source material is outside this repository and has not been assessed here.
- The package has not undergone a complete assistive-technology matrix or formal conformance audit.

## Report an accessibility issue

Please include:

- browser and version;
- operating system;
- assistive technology and version, if applicable;
- page URL or slide hash;
- a short reproduction sequence; and
- the expected and actual result.
