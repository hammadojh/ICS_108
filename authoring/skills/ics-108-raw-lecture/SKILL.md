---
name: ics-108-raw-lecture
description: "Build or revise a source-grounded ICS 108 Java lecture package around three cumulative instructor-led problems. Use when creating clearly mapped supporting HTML slides, a self-contained printable IDE handout, an expandable instructor concept refresher, runnable Java examples, and a source map from chapter PDFs, notes, or existing course material."
---

# ICS 108 Raw Lecture

Produce one coherent tutorial system from the source. Use exactly three cumulative instructor-led problems in one program domain, plain English, and direct teaching language. Keep student prompts short and solution-free; use supporting slides primarily to define the related concepts. Do not turn the lecture into a story, movie, metaphor, or promotional presentation. Match the latest accepted nearby ICS 108 package for its visual shell and reusable behavior; the current package contract owns structure unless the user explicitly overrides it.

Read [references/package-contract.md](references/package-contract.md) and [references/visual-system.md](references/visual-system.md) before mapping or authoring. Read [references/qa.md](references/qa.md) before validation.

## Workflow

1. Inspect the complete source and the latest accepted sibling package.
   - For every supplied PDF, inspect metadata, extract all text, identify section/page boundaries, and render representative pages when figures or layout carry meaning.
   - When one lecture combines multiple chapters, map each source independently first, then define one cross-source mental model and one dependency-ordered tutorial sequence. Do not concatenate two chapter summaries.
   - Never infer a chapter from the target folder name. Use the source title and section numbers, and document any course-module/chapter mismatch.
   - If the package spans chapters, label the artifacts by course lecture number and topic (for example, `Lecture 4 · Branches + Loops`) rather than implying that the package is one source chapter.
   - Keep licensed source files private unless redistribution permission is explicit.
   - Inspect relevant earlier task history when the user asks to carry previous lecture preferences forward.

2. Map before designing.
   - Create `docs/CONTENT_MAP.md` with source sections, selected concepts, complete teaching treatment, slide assignment, examples, timing, teaching additions, and deferred depth.
   - Select a coherent foundation for roughly 30 minutes. A deliberately combined lecture may extend to roughly 35–40 minutes when needed, but must still defer depth rather than compress every source section or teach half a concept.
   - Shape the selected foundation into exactly three small Java problems in the same program/domain. Prefer an ordinary campus-life context students can recognize. Problem 1 establishes the working program; Problems 2 and 3 explicitly extend the preceding version and retain its useful behavior. Introduce only the concepts required by each extension.

3. Define the tutorial sequence.
   - Group the lecture into three problem parts. Use enough slides to define one related concept per slide. Choose the count from the selected concepts; there is no slide-count quota.
   - Open with a literal lecture title and measurable learning goals. Do not use a slogan, dramatic hook, cinematic language, or a narrative arc.
   - Order concepts by dependency: problem -> plain definition -> optional tiny example -> IDE checkpoint. Put execution traces, detailed reasoning, and recovery in the handout or refresher.

4. Build the supporting slides.
   - Create `slides/index.html`, `slides/styles.css`, and `slides/script.js`.
   - Call the deck `Supporting slides` in the title, navigation, handout links, and package README.
   - Use `assets/reference-package/slides/` as the accepted shell and visual source of truth. Preserve its palette, typefaces, stage, spacing rhythm, controls, transitions, and diagram treatment exactly. Treat the historical reference content as visual scaffolding, not a teaching-density target. Add only the component rules required by the new chapter; never invent a chapter-themed palette, font stack, texture, gradient, or ornamental cover treatment.
   - Replace every chapter-specific example, label, selector, demo, and quiz; never shallowly relabel the old supporting slides.
   - Give each selected concept exactly one concept slide; do not duplicate its explanation on another slide. Put exactly one new concept on each concept slide: a literal concept heading, one short definition, and at most one minimal example when it materially clarifies the definition. Avoid dense traces, multi-panel explanations, full solutions, and complex demos. Cover, goals, IDE checkpoints, and a short final check may use separate slides.
   - Start every slide header with the related problem, such as `Problem 2 - ProgramName.java`; use `Problems 1-3` only for lecture-wide slides.
   - Give every concept a stable ID such as `P2-C3`. Show that ID in the slide header and at the matching inline comment in the Java code.
   - End each problem part with an explicit IDE checkpoint. Link each handout problem to its contiguous supporting-slide range, and link checkpoint slides back to the handout or runnable file.
   - Introduce technical terms in short, plain sentences. Prefer literal definition headings such as `Object`, `Instance field`, or `Defining methods`; use descriptive concept names or statements rather than orders to the student. The slide should answer “What does this term mean?” at a glance.
   - Preserve keyboard/click navigation, URL hashes, progressive reveals, progress state, reduced motion, print behavior, and accessible form controls.
   - Keep interaction optional and simple, such as one definition check or answer reveal. Do not add demos or extra slides to meet an interaction percentage.

5. Build runnable examples.
   - Create exactly one complete Java file for each of the three IDE-handout problems under `examples/`. These are independently runnable snapshots of the cumulative program, with distinct public class names so all three compile together. Keep the extension small and recognizable.
   - Add short inline comments at the exact lines where concepts are introduced. Prefix them with the shared IDs, for example `// P2-C3: Store one input value in the current element.`
   - Keep filenames, public classes, inputs, outputs, and fixes identical across examples, slides, and instructor notes.
   - Compile all examples together and run every documented input.

