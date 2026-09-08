# Runnable Java examples

The six core programs match the instructor walkthrough sequence. Four earlier branch programs remain as supplementary practice.

## Compile

```bash
cd examples
javac *.java
```

Generated `.class` files are ignored by Git.

## Core walkthrough programs

| Program | Main idea | Demonstration input | Expected result |
|---|---|---|---|
| `GradeClassifier.java` | first-true `else if` selection | `83` | `Grade: B` |
| `TeenRange.java` | inclusive range with `&&` | `19` | `Teen: true` |
| `SentinelTotal.java` | sentinel-controlled `while`, progress, total, count | `5 7 2 0` | count 3, total 14 |
| `NumberSeries.java` | fixed-count `for` and half-open boundary | `4` | `0 1 2 3` |
| `VowelCounter.java` | string index loop with a branch | `java` | `Vowels: 2` |
| `ScoreReport.java` | loop + branch + accumulator + counters | `72 58 90` | average 73.3, passed 2, failed 1 |

## Supplementary branch programs

| Program | Additional practice |
|---|---|
| `OfficeAccess.java` | compose two time ranges with `&&` and `||` |
| `CommandCheck.java` | compare string content with `equals()` |
| `SafeRatio.java` | guard division with short-circuit evaluation |
| `TollCalculator.java` | nested branch policy with ordered ranges |

## Teaching loop

For every core program: state the problem, ask for a prediction, trace the controlling values, run once, explain the concept, and change one boundary input.

Useful transfer inputs:

- `GradeClassifier`: `89`, `90`, `79`, `80`
- `TeenRange`: `12`, `13`, `19`, `20`
- `SentinelTotal`: `0`; then `5 0`; then `5 7 2 0`
- `NumberSeries`: `0`, `1`, `4`
- `VowelCounter`: `b`, `a`, `java`, `rhythm`
- `ScoreReport`: include `59` and `60`; then try all-pass and all-fail sets
