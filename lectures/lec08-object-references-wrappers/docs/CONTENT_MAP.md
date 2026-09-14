# Lecture 8 — Object references and wrappers

## Source and teaching scope

Lecture 8 continues the user-supplied zyBooks Chapter 7 PDF used in Lecture 7 (127 PDF pages, September 8, 2026). This is course Lecture 8, not source Chapter 8. The Chapter 7 section inventory was inspected for Lecture 7; the selected sections were read again for this package. The supplied PDF remains private. The campus wallet problem sequence, code, wording, and checks are instructor-created.

Approximately 35 minutes: goals 1 minute, Problem 1 9 minutes, Problem 2 12 minutes, Problem 3 13 minutes. Prerequisites: Lecture 7's class, object, private field, accessor, mutator, constructor, and `this` basics; Lecture 6's method parameters; integer arithmetic and conditionals. Whole-SAR starting balances and transfers are nonnegative, transfers do not exceed the source balance, and totals fit `int`. Those domain assumptions keep the focus on object semantics, not payment validation.

Mental model: an object has state; a constructor establishes it. A primitive `int` variable stores a number. A class-typed variable stores an object reference, which can be copied and shared. A wrapper such as `Integer` is itself a reference type: it can hold a value or be absent (`null`).

## Chapter 7 section disposition

| Source section | PDF pages | Lecture 8 treatment |
|---|---:|---|
| 7.1 Objects: Introduction | 1–6 | Prerequisite from Lecture 7; class/object distinction recalled, not retaught. |
| 7.2 Using a class | 6–12 | Prerequisite dot calls and `new`; retained in all programs. |
| 7.3 Defining a class | 12–21 | Prerequisite private fields and methods; retained. |
| 7.4 Mutators, accessors, private helpers | 21–26 | Existing `addMoney`/`getBalance` retained. Private helpers deferred. |
| 7.5 Initialization and constructors | 27–32 | Constructor basics recalled; extended with overloading. |
| 7.6 Choosing classes | 32–36 | Deferred multi-class design; the same wallet class keeps the problem cumulative. |
| 7.7 Constructor overloading | 36–43 | Selected: overload signatures, matching arguments, explicit no-argument constructor, and `this(...)` delegation. Complex overload resolution and ambiguous `null` calls deferred. |
| 7.8 Objects and references | 43–47 | Selected: aliasing via reference assignment and the distinction between sharing and a second `new` object. Numeric memory addresses remain illustrative only. |
| 7.9 The `this` implicit parameter | 47–54 | Selected: distinguish `this(20)` constructor call from `this.balance` field selection. Detailed implicit receiver traces deferred. |
| 7.10 Primitive and reference types | 54–61 | Selected: `int` versus class reference, `Integer` wrapper, wrapper immutability, and nullable optional reference. Wrapper identity caching and comparison traps are instructor caveats, not student tasks. |
| 7.11 Wrapper class conversions | 61–67 | Selected: autoboxing when passing `5` to `Integer`; unboxing in arithmetic; null-unboxing failure. Parsing, other wrapper families, number-system conversions deferred. |
| 7.12 ArrayList | 67–74 | Deferred to collections lecture. A future `ArrayList<Integer>` motivates wrappers but is not required here. |
| 7.13 Classes and ArrayLists | 74–83 | Deferred collection composition, input loops, and aggregation. |
| 7.14 ArrayList ADT | 83–96 | Deferred interface/list algorithms. |
| 7.15 Parameters of reference types | 96–106 | Selected: copying an object reference into a parameter; mutation of the reached object; primitive parameter copy; local parameter reassignment. Avoid the false claim that Java passes objects by reference. |
| 7.16 Static fields and methods | 106–113 | Prerequisite distinction: `main` is static, wallet fields and operations are per object. Shared static member design deferred. |
| 7.17 Using packages | 113–118 | Deferred; three examples use the unnamed package. |
| 7.18 Salary calculation with classes | 119–124 | Deferred extended case study. |
| 7.19 Domain name availability with classes | 124–127 | Deferred extended case study. |

## Problem and concept mapping

Exactly ten selected concepts, one simple definition slide each. All implementation detail and misconceptions live in the handout and refresher. The complete program is never shown in the supporting slides. Each Java comment is the exact pause point for its ID.

