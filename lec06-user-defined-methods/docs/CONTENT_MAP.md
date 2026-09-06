# Lecture 6 — User-defined methods

## Source and scope

Authoring source: `zybook.pdf`, the user-supplied 138-page zyBooks Chapter 6 export, dated September 6, 2026. Lecture and source chapter numbers both equal 6. The PDF and extracted text remain private. Examples, diagrams, and questions below are instructor-created, not reproduced publisher activities.

The foundation takes approximately 30 minutes: opening 2 min, Problem 1 7 min, Problem 2 9 min, Problem 3 10 min, final check 2 min. Prerequisites: Java class/main skeleton, int variables, arithmetic, assignment, and println. No keyboard input is needed: literal arguments keep attention on method calls.

## Learning goals and mental model

Define and call a static method; distinguish void output from a returned value; match arguments to parameters by position; trace a call and return; explain local scope and primitive parameter copies; store a returned result explicitly.

Call → copy arguments into parameters → execute the method body → return control and, for int methods, one value → continue at the call site. Each invocation has its own parameters and local variables.

## Complete chapter treatment

Page boundaries overlap where a section starts mid-page.

| Section | PDF pages | Treatment |
|---|---:|---|
| 6.1 User-defined method basics | 1–18 | Selected: definition/call, class placement, public static teaching convention, void/int return types, parameters, argument positions and expressions. Nested helper calls and long geometry examples deferred. |
| 6.2 Print methods | 18–26 | Selected: a void method prints two lines and is called twice. Interactive menu case deferred. |
| 6.3 Reasons for defining methods | 26–39 | Selected: reuse and one place to change; compile/run small complete increments. Stubs and large modular programs deferred. |
| 6.4 Writing mathematical methods | 39–46 | Selected: two-parameter whole-minute conversion. Floating-point conversion depth deferred. |
| 6.5 Methods with branches | 46–53 | Deferred: multi-path returns and branch boundary testing. |
| 6.6 Methods with loops | 53–58 | Deferred: loops within helpers and repeated input. |
| 6.7 How methods work | 58–62 | Selected: call/return and fresh local state; bytecode and numeric memory addresses deferred. |
| 6.8 Methods: Common errors | 62–66 | Selected: missing return, wrong return value, missing argument, nested definition, and confusing print with return. |
| 6.9 Array parameters | 66–72 | Select only the opening primitive-value-copy explanation (p. 66). Array parameters and mutation deferred. |
| 6.10 Scope of variable/method definitions | 72–76 | Selected: parameters/local variables belong to a method, local scope starts at declaration and ends at enclosing block; method definitions may appear before or after main. Class fields and shadowing of fields deferred. |
| 6.11 Method name overloading | 76–81 | Deferred: overload resolution and signatures. |
| 6.12 Parameter error checking | 81–83 | Deferred: validation strategies; example domains are stated explicitly. |
| 6.13 Using Scanner in methods | 83–87 | Deferred: Scanner references and shared input. |
| 6.14 Using references in methods | 87–103 | Deferred: stack/heap references, aliasing and reassignment. Java still passes values; do not generalize primitive independence to array elements. |
| 6.15 Returning arrays from methods | 103–112 | Deferred: returning an array reference and allocation. |
| 6.16 Common errors: Methods and arrays | 112–124 | Deferred: array method contracts and accidental mutation. |
| 6.17 Java example: Salary calculation with methods | 124–127 | Deferred extended example. |
| 6.18 Java example: Domain name validation with methods | 127–138 | Deferred extended example. |

## Three problems and slide mapping

