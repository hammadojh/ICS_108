# Runnable employee examples

Each problem is a complete snapshot. Open only one snapshot at a time in your IDE because class names repeat. The public driver is CampusPayroll; the other top-level classes share its source file.

From the chosen problem folder:

```sh
javac CampusPayroll.java
java CampusPayroll
```

Java 17 or newer. No input is required. All monetary values are whole SAR in a teaching example; hours are nonnegative and totals fit int. Names are non-null and consistently capitalized.

## Problem 1

[Source](problem-1/CampusPayroll.java)

```text
Omar | Bonus: 50
Nora | Bonus: 30
```

Practice: Try to call getName through Payable. Explain the compile-time restriction and restore the bonus-only routine.

## Problem 2

[Source](problem-2/CampusPayroll.java)

```text
Omar | Bonus: 50
Nora | Bonus: 30
Omar after Nora: true
```

Practice: Compare Nora with Omar, then Nora with Nora. Check for a negative result and zero without assuming a particular negative magnitude.

## Problem 3

[Source](problem-3/CampusPayroll.java)

```text
Omar | Bonus: 50
Nora | Bonus: 30
Omar after Nora: true
Sorted:
Nora | Bonus: 30
Omar | Bonus: 50
```

Practice: Try an empty list, a one-entry list, and two distinct records with the same name. Check size, bonuses, and tie order after sorting.
