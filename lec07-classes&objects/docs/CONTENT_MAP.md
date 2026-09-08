# Lecture 7 — Classes and objects

## Source and scope

Authoring source: the user-supplied `zyBooks.pdf`, a 127-page export of zyBooks Chapter 7, dated September 8, 2026. Course lecture and source chapter numbers both equal 7. The complete text of all 127 pages was inspected and every section is mapped below. The PDF, extracted text, and rendered source pages remain private. All wallet examples, explanations, questions, and traces in the published package are instructor-created.

The foundation takes approximately 30 minutes: opening and goals 2 min, Problem 1 8 min, Problem 2 8 min, Problem 3 10 min, final check 2 min. Prerequisites are the familiar Java class/main skeleton, int variables, assignment, arithmetic, println, method definitions and calls, parameters, and return values. No keyboard input is needed. Whole-SAR balances and additions are nonnegative, and totals must fit int. Validation, persistence, and payment processing are outside the exercise.

## Learning goals and mental model

Distinguish a class, an object, and a reference variable; locate and access an instance field; explain why a class hides fields behind public operations; distinguish mutators from accessors; initialize objects through a constructor; use this to distinguish a field from a parameter; explain why separate objects have separate instance fields.

Class definition → new object and constructor → reference variable → selected object's members and state. A class defines the kind of object. A reference refers to an object. The object contains the instance fields. An instance method reads or changes the receiving object's state.

The three problems extend one campus-wallet program. The first stores and displays 20 SAR. The second adds a top-up operation and displays the balance before and after adding 10 SAR. The third allows different starting balances and demonstrates two separate wallets. The numbered class names allow all three complete versions to compile together; the lesson does not introduce inheritance.

## Complete chapter treatment

Page boundaries overlap when the next section starts mid-page.

| Source section | PDF pages | Selected treatment and deferred depth |
|---|---:|---|
| 7.1 Objects: Introduction | 1–6 | Selected: objects group related data and operations; basic information hiding and encapsulation. ADT terminology, physical-object metaphors, and large design discussions deferred. |
| 7.2 Using a class | 6–12 | Selected: class defines a type, new creates an object, a reference variable refers to it, member access with a dot, public instance methods, and multiple objects. String API examples and object-memory-size questions deferred. |
| 7.3 Defining a class | 12–21 | Selected: class-level fields, members, public/private access, method implementation, and receiver-specific data. The source's two-file examples are replaced by one complete public class per problem. Multiple-file design and RunnerInfo calculation deferred. |
| 7.4 Mutators, accessors, and private helpers | 21–26 | Selected: mutators change state, accessors read state, a getter returns data, method names do not enforce those categories. addMoney is a mutator but is not a setter. Private helper methods deferred. |
| 7.5 Initialization and constructors | 27–32 | Selected: P2 field initializer, P1/P2 implicit default no-argument constructor, P3 constructor syntax, constructor invocation during new, default int field value 0. Multiple-field defaults and larger initialization examples deferred. |
| 7.6 Choosing classes to create | 32–36 | Deferred: choosing several collaborating classes, class sketches, Team/Person composition, and testing those designs. The selected wallet is deliberately a single class. |
| 7.7 Constructor overloading | 36–43 | Select the prerequisite idea that new can pass arguments to a constructor, and the rule that declaring any constructor removes the implicit no-argument constructor. P3 has one constructor requiring int. Multiple overloads, overload selection, and providing both no-argument and argument-taking constructors deferred. |
| 7.8 Objects and references | 43–47 | Selected: reference/object distinction, declaration versus creation, object references produced by new, and two separate objects. Aliasing is a brief refresher caveat supporting independence: assignment copies a reference, not an object. Numeric address traces and an extended aliasing lesson deferred. |
| 7.9 The 'this' implicit parameter | 47–54 | Selected: this refers to the current object; this.balance distinguishes the instance field from a same-named constructor parameter; optional qualification when names do not collide. Compiler call transformations, address diagrams, and this(...) constructor chaining deferred. |
| 7.10 Primitive and reference types | 54–61 | Select only the opening distinction: int holds an integer value directly, while a class variable holds a reference. Wrapper classes, immutability, caching, wrapper comparisons, equals, and compareTo deferred. |
| 7.11 Wrapper class conversions | 61–67 | Deferred: autoboxing, unboxing, primitive conversion methods, parsing, and string/number-system conversion APIs. |
| 7.12 ArrayList | 67–74 | Deferred: generic element types, imports, list construction, add/get/set/size, index checks, traversal, and the collections overview. |
| 7.13 Classes and ArrayLists | 74–83 | Deferred: collections of objects, list-containing classes, Review/Reviews/Restaurant composition, input loops, filtering, and aggregate calculations. |
| 7.14 ArrayList ADT | 83–96 | Deferred: interfaces, List implementations, expanded ArrayList API, resizing, removals, sorted insertion, and jersey-number management. |
| 7.15 Parameters of reference types | 96–106 | Deferred: copying references into parameters, object mutation through reference parameters, reassignment of a parameter, wrapper parameter cases, and returning references. The lecture does not claim Java passes objects by reference. |
| 7.16 Static fields and methods | 106–113 | Select terminology for non-static instance fields and the minimal contrast required to prevent accidentally shared wallet balances. Refresher clarifies static main has no this but can use an explicit object reference. Static member designs, shared IDs, counters, and static accessors deferred. |
| 7.17 Using packages | 113–118 | Deferred: standard packages, imports, wildcards, fully qualified names, and custom package structure. All three files remain in the same unnamed package. |
| 7.18 Java example: Salary calculation with classes | 119–124 | Deferred extended example: multiple classes, tables, loops, mutator-based configuration, and constructor overloading. |
| 7.19 Java example: Domain name availability with classes | 124–127 | Deferred extended example: domain validation, availability lookup, alternative suggestions, multiple classes, and repeated input. |

