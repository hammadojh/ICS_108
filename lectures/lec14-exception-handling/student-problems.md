# Lecture 14 — Exception handling

## Problem 1: Handle one booking attempt

Write a campus event booking program that reads one token. If it is a Java int, report the requested seat count. Otherwise, print Enter a whole number. Always finish with Session complete. Assume at least one token is supplied; seat limits will be added later.

Input:
two

Expected output:
Enter a whole number.
Session complete.

## Problem 2: Retry a malformed attempt

Extend Problem 1 so malformed input produces the same message and another attempt is allowed. Treat each whitespace-separated token as one attempt. Stop after reporting the first integer, or when input ends. Keep the final Session complete. message.

Input:
two 3

Expected output:
Enter a whole number.
Seats requested: 3
Session complete.

## Problem 3: Validate the seat count

Extend Problem 2 so only 1 to 4 seats can be requested. For an integer outside this range, print Seats must be 1 to 4. and allow another attempt. Retain malformed-input recovery, token-by-token attempts, end-of-input handling, and the final message. Stop after the first valid booking.

Input:
two 0 3

Expected output:
Enter a whole number.
Seats must be 1 to 4.
Seats requested: 3
Session complete.