6. Build the instructor IDE handout.
   - Create `instructor/walkthroughs.html` from `assets/reference-package/instructor/walkthroughs.html` as the design reference.
   - Keep the reference handout's blue/system-font/light-code visual shell. New chapter content may change module composition, but not the palette, typography, paper treatment, cue hierarchy, workbench controls, console styling, or print character.
   - Use exactly three problem pages and repeat the accepted header layout on each page: course/lecture/instructor-notes kicker, `Problem-solving walkthroughs`, literal subtitle, timing/page metadata, and blue rule.
   - Put `What will students learn in this lecture?` directly below the first page header.
   - Use this visible order for every problem: `Problem description` -> `What new concepts does it have?` -> `Complete code` -> `Elaborated concepts for instructor reference`.
   - Keep each student problem description to a short paragraph, plus only essential input and exact output. State the required result and constraints without method signatures, variable names, formulas, pseudocode, ordered coding steps, or other solution guidance unless the user explicitly requires a particular interface. Problems 2 and 3 name the preceding program they extend. Put implementation guidance, traces, likely errors, recovery notes, predictions, and transfer checks inside the instructor sections.
   - Include one visible `Students will learn` statement inside the new-concepts section of every problem.
   - Show the complete runnable program with short `Pn-Cn` inline teaching comments. Syntax-color Java keywords, literals, and comments with bundled or inline styles that work offline, preserve accessible contrast on the light code background, and remain legible in print and grayscale. Highlighting must leave copied code text identical to its Java file, including whitespace and the final newline. The comments must tell the instructor exactly where to introduce each concept.
   - Put the `Complete` version in one accessible code workbench and select or show it by default. A `Starter` version is optional; when useful, keep it unselected initially and let the instructor switch versions without losing the page. Provide one copy button for the complete code or active version.
   - Add a separate `Copy problem` control to each description. It copies only the concise student prompt, supplied input, and expected output; it must not include concepts, hints, teaching comments, or the solution. Also create `student-problems.md` with the same three student-facing problems.
   - Copying must work when the handout is opened directly with `file://` as well as over HTTP, with visible and screen-reader feedback. Print only the complete version so controls and optional duplicate code do not consume A4 space.
   - Make the handout self-contained: exact code, inputs, outputs, reasoning, recovery, and answers must not depend on the supporting slides.
   - Print one problem per A4 page. Keep the complete handout at three pages without clipping.

7. Build the concept refresher.
   - Create `instructor/concept-refresher.html` from `assets/reference-package/instructor/concept-refresher.html` as the design reference.
   - Keep the reference refresher's navy/blue editorial system, serif/sans pairing, expandable-detail treatment, reading measure, and responsive concept map. Do not recolor it to match the chapter topic.
   - Begin with a chapter abstract, or a lecture abstract when multiple chapters are combined, and a compact unifying mental model.
   - Give each selected concept a complete always-visible abstract and key rule.
   - Put traces, edge cases, misconceptions, worked examples, and teaching language in native `<details>` sections.
   - Provide open-all/close-all controls, a concept map, source references, supporting-slides/handout links, a readiness self-check, mobile reflow, and print expansion.
   - Use plain tutorial English in both summaries and details. Define a technical term before relying on it.

8. Integrate the package.
   - Link the three primary artifacts to one another.
   - Add or update a local portal/README/instructor guide when the target already uses them.
   - Separate instructor-created material from licensed source access.

9. Validate and revise.
   - Run `node scripts/validate_package.mjs <target-folder>` from this skill.
   - Follow the complete real-browser, Java, interaction, link, and print checks in [references/qa.md](references/qa.md).
   - Perform an instructor pass and an independent-study pass before delivery.

## Completion Gate

Do not deliver until:

- the source map accounts for every selected and deferred section;
- the supporting slides, examples, handout, and refresher agree on terminology, code, and output;
- there are exactly three handout problems and exactly three matching Java files, forming successive extensions of one program/domain;
- the short student prompts specify results without giving implementation guidance, and match the student-only problem sheet and Copy problem payloads;
- the first handout page contains lecture-level learning goals, and all three pages repeat the accepted header;
- every problem follows the required four-section order;
- the instructor handout/refresher explains what each selected concept is, when it matters, how it works, and what mistake to avoid;
- every handout module contains exactly one student learning statement in its new-concepts section;
- every handout module has syntax-colored complete code shown by default, working local-file-safe Copy code and Copy problem controls, and complete-only print output; copied source exactly matches the Java file and any optional Starter is hidden and unselected initially;
- every concept slide names its problem and gives one simple definition, with at most one minimal example; detailed explanations live in the handout/refresher;
- every concept ID maps across a slide header, an inline Java comment, the handout, and the content map;
- each problem has a clear supporting-slide range and an IDE checkpoint;
- all visible language is plain, literal, and tutorial-focused, with no cinematic or story framing;
- every refresher abstract is understandable without expanding details;
- all three artifacts pass the immutable visual tokens and prohibited-style checks in the package validator;
- all interactions work correctly and the browser console is clean;
- every slide fits at 1440x900 and 1280x720 after all reveals;
- the handout prints at its intended A4 page count without clipping;
- the refresher has no horizontal overflow with every detail open at 390px;
- no licensed PDF, temporary extraction, screenshot, or local absolute path enters a public release.
