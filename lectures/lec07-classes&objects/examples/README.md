# Lecture 7 Java examples

These three files are complete snapshots of the same campus wallet program. Work through them in order. No keyboard input is required. Compile them together from this directory:

```sh
mkdir -p ../output/classes
javac -d ../output/classes *.java
java -cp ../output/classes CampusWallet1
java -cp ../output/classes CampusWallet2
java -cp ../output/classes CampusWallet3
```

## Problem 1 — Store and display a balance

[CampusWallet1.java](CampusWallet1.java) defines the class and its instance field, creates an object, and accesses its balance through a reference.

```text
Balance: 20 SAR
```

Changing the assigned balance to 0 prints `Balance: 0 SAR`. A newly created object initially has an int balance of 0 before the explicit assignment. A reference declaration alone does not create an object.

## Problem 2 — Add money

[CampusWallet2.java](CampusWallet2.java) retains the wallet balance, hides the field, and adds a mutator and accessor. `main` is kept in the same class for a one-file example and uses the public operations; private access restrictions apply to other classes.

```text
Before: 20 SAR
After: 30 SAR
```

Checks: adding 0 leaves 20 unchanged; adding 10 twice yields 40; reading the balance twice does not change it. All amounts are nonnegative whole SAR and their sum must fit int. Input validation and decimal amounts are deferred.

## Problem 3 — Two wallets

[CampusWallet3.java](CampusWallet3.java) retains both methods unchanged and adds a constructor. Separate `new` expressions create independent state.

```text
First: 30 SAR
Second: 50 SAR
```

Checks: start both at 20, add 10 to first → 30 and 20. Start first at 0, add 0 → 0. Assigning `second = first` shares one object; it does not copy a wallet. Do not make balance static.

Recovery checks: a bare instance field in static main needs an object reference; an int accessor must return a value; a constructor has no return type; `balance = balance` in the constructor assigns the parameter to itself and leaves the field at 0. Restore, rebuild, and rerun the same values.
