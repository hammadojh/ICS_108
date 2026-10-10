# Validation record

Validated locally October 10, 2026, before publication.

- Package validator with `--presentation`: passed; 16 slides, three contiguous parts/checkpoints, three problems, three Java files, ten mapped concepts. Complete code matches the Java snapshots including final newlines.
- Java: OpenJDK 26.0.2.1 compiler with `--release 17`; all three snapshots compiled separately into temporary directories. 31 exact-output cases passed. Inputs include valid values, malformed tokens, decimals, integer overflow, empty streams for Problems 2–3, repeated failures, range boundaries, and mixed failure types. The missing-throws repair exercise was confirmed to fail compilation.
- Browser: Chromium via Playwright CLI. All 16 fully revealed slides fit at 1440×900 and 1280×720. Contact sheet visually inspected after transitions completed. Forward/backward navigation keys, Home/End, and answer reveal/hide passed; no page errors were observed.
- Clipboard: all three complete-code and problem payloads matched browser clipboard text under HTTP. The file-URL fallback reported successful copies for all six controls. Student-only payloads match the problem sheet exactly.
- Presentation: all three prompts match their student-only containers, open by keyboard, contain focus, and restore focus on Escape/Exit. Projector paragraph size is 32 px. No instructor code appears in the dialog.
- Reflow: handout and presentation checked at 390 and 720 px; no horizontal document/dialog overflow. Refresher checked at 390 px with all details open; document width equals viewport width. Open-all, close-all, keyboard detail toggling and hashed detail opening passed.
- Print: actual A4 export contains exactly three pages, both normally and while presenting. All three pages visually inspected. Code is 9 pt; measured content-to-footer gaps are approximately 96, 76 and 20 CSS px. Print includes complete code and concise rules, mistakes and traces; longer prose remains on screen and in the refresher. Refresher print expansion was exercised.
- Local links: all 12 distinct linked package resources returned HTTP 200. No licensed PDF or compiled class file is in the package. JavaScript syntax and `git diff --check` passed.
- Instructor/independent-study review: scope, prerequisite order, sample outputs, range constraints, token cleanup, checked-exception obligations, recovery steps and the source/deferred-section map were checked. Timing is a planned 40-minute core, not a timed live rehearsal.

Temporary browser captures and print exports remain outside the public package.

## Generalization update — October 10, 2026

- Added one alternative context to each of ten concept slides, with a visible invariant and result. The refresher adds ten matching worked examples and ten expandable prediction answers.
- Compiled and ran all ten new examples and ten prediction variants in temporary Java 17-targeted harnesses: 20 cases passed, including expected exception outcomes. The checked-method fragment and its caller were tested with the documented helper.
- All 16 slides rechecked at 1440×900 and 1280×720, including both examples and result text: no content or code overflow. Representative paired layouts visually inspected.
- Refresher at 390 px with all 35 details open: no horizontal overflow. Open-all, close-all, hashed transfer details, and keyboard prediction toggling passed; no page errors observed.
- Package validation and diff whitespace checks passed. Installed and repository lecture skill copies match, and both passed skill validation. The existing three handout problems and Java snapshots were unchanged by this update.