## Three problems and slide mapping

Exactly eleven new concepts have one concept slide each. Additional concept depth appears in the instructor handout and expandable refresher. Supporting slides primarily define the named concept in one short statement, with at most a small clarifying syntax example. Full solutions remain in the handout and Java files.

| Slide | Problem / file | Concept and complete instructor treatment | Source |
|---:|---|---|---|
| 1–2 | Problems 1–3 | Literal title, learning goals, and the three wallet extensions | Lecture synthesis |
| 3 | 1 / CampusWallet1.java | P1-C1: Classes define types. Identify class/type versus instance; group field and methods; match file and public class names. | 7.1–7.3, pp. 1–15 |
| 4 | 1 / CampusWallet1.java | P1-C2: Instance fields store object data. Declare balance at class level outside main; distinguish a field from a local; non-static means per-object storage. | 7.3, pp. 12–15; 7.5, pp. 27–30; 7.16, p. 107 |
| 5 | 1 / CampusWallet1.java | P1-C3: Objects are class instances. new creates one object and invokes a constructor; P1 relies on the implicit no-argument constructor. Declaration alone does not create an object. | 7.2, pp. 8–10; 7.5, pp. 28–30; 7.8, pp. 43–45 |
| 6 | 1 / CampusWallet1.java | P1-C4: Reference variables refer to objects. Separate the reference variable from the object's balance; contrast the reference value with primitive int data. | 7.2, pp. 8–10; 7.8, pp. 43–47; 7.10, p. 54 |
| 7 | 1 / CampusWallet1.java | P1-C5: The dot operator accesses members. wallet.balance selects the field of the referred-to object; use assignment to write and an expression to read it. | 7.2–7.3, pp. 8–15 |
| 8 | 1 / CampusWallet1.java | Switch to the IDE; no input; output Balance: 20 SAR. Check that one object is created. | Instructor problem |
| 9 | 2 / CampusWallet2.java | P2-C1: Encapsulation hides internal data. private field, public operations, and the 20 initializer; distinguish class access control from input validation. | 7.1, pp. 4–6; 7.3–7.5, pp. 12–28 |
| 10 | 2 / CampusWallet2.java | P2-C2: Mutators change object state. addMoney receives amount, updates the receiving object's field, and returns no value; field remains changed after the call. | 7.3–7.4, pp. 14–23 |
| 11 | 2 / CampusWallet2.java | P2-C3: Accessors read object state. getBalance returns an int without changing the field; main handles printing. Getter naming is a convention, not compiler enforcement. | 7.4, pp. 21–23 |
| 12 | 2 / CampusWallet2.java | Switch to the IDE; no input; read 20, add 10, read 30. Distinguish the accessor and mutator. | Instructor extension |
| 13 | 3 / CampusWallet3.java | P3-C1: Constructors initialize new objects. Class-matching name, no return type, an int parameter, and constructor invocation by new; declaring it removes the implicit no-argument constructor. | 7.5, pp. 27–30; 7.7, pp. 36–40 |
| 14 | 3 / CampusWallet3.java | P3-C2: this refers to the current object. Trace field on the left and parameter on the right; demonstrate why balance = balance leaves the field at 0. | 7.9, pp. 47–53; 7.16, pp. 110–112 |
| 15 | 3 / CampusWallet3.java | P3-C3: Objects have separate instance fields. Two new expressions initialize 20 and 50; adding 10 to first gives 30 and leaves second at 50. Clarify the aliasing alternative in instructor elaboration only. | 7.2, pp. 8–10; 7.8, pp. 43–47; 7.16, p. 107 |
| 16 | 3 / CampusWallet3.java | Switch to the IDE; no input; output First: 30 SAR and Second: 50 SAR. Check the unchanged second balance. | Instructor extension |
| 17 | Problems 1–3 | Final brief check covering the established class/object/state distinctions | Lecture synthesis |

