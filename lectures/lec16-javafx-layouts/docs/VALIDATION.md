# Validation · October 26, 2026

## Source and teaching review

Read all 28 source PDF pages and representative rendered pages. Read the supplied IntelliJ setup text and its three screenshots. Applied the instructor-confirmed split: 10.1–10.4 Monday and 10.5–10.7 Wednesday, documenting the syllabus mismatch without editing the syllabus.

Instructor and independent-study passes checked the 75-minute plan, three cumulative snapshots, prerequisite order, concise prompts, exact expected behavior, recovery cases, original examples, transfer predictions and answers. The original venue viewer implements the behavior stated in 10.7; publisher code is absent from that export. Code-lab sections are mapped to practice, not invented source content.

## Static checks

- Package validator with `--presentation`: passed, no failures. 16 slides, three contiguous problem parts/checkpoints, three handout problems, exactly three Java files.
- JavaScript syntax and whitespace checks passed.
- Complete handout code exactly matches each Java source, including final newline. Student-only sheet and Copy problem payloads agree.
- Primary-artifact local links returned HTTP 200. Source PDFs, extractions, runtime files, and absolute local user paths are outside the public package.

## Native JavaFX checks

- Compiled and ran using **Liberica Full JDK 25.0.1+13**, bundled **JavaFX 25.0.1**, on macOS ARM64. The runtime was unpacked temporarily; the user’s default JDK and IntelliJ configuration were not changed.
- Plain `javac` worked without a separate module path. Runtime checks used optional `--enable-native-access=javafx.graphics` to acknowledge native access.
- **30 runtime assertions passed for this lecture; 158 across both lectures.** Real JavaFX stages were shown, inspected, and rendered. Button/mouse events were dispatched through JavaFX controls; this was native JavaFX execution, not an HTML simulation.
- Monday checked visibility/title, control containment, exact text, non-editable fields, coordinates, padding, and gaps. Wednesday checked valid 1–4 inputs, repeated calculation, typing without clicking, spaces, empty/non-numeric/decimal/int-overflow text, out-of-range integers, exact error messages/title, cleared stale results, corrected retry, two local images, dimensions/proportions, five image transitions, and preservation of booking state.
- Separate temporary harness: 28 transfer/prediction assertions passed. Two deliberate compile failures behaved as expected: passing an int to setText and capturing a reassigned local variable. No extra harness Java files are included in the package.
- All six rendered native forms were visually reviewed. Windows installation and clicking Run in IntelliJ were not separately tested; instructions follow the supplied guide. Missing-image recovery is intentionally deferred, with the file-placement precondition documented.

## Chromium and print checks

- All slides fit at 1440×900 and 1280×720 after reveals. Contact sheets reviewed. Keyboard navigation, previous/next buttons, click navigation, answer reveal/hide, focus protection, and malformed initial hashes passed.
- All three code/problem copy controls passed actual clipboard readback over HTTP and file URLs. File checks forced the execCommand fallback. Payloads matched complete source/student text.
- All three presentations passed on both protocols: only student content, keyboard opening, contained focus, Escape/Exit, restored focus. Projector body text measured 32px.
- Handout and presentation reflow passed at 390 and 720 pixels. All refresher details open at 390 pixels without horizontal overflow. Open/close-all, keyboard details, hashed details, and print expansion/state restoration passed. Browser page errors: zero.
- Handout exports to **exactly three A4 pages**, including while a student presentation is open. Every page visually reviewed. Complete code is **9 pt**, in two columns. Minimum content-to-footer gap: **182.3 CSS px**. Wednesday’s print-only layout was adjusted to retain full code at this size.
- Refresher print expands details and restores their previous state. Expanded export: 16 pages; the three-page target applies to the handout.

## Delivery state

Prepared locally, with links in the course homepage, README, and weekly teaching plan. No commit, push, deployment, LMS publication, or student distribution was performed. QA screenshots, PDFs, and machine-readable results are under the ignored output directory, outside lecture packages.
