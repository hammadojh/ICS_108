# Lecture 5 runnable examples

These three programs match the instructor handout and the supporting slides. Keep the filenames, values, output, and teaching comment IDs unchanged across all lecture materials.

## Compile all programs

From this directory, run:

```bash
javac *.java
```

## Problem 1: Array basics

Run:

```bash
java TemperatureBasics
```

Exact output:

```text
First day: 23
Corrected fourth day: 27
Days stored: 5
Last day: 26
```

Teaching comment IDs:

| ID | Introduce this concept |
|---|---|
| P1-C1 | An array stores several elements of one type. |
| P1-C2 | Declare an `int[]` and provide starting values with braces. |
| P1-C3 | The first element is at index 0. |
| P1-C4 | An indexed expression reads one element. |
| P1-C5 | Assigning to an indexed expression updates one element. |
| P1-C6 | `.length` counts elements, so `length - 1` is the last index. |

## Problem 2: Read and total five temperatures

Run:

```bash
java TemperatureTotal
```

Enter this input when prompted:

```text
20 22 24 26 28
```

Exact program output:

```text
Enter 5 temperatures:
Total: 120
```

Teaching comment IDs:

| ID | Introduce this concept |
|---|---|
| P2-C1 | `new int[5]` allocates five integer elements, each starting at 0. |
| P2-C2 | An indexed loop visits 0 through `length - 1`. |
| P2-C3 | `temperatures[i]` fills the element at the current index. |
| P2-C4 | A second traversal reads every stored element. |
| P2-C5 | A total accumulator starts at 0 and adds each visited value. |

## Problem 3: Find the highest temperature

Run:

```bash
java HighestTemperature
```

Exact output:

```text
Highest temperature: -1
Day: 3
```

Teaching comment IDs:

| ID | Introduce this concept |
|---|---|
| P3-C1 | Initialize the first maximum candidate from element 0. |
| P3-C2 | Start scanning at index 1 because index 0 is already the candidate. |
| P3-C3 | Replace the candidate only when the current value is higher. |
| P3-C4 | Update the candidate value and its index together. |
| P3-C5 | Negative test data shows why 0 is not a safe starting maximum. |
