# Lecture 17 Java examples

[Setup and run instructions](../docs/SETUP.md). Each problem folder contains one complete CampusBooking.java. Replace the prior snapshot or use a separate project.

## Problem 1: Calculate from typed seats

```text
Initial fields: seats 3, total 30, price 10
Enter 4, click Calculate: total 40
Enter 2, click Calculate: total 20
```

Try 1 then 3 with a click after each: totals 10 then 30. Typing without clicking leaves the previous total. Malformed input is outside this first version’s contract.

## Problem 2: Reject invalid booking input

```text
Enter two, click: Enter a whole number.
Enter 0, click: Choose 1 to 4 seats.
Enter  2 , click: total 20
Error dialog title: Invalid booking
```

Test empty text, 3.5, and 2147483648: format alert. Test -1 and 5: range alert. Test 1 and 4: totals 10 and 40. Dismiss an error, enter 3, click: total 30.

## Problem 3: Browse venue images

```text
Startup: venue A; seats 3; total 30
Click image: venue B; total still 30
Click image again: venue A; total still 30
Enter 4, Calculate: total 40; view unchanged
```

Click five times: venue B. Calculate 2 seats: 20, same view. Enter bad text: error alert and blank total; dismiss, correct to 4: 40. Wrong image paths produce a blank view; restore the supplied files and working directory.
