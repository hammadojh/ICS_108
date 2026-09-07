# Lecture 6 — Runnable Java examples

Three separate console programs use a campus café setting. Prices are sample exercise prices. There is no keyboard input.

Compile from this lecture folder:

```sh
mkdir -p output/classes
javac -d output/classes examples/*.java
java -cp output/classes CampusMenu
java -cp output/classes LunchBill
java -cp output/classes WalletTopUp
```

## Problem 1: Display the campus café menu

[Java source](CampusMenu.java) · [Handout](../instructor/walkthroughs.html#problem-1) · [Supporting slides 3–8](../slides/index.html#slide-3)

A campus café displays its menu before an order, then displays it again for the next order. Write CampusMenu.java to demonstrate this display sequence using the sample prices below.

Exact output:

```text
Sandwich - 12 SAR
Juice - 5 SAR
Order placed: Sandwich
Sandwich - 12 SAR
Juice - 5 SAR
```

## Problem 2: Calculate lunch costs

[Java source](LunchBill.java) · [Handout](../instructor/walkthroughs.html#problem-2) · [Supporting slides 9–13](../slides/index.html#slide-9)

At the campus café, a sandwich costs 12 SAR and a juice costs 5 SAR. You want to calculate the cost of your lunch and the cost when a friend joins you. Write LunchBill.java using these sample prices.

Exact output:

```text
My lunch: 17 SAR
Lunch for two: 34 SAR
```

## Problem 3: Preview a wallet top-up

[Java source](WalletTopUp.java) · [Handout](../instructor/walkthroughs.html#problem-3) · [Supporting slides 14–20](../slides/index.html#slide-14)

Your campus wallet contains 20 SAR. Write WalletTopUp.java to preview a 10 SAR top-up before confirming it. Repeating a preview must leave the current balance unchanged.

Exact output:

```text
Current balance: 20 SAR
Preview balance: 30 SAR
Preview again: 30 SAR
Confirmed balance: 30 SAR
```

## Boundary and transfer checks

LunchBill.calculateTotal(0,0)=0; (0,2)=10; (3,0)=36; (2,1)=29; (1,2)=22. Quantities are nonnegative whole numbers and the cost must fit int.

WalletTopUp.previewTopUp(0)=10; previewTopUp(20)=30, even when repeated with the same argument. Assigning the result back twice changes 20 to 30 to 40. Assume nonnegative balances for which +10 fits int. No validation or permanent storage is implemented.
