# Lecture 8 — Object references and wrappers

Three extensions of the campus wallet program. No keyboard input is required.

## Problem 1 — Two ways to start a wallet

A standard campus wallet starts with 20 SAR; a custom wallet starts with 50 SAR. Display both starting balances.

No keyboard input is required.

Expected output:

```text
Standard: 20 SAR
Custom: 50 SAR
```

## Problem 2 — Transfer through another name

Extend Problem 1: transfer 10 SAR from the custom wallet to the standard wallet. Another name for the custom wallet should report its updated balance, while the transfer amount remains 10.

No keyboard input is required.

Expected output:

```text
Standard: 30 SAR
Custom: 40 SAR
Alias: 40 SAR
Amount: 10
```

## Problem 3 — Add an optional reward

Extend Problem 2: the standard wallet may have a 5 SAR reward. Show its available balance with the reward and after the reward is cleared; retain the transfer results.

No keyboard input is required.

Expected output:

```text
Standard: 30 SAR
Custom: 40 SAR
Alias: 40 SAR
Amount: 10
With reward: 35 SAR
Without reward: 30 SAR
```
