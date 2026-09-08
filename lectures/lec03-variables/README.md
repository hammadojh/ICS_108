# ICS 108 — Values, Types, and State

A student-ready Java learning package with a 25-slide interactive lecture, six runnable programs, and six problem-solving walkthroughs.

**Open the course site:** [Lecture 3 — Values, Types, and State](https://hammadojh.github.io/ICS_108/lectures/lec03-variables/)

> **Numbering note:** this is **Lecture 3** in ICS 108. The assigned reading and section numbers refer to zyBooks **Chapter 2**.

## Start here

| I want to… | Open |
|---|---|
| Begin the lesson | [Interactive lecture](https://hammadojh.github.io/ICS_108/lectures/lec03-variables/slides/#slide-1) |
| Study independently | [Student guide](docs/STUDENT_GUIDE.md) |
| Compile the examples | [Runnable Java programs](examples/README.md) |
| Refresh the concepts before teaching | [Expandable instructor refresher](https://hammadojh.github.io/ICS_108/lectures/lec03-variables/instructor/concept-refresher.html) |
| Review worked solutions | [Problem-solving walkthroughs](https://hammadojh.github.io/ICS_108/lectures/lec03-variables/instructor/walkthroughs.html) |
| Teach the lesson | [Instructor guide](docs/INSTRUCTOR_GUIDE.md) |
| Check accessibility support | [Accessibility notes](docs/ACCESSIBILITY.md) |
| Review source alignment | [Content map](docs/CONTENT_MAP.md) |

The walkthroughs contain predictions, outputs, fixes, and transfer answers. Every problem opens on starter code, can switch to the complete program, and can copy the visible version. Students should follow their course’s academic-integrity rules before using them during graded work.

## Learning outcomes

After completing the package, a student should be able to:

- trace assignment statements as changes to program state;
- explain why Java’s `=` is assignment rather than mathematical equality;
- declare and name `int`, `long`, `double`, `char`, and `String` variables;
- evaluate expressions using parentheses, precedence, integer division, and modulo;
- cast an operand before an operation when floating-point behavior is required;
- use named constants and common `Math` members;
- distinguish token input from line input with `Scanner`;
- recognize integer overflow and choose `long` for larger whole-number values; and
- debug an incorrect result using an observe–predict–test–fix loop.

## Repository structure

```text
.
├── index.html                  Student course portal and GitHub Pages entry point
├── assets/site.css             Portal and source-guide styles
├── slides/                     Interactive 25-slide lecture
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── examples/                   Six complete Java programs
├── instructor/concept-refresher.html
│                                Expandable pre-lecture conceptual review
├── instructor/walkthroughs.html
│                                Six Starter/Complete worked walkthroughs
├── docs/
│   ├── STUDENT_GUIDE.md
│   ├── INSTRUCTOR_GUIDE.md
│   ├── ACCESSIBILITY.md
│   └── CONTENT_MAP.md
├── resources/index.html        Authorized-source access guidance
├── private-source/             Local-only licensed source; excluded from publication
├── CONTRIBUTING.md
└── NOTICE.md
```

The repository has no runtime dependencies, package installation, analytics, remote fonts, or build step.

## Run locally

Clone the course repository, enter the Lecture 3 folder, and serve it as static files:

```bash
git clone https://github.com/hammadojh/ICS_108.git
cd ICS_108/lectures/lec03-variables
python3 -m http.server 8000
```

On Windows, `py -m http.server 8000` is usually equivalent. Then open <http://localhost:8000>. Stop the server with `Ctrl+C`.

Opening `index.html` directly also works in current browsers, but a local server gives link behavior closer to GitHub Pages.

## Lecture controls

| Action | Keyboard or control |
|---|---|
| Next reveal or slide | `Right Arrow`, `Page Down`, `Space`, or `Enter` |
| Previous reveal or slide | `Left Arrow`, `Page Up`, or `Backspace` |
| First slide | `Home` |
| Last slide, fully revealed | `End` |
| Open a specific slide | Append `#slide-N`, for example `slides/#slide-12` |
| Mouse or touch | Bottom arrows or an unoccupied area of the slide |

Navigation keys do not advance the lecture while focus is inside an input, button, link, select, or text area.

## Compile the Java examples

Use a course-approved JDK. Each filename matches its public class name.

```bash
cd examples
javac StateTrace.java
java StateTrace
```

The [examples guide](examples/README.md) provides the input and expected output for every program.

## Suggested learning paths

- **Class presentation:** approximately 30 minutes using all 25 slides.
- **Independent study:** approximately 45–60 minutes with predictions, interactions, examples, and the final quiz.
- **Problem-solving route:** approximately 32–36 minutes using the six worked walkthroughs.
- **Hybrid class:** lecture plus two or three selected live demos in approximately 50–60 minutes.

## Source and redistribution

This repository contains instructor-created supplementary teaching material aligned to assigned zyBooks Chapter 2 sections. It does **not** publish the licensed zyBooks PDF. Enrolled students should use their institution-authorized zyBooks or LMS access for the original source.

Repository material and third-party courseware have separate rights. No repository-wide reuse license is granted at this time; see [NOTICE.md](NOTICE.md).

## Reporting a problem

Use the repository’s issue form and include:

- the page or slide hash;
- browser and operating system;
- the action you took;
- what you expected; and
- what actually happened.

For changes, read [CONTRIBUTING.md](CONTRIBUTING.md).
