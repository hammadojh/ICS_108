# ICS 108 lecture package contract

## Contents

1. Source discipline
2. Required output structure
3. Supporting slides contract
4. Instructor IDE handout contract
5. Concept refresher contract
6. Cross-artifact consistency

## 1. Source discipline

- Treat every supplied source chapter as the authority for its terminology, rules, section numbering, formulas, and intended learning objectives.
- For a combined lecture, record each source separately and build one cross-source conceptual spine; never imply that sections from different chapters belong to one chapter.
- Select rather than dump. A 30-minute lecture normally cannot include an entire long chapter.
- Never select only syntax. Include the mental model, execution trace, result, misconception, and immediate check needed for independent understanding.
- State teaching additions in `docs/CONTENT_MAP.md`.
- List deferred sections explicitly and route learners to authorized source access.
- Do not publish publisher PDFs or copied proprietary figures without permission.

## 2. Required output structure

```text
target/
├── README.md
├── student-problems.md
├── slides/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── instructor/
│   ├── walkthroughs.html
│   └── concept-refresher.html
├── examples/
│   ├── ExampleOne.java
│   ├── ExampleTwo.java
│   ├── ExampleThree.java
│   └── README.md
├── docs/
│   └── CONTENT_MAP.md
└── private-source/
    └── README.md
```

Keep source PDFs under `private-source/` or retain the user's existing private location. Use stable descriptive filenames when several sources are combined. Ignore them in Git when the target is a public repository.

## 3. Supporting slides contract

The `Supporting slides` are a simple definition reference used alongside the IDE. They primarily answer what each related term means. The handout and refresher carry the detailed teaching treatment.

### Tutorial flow

- Use a literal technical title. Do not use slogans, hooks, cinematic framing, stories, narratives, metaphors, movie language, or promotional language.
- Use exactly three cumulative problem parts in one program/domain. Prefer a relatable campus-life context. Problem 1 establishes the program; Problems 2 and 3 extend it. Cover, lecture goals, and a final check may sit outside those parts.
- Put the related problem and program in every slide header: `Problem N - ProgramName.java`. Use `Problems 1-3` only on lecture-wide slides.
- Give each new concept a stable `Pn-Cn` ID and exactly one concept slide; do not duplicate concept explanations. Use a descriptive term heading or statement, not an instruction, one short definition, and at most one minimal example. Avoid dense traces, multi-panel explanations, complete programs, and complex demos.
- End each problem part with a visible `Switch to the IDE` checkpoint and exact run instructions or output.
- Keep the three slide ranges contiguous and link them from the corresponding handout pages.
- Use short, literal tutorial headings and simple English. Define terms before using them as shorthand.

### Examples

- Use an example only when it makes the definition easier to understand: usually one expression or a few short lines.
- Define each new operator, method, or type before relying on it.
- Keep complete runnable Java and exact problem input/output in the handout and example files.
- Move execution traces, edge cases, comparisons, and worked solutions to the instructor reference.
- Keep each extension small enough to type, explain, and run during one IDE segment.

### Interaction

- Interaction is optional. A short definition check or answer reveal is enough; there is no percentage quota.
- Do not add complex demos, tracing controls, or extra slides solely to create interaction.
- Keep the reading path complete before any interaction.
- Ignore slide navigation while a button, link, input, label, select, form, or textarea is active.

### Visual language

- Use the accepted 16:9 black stage, warm white text, muted support text, and restrained light-blue accent.
- Preserve the slide reference tokens exactly: background `#090909`, surfaces `#111111` and `#171717`, text `#f4f4f2`, muted text `#a6a6a1`, line `#30302e`, accent `#8ec5ff`, correct `#9bd3ad`, and incorrect `#e9a0a0`.
- Use `Helvetica Neue`, Helvetica, Arial, sans-serif for slide display and body text. Use SFMono/Consolas/Liberation Mono for code.
- Use large type, negative space, flat diagrams, and functional demo containers.
- Avoid gradients, grid textures, decorative chapter numerals, decorative badges, generic card grids, and ornamental images.
- Maintain responsive 16:9 behavior, overflow fallbacks, visible focus, and reduced motion.

## 4. Instructor IDE handout contract

Use exactly three `<article class="page">` problem pages. Repeat the accepted header on every page: course/lecture/instructor-notes kicker, `Problem-solving walkthroughs`, literal subtitle, timing/page metadata, and blue rule. Put `What will students learn in this lecture?` below the first page header.

Every problem must use this visible order:

1. `Problem description` - one short student-facing paragraph stating the required behavior, plus essential supplied input and exact output. Do not give the solution or implementation steps.
2. `What new concepts does it have?` - one visible `Students will learn` statement plus the concept list.
3. `Complete code` - the full runnable Java file with short inline `Pn-Cn` comments at the exact teaching moments.
4. `Elaborated concepts for instructor reference` - simple explanations and, where useful, traces, prediction prompts, likely errors, recovery steps, and transfer checks.

