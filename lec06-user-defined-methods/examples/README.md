# Lecture 6 — Runnable Java examples

Compile all three files to a separate output directory from this lecture folder:

```sh
mkdir -p output/classes
javac -d output/classes examples/*.java
java -cp output/classes PrintHeading
java -cp output/classes MinutesConverter
java -cp output/classes ScoreUpdate
```

All programs have no keyboard input. Values are supplied by calls in main.

## Problem 1: PrintHeading.java

[Source](PrintHeading.java) · [Handout](../instructor/walkthroughs.html#problem-1) · [Supporting slides 3–8](../slides/index.html#slide-3)

Exact output:

```text
ICS 108
Methods practice
Start
ICS 108
Methods practice
```

## Problem 2: MinutesConverter.java

[Source](MinutesConverter.java) · [Handout](../instructor/walkthroughs.html#problem-2) · [Supporting slides 9–15](../slides/index.html#slide-9)

Exact output:

```text
First: 90
Second: 125
```

## Problem 3: ScoreUpdate.java

[Source](ScoreUpdate.java) · [Handout](../instructor/walkthroughs.html#problem-3) · [Supporting slides 16–22](../slides/index.html#slide-16)

Exact output:

```text
Original: 7
Updated: 8
Again: 8
Stored: 8
```

## Boundary and transfer checks

MinutesConverter.toMinutes(0, 0) = 0; (0, 59) = 59; (2, 0) = 120; (3, 15) = 195. Whole nonnegative hours, minutes 0–59, and an int-sized result are assumed; no validation is implemented. Swapped arguments (30, 1) return 1801.

ScoreUpdate.addPoint(0) = 1; (-1) = 0; (7) = 8. Repeated calls with 7 return 8. Assign the return back twice to advance a caller from 7 to 8 to 9. Inputs must allow +1 to fit int.
