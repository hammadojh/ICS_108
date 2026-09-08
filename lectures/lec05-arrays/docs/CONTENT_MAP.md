# Lecture 5 source and teaching map

The local authoring source is `../zyBooks.pdf`, a 73-page A4 export of zyBooks Chapter 5. It is licensed course material and is ignored by Git. Do not publish the PDF or copy its figures and activities into public course files.

This package teaches a focused introduction to one-dimensional Java arrays through three simple problems. It selects the foundation from sections 5.1-5.4 and defers the later chapter sections.

## Lecture goals

By the end of the lecture, students can:

- declare and initialize an integer array;
- access and update an element with a zero-based index;
- use `.length` and `length - 1` safely;
- read and process every element with an indexed `for` loop;
- compute a total with an accumulator; and
- find a maximum value and its index, including when every value is negative.

## Unifying model

An array stores a fixed number of values of one type. Each value is an element. Its index identifies its position. An indexed loop visits the valid indices from 0 through `length - 1`.

## Selected and deferred source sections

| Source section | PDF pages | Treatment |
|---|---:|---|
| 5.1 Array concept | 1-7 | Selected: array, element, direct access, and zero-based index. |
| 5.2 Arrays | 7-19 | Selected: declaration, allocation, initializer values, default integer values, index expressions, `.length`, and loops. |
| 5.3 Array iteration drill | 20-21 | Selected as simple tracing practice for a running maximum. The publisher interaction is not reused. |
| 5.4 Iterating through arrays | 21-34 | Selected: standard indexed loop, total accumulator, maximum-so-far pattern, and valid loop bounds. |
| 5.5 Multiple arrays | 34-38 | Deferred: parallel arrays and paired lookup. |
| 5.6 Swapping two variables | 39-43 | Deferred: temporary-variable swapping. |
| 5.7 Modify or copy an array | 43-48 | Deferred: full-array modification and copying. Problem 1 only demonstrates one direct update. |
| 5.8 Debugging array reversal | 48-54 | Deferred: swapping pairs and stopping halfway through an array. |
| 5.9 Two-dimensional arrays | 54-58 | Deferred: rows, columns, and nested traversal. |
| 5.10 Enhanced for loop | 59-64 | Deferred until students can trace an indexed loop. |
| 5.11 Salary example | 65-68 | Deferred extended case study. |
| 5.12 Domain-name validation | 68-73 | Deferred extended case study. |

Section boundaries share pages where one section ends and the next begins.

## Three instructor-led problems

| Problem | Program | Result | New concepts |
|---|---|---|---|
| 1. Store and update temperatures | `TemperatureBasics.java` | Print the first value, correct the fourth value, report the array length, and print the last value. | Array and element, declaration and initializer, zero-based index, element read/update, `.length`, last index. |
| 2. Read and total temperatures | `TemperatureTotal.java` | Read `20 22 24 26 28` and print `Total: 120`. | Allocation, default values, indexed input loop, accumulator, full traversal. |
| 3. Find the highest temperature | `HighestTemperature.java` | For `{-3, -7, -1, -5, -4}`, print `Highest temperature: -1` and `Day: 3`. | Maximum-so-far, first-element initialization, paired index, negative-data check. |

## Supporting-slide map

The slide header must always show the related problem. Use the exact form `Problem N - ProgramName.java` and add a short concept label. One teaching concept belongs on each concept slide.

| Slides | Header mapping | Teaching purpose | Code comment ID |
|---:|---|---|---|
| 1 | Problems 1-3 | Lecture title and problem order | - |
| 2 | Problems 1-3 | Lecture goals and IDE/slide switching guide | - |
| 3 | Problem 1 - `TemperatureBasics.java` | An array stores several elements of one type | P1-C1 |
| 4 | Problem 1 - `TemperatureBasics.java` | Declare and initialize an `int[]` with braces | P1-C2 |
| 5 | Problem 1 - `TemperatureBasics.java` | Use the zero-based index range | P1-C3 |
| 6 | Problem 1 - `TemperatureBasics.java` | Read one element with an indexed expression | P1-C4 |
| 7 | Problem 1 - `TemperatureBasics.java` | Update one element with an indexed assignment | P1-C5 |
| 8 | Problem 1 - `TemperatureBasics.java` | Use `.length` and derive the last valid index | P1-C6 |
| 9 | Problem 1 - `TemperatureBasics.java` | IDE checkpoint and exact output | - |
| 10 | Problem 2 - `TemperatureTotal.java` | Allocate five integer elements and show their default values | P2-C1 |
| 11 | Problem 2 - `TemperatureTotal.java` | Use the loop index to visit valid elements | P2-C2 |
| 12 | Problem 2 - `TemperatureTotal.java` | Fill one element during each iteration | P2-C3 |
| 13 | Problem 2 - `TemperatureTotal.java` | Use a second traversal to read the stored values | P2-C4 |
| 14 | Problem 2 - `TemperatureTotal.java` | Start and update a total accumulator | P2-C5 |
| 15 | Problem 2 - `TemperatureTotal.java` | Reinforce the safe `i < length` boundary | P2-C2 |
| 16 | Problem 2 - `TemperatureTotal.java` | Trace the accumulator through all five values | P2-C5 |
| 17 | Problem 2 - `TemperatureTotal.java` | IDE checkpoint, input, and exact output | - |
| 18 | Problem 3 - `HighestTemperature.java` | Use element 0 as the first maximum candidate | P3-C1 |
| 19 | Problem 3 - `HighestTemperature.java` | Start the remaining scan at index 1 | P3-C2 |
| 20 | Problem 3 - `HighestTemperature.java` | Compare each value and update the candidate | P3-C3 |
| 21 | Problem 3 - `HighestTemperature.java` | Keep the candidate value and index together | P3-C4 |
| 22 | Problem 3 - `HighestTemperature.java` | Use all-negative data to reject `highest = 0` | P3-C5 |
| 23 | Problem 3 - `HighestTemperature.java` | IDE checkpoint and exact output | - |
| 24 | Problems 1-3 | Check declaration, traversal, and maximum rules | - |

## IDE and slide sequence

For each problem:

1. Show the problem slide and ask students to predict the result.
2. Switch to the IDE and type until the next teaching comment ID.
3. Return to the supporting slide with the same problem and concept.
4. Explain the one concept on that slide.
5. Return to the IDE, finish the related line, and run the program.
6. Use the final problem slide to trace or check the exact output.

## Teaching additions

- The three programs use one temperature context so students can focus on Java syntax and state.
- Stable comment IDs connect exact code locations to the handout and slides without putting slide numbers in the Java files.
- Problem 3 uses only negative values to demonstrate why a maximum should start with the first element instead of 0.
- Human day numbers are shown as one more than the zero-based array index.

## Exact program outputs

`TemperatureBasics.java`:

```text
First day: 23
Corrected fourth day: 27
Days stored: 5
Last day: 26
```

`TemperatureTotal.java` input:

```text
20 22 24 26 28
```

Program output:

```text
Enter 5 temperatures:
Total: 120
```

`HighestTemperature.java`:

```text
Highest temperature: -1
Day: 3
```
