# Student guide

This guide turns the repository into a repeatable study session rather than a set of files to read passively.

## What you need

- A current desktop or mobile browser.
- A course-approved JDK and IDE only if you want to compile the Java examples.
- About 45–60 minutes for a complete self-study pass.

No JavaScript packages, web server framework, or internet connection is required after cloning the repository.

## Use the same learning cycle on every topic

```text
Predict → Reveal or run → Trace values and types → Explain the rule → Try a new input
```

Do not begin by memorizing the finished code. Write down what you expect first. When your prediction differs from the result, the difference tells you exactly which rule to study.

## Recommended self-study route

| Slides | Topic | Your action |
|---|---|---|
| 1–3 | Hook and goals | Predict `7 / 2` before choosing an answer. |
| 4–8 | Variables and assignment | Trace every value stored in the bus example. |
| 9–13 | Expressions, division, and modulo | Test `59`, `60`, `3600`, and `7325` seconds. |
| 14–19 | Types, casts, constants, and overflow | Explain why an early cast works and a late cast does not. |
| 20–21 | `char`, `String`, and `Scanner` | Compare `next()` with `nextLine()`. |
| 22 | Debugging | Predict the circle bug before selecting the expression. |
| 23 | HealthData | Try ages `19`, `57`, `80`, and `130`. |
| 24 | Quiz | Retry each incorrect response and state the governing rule. |
| 25 | Summary | Explain meaning, type, and state in your own words. |

## Interactive slide map

- **Slide 2:** integer-division prediction.
- **Slide 4:** changing bus state.
- **Slide 12:** seconds converter.
- **Slide 21:** Scanner token-versus-line comparison.
- **Slide 22:** circle debugging.
- **Slide 23:** HealthData calculator.
- **Slide 24:** six-question quiz.

## Navigation

| Action | Keyboard or control |
|---|---|
| Next reveal or slide | `Right Arrow`, `Page Down`, `Space`, or `Enter` |
| Previous reveal or slide | `Left Arrow`, `Page Up`, or `Backspace` |
| First slide | `Home` |
| Last slide | `End` |
| Direct link | Add `#slide-N` to the lecture URL |

A key press may reveal the next reasoning step without changing the slide. This is intentional. If arrow keys do nothing, focus may be inside an input or button; press `Escape` or click an unoccupied part of the slide.

## Practice in Java

The `examples/` directory contains six complete programs:

1. `StateTrace.java` — assignment and copied values.
2. `TimeBreakdown.java` — quotient and remainder.
3. `AverageDemo.java` — integer and floating-point division.
4. `StudentInput.java` — Scanner input state.
5. `CircleDebug.java` — grouping, `Math`, and debugging.
6. `HealthData.java` — constants, range, and `long` intermediates.

Compile one file at a time:

```bash
cd examples
javac AverageDemo.java
java AverageDemo
```

After the documented run succeeds, change one input or expression. Predict the output before running again.

## When to use the worked walkthroughs

Open `instructor/walkthroughs.html` after attempting a problem yourself. Each module includes the complete program and answer, so it is most useful for checking reasoning or recovering from a mistake.

If the problem is part of graded work, follow your instructor’s academic-integrity rules before consulting a worked solution.

## Exit checklist

You are ready to move on when you can answer these questions without the slides:

- What value is stored after each assignment?
- Why does copying one primitive variable not create a live connection?
- Which operands determine division behavior?
- When must a cast occur?
- What different questions do `/` and `%` answer?
- Why can `nextLine()` return an empty string after `nextInt()`?
- Why can a valid-looking `int` calculation become negative?
- How is a logic error different from a compile-time or runtime error?

## Glossary

- **Variable:** a named item that holds one current value.
- **Declaration:** a statement that introduces a variable’s type and name.
- **Initialization:** providing a variable’s first value in its declaration.
- **Assignment:** evaluating the right side of `=` and storing the result in the variable on the left.
- **Expression:** values and operators that evaluate to one value.
- **Precedence:** rules that determine which operation evaluates first.
- **Integer division:** division with integer operands that keeps only the whole-number quotient.
- **Modulo:** `%`, the operator that returns the remainder.
- **Cast:** an explicit request to convert a value to another type.
- **Constant variable:** a `final` variable that cannot be reassigned after initialization.
- **Overflow:** a result outside the range of its numeric type.
- **Token:** input characters bounded by whitespace.
- **Line:** input characters up to a newline.
- **Logic error:** a program that runs but produces an unintended result.

## Troubleshooting

| Symptom | Try this |
|---|---|
| The page is unstyled or controls do not work | Keep the directory structure intact and use the local server command from the README. |
| A key reveals content but does not change slides | The current slide has another progressive reasoning step. |
| The quiz has no feedback | Confirm JavaScript is enabled and `slides/script.js` loaded. |
| Java reports a public-class/filename mismatch | The filename must exactly match the public class name. |
| Java does not recognize `Scanner` | Add `import java.util.Scanner;`. |
| The program waits without output | It may be waiting for console input. Use the example’s documented input. |
| A live demo diverges | Restore the last working version and rerun the same input. |

## Continue in the assigned source

The lecture selects the concepts needed for this learning arc. The assigned chapter also covers scientific notation, number bases, random numbers, Java API documentation, fuller style guidance, local type inference with `var`, and extended examples. Use the authorized zyBooks or LMS link supplied by the course.
