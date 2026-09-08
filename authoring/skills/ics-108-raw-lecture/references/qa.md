# QA for an ICS 108 raw lecture

## Static validation

From the skill directory, run:

```bash
node scripts/validate_package.mjs /absolute/path/to/target
node --check /absolute/path/to/target/slides/script.js
git -C /absolute/path/to/target diff --check
```

Resolve every missing file, duplicate ID, broken relative asset, stale chapter reference, and absolute local path. Confirm that the validator reports exactly three handout problems, three problem parts, and three Java files. Review visible prose for simple tutorial language and remove cinematic, story, slogan, or promotional framing.

## Java validation

Compile all three example programs together in a temporary output directory. Run every documented normal, boundary, and error-revealing input. Compare exact output with the slides and handout. Extract each handout's complete code as text (decode entities and remove syntax spans) and require an exact match with its `.java` file, including whitespace and final newline. Also verify the actual clipboard payload so highlighting cannot silently alter copied code. Do not leave `.class` files beside source files.

## Supporting slides validation

Use a real browser and test at both 1440x900 and 1280x720.

1. Confirm slide count, part starts, progress, title, and URL hash.
2. Confirm exactly three problem parts and one `Switch to the IDE` checkpoint for each problem.
3. Confirm every slide header names `Problem N - ProgramName.java`, or `Problems 1-3` for lecture-wide slides.
4. Confirm each concept slide has one short definition and the same `Pn-Cn` ID as its inline Java comment. Require descriptive concept labels, not orders, and no duplicate concept slides. At most one tiny example may clarify it. Move dense traces, multi-panel detail, full code solutions, and complex demos to the instructor materials.
5. Advance and reverse through every progressive reveal.
6. Test Arrow keys, Page keys, Space, Enter, Backspace, Home, End, click navigation, and controls.
7. Fully reveal every slide and confirm each slide's content fits its stage.
8. If a simple interaction is present, test every offered state; a deck does not need demos or an interaction quota.
9. Answer any quiz incorrectly and correctly.
10. Confirm active form controls do not trigger slide navigation.
11. Check console errors and all local links.
12. Capture every slide and inspect a contact sheet for repetition, weak hierarchy, accidental density, and unclear problem mapping.

## Handout validation

1. Confirm exactly three problem pages and one `Students will learn` block per page.
2. Confirm the first page has `What will students learn in this lecture?` below the accepted header.
3. Confirm every problem uses the required four-section order.
4. Confirm `Complete` is shown by default and copying works under HTTP and `file://`. If an optional `Starter` exists, confirm it is hidden and unselected initially and its switch works.
5. Use each Copy problem button under HTTP and `file://`. Compare its payload with the visible description and `student-problems.md`; it must include input/output and exclude concepts, hints, teaching comments, and solutions.
6. Confirm every problem links to the correct contiguous supporting-slide range.
7. Confirm keywords, literals, and comments have visible syntax colors with networking disabled; check at least 4.5:1 contrast on the light code panel.
8. Emulate A4 print media and require exactly three pages. Check syntax colors and legibility in color and grayscale.
9. Measure the bottom of each problem's final content against its footer; require a positive gap.
10. Check code, tables, and console text for clipping.
11. Verify screen reflow at 390px and 720px.

## Refresher validation

1. Confirm all core abstracts are readable with every detail closed.
2. Open one detail by keyboard.
3. Test open-all, close-all, live status, and hashed detail opening.
4. Open every detail at 390px and require `document.documentElement.scrollWidth === innerWidth`.
5. Check all tables and code blocks at mobile width.
6. Print with all details expanded.
7. Confirm the browser console is clean and every local link returns HTTP 200.

## Human passes

### Instructor pass

- Can the lecture be delivered within its stated time?
- Does each problem begin with a short result-oriented prompt that leaves students to choose the solution?
- Do Problems 2 and 3 visibly extend the previous program while retaining its useful behavior?
- Can a student understand each supporting slide as a definition without following a complex trace or demo?
- Is every new concept introduced at the matching inline code comment and supporting slide?
- Are likely student confusions anticipated at the correct moment?
- Can the instructor recover from every deliberate error without improvising?

### Independent-study pass

- Are definitions and dependencies introduced before use?
- Can a learner reproduce each result without spoken narration?
- Are answers available after, not before, a meaningful attempt?
- Is deferred depth identified rather than silently omitted?
