# Lecture 6 — Student problems

## Problem 1 — Print a course heading twice

A course practice program needs to display the same heading at two points. Write a Java program named PrintHeading.java that defines the heading once and reuses it.

Requirements:
1. Define public static void printHeading(). It must print ICS 108 on one line and Methods practice on the next line. It takes no arguments and returns no value.
2. In main, call printHeading(), print Start on its own line, then call printHeading() again.
3. Keep the two heading-print statements inside printHeading only; do not repeat them in main. No keyboard input is required.

Expected output:

```text
ICS 108
Methods practice
Start
ICS 108
Methods practice
```

---

## Problem 2 — Convert a duration to minutes

A study planner records each study session as hours and extra minutes. It needs the total duration in minutes. Write a Java program named MinutesConverter.java. Remember that one hour equals 60 minutes.

Requirements:
1. Define public static int toMinutes(int hours, int minutes). It must return the total number of minutes without printing anything.
2. In main, call the method for 1 hour and 30 minutes. Store the result in first and print it with the label First: followed by a space.
3. Call it again using 1 + 1 as the hours argument and 5 as the minutes argument. Store the result in second and print it with the label Second: followed by a space.
4. No keyboard input is required. Assume nonnegative whole hours, extra minutes from 0 to 59, and totals that fit int.

Expected output:

```text
First: 90
Second: 125
```

---

## Problem 3 — Add a practice point to a score

A practice app awards one extra point to a score. Write ScoreUpdate.java to compare calculating a new score with saving that score in the calling method.

Requirements:
1. Define public static int addPoint(int score). Inside it, declare a local int named bonus with value 1, add bonus to the parameter score, and return score. Do not print inside this method.
2. In main, create int score with value 7. Call addPoint(score), store the result in a separate variable named updated, and print score and updated with the labels Original: and Updated:.
3. Call addPoint(score) again and print its returned value with the label Again:. Do not assign this result to score.
4. Finally, call addPoint(score), assign its returned value back to score, and print score with the label Stored:. No keyboard input is required.

Expected output:

```text
Original: 7
Updated: 8
Again: 8
Stored: 8
```
