# ICS 108 Lecture 5 - Arrays

This lecture introduces one-dimensional Java arrays through three simple instructor-led problems. The handout, supporting slides, concept reference, and Java files use the same values, comment IDs, and output.

## Start here

- [Supporting slides](slides/index.html) - one concept per slide, grouped by problem
- [Instructor handout](instructor/walkthroughs.html) - three complete problem walkthroughs
- [Instructor concept refresher](instructor/concept-refresher.html) - short explanations with expandable detail
- [Runnable examples](examples/README.md) - the three complete Java programs and exact output
- [Content map](docs/CONTENT_MAP.md) - source scope and the 24-slide problem map

Open the HTML files directly in a browser, or serve this folder with a local static web server.

## The three problems

1. `TemperatureBasics.java` declares an initialized array, accesses elements, corrects one value, and uses `.length`.
2. `TemperatureTotal.java` reads five values into an array and totals them with an indexed loop.
3. `HighestTemperature.java` finds the highest value and its day, even when every value is negative.

## Compile and run

```bash
cd examples
javac *.java
java TemperatureBasics
printf '20 22 24 26 28\n' | java TemperatureTotal
java HighestTemperature
```

Generated `.class` files are ignored by Git.

## Lecture scope

The lecture selects the array foundation from zyBooks Chapter 5 sections 5.1-5.4:

- arrays, elements, and zero-based indices;
- declaration, initialization, allocation, and default integer values;
- `.length` and the last valid index;
- indexed traversal, input, totals, and maximum values; and
- safe array loop boundaries.

Sections 5.5-5.12 are deferred. See the [content map](docs/CONTENT_MAP.md) for the complete source treatment.

## Source handling

`zyBooks.pdf` is a private, licensed authoring source supplied for this lecture. It remains in this folder but is ignored by Git. Do not publish or redistribute it. Students should use institution-authorized zyBooks or LMS access.
