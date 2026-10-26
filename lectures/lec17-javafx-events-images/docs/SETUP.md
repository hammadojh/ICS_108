# IntelliJ IDEA setup and running a snapshot

Follow the supplied **IntelliJ IDEA Setup.docx**. Its course configuration is:

1. Install **Liberica Full JDK 25** for your operating system and processor. Select **Full JDK**, not the standard or Lite package. [BellSoft downloads](https://bell-sw.com/pages/downloads/?version=java-25&vtabs=true).
2. Install IntelliJ IDEA from the [JetBrains download page](https://www.jetbrains.com/idea/download/). Choose the platform matching your computer; the supplied screenshots show Windows.
3. Choose **New Project → Java**, with the **IntelliJ** build system. Select **liberica-25** as the project JDK. Use the plain Java project option shown in the course guide. No FXML, Maven, Gradle, or module-info.java is needed for these examples.
4. Create a class named **CampusBooking** under `src`, replace its contents with one complete problem snapshot, and run `CampusBooking.main()` from the gutter. Delete unused sample code if it conflicts. The file must be `CampusBooking.java`, with no package declaration for this setup.
5. For the next problem, replace that file’s content or create a separate project. Do not place several classes named CampusBooking in the same source directory.

The Full JDK distribution includes JavaFX. An ordinary JDK installation is not equivalent. If `javafx` imports are unresolved, check **Project Structure → Project SDK** and the module/run configuration SDK; both must use the Full JDK you installed. Restart the run after changing the SDK. The installed IDE itself may run on a different bundled runtime.

## Wednesday’s image files

Problem 3 supplies `venue-a.png` and `venue-b.png` beside its Java snapshot. Copy both images to the **project root**, alongside the `src` directory, and set the run configuration’s **Working directory** to that project root. Do not put the images only inside `src` while running from the root. The code’s `file:venue-a.png` and `file:venue-b.png` URLs resolve from the working directory.

```text
BookingProject/
  venue-a.png
  venue-b.png
  src/
    CampusBooking.java
```

These original diagrams are local assets; the program does not need internet access. A blank image usually means the files or working directory are wrong. In the debugger, inspect `images[0].isError()` and `images[0].getException()` to diagnose loading. Both images must load before using this teaching version; general missing-image recovery is deferred.

## Terminal alternative

Use the Full JDK’s `javac` and `java` (verify with `java -version` and `java --list-modules`). Change into the selected `examples/problem-N` folder first:

```sh
javac CampusBooking.java
java CampusBooking
```

This uses the bundled JavaFX modules in Liberica Full JDK 25. No separate SDK download or module path is needed for this course configuration. On a different JDK, first follow the official [OpenJFX setup](https://openjfx.io/openjfx-docs/); do not mix that alternative into the course’s basic setup.

If Java prints a native-access warning while the window still opens, it is distinct from a compilation failure. On the tested Full JDK 25 runtime, optional VM argument `--enable-native-access=javafx.graphics` acknowledges JavaFX native access. No change to the lecture source is required.

## Classroom checks

- Monday: the window opens, values are non-editable, labels align with their fields, and spacing changes are visible.
- Wednesday Problem 1: changing seats to 4 and clicking Calculate shows 40; typing alone does not calculate.
- Wednesday Problem 2: invalid text and out-of-range values show different errors, leave a blank result, and allow a corrected second click.
- Wednesday Problem 3: venue A and B alternate; the total and validation behavior remain intact.

The exact environment and checks actually performed for this package are recorded in [VALIDATION.md](VALIDATION.md). The supplied guide is the authority for the intended IntelliJ workflow; terminal/runtime verification does not imply that IntelliJ itself was configured on your computer.
