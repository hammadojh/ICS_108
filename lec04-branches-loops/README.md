# ICS 108 Lecture 4 — Branches + Loops

A source-grounded Java lecture package about choosing paths, repeating work, tracing changing state, and proving that repetition stops.

## Start here

- [Lecture slides](slides/index.html) — 28 interactive slides for a 38-minute lecture
- [Instructor IDE walkthroughs](instructor/walkthroughs.html) — six self-contained, problem-led demonstrations
- [Instructor concept refresher](instructor/concept-refresher.html) — abstract-first review with expandable depth
- [Runnable Java examples](examples/README.md) — complete walkthrough programs plus supplementary branch examples
- [Content and source map](docs/CONTENT_MAP.md) — selected sections, deferred depth, timing, and teaching additions

Open the HTML files directly in a browser, or serve this folder with any static web server.

In the walkthroughs, each problem opens on **Starter** code. Predict and demonstrate the issue, switch to **Complete**, then copy the visible version into the IDE. Printing hides the controls and includes the six complete programs, one module per A4 page.

## Folder map

```text
lec04-branches-loops/
├── slides/          Student-facing interactive lecture
├── instructor/      IDE walkthrough handout and concept refresher
├── examples/        Complete runnable Java programs
├── docs/            Content map and teaching documentation
└── private-source/  Instructor-only licensed PDFs; ignored by Git
```

## Lecture scope

Lecture 4 combines the essential control-flow foundation from zyBooks Chapters 3 and 4:

- Branches: `if`, `if-else`, ordered `else if`, comparisons, ranges, and logical operators
- Loops: the loop model, pre-check `while`, progress and termination, sentinels, counters, accumulators, `for`, strings, nesting, and scope
- Composition: a branch inside a loop to classify and summarize a sequence of values

The lecture deliberately defers advanced and extended examples. See the [content map](docs/CONTENT_MAP.md) for the exact source treatment.

## Compile the demos

```bash
cd examples
javac *.java
```

Each public class is stored in the matching `.java` file. Generated `.class` files are ignored.

## Source handling

`private-source/branches.pdf` and `private-source/loops.pdf` are licensed local authoring sources. They are excluded by `.gitignore` and must not be published in a student repository. Students should use institution-authorized zyBooks or LMS access.