### Student problem text

- Use the same program/domain throughout. Say explicitly what Problem 2 adds to Problem 1 and what Problem 3 adds to Problem 2; avoid three separate exercises merely sharing a theme.
- Keep requirements concise. A short paragraph or two or three short bullets normally suffices, apart from sample input/output.
- Describe observable results and necessary constraints. Do not prescribe method signatures, variable names, algorithms, formulas, pseudocode, or ordered code edits unless the user explicitly requires a particular interface.
- Expected output is evidence of the required behavior, not a worked solution. Keep teaching explanations and hints in the instructor sections.
- Include `student-problems.md` with the identical prompts/input/output and no answers, concepts, or instructor material.

Each problem must also contain:

- one accessible code workbench with the `Complete` version;
- `Complete` shown by default;
- an optional `Starter` version only when it helps the live demonstration; if present, keep it hidden and unselected initially;
- one copy button for the active code;
- a separate `Copy problem` button beside the description, copying only that student problem and its input/output with accessible feedback;
- a clear link to the problem's contiguous supporting-slide range; and
- a footer that repeats the problem number and slide range.

Copy must fall back safely under `file://`, announce success or failure, and print must show only the complete version. The copied complete code must match its `.java` file exactly, including indentation and final newline. Copy text content, never syntax markup; do not trim it. The copied student problem must agree with the student-only sheet and exclude every instructor section.

### Visual language

- Use the accepted white-paper handout on a neutral gray canvas with the exact core colors: ink `#15181b`, muted `#596169`, line `#c8d0d7`, blue `#1769aa`, blue-dark `#0d4d7f`, soft blue `#eef5fb`, warm note `#f7f4ed`, danger `#a13b35`, and success `#226b42`.
- Use the system sans stack from the reference handout for all prose and headings; do not introduce editorial serif display headings.
- Keep code panels light, the console dark, learning outcomes warm/blue, errors red, answers green, and module dividers blue.
- Syntax-color the solution code using local or inline CSS. Highlight keywords, literals, and comments with at least 4.5:1 text contrast on the light code panel; do not rely on color alone for meaning. Preserve readable print and grayscale output. Static `<span class="token keyword">` markup is suitable and works without a CDN or JavaScript.
- Preserve readable screen spacing and the reference's A4 print character. Print one problem per page and keep the handout at exactly three A4 pages.

Include likely compile-time, runtime, or logic errors when they help the selected problems. Keep them inside the elaborated reference so the four-section structure remains clear. Do not promise exact IDE wording. Teach restore -> rebuild -> rerun the same input.

## 5. Concept refresher contract

The refresher is for an instructor who may spend two minutes or twenty minutes.

- Always visible: chapter or lecture abstract, unifying mental model, concept abstract, and key rule.
- Expandable: detailed reasoning, execution traces, edge cases, misconceptions, worked examples, and useful teaching language.
- Use simple English throughout. Define technical terms before using them in later explanations.
- Use native `<details>/<summary>` for keyboard and screen-reader behavior.
- Provide `Open all details` and `Close all details` controls with live status.
- Open a hashed detail automatically.
- Expand all details for printing and restore the prior state afterward.
- Keep a readable editorial measure and a sticky concept map on wide screens.
- Contain tables and code on narrow screens; never let the document exceed the viewport.

### Visual language

- Use the exact navy/blue editorial tokens from the reference refresher: blue ink/canvas/lines, navy stage and code blocks, restrained light-blue focus and accent, and warm neutral teaching notes.
- Preserve its Avenir/system sans plus Iowan/Palatino/Georgia serif pairing. This serif treatment belongs to the refresher only, not to the slides or IDE handout.
- Keep the dark masthead, blue concept numbering, pale-blue key rules, simple ruled details, readable measure, and sticky wide-screen concept map.
- Never derive the palette from the chapter topic.

## 6. Cross-artifact consistency

- One public class per `.java` file; filename equals class name.
- Use exactly three Java files, one for each handout problem. Each is a self-contained, independently runnable snapshot of the cumulative program. Use distinct public class names and avoid auxiliary class-name collisions when compiling all three together.
- The same problem must use the same variables, inputs, outputs, and fix everywhere.
- Use the same `Pn-Cn` IDs in slide headers, handout concept sections, inline Java comments, and `docs/CONTENT_MAP.md`.
- The source map owns scope and source alignment.
- The supporting slides define the concepts; the handout facilitates the cumulative live problem; the refresher rebuilds instructor understanding; the student sheet presents only the task to solve.
- Do not copy paragraphs between all three artifacts. Re-express the same concept for each job.