Handout ranges are slides 3–8, 9–12, and 13–16. Every Pn-Cn appears in the relevant slide header, an inline comment at the corresponding Java line, the handout concept list and elaboration, and a refresher concept. The IDE checkpoints link back to the live programming work. Slide 17 provides a brief answer reveal. No interaction quota is imposed: the user requested simple definitions, and the main student activity is solving the three extensions in the IDE.

## Student-facing problem descriptions

Prompts are short statements of required behavior, supplied values, and exact output. They do not name the field, required helper methods, access modifiers, constructor design, or the steps of a solution. “What new concepts does it have?”, solution code, and instructor elaboration are separate sections. Students can receive the statement and output without the solution.

1. **Problem 1 — Display a wallet balance.** A student has 20 SAR in a campus wallet. Write a program that stores this balance and displays it as shown. No keyboard input is required. Output: `Balance: 20 SAR`.
2. **Problem 2 — Add money to the wallet.** Extend Problem 1 so the student can add 10 SAR to the wallet's 20 SAR balance. Display the balance before and after the addition. No keyboard input is required. Output: `Before: 20 SAR`, then `After: 30 SAR`.
3. **Problem 3 — Use two wallets.** Extend Problem 2 for two students whose wallets start at 20 SAR and 50 SAR. Add 10 SAR to the first wallet, then display both balances. The second balance must stay unchanged. No keyboard input is required. Output: `First: 30 SAR`, then `Second: 50 SAR`.

## Instructor implementation, checks, and recovery

### Problem 1 — CampusWallet1.java

One public class has public instance field `int balance`. Static main creates one object with `new CampusWallet1()`, stores its reference in `wallet`, assigns `wallet.balance = 20`, and prints the field. The default field value before that explicit assignment is 0. Default construction is explained minimally here and developed explicitly in P3.

Checks: the documented run prints `Balance: 20 SAR`; replacing the assignment value with 0 prints `Balance: 0 SAR`. Removing the assignment leaves the field at 0 and reveals a missed requirement. Declaring only `CampusWallet1 wallet;` and then using it fails to compile because the local variable has not been assigned. Assigning null and using its instance field produces a NullPointerException. Calling `wallet.balance()` incorrectly treats a field as a method. Keep those errors in instructor depth; do not turn the slide into a diagnosis panel.

### Problem 2 — CampusWallet2.java

Rename the previous class and file for a separate runnable version. Change balance to `private int balance = 20;`. Add instance mutator `public void addMoney(int amount)` with `balance = balance + amount;`, and accessor `public int getBalance()` with `return balance;`. Main creates one wallet, prints `Before: 20 SAR`, calls `wallet.addMoney(10)`, and prints `After: 30 SAR`.

Checks: repeated getter calls do not change the balance; addMoney(0) leaves 20; addMoney(10) twice changes 20 → 30 → 40. Incorrect `balance = amount` produces 10 instead of 30 after adding 10. Private does not enforce nonnegative amounts: addMoney(-10) would subtract 10, but negative-amount behavior is outside the stated problem domain.

Privacy precision: because main is defined inside CampusWallet2, direct private-field access through wallet is legal there. The solution deliberately uses public operations. To demonstrate a compiler access error, use a separate unrelated scratch caller; never claim private prevents this class's own main from accessing its field. Input validation and public/private accessibility are different concerns.

