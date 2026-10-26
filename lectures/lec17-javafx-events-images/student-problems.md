# Lecture 17 · JavaFX events, validation, and images

Wednesday, October 28, 2026

Problem 1: Calculate from typed seats

Extend Monday’s final CampusBooking form. Allow the seat count to be edited and add a Calculate button. Each click must update the non-editable total using the current count at 10 SAR per seat. Keep the price row, spacing, and title. For this first version, assume whole-number inputs from 1 to 4.

Initial fields: seats 3, total 30, price 10
Enter 4, click Calculate: total 40
Enter 2, click Calculate: total 20

---

Problem 2: Reject invalid booking input

Extend Problem 1 to accept only 1 to 4 seats and allow surrounding spaces. For non-integer text show an error dialog saying Enter a whole number. For an integer outside the range show Choose 1 to 4 seats. Leave the total blank after invalid input. After dismissal, let the user correct the input and calculate again.

Enter two, click: Enter a whole number.
Enter 0, click: Choose 1 to 4 seats.
Enter  2 , click: total 20
Error dialog title: Invalid booking

---

Problem 3: Browse venue images

Extend Problem 2 with the supplied venue-a.png and venue-b.png views below the form. Initially show venue A, 240 pixels wide without distortion. Clicking the image must alternate A, B, A repeatedly. Preserve all calculation and validation behavior; changing the view must not change the booking values.

Startup: venue A; seats 3; total 30
Click image: venue B; total still 30
Click image again: venue A; total still 30
Enter 4, Calculate: total 40; view unchanged
