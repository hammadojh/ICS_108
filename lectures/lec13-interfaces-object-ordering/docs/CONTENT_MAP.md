# Lecture 13 — Interfaces and ordering objects

## Schedule and prerequisites

Package number 13, syllabus session 14 on October 7, 2026, source Chapter 8. These numbers represent different things. Lectures 9 and 10 already cover ArrayLists, static members, reference parameters, and imports; these are prerequisites, not upcoming topics.

Source: complete 74-page zyBooks Chapter 8 export dated September 27, 2026. All text was extracted; section boundaries and representative diagrams were inspected. All problems and explanations are original teaching material.

75-minute allocation: 10 minutes recall and goals; 15 minutes Problem 1; 17 minutes Problem 2; 18 minutes Problem 3; 10 minutes independent practice; 5 minutes final check. Live-code the changes from the previous snapshot instead of retyping established code.

## Complete chapter disposition

| Section | PDF pages | Treatment |
|---|---|---|
| 8.1 Derived classes | 1–12 | Prerequisite from Lecture 11; reused without reteaching. |
| 8.2 Access by subclass members | 12–17 | Prerequisite from Lecture 11; reused without reteaching. |
| 8.3 Overriding member methods | 17–25 | Prerequisite from Lecture 11; reused without reteaching. |
| 8.4 The Object class | 25–33 | Prerequisite from Lecture 12; reused without reteaching. |
| 8.5 Polymorphism | 33–38 | Prerequisite from Lecture 12; reused without reteaching. |
| 8.6 Abstract classes: introduction | 38–42 | Prerequisite from Lecture 12; reused without reteaching. |
| 8.7 Abstract classes | 42–48 | Prerequisite from Lecture 12; reused without reteaching. |
| 8.8 UML | 48–53 | Class/member notation in Lecture 11; abstract notation in Lecture 12; interface realization in Lecture 13. |
| 8.9 Is-a versus has-a | 53–57 | Prerequisite from Lecture 11; reused without reteaching. |
| 8.10 Interfaces | 57–62 | Selected; concepts and practice mapped below. |
| 8.11 Comparable and sorting | 62–71 | Selected; concepts and practice mapped below. |
| 8.12 Employee overriding example | 71–73 | Practice reinforcement for Lecture 12; original campus examples replace publisher exercises. |
| 8.13 Employee abstract-class example | 73–74 | Practice reinforcement for Lecture 12; original campus examples replace publisher exercises. |

## Concept mapping

Every row maps to the same ID in the Java teaching comment, slide header, handout, and refresher. Each problem ends with one IDE checkpoint after its concept slides.

| ID | Problem | Slide | Concept | Source |
|---|---|---|---|---|
| P1-C1 | 1 | 3 | Interfaces | 8.10, pp. 57–62 |
| P1-C2 | 1 | 4 | Implementing an interface | 8.10, pp. 57–61 |
| P1-C3 | 1 | 5 | Interface references | 8.10, pp. 57–62; application of 8.5 |
| P1-C4 | 1 | 6 | Abstract classes and interfaces | 8.10, pp. 58–61 |
| P2-C1 | 2 | 8 | The Comparable interface | 8.11, pp. 64–70 |
| P2-C2 | 2 | 9 | The compareTo result | 8.11, pp. 64–67 |
| P2-C3 | 2 | 10 | A consistent ordering rule | 8.11, pp. 64–70 |
| P3-C1 | 3 | 12 | Library sorting | 8.11, pp. 62–70 |
| P3-C2 | 3 | 13 | Sorting changes list order | 8.11, pp. 62–70 |
| P3-C3 | 3 | 14 | Ordering and polymorphism | 8.5 and 8.11; 8.10 interface UML pp. 59–61 |

## Traces, continuity, and practice

### Problem 1

The Employee hierarchy and report are retained. payment receives each object through Payable: Omar yields 50 and Nora 30. No object is copied or converted to a different runtime class.

Practice: Try to call getName through Payable. Explain the compile-time restriction and restore the bonus-only routine.

### Problem 2

The original report remains in insertion order. The comparison uses Omar against Nora; its result is positive, so the added line is true. No sorting has happened yet.

Practice: Compare Nora with Omar, then Nora with Nora. Check for a negative result and zero without assuming a particular negative magnitude.

### Problem 3

Original output: Omar 50, Nora 30, comparison true. Sorted output: Nora 30, Omar 50. The report implementation, payment interface, abstract hierarchy, and comparison rule are all retained.

Practice: Try an empty list, a one-entry list, and two distinct records with the same name. Check size, bonuses, and tie order after sorting.

## Teaching additions and deferred depth

The campus employee data, whole-SAR bonus rules, single-file snapshots, constructor sequence, and original UML summaries are instructor additions. No actual payroll rules are implied. Each snapshot has one public driver plus package-private top-level types; compile snapshots separately.

Object.equals default identity is explained in the Lecture 12 refresher; custom equals/hashCode, clone, downcasting, instanceof, field hiding, final/sealed types, detailed cross-package protected cases, interface default-method conflicts, raw Comparable, custom generic types, comparators, locale-aware name ordering, and sorting algorithms are deferred. The supplied chapter’s deprecated wrapper constructor is not reused. UML behavior diagrams and publisher interactive exercises are outside scope. Full examples remain in the handout, while slides define one concept at a time.

Technical details were checked against Oracle Java SE 25 documentation linked in the refresher. Code is compiled with --release 17 and executed on the installed JDK.
