# Chapter 2 lecture source map

Local authoring source: `private-source/chapter-2-variables-expressions-data-types.pdf` (164 PDF pages, zyBooks sections 2.1-2.27; substantive content ends on p. 163 and p. 164 is blank). The licensed PDF is intentionally excluded from the public repository; students should use their authorized zyBooks or LMS access.

Package target: a 30-minute, 25-slide HTML lecture plus six self-contained A4 instructor walkthroughs. The notes provide a complete 35-minute problem-demo-concept route; each module includes a prediction, runnable Java program, exact output, reasoning trace, deliberate error, recovery step, and transfer check. The lecture selects a coherent foundation for first-time Java learners rather than compressing every section in the source.

## Instructor walkthrough sequence

| Module | Time | Problem and connected concepts | Source |
|---|---:|---|---|
| 1 | 6 min | Trace bus state, copied values, assignment, declaration, initialization, and identifiers | Sections 2.1-2.3 |
| 2 | 6 min | Convert 7,325 seconds using expressions, integer division, modulo, and precedence | Sections 2.4, 2.5, 2.11 |
| 3 | 5 min | Repair an average by tracing operand types and casting before division | Sections 2.7, 2.12 |
| 4 | 5 min | Read age, full name, and grade by modeling Scanner input state | Sections 2.16-2.17 |
| 5 | 6 min | Debug a circle calculation; use Math and classify compile-time, runtime, and logic errors | Sections 2.4, 2.10, 2.22 |
| 6 | 7 min | Build HealthData with final constants, long intermediates, and an overflow-revealing test | Sections 2.6, 2.9, 2.12, 2.18-2.19 |

## Timed narrative

| Slides | Time | Purpose |
|---|---:|---|
| 1-3 | 3 min | Frame the chapter with the integer-division prediction and state the goals. |
| 4-8 | 6 min | Build the state model: variables, sequential assignment, declarations, identifiers, and updates. |
| 9-13 | 7 min | Evaluate expressions, apply precedence, and use integer division and modulo. |
| 14-19 | 7 min | Choose numeric types, convert values, name constants, call `Math` methods, and anticipate overflow. |
| 20-21 | 3 min | Distinguish `char` from `String` and select the correct `Scanner` method. |
| 22-24 | 4 min | Debug methodically, integrate the ideas in HealthData, and check understanding. |
| 25 | under 1 min | State the unifying model and route learners to omitted source depth. |

## Slide-to-source map

| Slides | Selected concept and complete teaching treatment | Source |
|---|---|---|
| 1-3 | Cover; predict `7 / 2`; goals covering state, types, expressions, constants, and debugging | Chapter framing; section 2.11 |
| 4-5 | Variable as named current state; assignment as right-side evaluation followed by left-side overwrite; copied values remain independent; invalid left-side expression | Section 2.1, PDF pp. 1-7 |
| 6 | `int` declaration, initialization, assignment-before-read, and compiler feedback | Section 2.2, PDF pp. 8-20 |
| 7 | Identifier characters, first-character rule, reserved words, case sensitivity, and lower camel case | Section 2.3, PDF pp. 21-23 |
| 8 | Read-calculate-overwrite trace; incrementing; compound assignment operators | Sections 2.1, 2.2, 2.5, PDF pp. 5-6, 16-19, 31-35 |
| 9-10 | Expression anatomy, arithmetic operators, parentheses, precedence, equal-precedence left associativity, and a complete trace | Section 2.4, PDF pp. 24-30 |
| 11-13 | Quotient and remainder; integer versus floating-point division; seconds conversion; zero divisor; `(1 / 2)` trap and cast timing | Section 2.11, PDF pp. 66-75; section 2.12, PDF pp. 76-83 |
| 14-15 | Choosing `int` or `double`; `nextDouble()`; `printf` precision; floating-point division by zero | Section 2.7, PDF pp. 40-48 |
| 16 | Implicit `int`-to-`double` conversion, explicit cast, truncation, and cast-before-division | Section 2.12, PDF pp. 76-83 |
| 17 | `final`, constant naming, named assumptions, and reassignment error | Section 2.9, PDF pp. 52-55 |
| 18 | Method call inputs/return value; `Math.sqrt`, `Math.pow`, and `Math.abs`; argument count/order | Section 2.10, PDF pp. 56-65 |
| 19 | Integer overflow, `int` versus `long`, wraparound risk, and intermediate overflow | Sections 2.18-2.19, PDF pp. 124-129 |
| 20-21 | `char` versus `String`; quote rules and escape character; `next()` versus `nextLine()`; leftover-newline pitfall | Sections 2.16-2.17, PDF pp. 100-123 |
| 22 | Predict-and-test debugging loop; circle-radius precedence bug; focused intermediate-value checks | Section 2.22, PDF pp. 147-151 |
| 23 | Complete HealthData calculation with named constants, leap-year estimate, and exact outputs | Section 2.6, PDF pp. 36-39; numeric-range extension from section 2.19 |
| 24 | Immediate-feedback questions on assignment, identifiers, division, modulo, type choice, and casting | Source-derived checks from sections 2.1-2.12 |
| 25 | Summary and explicit route to the full source | Full chapter |

## Teaching additions and deferred depth

The interactive seconds converter, grouping diagram, debugging reveal, and HealthData use of `long` are teaching additions built from the cited source rules. They do not replace or contradict source examples.

Deferred to the PDF: scientific notation (section 2.8); binary, hexadecimal, octal, and general bases (sections 2.13-2.15, marked optional in the source); random numbers (section 2.20); API documentation (section 2.21); the full style table (section 2.23); local type inference with `var` (section 2.24); and the extended salary and married-name examples (sections 2.25-2.27).
