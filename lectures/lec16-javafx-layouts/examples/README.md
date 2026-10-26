# Lecture 16 Java examples

[Setup and run instructions](../docs/SETUP.md). Each problem folder contains one complete CampusBooking.java. Replace the prior snapshot or use a separate project.

## Problem 1: Display a booking summary

```text
Expected window text:
3 seats: 30 SAR
```

Change the booking to 4 seats at 10 SAR. The summary should read 4 seats: 40 SAR. Removing show leaves no visible window.

## Problem 2: Separate the booking values

```text
Expected rows:
Seats:        3
Total (SAR):  30
```

Change seats to 4: the fields show 4 and 40. Move the total field to (0, 1): it shares the label’s cell and may overlap it; restore (1, 1).

## Problem 3: Add the price and readable spacing

```text
Expected rows:
Seats:                 3
Total (SAR):           30
Price per seat (SAR):  10
```

Set price to 12: the price field shows 12 and the total 36. Double Vgap: only the spacing changes.
