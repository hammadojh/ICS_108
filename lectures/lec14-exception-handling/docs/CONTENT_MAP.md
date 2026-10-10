# Lecture 14 content map

Package 14: Exception handling. Source: supplied zyBooks Chapter 9, 82 pages, exported October 10, 2026. The licensed source remains outside the public package.

## Course placement

The syllabus schedules session 15 (October 12) for Problem Solving, October 14 for No Class / Midterm, and session 16 (October 19) for Exceptions. This source-based package targets the October 19 topic; it does not claim to replace the October 12 review session. Package numbers differ from syllabus session numbers because earlier topics were combined.

Lecture 13 already teaches interfaces, Comparable, and library sorting. Those concepts are prerequisites in the course sequence, not new objectives here. This lecture uses a smaller booking program so exception control flow remains visible; it does not claim to extend CampusPayroll.

## Teaching sequence and timing

40-minute core: 3 minutes recall of Scanner/loops/method calls; Problem 1 9 minutes; Problem 2 10 minutes; Problem 3 15 minutes; final check 3 minutes. Slides are definitions used alongside the IDE, not an additional timed lecture. For a 75-minute class, use the remaining 35 minutes for independent input cases, peer traces, and compilation-error repair from the refresher. Exactly three cumulative program snapshots are provided.

Problem 2 retains the success report, mismatch message, and final message while adding retries. Problem 3 retains those behaviors and adds a 1–4 constraint in a reusable method. A well-formed but invalid integer is now rejected intentionally. Each token is one attempt; no prompt text is printed, so expected output is deterministic.

## Source coverage

| Source section | PDF pages | Treatment |
|---|---|---|
| 9.1 Handling exceptions | 1–11 | Selected: interruption, try/catch, retry, input cleanup; Problems 1–2. Full catalogue of exceptions deferred. |
| 9.2 Throwing exceptions | 11–24 | Selected: throw, message, multiple handlers; Problem 3. NaN, density and BMI examples deferred. |
| 9.3 Exceptions with methods | 24–36 | Selected: propagation, throws, checked versus unchecked; Problem 3. File-based examples deferred. |
| 9.4 User-defined exceptions | 36–46 | Broad-handler limitation noted; new exception subclass design deferred to follow-on practice. |
| 9.5 File input | 46–56 | Deferred to syllabus session 17, October 26: streams, Scanner, file paths and end of input. |
| 9.6 File output | 56–64 | Deferred with files: output streams, PrintWriter and closing. |
| 9.7 Exceptions with files | 64–79 | Deferred with files: FileNotFoundException, try-with-resources and finally. |
| 9.8 Java example: Generate number format exception | 79–82 | Deferred: parsing record fields and NumberFormatException. |

The full export includes repeated animation transcripts, activities, and instructor solutions. These were used as source evidence only; no publisher exercises or figures are republished. The campus booking problems, prose, traces and code are original teaching material.

## Concept mapping

| ID | Concept | Source | Slide | Teaching treatment |
|---|---|---|---|---|
| P1-C1 | Input exceptions | 9.1, pp. 1–3 | 3 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P1-C2 | The try block | 9.1, pp. 3–6 | 4 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P1-C3 | The catch block | 9.1, pp. 3–6 | 5 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P2-C1 | Retrying an operation | 9.1, pp. 6–9 | 7 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P2-C2 | Discarding invalid input | 9.1, pp. 6–9 | 8 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P2-C3 | End of input | Teaching addition; Scanner loop application | 9 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P3-C1 | Throwing an exception | 9.2, pp. 11–16 | 11 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P3-C2 | Declaring checked exceptions | 9.3, pp. 24–31 | 12 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P3-C3 | Exception propagation | 9.3, pp. 25–27 | 13 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |
| P3-C4 | Multiple handlers | 9.2, pp. 16–23; 9.4, p. 36 limitation | 14 | Definition + minimal example; inline Java comment; handout explanation, common mistake, trace; refresher rule and check. |

## Teaching additions and precision

- CampusBooking uses next() cleanup to preserve later tokens on the same line; the chapter also demonstrates nextLine(). The input contract makes this choice explicit.
- hasNext() is introduced as a small end-of-input guard, including its possible wait on interactive input. It is not hasNextInt().
- Range boundaries, empty input, integer overflow input, and two distinct error paths are checked explicitly.
- Exception is used here to match the chapter's initial checked-exception treatment. Its broad handler can catch unintended Exception subclasses; a domain-specific checked type is the deferred improvement. Exception does not catch Error subclasses.
- Checked versus unchecked describes compiler obligations, not whether an exception can be caught or whether it occurs at runtime.
- No claim that every divide-by-zero operation throws: floating-point division follows different rules. No blanket claim that every Java failure is an Exception.

## Readiness gate

Learners can trace variables, boolean loop conditions and static calls. Before files, they should distinguish a malformed token from a range error, explain why next() belongs only in the mismatch handler, and distinguish throw from throws. Keep custom exception classes and resource cleanup for later rather than rushing them into this core.

## Generalization examples

Each of the ten concept slides now pairs the booking anchor with an original short example from another context. The same concept ID and slide number are retained. The refresher includes the matching snippet, result, a changed-input or changed-code prediction, and an expandable answer. These are illustrations, not additional cumulative problems or Java deliverables.

Contexts: quiz input, array lookup, integer division, sensor retry, temperature-token cleanup, stream exhaustion, quiz validation, a checked validation method, caller propagation, and handler selection. New exception names are explained at their point of use. Array indexing and integer division are familiar operations used to show that exception flow applies beyond Scanner. The cross-context examples are instructor additions grounded in the same exception rules from 9.1–9.3.

Allow approximately 5–8 extra discussion minutes if every comparison is used live; the original three-problem core remains intact. Select comparisons during class and use the prediction questions for independent study.
