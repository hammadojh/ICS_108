# ICS 108 — Java lecture materials

Supporting slides, instructor-led problem walkthroughs, concept refreshers, and runnable Java examples for ICS 108.

**[Open the course website](https://hammadojh.github.io/ICS_108/)**

## Available lectures

| Lecture | Supporting slides | Instructor handout | Concept refresher |
|---|---|---|---|
| 6 — User-defined methods | [Slides](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/slides/index.html) | [Handout](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/instructor/walkthroughs.html) | [Refresher](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/instructor/concept-refresher.html) |
| 5 — Arrays | [Slides](https://hammadojh.github.io/ICS_108/lec05-arrays/slides/index.html) | [Handout](https://hammadojh.github.io/ICS_108/lec05-arrays/instructor/walkthroughs.html) | [Refresher](https://hammadojh.github.io/ICS_108/lec05-arrays/instructor/concept-refresher.html) |

## Teaching with the materials

Each lecture uses three small instructor-led Java problems. The supporting slides explain one new concept at a time and identify the related problem. Teaching IDs such as `P2-C1` connect slide headers to comments in the complete Java code.

1. Start with the problem description in the instructor handout.
2. Write and discuss the program in the IDE, switching to the matching slides at each teaching comment.
3. Compile and run the program, compare the exact output, and use the prediction and recovery notes.

Handouts print as three A4 pages. The concept refreshers provide visible summaries with expandable explanations and checks. Lecture 6 includes **Copy problem** buttons that copy self-contained student prompts and expected output, plus a [student-only problem sheet](lec06-user-defined-methods/student-problems.md).

## Files and source maps

- [Lecture 6 package guide](lec06-user-defined-methods/README.md), [Java examples](lec06-user-defined-methods/examples/README.md), and [content map](lec06-user-defined-methods/docs/CONTENT_MAP.md)
- [Lecture 5 package guide](lec05-arrays/README.md), [Java examples](lec05-arrays/examples/README.md), and [content map](lec05-arrays/docs/CONTENT_MAP.md)
- `ics108-java-intro-slides/` contains earlier introductory lecture materials.

The content maps identify selected topics, source sections, teaching additions, and deferred depth.

## Open locally

Clone this repository and open `index.html` in a browser. The lecture HTML files also work directly from disk; no build step is required. Optionally serve the repository with Python:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Run the Java examples

Install a Java Development Kit (JDK), then run these commands from the repository root:

```sh
mkdir -p lec06-user-defined-methods/output/classes
javac -d lec06-user-defined-methods/output/classes lec06-user-defined-methods/examples/*.java
java -cp lec06-user-defined-methods/output/classes PrintHeading
java -cp lec06-user-defined-methods/output/classes MinutesConverter
java -cp lec06-user-defined-methods/output/classes ScoreUpdate
```

See each lecture's examples README for its inputs, expected outputs, and boundary checks.

## GitHub Pages

The website is published from the root of the `main` branch. `index.html` is the course homepage, and `.nojekyll` serves the HTML, CSS, and JavaScript directly. Pushing updates to `main` triggers publication.

## Course readings

Licensed zyBooks PDFs are private authoring sources and are excluded from this repository. Access assigned readings through authorized zyBooks or LMS course access. References to local source PDFs in older materials require that authorized local copy; the public website does not distribute the PDFs.
