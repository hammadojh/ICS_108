# Lecture 13 — Interfaces and ordering objects

## Problem 1: Provide a payment contract

Continue the previous employee program with Omar the manager and Nora the student employee. Add a reusable payment operation that accepts any object promising a bonus amount. Keep the existing employee report and bonus values unchanged.

Expected output:

```text
Omar | Bonus: 50
Nora | Bonus: 30
```

## Problem 2: Define employee order

Extend Problem 1 so employee records can be compared alphabetically by name. Keep the original report and demonstrate whether Omar comes after Nora. Names are non-null and use consistent capitalization.

Expected output:

```text
Omar | Bonus: 50
Nora | Bonus: 30
Omar after Nora: true
```

## Problem 3: Sort the staff report

Extend Problem 2. Display the original staff report and the comparison result, then display the same employee records alphabetically by name. Preserve each employee’s bonus. Use the library’s sorting operation; do not write a sorting algorithm.

Expected output:

```text
Omar | Bonus: 50
Nora | Bonus: 30
Omar after Nora: true
Sorted:
Nora | Bonus: 30
Omar | Bonus: 50
```