| Slide | Problem | Concept / teaching treatment | Source |
|---:|---|---|---|
| 1–2 | 1–3 | Literal title, route, and measurable learning goals | Lecture synthesis |
| 3 | 1 / `CampusWallet8A.java` | P1-C1 Constructor overloading: two constructors, distinct parameter lists | §7.7 pp. 36–43 |
| 4 | 1 | P1-C2 Constructor chaining: `this(20)` must be first | §7.7 pp. 39–43; §7.9 pp. 47–54 |
| 5 | 1 | P1-C3 Constructor selection: zero versus one `int` argument | §7.7 pp. 36–43 |
| 6 | 1 | IDE checkpoint: standard 20, custom 50 | Original exercise |
| 7 | 2 / `CampusWallet8B.java` | P2-C1 Aliasing: `alias = custom` shares one wallet | §7.8 pp. 43–47 |
| 8 | 2 | P2-C2 Primitive values: caller's `int` remains 10 | §7.10 pp. 54–61; §7.15 pp. 96–106 |
| 9 | 2 | P2-C3 Reference parameters: copied reference can mutate reached object | §7.15 pp. 96–106 |
| 10 | 2 | IDE checkpoint: transfer 10, two names for custom, amount unchanged | Original exercise |
| 11 | 3 / `CampusWallet8C.java` | P3-C1 Wrapper class: `Integer` reference representing `int` | §7.10 pp. 54–61 |
| 12 | 3 | P3-C2 Null reference: optional reward absent, guard before unboxing | §7.8 pp. 43–47; §7.10–7.11 pp. 54–67 |
| 13 | 3 | P3-C3 Unboxing: wrapper to primitive for addition | §7.11 pp. 61–67 |
| 14 | 3 | P3-C4 Autoboxing: `int` 5 to `Integer` parameter | §7.11 pp. 61–67 |
| 15 | 3 | IDE checkpoint: reward 5 then absent; earlier transfer retained | Original exercise |
| 16 | 1–3 | Final primitive/reference check with answer reveal | Lecture synthesis |

Handout ranges are slides 3–6, 7–10, and 11–15. Each handout page has a brief solution-free student description, one learning statement, complete syntax-colored Java, and instructor elaboration. The standalone student sheet and Copy problem controls contain the same prompts and output.

## Traces and teaching checks

Problem 1 constructs 20 and 50. The explicit no-argument constructor delegates to the `int` constructor. Remove it to show that declaring an `int` constructor suppresses Java's implicit no-argument form; restore before moving on.

Problem 2 transfers 10 from custom to standard: 50 → 40, 20 → 30. `alias` and `custom` refer to the same 40-SAR object. The caller's `amount` remains 10 even though the method sets its local `amount` parameter to 0. The local assignment is an intentional visible proof of copied primitive values; it has no domain effect. The method's `recipient` is also a copied parameter value, but its value is a reference to the standard object. Mutation through it persists. Reassigning the parameter would only alter the local reference.

Problem 3 retains the transfer and display, then sets an optional 5-SAR reward. Available balance is 30 + 5 = 35; clearing the reward returns 30. `reward == null` is checked before arithmetic. `Integer` objects are immutable: adding to a wrapper variable would select a wrapper for a new value rather than mutate the existing wrapper object. `==` between wrapper references asks about identity; `equals` compares wrapped values. The example only compares a reference with `null`, which is appropriate. Avoid `new Integer(...)`, deprecated in modern Java.

Boundary checks: starting both wallets at 0, transferring 0, and setting a reward of 0 preserves all balances; clearing reward still distinguishes absence from zero. Error-revealing check: removing the null guard and calling `getAvailableBalance` before `setReward(5)` produces a `NullPointerException`. Restore the guard. Integer overflow, negative balances, and transfer validation are outside the stated domain.

## Cross-artifact QA

Compile all three examples together and run exact outputs above. Verify code text in the handout equals the `.java` files, including final newline. Check that all ten IDs occur on slides, Java comments, handout, refresher, and this map; that the three IDE checkpoints and handout ranges align; that every student-facing description is solution-free; and that print yields exactly three legible A4 pages. The licensed source PDF, extracted text, and local paths are excluded from publication.