### Problem 3 — CampusWallet3.java

Keep the private balance field and both methods from P2. Remove the fixed field initializer. Add `public CampusWallet3(int balance)` with `this.balance = balance;`. Create `first` with 20 and `second` with 50, then call `first.addMoney(10)`. The two accessor calls print `First: 30 SAR` and `Second: 50 SAR`.

Checks: constructing wallets with 0 and 50, then adding 0 to first, gives 0 and 50; repeating a 10 top-up on first gives 40 and 50; adding 10 to second after the documented run gives 30 and 60. `balance = balance;` compiles but leaves both fields at 0, producing `First: 10 SAR` and `Second: 0 SAR` after the top-up. Adding void to the constructor declaration turns it into an ordinary method; the argument-taking new expressions then fail to compile. `new CampusWallet3()` also fails: once a constructor is declared, there is no implicit default constructor.

Independence caveat: replacing the second new expression with `CampusWallet3 second = first;` creates one object with two reference variables, so both accessors report 30 after the top-up. This aliasing distinction explains why separate new expressions matter. It is an instructor elaboration, not a twelfth selected concept. Do not make balance static to repair a static-context error; that changes the intended per-object data into shared class data.

Recovery for every deliberate error: restore the intended line, rebuild, and rerun exactly the same values. Compiler text may differ between Java versions and IDEs; teach the cause rather than promising an exact diagnostic.

## Teaching additions and source interpretation

- The single campus-wallet exercise and the sequence of three complete versions are original teaching additions. Public field access in P1 is a deliberate temporary simplification. P2 then gives the data the private visibility recommended by the chapter.
- Each problem has one public class in its matching file. Main lives in that same class and creates instances of its own class; a separate driver class is not required by Java or by the selected concepts.
- The chapter's p. 7 animation transcript contains C++ artifacts, including declarations without new and capitalized member names. The lecture follows the Java prose and Java examples: a reference declaration alone does not create an object; new is required here. No C++ syntax is carried forward.
- The constructor discussion initially uses the phrase “member method” but also explicitly states that a constructor is not considered a method (p. 28). The package consistently calls it a constructor, explains that it has no return type, and distinguishes it from an ordinary method.
- The p. 39 recommendation to also provide a no-argument constructor is conditional on wanting no-argument creation. P3 intentionally requires a starting balance, so only the int constructor is provided. Overloading is deferred, but its prerequisite argument-passing and default-constructor rules are taught.
- Source memory addresses are illustrations, not observable Java reference values. The package uses a reference/object distinction without literal memory-address arithmetic or stack-layout claims.
- The source's introductory statements about static members are broader than its later qualifications. The package uses the precise rules relevant here: a static field belongs to the class; private still restricts access; static main has no this but can access an instance through an explicit object reference. It does not teach that every static member is globally accessible or that static methods can never operate on objects.
- The wrapper-allocation and collection details in later sections are deferred. They are not generalized to the mutable wallet objects, and this lecture does not introduce wrapper identity or collection removal semantics.
- The previous methods lecture used a primitive-copy preview. This lecture's addMoney writes an instance field, so the object's changed state remains after the call. The parameter amount still receives an int value; the exercise does not imply pass-by-reference parameter semantics.
- Supporting slides use literal concept definitions, not dense traces, implementation recipes, or full solution listings. Elaborations carry the execution details. The handout's solution workbenches use Java syntax colors while preserving readable plain text and exact copy behavior.

## Cross-artifact QA responsibilities

Require exactly three runnable Java files and three handout pages. Compile all three together and run every documented normal and boundary check. Require each copied complete program to match its Java file exactly. Compare exact console text across handout, checkpoint slides, refresher, student statements, and this map.

Require one slide per selected concept ID, contiguous problem ranges, three IDE checkpoints, and a brief final check. Verify all interactive checks and slide navigation at both accepted desktop sizes. Preserve the accepted lec06 visual shells, including the refresher's tokens, layout, and native details behavior. The inherited skip link is explicitly hidden during printing.

For the refresher, verify eleven always-visible abstracts and key rules, keyboard disclosure, open-all/close-all status, hash opening, printing with all details expanded and restored afterward, and no page overflow at 390px with every detail open. Publisher source files, extracted text, source screenshots, and local absolute paths must not enter the public release.
