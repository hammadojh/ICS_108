# Lecture 16 · JavaFX windows and layouts

## Placement

Monday, October 26, 2026 · user-confirmed sections 10.1–10.4. This overrides the syllabus topic labels for this week; the syllabus itself is unchanged. Local packages 16/17 correspond to scheduled sessions 17/18. Existing package 15 is preserved, not evidence that its content was delivered.

## Whole-week coverage

| Source section | Export pages | Treatment |
|---|---|---|
| 10.1 Introduction to GUI with JavaFX | 1–4 | Monday Problem 1: Application, Stage, Scene, Pane, TextField. |
| 10.2 Code(10.1) | 4–6 | Monday practice using our original snapshot; interactive lab implementation is absent from PDF. |
| 10.3 Positioning components with GridPane | 6–12 | Monday Problems 2–3: labels, coordinates, text conversion, padding and gaps. |
| 10.4 Code(10.3) | 12–14 | Monday practice modifying rows and spacing; no new concept in printed lab shell. |
| 10.5 Input and event handlers | 14–22 | Wednesday Problems 1–2: editable input, Button, ActionEvent, anonymous EventHandler, parsing, range check, Alert. |
| 10.6 Code(10.5) | 23–26 | Wednesday practice; both printed code-lab activities are accounted for, interactive source unavailable. |
| 10.7 ImageViewer | 26–28 | Wednesday Problem 3: original clickable venue preview. Source states behavior only; Image/ImageView APIs support our implementation. |

## Teaching sequence

75 minutes: setup and recall 10; Problem 1 12; Problem 2 12; Problem 3 12; individual practice 20; exit check and recap 9.

Each problem is an independently runnable snapshot with the same class name. Monday replaces the one-line summary with equivalent labeled values, then adds the price row and spacing. Wednesday begins from that final form, makes seats editable, adds a button, then validation, then images. Earlier useful behavior is retained; invalid inputs are explicitly outside Wednesday Problem 1 until Problem 2 supplies recovery. Image changes do not select or reserve seats and do not alter prices.

The 75-minute schedule comes from the course meeting duration. Slides are references used during coding, not an additional presentation block. Individual practice revisits the same three problems and uses the changes listed in the handout; it adds no fourth handout problem.

## Concept alignment

| ID | Concept | Source | Slide | Teaching treatment |
|---|---|---|---|---|
| P1-C1 | Application lifecycle | 10.1 · pp. 1–3 | 3 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P1-C2 | Stage | 10.1 · pp. 2–3 | 4 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P1-C3 | Scene | 10.1 · pp. 1–3 | 5 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P1-C4 | Pane and children | 10.1 · pp. 2–3 | 6 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P1-C5 | TextField | 10.1 · pp. 1–3 | 7 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P2-C1 | Label | 10.3 · pp. 6–8 | 9 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P2-C2 | GridPane coordinates | 10.3 · pp. 8–11 | 10 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P2-C3 | Number-to-text conversion | 10.3 · p. 7 | 11 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P3-C1 | Outer padding | 10.3 · pp. 11–12; single-value constructor is a teaching addition | 13 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |
| P3-C2 | Grid gaps | 10.3 · pp. 11–12 | 14 | Definition, inline code comment, complete solution, common mistake, alternative example, prediction and answer. |

## Additions, corrections, and deferred depth

- Campus booking problems and PNG venue diagrams are original teaching material. No publisher figures or solutions are redistributed.
- Monday uses the single-value Insets constructor in addition to the source’s four-value form.
- Wednesday adds trim, a range of 1–4, format recovery, and clearing stale results. The source wage example does not handle malformed numeric text.
- Anonymous handlers can capture final/effectively-final local variables. The source’s blanket statement that start locals cannot be accessed is too broad; fields avoid the need for that detour in the core examples.
- Image loading, sizing, and mouse-event wiring are an original implementation of the source’s one-sentence ImageViewer task, not recovered publisher code. Two local images and a nonempty array are explicit preconditions.
- Application lifecycle internals, alternate alert types beyond a brief comparison, confirmation return values, FXML, CSS theming, layout constraints/spanning, lambdas, generic-type theory, bindings, image loading recovery, threading, and deployment are deferred.
- Examples are setup-dependent snippets, not additional runnable snapshot files. Their named controls/helpers are defined in the lecture programs or stated setup.

## Source access

Private inputs: zyBooks-ch10.pdf (28 pages, October 25 export) and IntelliJ IDEA Setup.docx. Neither is copied into this public package. Setup uses a plain Java project with Liberica Full JDK 25 as requested in the supplied guide. The platform-specific development runtime used for checks is recorded separately in VALIDATION.md.

API precision: https://openjfx.io/javadoc/25/javafx.graphics/javafx/application/Application.html ; https://openjfx.io/javadoc/25/javafx.graphics/javafx/scene/image/Image.html ; https://openjfx.io/javadoc/25/javafx.graphics/javafx/scene/image/ImageView.html ; https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.1.3
