# Lecture 6 — Student problems

## Problem 1 — Display the campus café menu

A campus café displays its menu before an order, then displays it again for the next order. Write CampusMenu.java to demonstrate this display sequence using the sample prices below.

Requirements:
1. Define public static void printMenu(). It takes no arguments, returns no value, and prints Sandwich - 12 SAR and Juice - 5 SAR on separate lines.
2. In main, call printMenu(), print Order placed: Sandwich, and call printMenu() again so the menu is ready for the next order.
3. Keep both menu-print statements inside printMenu only. Use the sample order text; no keyboard input is required.

Expected output:

```text
Sandwich - 12 SAR
Juice - 5 SAR
Order placed: Sandwich
Sandwich - 12 SAR
Juice - 5 SAR
```

---

## Problem 2 — Calculate lunch costs

At the campus café, a sandwich costs 12 SAR and a juice costs 5 SAR. You want to calculate the cost of your lunch and the cost when a friend joins you. Write LunchBill.java using these sample prices.

Requirements:
1. Define public static int calculateTotal(int sandwiches, int juices). It must return the combined cost without printing.
2. In main, calculate the cost of one sandwich and one juice. Store it in myLunch and print it with the label My lunch: and the suffix SAR, separated by spaces.
3. Next, each of two friends orders a sandwich and a juice. Call the method with 1 + 1 for sandwiches and 2 for juices. Store it in lunchForTwo and print Lunch for two: followed by the amount and SAR.
4. No keyboard input is required. Assume nonnegative whole quantities and a total that fits int.

Expected output:

```text
My lunch: 17 SAR
Lunch for two: 34 SAR
```

---

## Problem 3 — Preview a wallet top-up

Your campus wallet contains 20 SAR. Write WalletTopUp.java to preview a 10 SAR top-up before confirming it. Repeating a preview must leave the current balance unchanged.

Requirements:
1. Define public static int previewTopUp(int balance). Declare local int topUp = 10, add it to the parameter balance, and return balance. Do not print inside this method.
2. In main, start balance at 20. Store previewTopUp(balance) in previewBalance, then print the current and preview balances.
3. Preview again by calling previewTopUp(balance) and printing the result without updating balance. Then simulate confirmation with balance = previewTopUp(balance); and print the confirmed balance.
4. Use the shown output labels and SAR suffix. No keyboard input is required.

Expected output:

```text
Current balance: 20 SAR
Preview balance: 30 SAR
Preview again: 30 SAR
Confirmed balance: 30 SAR
```
