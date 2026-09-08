# Runnable Java examples

Each file is a complete program and matches one worked walkthrough. Use a course-approved JDK.

## Compile one program

```bash
cd examples
javac StateTrace.java
java StateTrace
```

The generated `.class` files are ignored by Git.

## Program index

| Program | Concept | Input | Expected output |
|---|---|---|---|
| `StateTrace.java` | assignment and copied values | none | `Current: 7`, `First: 5` |
| `TimeBreakdown.java` | integer division and modulo | none | `2:2:5` |
| `AverageDemo.java` | integer versus floating-point division | none | `87.0`, `87.5`, `87.50` |
| `StudentInput.java` | Scanner token and line state | `19`, `Betty Sue McKay`, `A` | saved full name, age, and grade |
| `CircleDebug.java` | grouping, `Math`, and debugging | none | radius `1.59`, area `7.96`, sector `30` |
| `HealthData.java` | constants, range, and `long` | `80` | days `29220`, minutes `42076800`, heartbeats `3029529600` |

## Run the input examples

### StudentInput

```bash
printf '19\nBetty Sue McKay\nA\n' | java StudentInput
```

Expected interaction:

```text
Age: Full name: Grade: Saved: Betty Sue McKay, age 19, grade A
```

When run interactively in an IDE, each prompt appears before you type its value.

### HealthData

```bash
printf '80\n' | java HealthData
```

Expected output:

```text
Days: 29220
Minutes: 42076800
Heartbeats: 3029529600
```

## Practice method

For each program:

1. Predict the output before compiling.
2. Trace every variable value or operand type.
3. Compile and run the documented version.
4. Change one input or expression.
5. Predict again before rerunning.
6. Explain the governing Java rule in one sentence.

Useful transfer inputs include:

- `TimeBreakdown`: `59`, `60`, `3600`, and `3661` seconds.
- `AverageDemo`: totals that are and are not evenly divisible.
- `StudentInput`: names containing several spaces.
- `CircleDebug`: circumference `10 * Math.PI` and eight sectors.
- `HealthData`: ages `19`, `57`, `80`, and `100`.
