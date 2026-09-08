# Lecture 4 source and teaching map

Local authoring sources:

- `private-source/branches.pdf` — 146 A4 pages, zyBooks Chapter 3, sections 3.1–3.19
- `private-source/loops.pdf` — 110 A4 pages, zyBooks Chapter 4, sections 4.1–4.12

Both PDFs are licensed courseware and are ignored by Git. The package combines the essential branch and loop foundations into one 38-minute, 28-slide lecture, six A4 instructor walkthroughs, and an expandable concept refresher.

## Selected and deferred source sections

| Source | PDF pages | Treatment |
|---|---:|---|
| 3.1 If-else branches | branches 1–11 | Core: Boolean-controlled path, `if`, `if-else`, execution rejoining |
| 3.2 Equal values | branches 12–25 | Selected: `==`, `!=`, assignment versus comparison |
| 3.3–3.4 Ranges | branches 26–44 | Core: ordered `else if`, first-true selection, relational boundaries |
| 3.5 Logical operators | branches 45–58 | Core: `&&`, `||`, `!`, closed ranges |
| 3.6–3.10 Branch depth | branches 59–91 | Condensed/deferred: gaps, multiple independent features, errors, precedence, Boolean variables |
| 3.11–3.19 Advanced branch examples | branches 92–146 | Deferred from core lecture; selected ideas remain in supplementary Java examples |
| 4.1 Loops (general) | loops 1–12 | Core: loop concept, iteration, return to condition |
| 4.2 While loops | loops 13–29 | Core: pre-check execution, complete body, progress, termination |
| 4.3 More while examples | loops 30–43 | Core: sentinel input, accumulator, counter, zero-data case |
| 4.4 For loops | loops 44–54 | Core: initializer, condition, update, known iteration count |
| 4.5 More for examples | loops 55–66 | Deferred extended practice |
| 4.6 Loops and strings | loops 67–71 | Selected: valid index range and character traversal |
| 4.7 Nested loops | loops 72–78 | Selected: inner loop completes for each outer iteration |
| 4.8 Incremental development | loops 79–83 | Reinforced through walkthrough structure, not a separate lecture segment |
| 4.9 Break and continue | loops 84–92 | Deferred until the basic condition/progress model is stable |
| 4.10 Variable scope | loops 93–98 | Selected: loop-index, body-local, and persistent state scope |
| 4.11–4.12 Extended examples | loops 99–110 | Deferred: salary calculation and domain-name validation |

## Timed narrative

| Slides | Time | Purpose |
|---|---:|---|
| 1–3 | 4 min | Frame the missing-progress misconception and state the control-flow goals. |
| 4–9 | 8 min | Contrast branch and loop shapes; teach branch forms, order, Boolean ranges, and a trace. |
| 10–15 | 9 min | Build the `while` model; trace checks; prove progress; use a sentinel, accumulator, and counter. |
| 16–21 | 8 min | Build and trace `for`; choose loop form; prevent off-by-one errors; traverse a string. |
| 22–26 | 7 min | Compose branch inside loop; introduce invariants, nested loops, scope, and a score report. |
| 27–28 | 2 min | Check understanding and summarize condition, path, state, and exit. |

## Slide-to-source map

| Slides | Teaching treatment | Source |
|---|---|---|
| 1–3 | Cover; infinite-loop prediction; measurable goals | §§4.1–4.2 plus lecture framing |
| 4 | One condition, two shapes: branch asks once; loop returns and rechecks | §§3.1, 4.1 |
| 5–7 | `if`, `if-else`, ordered `else if`, first-true rule | §§3.1, 3.3 |
| 8–9 | Inclusive range with `&&`; boundary evidence; complete branch trace | §§3.2, 3.4–3.5 |
| 10–12 | Loop cycle; `while` anatomy; state-at-check trace; zero iterations | §§4.1–4.2 |
| 13 | State, direction, boundary, and termination argument | §4.2 |
| 14–15 | Sentinel loop; repeated read; accumulator, counter, zero-data guard | §4.3 |
| 16–18 | `for` anatomy and execution order; exact N trace; `while` versus `for` | §4.4 |
| 19 | Half-open and inclusive boundaries; off-by-one diagnosis | §4.4 |
| 20 | Character traversal from index 0 through `length() - 1` | §4.6 |
| 21–22 | Loop coverage plus branch classification; running-state invariant | §§3.1, 4.4 |
| 23 | Nested-loop execution count and trace order | §4.7 |
| 24 | Block scope, loop-index scope, and state that survives after the loop | §4.10 |
| 25 | Integrated score report: loop, branch, total, pass/fail counters, average | Source-derived synthesis |
| 26 | Evidence-led debugging with boundaries, small counts, and sentinel-first input | Teaching addition grounded in selected sections |
| 27–28 | Immediate checks and four-part control-flow summary | Selected core sections |

## Instructor walkthrough sequence

| Module | Time | Program | Problem and connected concepts |
|---|---:|---|---|
| 1 | 5 min | `GradeClassifier.java` | First-true selection, descending thresholds, boundary tests |
| 2 | 5 min | `TeenRange.java` | Closed range with `&&`, equality versus assignment |
| 3 | 6 min | `SentinelTotal.java` | Pre-check `while`, sentinel, progress, accumulator, counter |
| 4 | 5 min | `NumberSeries.java` | Known-count `for`, execution order, off-by-one evidence |
| 5 | 6 min | `VowelCounter.java` | String indices, branch inside loop, runtime boundary error |
| 6 | 7 min | `ScoreReport.java` | Fixed-count loop, pass/fail branch, persistent state, average |

## Teaching additions

- One condition/path/state/exit mental model across both chapters
- Interactive missing-progress prediction and configurable `while` trace
- Explicit termination argument: state, direction, boundary, conclusion
- Off-by-one method based on first body, last body, and first exit values
- Loop invariant for the integrated pass/fail counter
- Starter/Complete IDE code, copy controls, exact traces, recovery steps, and transfer questions

These additions apply the cited source rules without replacing the original activities.