| Slides | Problem / file | Concept / teaching treatment | Source |
|---|---|---|---|
| 1–2 | Problems 1–3 | Title, measured learning goals, IDE switching | Lecture synthesis |
| 3 | 1 / PrintHeading.java | P1-C1: method definition; statements inside a named body, definition at class level, public/static explained | 6.1 pp. 4–5 |
| 4 | 1 / PrintHeading.java | P1-C2: void means no returned value; printing is an action | 6.1 pp. 6–9; 6.2 |
| 5 | 1 / PrintHeading.java | P1-C3: call executes body; empty parentheses still required | 6.1 pp. 4–5, 11 |
| 6–7 | 1 / PrintHeading.java | P1-C4: return to caller and reuse same definition; step trace reinforces call order | 6.2–6.3, 6.7 |
| 8 | 1 / PrintHeading.java | IDE checkpoint, no input, exact five-line output | Instructor example |
| 9 | 2 / MinutesConverter.java | P2-C1: arguments bind to typed parameters by position | 6.1 pp. 9–13 |
| 10 | 2 / MinutesConverter.java | P2-C2: return one int; method ends and call receives value | 6.1 pp. 6–9; 6.4 |
| 11 | 2 / MinutesConverter.java | P2-C3: store a returned value before printing | 6.1, 6.8 |
| 12 | 2 / MinutesConverter.java | P2-C4: evaluate an argument expression before the call | 6.1 pp. 9–13 |
| 13 | 2 / MinutesConverter.java | P2-C1: interactive parameter-order trace | Instructor exercise |
| 14 | 2 / MinutesConverter.java | P2-C2: print/return error-repair quiz | 6.8 |
| 15 | 2 / MinutesConverter.java | IDE checkpoint, calls (1,30) and (1+1,5), exact output | Instructor example |
| 16 | 3 / ScoreUpdate.java | P3-C1: primitive int argument copied; modifying parameter leaves caller unchanged | 6.9 p. 66 |
| 17 | 3 / ScoreUpdate.java | P3-C2: local scope; bonus visible only inside addPoint | 6.10 pp. 72–73 |
| 18 | 3 / ScoreUpdate.java | P3-C3: each call receives fresh state; repeated call still returns 8 | 6.7 pp. 58–59 |
| 19 | 3 / ScoreUpdate.java | P3-C4: assignment explicitly stores the returned value | 6.1, 6.9 |
| 20 | 3 / ScoreUpdate.java | P3-C1: interactive caller/parameter trace | Instructor exercise |
| 21 | 3 / ScoreUpdate.java | P3-C2: scope diagnosis quiz | Instructor exercise |
| 22 | 3 / ScoreUpdate.java | IDE checkpoint; original 7, updated 8, again 8, stored 8 | Instructor example |
| 23 | Problems 1–3 | Final check: call, positional arguments, copied values | Synthesis |

Every concept has one introduction, a code comment at the relevant line, a handout reference, and a refresher abstract, rule, trace/example, and misconception. Handout ranges are 3–8, 9–15, and 16–22. Seven slides have meaningful interaction: 7, 13, 14, 18, 20, 21, 23. Slides 5 and 10 also have progressive prediction reveals.

## Teaching additions, domains, and checks

1. PrintHeading prints `ICS 108`, `Methods practice`, `Start`, `ICS 108`, `Methods practice`, one per line. No input. Moving the helper below main changes no output; deleting the second call removes the final two lines.
2. MinutesConverter computes whole minutes as `hours * 60 + minutes`. Main calls (1,30) and (1+1,5), printing `First: 90` and `Second: 125`. Normal domain: whole nonnegative hours and minutes 0–59, with result fitting int. Checks: (0,0)→0; (0,59)→59; (2,0)→120; (3,15)→195. Swapping (1,30) to (30,1) still compiles but returns 1801; it violates the intended argument meaning. No validation is implemented.
3. ScoreUpdate starts at 7, adds one to a parameter copy, stores the return separately, repeats, and finally assigns back. Exact output: `Original: 7`, `Updated: 8`, `Again: 8`, `Stored: 8`. Checks: addPoint(0)→1, addPoint(-1)→0, addPoint(7)→8 twice; 7→8→9 only when the caller assigns back after each call. Restrict inputs so adding 1 fits int; score grading limits are not modeled.

Error recovery: restore the correct line, rebuild, and rerun the identical data. Deliberate compile errors are shown as fragments only, not additional Java files. No exact compiler wording is promised. Do not teach arrays as pass-by-reference: reference values are also copied, but array objects can be shared; that distinction is deferred.
