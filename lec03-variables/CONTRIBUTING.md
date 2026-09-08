# Contributing

Small corrections and accessibility improvements are welcome.

## Before changing files

1. Read the repository README and relevant guide.
2. Keep the learning objectives and source terminology intact.
3. Do not add licensed textbook exports, student data, credentials, or generated QA artifacts.
4. Open an issue before changing the lecture’s topic scope or source alignment.

## Local workflow

```bash
git clone https://github.com/hammadojh/ICS_108.git
cd ICS_108/lec03-variables
python3 -m http.server 8000
```

Open <http://localhost:8000>, then make a focused change.

## Verify a lecture change

- Test at 1440×900, 1280×720, and a narrow mobile width.
- Use every keyboard navigation path affected by the change.
- Exercise changed inputs and both correct/incorrect quiz outcomes.
- Check the browser console for errors.
- Confirm relative links work from the repository root and GitHub Pages project path.
- Respect reduced-motion preferences.

## Verify a Java change

Use the course-approved JDK. Compile and run the affected file:

```bash
cd examples
javac HealthData.java
printf '80\n' | java HealthData
```

Update documented expected output when behavior intentionally changes.

## Verify the walkthroughs

- Screen layout must reflow without horizontal document scrolling.
- Print preview must contain exactly six A4 portrait pages.
- No content may overlap or sit beneath a footer.
- Code and output must match the programs in `examples/`.

## Pull requests

Keep each pull request focused. Describe:

- the problem;
- the change;
- how it was tested; and
- any effect on teaching flow, source alignment, or accessibility.
