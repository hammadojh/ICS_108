# Runnable examples

Compile each snapshot separately with Java 17 or later, from its own problem-N directory:

```sh
javac CampusBooking.java
java CampusBooking
```

Problem 1 input: `two`. Problem 2 input: `two 3`. Problem 3 input: `two 0 3`. See the handout for exact output. Each whitespace-separated token is one attempt. Problem 1 requires a token. Problems 2 and 3 stop when input ends; in an interactive terminal hasNext may wait until a token or end-of-input is supplied. No input prompt is printed.

Regression cases and results are in [validation](../docs/VALIDATION.md). Do not compile all three same-named classes together.
