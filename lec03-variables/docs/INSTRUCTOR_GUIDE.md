# Instructor guide

This guide contains timing, expected results, fixes, and demonstration answers.

Before teaching, use the [expandable concept refresher](../instructor/concept-refresher.html) for a concise top-to-bottom review. Its core abstracts remain visible, while execution traces, edge cases, misconceptions, and teaching language can be opened only where deeper preparation is useful.

## Delivery options

| Route | Time | Material |
|---|---:|---|
| Deck-first lecture | ~30 min | All 25 slides |
| Problem-solving route | 32–36 min | Six walkthrough modules |
| Hybrid | 50–60 min | Deck plus selected live demos |

## Before class

1. Review the concept refresher, then open the course portal, lecture deck, and walkthroughs.
2. Set browser zoom to 100% and test full-screen presentation.
3. Keep the IDE project tree, editor, Run control, and Console visible.
4. Increase IDE and Console font size for the room.
5. Create one file for each public class in `examples/`.
6. Test the exact inputs once with the course-approved JDK.
7. If printing, preview `instructor/walkthroughs.html` as six A4 portrait pages.

Each walkthrough code panel opens on **Starter**. Use **Complete** after the prediction and demo, and use **Copy starter code** or **Copy complete code** to paste the visible version into the IDE. The copy control works when the HTML file is opened directly; its confirmation appears below the code. Printing hides the controls and includes only the complete program.

## Timed deck outline

| Slides | Time | Purpose |
|---|---:|---|
| 1–3 | 3 min | Frame the chapter and state the goals. |
| 4–8 | 6 min | Build the model of variables, assignment, and state. |
| 9–13 | 7 min | Evaluate expressions and use integer division/modulo. |
| 14–19 | 7 min | Choose numeric types, cast, name constants, call `Math`, and anticipate overflow. |
| 20–21 | 3 min | Distinguish `char`, `String`, and Scanner methods. |
| 22–24 | 4 min | Debug methodically, integrate HealthData, and check understanding. |
| 25 | <1 min | State the meaning–type–state model and route students to the assigned source. |

## Walkthrough modules

| Module | Program | Time | Key result |
|---|---|---:|---|
| State | `StateTrace.java` | 6 min | Current `7`; first `5` |
| Units | `TimeBreakdown.java` | 6 min | `2:2:5` |
| Average | `AverageDemo.java` | 5 min | `87.0` versus `87.5` |
| Input | `StudentInput.java` | 5 min | Full name and grade preserved |
| Debugging | `CircleDebug.java` | 6 min | Radius `1.59`; area `7.96` |
| Overflow | `HealthData.java` | 7 min | Heartbeats `3029529600` at age 80 |

## Facilitation rhythm

Use the same sequence for each problem:

1. State the required result and constraints.
2. Ask every student to make a prediction.
3. Type or change one logical block.
4. Run the exact documented input.
5. Trace values, input state, or operand types in execution order.
6. Name the concept after the evidence is visible.
7. Introduce one deliberate mistake and recover by changing only that line.
8. Finish with the transfer check.

## Lecture interaction

- Arrow keys, page keys, Space, and Enter advance one reveal or slide.
- Home moves to slide 1.
- End opens the last slide and reveals all of it.
- A URL hash such as `#slide-12` opens a specific slide.
- Navigation intentionally pauses when an input, button, link, select, or text area has focus.
- Clicking the leftmost 28% of an unoccupied slide moves backward; the remainder moves forward.

## Printing

For `instructor/walkthroughs.html`:

- paper: A4 portrait;
- pages: six;
- scale: 100%;
- background graphics: enable if the colored cue bands are useful.

The HTML version is preferable when students need zoom, reflow, selectable text, or working links. Browser-generated PDFs are not guaranteed to contain tagged accessibility structure.

## Accessibility while teaching

- Read operators and important code changes aloud.
- Describe the bus grouping and value transitions verbally.
- Announce newly revealed content.
- Do not rely only on red or green feedback.
- Pause after every prediction.
- Use the same wording for value, type, state, quotient, and remainder.
- Share the HTML resources before class when possible.

See [ACCESSIBILITY.md](ACCESSIBILITY.md) for implemented support and known limitations.

## Recovery checklist

- Confirm the filename matches the public class.
- Restore the last working program.
- Undo only the deliberate change.
- Rebuild before rerunning.
- Use the same input before and after the fix.
- Check for a missing `Scanner` import.
- Check `Math.PI` capitalization.
- Check a zero integer divisor.
- Check the pending newline before `nextLine()`.
- Check operand types before a large multiplication or fractional division.

## Source access

The detailed section-to-slide alignment is in [CONTENT_MAP.md](CONTENT_MAP.md). The licensed zyBooks PDF is kept out of the public repository. Use only the institution-authorized source and ensure students have valid course access.
