# ICS 108 accepted visual system

The visual shell is course identity, not chapter decoration. Chapter content changes; these three artifact identities do not. Reference assets contain historical teaching content: reuse their shell and controls, while applying the current concise, cumulative problem and definition-slide contract.

## 1. Slides: black technical lecture

The reference files in `assets/reference-package/slides/` are the source of truth.

- Stage: black outer canvas and `#090909` slide background.
- Surfaces: flat `#111111` and `#171717`; lines `#30302e`.
- Type: `Helvetica Neue`, Helvetica, Arial, sans-serif; SFMono/Consolas/Liberation Mono for code.
- Color: warm white `#f4f4f2`, muted `#a6a6a1`, restrained blue `#8ec5ff`, green `#9bd3ad`, red `#e9a0a0`.
- Character: large type, negative space, hairline structure, flat diagrams, precise controls, 180 ms transitions.
- Copy style: plain English, a literal term heading and one short definition per concept slide, at most one minimal example, and a visible problem/program label in every header. Keep the definition legible at a glance.
- Prohibited framing: slogans, hooks, cinematic framing, stories, narratives, metaphors, movie language, and promotional language. Also prohibit gradients, background grids/textures, chapter-color palettes, Avenir display type, giant chapter numerals, ornamental illustration, rounded card systems, and decorative badges.

Copy the shell first. Add chapter-specific component selectors after it and resolve their colors through the accepted tokens.

## 2. IDE walkthroughs: blue working handout

The reference handout in `assets/reference-package/instructor/walkthroughs.html` is the source of truth.

- Canvas/paper: neutral gray `#e5e8eb` around white pages with a restrained shadow.
- Type: system sans for headings and prose; SFMono/Consolas/Liberation Mono for code.
- Core colors: ink `#15181b`, muted `#596169`, line `#c8d0d7`, blue `#1769aa`, blue-dark `#0d4d7f`, soft blue `#eef5fb`, warm note `#f7f4ed`, danger `#a13b35`, success `#226b42`.
- Character: practical, spacious, easy to scan while teaching. Blue section rules, a visible learning outcome, pale cue regions, light code workbenches, and a dark console.
- Structure: the accepted course header, lecture outcomes, and exactly three problem pages using description, new concepts, complete code, and elaborated instructor reference.
- Prohibited: serif display headings, tan/orange chapter palettes, dark code everywhere, newspaper styling, and compressed label sizes that are hard to read while standing.

Keep any optional Starter/Complete switch and the Copy code control visually subordinate to the code. Give each description a separate Copy problem control. Use syntax colors with at least 4.5:1 contrast against `#f6f8fa`: accepted dark blue (`#0d4d7f`) for keywords, green (`#226b42`) for strings, muted ink (`#596169`) for comments, and red (`#a13b35`) for numbers. Keep punctuation and uncolored code in the normal ink. Use inline or bundled styles so highlighting remains visible offline; syntax markup must not alter copied text. Printing hides controls and optional starter code, shows complete code, and preserves one problem-led module per page where feasible.

## 3. Concept refresher: blue editorial reading document

The reference refresher in `assets/reference-package/instructor/concept-refresher.html` is the source of truth.

- Palette: blue-gray ink, canvas, and rules; navy masthead/code; light-blue focus and concept accents; a warm neutral for teaching language.
- Type: Avenir/system sans for navigation and metadata; Iowan/Palatino/Georgia serif for editorial headings and explanatory prose.
- Character: calm long-form reading, dark masthead, compact concept map, blue concept numbering, pale-blue key rules, ruled native details, and a readable 68ch measure.
- Prohibited: topic-derived green/orange palettes, promotional landing-page treatments, cards replacing the reading flow, or hidden abstracts that require expansion.

## 4. Normalization rule

When a new chapter already exists in another style, preserve useful code, accessibility, and interactions, but apply the current package contract for teaching structure and labels. Normalize the visual shell using the accepted tokens, type stacks, canvas/paper, spacing rhythm, control styling, code treatment, and decorative effects. Verify the result beside representative reference screens before delivery.
