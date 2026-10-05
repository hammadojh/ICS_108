# Lecture 13 validation

Validated September 27, 2026.

- Package validator: passed with `--presentation`; three problems, three independent Java snapshots, 16 slides, 10 concept IDs, and matching handout/refresher/source mappings.
- Java: compiled with `javac --release 17`, executed on JDK 26.0.2.1, and compared against independently specified expected output. Across the series, all 19 normal, boundary, and intentional compile-failure checks passed.
- Browser: all slides fit at 1440×900 and 1280×720 after revealing content; navigation keys, hash navigation, controls, and final-answer reveal passed.
- Clipboard: actual copied code matched the Java source, including final newline. Copy problem matched the student sheet. All three controls passed over HTTP and direct file access, including a forced clipboard fallback.
- Presentation: all three prompts opened with only student content; keyboard activation, Escape, Exit, focus containment/restoration, and print suppression passed.
- Responsive pages: handout and refresher checked at 390 and 720 pixels; corrected refresher layout and presentation typography rechecked at 390, 720, and 1440 pixels. No horizontal page overflow; all refresher details could be opened and closed.
- Printing: final Chromium PDF has exactly three A4 pages; all pages rendered and visually reviewed. Complete code prints at 9 pt in two columns. No content overlaps the footer. Printing with a student presentation open still produces the instructor handout.
- Refresher: concept links, keyboard disclosure, open/close all, malformed hash handling, automatic print expansion, and restored disclosure state passed.
- Links: all 169 local HTML links/fragments across the three packages resolved. Browser checks reported no uncaught script errors.
- Review: instructor pass checked teaching IDs, traces, recovery notes, timing, and progression; independent-study pass checked definitions, always-visible summaries, source mapping, and runnable instructions.
- Source handling: licensed PDF and extracted text remain outside public package files. Generated QA screenshots/PDFs are ignored by Git.

The installed and repository lecture skills are synchronized. Their reference template's three presentation controls were also exercised in the browser.

Checks establish behavior in the installed Chromium and Java environments; classroom delivery timing remains an instructor estimate.
