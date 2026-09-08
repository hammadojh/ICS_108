# ICS 108 — Java Programming

Use these materials to review what you learned in class, practice writing Java programs, and check your understanding.

**[Open the course website](https://hammadojh.github.io/ICS_108/)**

## Find your lecture

| Lecture | What you will study | Slides | Practice |
|---|---|---|---|
| **5 — Arrays** | Store several values, work with indexes, and find totals and maximums. | [Open slides](https://hammadojh.github.io/ICS_108/lec05-arrays/slides/index.html) | [Problems and worked solutions](https://hammadojh.github.io/ICS_108/lec05-arrays/instructor/walkthroughs.html) |
| **6 — User-defined methods** | Define and call methods, pass arguments, and return values. | [Open slides](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/slides/index.html) | [Practice problems](lec06-user-defined-methods/student-problems.md) |
| **7 — Classes and objects** | Create objects, read and change their data, and use constructors. | [Open slides](https://hammadojh.github.io/ICS_108/lec07-classes%26objects/slides/index.html) | [Practice problems](lec07-classes%26objects/student-problems.md) |

In Lecture 7, the three problems extend the same campus wallet program: display a balance, add money, then keep two students’ balances separate.

## How to practice

1. **Read the problem and expected output.** Try writing your own solution before opening the worked code.
2. **Use the slides when a concept is unclear.** In the slide viewer, use the arrow keys or the navigation buttons.
3. **Run your program and compare the output.** If it differs, trace the values and revise your code.
4. **Review the worked solution afterward.** Explain why it works, then change a value and predict the new result before running it.

Lecture 5’s practice page includes solutions on the same page. Lectures 6 and 7 have separate problem sheets.

## Review and check your work

The **worked solutions** include complete code and explanations. The **concept notes** define the terms and offer expandable explanations. The **Java examples** contain the solution files, sample inputs, and expected outputs.

| Lecture | Worked solutions | Concept notes | Java examples |
|---|---|---|---|
| 5 — Arrays | [Solutions](https://hammadojh.github.io/ICS_108/lec05-arrays/instructor/walkthroughs.html) | [Notes](https://hammadojh.github.io/ICS_108/lec05-arrays/instructor/concept-refresher.html) | [Files and run instructions](lec05-arrays/examples/README.md) |
| 6 — User-defined methods | [Solutions](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/instructor/walkthroughs.html) | [Notes](https://hammadojh.github.io/ICS_108/lec06-user-defined-methods/instructor/concept-refresher.html) | [Files and run instructions](lec06-user-defined-methods/examples/README.md) |
| 7 — Classes and objects | [Solutions](https://hammadojh.github.io/ICS_108/lec07-classes%26objects/instructor/walkthroughs.html) | [Notes](https://hammadojh.github.io/ICS_108/lec07-classes%26objects/instructor/concept-refresher.html) | [Files and run instructions](lec07-classes%26objects/examples/README.md) |

## Run a Java example

You need a Java Development Kit (JDK) to compile and run Java code. Use the Java setup from your course.

**In your IDE:** open the example in a Java project and run its `main` method. Keep the filename the same as the public class name; for example, `CampusWallet1.java` contains `public class CampusWallet1`.

**In a terminal:** after downloading or cloning this repository, open a terminal in the `ICS_108` folder and run:

```sh
cd "lec07-classes&objects/examples"
javac CampusWallet1.java
java CampusWallet1
```

The first command opens the examples folder. `javac` compiles the file; `java` runs the class. The run command uses the class name without `.java` or `.class`.

Expected output:

```text
Balance: 20 SAR
```

For the next two versions, replace `CampusWallet1` with `CampusWallet2` or `CampusWallet3` in the `javac` and `java` commands. Lecture 7’s examples do not require keyboard input. See each lecture’s Java examples page for any required input.

## Study offline

Download or clone this repository, then open `index.html` in your browser. You can also open a lecture’s `slides/index.html` directly. The slides and notes work without internet access; you only need a browser to read them.

If the course website does not open on your network, use this local copy.

## Assigned readings

Access the assigned zyBooks readings through your course’s zyBooks or LMS link. The textbook PDFs are not included in this repository.
