#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const target = path.resolve(process.argv[2] || ".");
const required = [
  "README.md",
  "student-problems.md",
  "slides/index.html",
  "slides/styles.css",
  "slides/script.js",
  "instructor/walkthroughs.html",
  "instructor/concept-refresher.html",
  "examples/README.md",
  "docs/CONTENT_MAP.md",
  "private-source/README.md",
];

const failures = [];
const report = { target, files: {}, counts: {} };

function read(relativePath) {
  const absolutePath = path.join(target, relativePath);
  if (!fs.existsSync(absolutePath)) {
    failures.push(`Missing required file: ${relativePath}`);
    return "";
  }
  const text = fs.readFileSync(absolutePath, "utf8");
  report.files[relativePath] = text.length;
  return text;
}

function count(text, pattern) {
  return [...text.matchAll(pattern)].length;
}

function decodeHtml(text) {
  const entities = { lt: "<", gt: ">", quot: '"', apos: "'", amp: "&", nbsp: "\u00a0" };
  return text.replace(/&(#x[\da-f]+|#\d+|lt|gt|quot|apos|amp|nbsp);/gi, (entity, name) => {
    if (name.startsWith("#")) {
      const isHex = name[1].toLowerCase() === "x";
      const codePoint = Number.parseInt(name.slice(isHex ? 2 : 1), isHex ? 16 : 10);
      return codePoint <= 0x10ffff ? String.fromCodePoint(codePoint) : entity;
    }
    return entities[name.toLowerCase()];
  });
}

function codeText(markup) {
  // Remove real HTML tags before decoding Java's escaped < and > characters.
  // Do not trim: clipboard content must preserve the exact source whitespace.
  return decodeHtml(markup.replace(/<[^>]*>/g, "")).replaceAll("\r\n", "\n");
}

function conceptIds(text) {
  return new Set([...text.matchAll(/\bP[1-3]-C\d+\b/g)].map((match) => match[0]));
}

function setDifference(left, right) {
  return [...left].filter((value) => !right.has(value));
}

function slideBlocks(text) {
  const starts = [...text.matchAll(/<section\b[^>]*class=["'][^"']*\bslide\b[^"']*["'][^>]*>/gi)];
  return starts.map((match, index) => text.slice(match.index, starts[index + 1]?.index ?? text.length));
}

function isIdeCheckpoint(block) {
  return [...block.matchAll(/<h[12]\b[^>]*>([\s\S]*?)<\/h[12]>/gi)]
    .some((match) => /\bSwitch to the IDE\b/i.test(codeText(match[1])));
}

function handoutPageBlocks(text) {
  const starts = [...text.matchAll(/<article\b[^>]*class=["'][^"']*\bpage\b[^"']*["'][^>]*>/gi)];
  return starts.map((match, index) => text.slice(match.index, starts[index + 1]?.index ?? text.length));
}

function duplicateIds(label, text) {
  const ids = [...text.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const duplicates = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicates.length) failures.push(`${label} duplicate IDs: ${duplicates.join(", ")}`);
}

function checkLocalLinks(label, relativePath, text) {
  const baseDir = path.dirname(path.join(target, relativePath));
  const links = [...text.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);
  for (const link of links) {
    if (/^(?:https?:|data:|mailto:|tel:|#)/.test(link)) continue;
    const clean = decodeURIComponent(link.split("#")[0].split("?")[0]);
    if (!clean) continue;
    const resolved = path.resolve(baseDir, clean);
    if (!fs.existsSync(resolved)) failures.push(`${label} broken local link: ${link}`);
  }
}

for (const file of required) read(file);

const slides = read("slides/index.html");
const slideStyles = read("slides/styles.css");
const script = read("slides/script.js");
const handout = read("instructor/walkthroughs.html");
const refresher = read("instructor/concept-refresher.html");
const contentMap = read("docs/CONTENT_MAP.md");
const studentProblems = read("student-problems.md");
const pages = handoutPageBlocks(handout);

report.counts.slides = count(slides, /<section\b[^>]*class=["'][^"']*\bslide\b/gi);
report.counts.partStarts = count(slides, /\bpart-start\b/g);
report.counts.slideBreadcrumbs = count(slides, /class=["'][^"']*\bbreadcrumb\b[^"']*["']/gi);
report.counts.ideCheckpoints = slideBlocks(slides).filter(isIdeCheckpoint).length;
report.counts.reveals = count(slides, /\bdata-step=/g);
report.counts.handoutModules = count(handout, /<article\b[^>]*class=["'][^"']*\bpage\b/gi);
report.counts.learningStatements = count(handout, /Students will learn/gi);
report.counts.problemDescriptions = count(handout, /<h3\b[^>]*>\s*Problem description\s*<\/h3>/gi);
report.counts.newConceptSections = count(handout, /<h3\b[^>]*>\s*What new concepts does it have\?\s*<\/h3>/gi);
report.counts.completeCodeSections = count(handout, /<h3\b[^>]*>\s*Complete code\s*<\/h3>/gi);
report.counts.elaboratedReferences = count(handout, /<h3\b[^>]*>\s*Elaborated concepts for instructor reference\s*<\/h3>/gi);
report.counts.codeWorkbenches = count(handout, /<div\b[^>]*data-code-workbench\b/gi);
report.counts.starterCodeBlocks = count(handout, /<pre\b[^>]*data-code-version=["']starter["']/gi);
report.counts.completeCodeBlocks = count(handout, /<pre\b[^>]*data-code-version=["']complete["']/gi);
report.counts.copyCodeButtons = count(handout, /<button\b[^>]*data-copy-code\b/gi);
report.counts.copyProblemButtons = count(handout, /<button\b[^>]*data-copy-problem(?:\s|=|>)/gi);
report.counts.refresherConcepts = count(refresher, /<section\b[^>]*class=["'][^"']*\bconcept\b/gi);
report.counts.refresherDetails = count(refresher, /<details\b/gi);

if (!report.counts.slides) failures.push("Supporting slides contain no slide sections");
if (report.counts.partStarts !== 3) failures.push(`Expected exactly 3 problem part starts, found ${report.counts.partStarts}`);
if (report.counts.slideBreadcrumbs !== report.counts.slides) {
  failures.push(`Slide breadcrumbs (${report.counts.slideBreadcrumbs}) do not match slides (${report.counts.slides})`);
}
if (report.counts.ideCheckpoints !== 3) failures.push(`Expected exactly 3 IDE checkpoints, found ${report.counts.ideCheckpoints}`);
if (report.counts.handoutModules !== 3) failures.push(`Expected exactly 3 handout problems, found ${report.counts.handoutModules}`);
if (report.counts.learningStatements !== report.counts.handoutModules) {
  failures.push(`Handout learning statements (${report.counts.learningStatements}) do not match modules (${report.counts.handoutModules})`);
}
for (const [label, value] of [
  ["Problem description sections", report.counts.problemDescriptions],
  ["What new concepts sections", report.counts.newConceptSections],
  ["Complete code sections", report.counts.completeCodeSections],
  ["Elaborated instructor references", report.counts.elaboratedReferences],
]) {
  if (value !== 3) failures.push(`Expected exactly 3 ${label}, found ${value}`);
}
if (!/<h2\b[^>]*>\s*What will students learn in this lecture\?\s*<\/h2>/i.test(handout)) {
  failures.push("Handout must put lecture-level learning goals below the first header");
}
if (count(handout, /<h1\b[^>]*>\s*Problem-solving walkthroughs\s*<\/h1>/gi) !== 3) {
  failures.push("All 3 handout pages must repeat the accepted Problem-solving walkthroughs header");
}
const firstPage = pages[0] ?? "";
const firstHeaderEnd = firstPage.search(/<\/header>/i);
const lectureGoalsStart = firstPage.search(/<h2\b[^>]*>\s*What will students learn in this lecture\?\s*<\/h2>/i);
const firstProblemStart = firstPage.search(/<section\b[^>]*class=["'][^"']*\bproblem-module\b/i);
if (
  firstHeaderEnd === -1
  || lectureGoalsStart === -1
  || firstProblemStart === -1
  || !(firstHeaderEnd < lectureGoalsStart && lectureGoalsStart < firstProblemStart)
) {
  failures.push("Lecture-level learning goals must follow the first accepted header and precede Problem 1");
}
for (const [index, page] of pages.entries()) {
  const problemNumber = index + 1;
  const openingTag = page.match(/^<article\b[^>]*>/i)?.[0] ?? "";
  if (!new RegExp(`\\bid=["']problem-${problemNumber}["']`, "i").test(openingTag)) {
    failures.push(`Handout page ${problemNumber} must use id=\"problem-${problemNumber}\"`);
  }
  const requiredSections = [
    ["Problem description", /<h3\b[^>]*>\s*Problem description\s*<\/h3>/i],
    ["What new concepts does it have?", /<h3\b[^>]*>\s*What new concepts does it have\?\s*<\/h3>/i],
    ["Complete code", /<h3\b[^>]*>\s*Complete code\s*<\/h3>/i],
    ["Elaborated concepts for instructor reference", /<h3\b[^>]*>\s*Elaborated concepts for instructor reference\s*<\/h3>/i],
  ];
  const positions = requiredSections.map(([label, pattern]) => ({ label, position: page.search(pattern) }));
  const missing = positions.filter(({ position }) => position === -1).map(({ label }) => label);
  if (missing.length) {
    failures.push(`Handout problem ${problemNumber} is missing required sections: ${missing.join(", ")}`);
    continue;
  }
  const isOrdered = positions.every(({ position }, positionIndex) => (
    positionIndex === 0 || positions[positionIndex - 1].position < position
  ));
  if (!isOrdered) failures.push(`Handout problem ${problemNumber} does not follow the required four-section order`);
  if (count(page, /Students will learn/gi) !== 1) {
    failures.push(`Handout problem ${problemNumber} must contain exactly one Students will learn statement`);
  }
  const newConceptStart = positions[1].position;
  const completeCodeStart = positions[2].position;
  const studentStatement = page.search(/Students will learn/i);
  if (studentStatement < newConceptStart || studentStatement > completeCodeStart) {
    failures.push(`Handout problem ${problemNumber} must put Students will learn inside the new-concepts section`);
  }
  for (const [label, pattern] of [
    ["code workbench", /<div\b[^>]*data-code-workbench\b/gi],
    ["complete code block", /<pre\b[^>]*data-code-version=["']complete["']/gi],
    ["copy code button", /<button\b[^>]*data-copy-code\b/gi],
    ["copy problem button", /<button\b[^>]*data-copy-problem(?:\s|=|>)/gi],
  ]) {
    if (count(page, pattern) !== 1) failures.push(`Handout problem ${problemNumber} must contain exactly one ${label}`);
  }
  const pageStarterCount = count(page, /<pre\b[^>]*data-code-version=["']starter["']/gi);
  if (pageStarterCount > 1) failures.push(`Handout problem ${problemNumber} may contain at most one optional Starter block`);
  if (pageStarterCount === 1) {
    if (count(page, /<button\b(?=[^>]*data-code-switch=["']complete["'])(?=[^>]*aria-selected=["']true["'])[^>]*>/gi) !== 1) {
      failures.push(`Handout problem ${problemNumber} must select Complete when an optional Starter is present`);
    }
    if (count(page, /<button\b(?=[^>]*data-code-switch=["']starter["'])(?=[^>]*aria-selected=["']false["'])[^>]*>/gi) !== 1) {
      failures.push(`Handout problem ${problemNumber} must leave its optional Starter unselected`);
    }
  }
}
for (const [label, value] of [
  ["code workbenches", report.counts.codeWorkbenches],
  ["complete code blocks", report.counts.completeCodeBlocks],
  ["copy code buttons", report.counts.copyCodeButtons],
  ["copy problem buttons", report.counts.copyProblemButtons],
]) {
  if (value !== report.counts.handoutModules) {
    failures.push(`Handout ${label} (${value}) do not match modules (${report.counts.handoutModules})`);
  }
}
if (report.counts.starterCodeBlocks > report.counts.handoutModules) {
  failures.push(`Expected at most one optional Starter per problem, found ${report.counts.starterCodeBlocks}`);
}
if (report.counts.refresherConcepts < 4) failures.push(`Too few refresher concepts: ${report.counts.refresherConcepts}`);
if (report.counts.refresherDetails < report.counts.refresherConcepts) {
  failures.push("Each refresher concept needs expandable detail");
}

const starterTags = [...handout.matchAll(/<pre\b(?=[^>]*data-code-version=["']starter["'])[^>]*>/gi)].map((match) => match[0]);
const completeTags = [...handout.matchAll(/<pre\b(?=[^>]*data-code-version=["']complete["'])[^>]*>/gi)].map((match) => match[0]);
if (starterTags.some((tag) => !/\bhidden\b/i.test(tag))) failures.push("Every Starter code block must be hidden by default");
if (completeTags.some((tag) => /\bhidden\b/i.test(tag))) failures.push("Every Complete code block must be visible by default");

if (!/<title\b[^>]*>[^<]*Supporting slides[^<]*<\/title>/i.test(slides)) {
  failures.push("The HTML title must name the artifact Supporting slides");
}
if (!/<strong\b[^>]*>\s*Supporting slides\s*<\/strong>/i.test(slides)) {
  failures.push("The visible opening slide must name the artifact Supporting slides");
}
if (!/<a\b[^>]*href=["'][^"']*slides\/index\.html[^"']*["'][^>]*>\s*Supporting slides/i.test(handout)) {
  failures.push("The handout must label its slide links Supporting slides");
}
const mappedSlideStarts = new Set(
  [...handout.matchAll(/href=["'][^"']*slides\/index\.html#slide-(\d+)["']/gi)].map((match) => match[1]),
);
if (mappedSlideStarts.size !== 3) failures.push(`Expected 3 distinct handout-to-slide ranges, found ${mappedSlideStarts.size}`);

const blocks = slideBlocks(slides);
const partStartIds = [];
const conceptSlideNumbers = new Map();
for (const [index, block] of blocks.entries()) {
  const number = index + 1;
  const breadcrumb = block.match(/<div\b[^>]*class=["'][^"']*\bbreadcrumb\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? "";
  const breadcrumbText = breadcrumb.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (!/\bProblem(?:s 1-3| [1-3])\b/.test(breadcrumbText)) {
    failures.push(`Slide ${number} header does not name its related problem`);
  }
  if (!/<h[12]\b/i.test(block)) failures.push(`Slide ${number} needs one tutorial heading`);
  const ids = conceptIds(breadcrumbText);
  const problemMatch = breadcrumbText.match(/\bProblem ([1-3])\b/);
  const isCheckpoint = isIdeCheckpoint(block);
  if (problemMatch && !isCheckpoint && ids.size !== 1) {
    failures.push(`Problem slide ${number} must contain exactly one concept ID in its header`);
  }
  if (ids.size > 1) failures.push(`Slide ${number} header contains more than one concept ID`);
  for (const id of ids) {
    if (!isCheckpoint) {
      if (conceptSlideNumbers.has(id)) {
        failures.push(`Concept ${id} has duplicate concept slides: ${conceptSlideNumbers.get(id)} and ${number}`);
      } else {
        conceptSlideNumbers.set(id, number);
      }
    }
    const problem = id[1];
    if (!new RegExp(`\\bProblem ${problem}\\b`).test(breadcrumbText)) {
      failures.push(`Slide ${number} maps ${id} to the wrong problem header`);
    }
  }
  if (/^<section\b[^>]*class=["'][^"']*\bpart-start\b/i.test(block)) {
    partStartIds.push(block.match(/\bid=["']slide-(\d+)["']/i)?.[1] ?? "");
  }
}

if (/^\s*```\s*java\b/im.test(studentProblems)) {
  failures.push("The student-only problem sheet must not include Java solution code blocks");
}
for (let problem = 1; problem <= 3; problem += 1) {
  const related = blocks.filter((block) => {
    const breadcrumb = block.match(/<div\b[^>]*class=["'][^"']*\bbreadcrumb\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? "";
    const text = breadcrumb.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    return new RegExp(`\\bProblem ${problem}\\b`).test(text);
  });
  const checkpoints = related.filter(isIdeCheckpoint);
  if (checkpoints.length !== 1) failures.push(`Problem ${problem} must have exactly one IDE checkpoint`);
  const starts = related.filter((block) => /^<section\b[^>]*class=["'][^"']*\bpart-start\b/i.test(block));
  if (starts.length !== 1) failures.push(`Problem ${problem} must have exactly one part-start slide`);
  const pageLinkStart = pages[problem - 1]?.match(/href=["'][^"']*slides\/index\.html#slide-(\d+)["']/i)?.[1] ?? "";
  if (partStartIds[problem - 1] && pageLinkStart !== partStartIds[problem - 1]) {
    failures.push(`Handout problem ${problem} must link to its part-start slide ${partStartIds[problem - 1]}`);
  }
}
const problemSequence = blocks
  .map((block) => {
    const breadcrumb = block.match(/<div\b[^>]*class=["'][^"']*\bbreadcrumb\b[^"']*["'][^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? "";
    return breadcrumb.replace(/<[^>]+>/g, " ").match(/\bProblem ([1-3])\b/)?.[1] ?? "";
  })
  .filter(Boolean)
  .filter((problem, index, sequence) => index === 0 || problem !== sequence[index - 1]);
if (problemSequence.join(",") !== "1,2,3") failures.push("Problem slide ranges must be contiguous and ordered 1, 2, 3");

const proseOnly = [slides, handout, refresher]
  .map((text) => text
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " "))
  .join("\n");
const toneMatch = proseOnly.match(/\b(?:cinematic|story|storytelling|adventure|quest|journey|saga|hook|narrative|movie|metaphor|slogan|promotional)\b|movie-like/i);
if (toneMatch) failures.push(`Use direct tutorial language; remove story-style phrase: ${toneMatch[0]}`);

const slideVisualChecks = [
  [/(?:--background\s*:\s*#090909|--night\s*:\s*#090909)/i, "Slides must use the accepted #090909 stage"],
  [/--accent\s*:\s*#8ec5ff/i, "Slides must use the accepted #8ec5ff accent"],
  [/--text\s*:\s*#f4f4f2/i, "Slides must use the accepted #f4f4f2 text color"],
  [/Helvetica Neue/i, "Slides must use the accepted Helvetica Neue font stack"],
];
for (const [pattern, message] of slideVisualChecks) {
  if (!pattern.test(slideStyles)) failures.push(message);
}
if (/linear-gradient\s*\(/i.test(slideStyles)) failures.push("Slides may not introduce gradients or grid textures");
if (/Avenir Next/i.test(slideStyles)) failures.push("Slides may not replace the accepted Helvetica visual shell with Avenir");

const handoutVisualChecks = [
  [/--blue\s*:\s*#1769aa/i, "Handout must use the accepted #1769aa blue"],
  [/--code\s*:\s*#f6f8fa/i, "Handout must keep light code workbenches"],
  [/-apple-system[^;]*BlinkMacSystemFont/i, "Handout must use the accepted system sans font stack"],
];
for (const [pattern, message] of handoutVisualChecks) {
  if (!pattern.test(handout)) failures.push(message);
}
if (/Iowan Old Style|Palatino Linotype|Georgia,\s*serif/i.test(handout)) {
  failures.push("Handout may not introduce editorial serif headings");
}

const refresherVisualChecks = [
  [/--blue\s*:\s*oklch\(51%\s+0\.145\s+250\)/i, "Refresher must use the accepted blue accent token"],
  [/--stage\s*:\s*oklch\(18%\s+0\.025\s+250\)/i, "Refresher must use the accepted navy stage"],
  [/Iowan Old Style/i, "Refresher must preserve the accepted editorial serif pairing"],
  [/Avenir Next/i, "Refresher must preserve the accepted sans-serif metadata pairing"],
];
for (const [pattern, message] of refresherVisualChecks) {
  if (!pattern.test(refresher)) failures.push(message);
}

for (const [label, relativePath, text] of [
  ["slides", "slides/index.html", slides],
  ["handout", "instructor/walkthroughs.html", handout],
  ["refresher", "instructor/concept-refresher.html", refresher],
]) {
  duplicateIds(label, text);
  checkLocalLinks(label, relativePath, text);
  if (/\/Users\//.test(text)) failures.push(`${label} contains an absolute local user path`);
}

try {
  new Function(script);
} catch (error) {
  failures.push(`slides/script.js does not parse: ${error.message}`);
}

const examplesDir = path.join(target, "examples");
const javaFiles = fs.existsSync(examplesDir)
  ? fs.readdirSync(examplesDir).filter((name) => name.endsWith(".java"))
  : [];
report.counts.javaExamples = javaFiles.length;
if (javaFiles.length !== 3) {
  failures.push(`Expected exactly 3 Java examples, found ${javaFiles.length}`);
}

const javaCorpus = javaFiles.map((name) => fs.readFileSync(path.join(examplesDir, name), "utf8")).join("\n");
const javaIds = new Set([...javaCorpus.matchAll(/\/\/\s*(P[1-3]-C\d+):/g)].map((match) => match[1]));
for (let problem = 1; problem <= 3; problem += 1) {
  if (![...javaIds].some((id) => id.startsWith(`P${problem}-`))) {
    failures.push(`Problem ${problem} needs at least one P${problem}-Cn inline teaching comment`);
  }
}
for (const [label, ids] of [
  ["slides", conceptIds(slides)],
  ["handout", conceptIds(handout)],
  ["content map", conceptIds(contentMap)],
]) {
  const missing = setDifference(javaIds, ids);
  const extra = setDifference(ids, javaIds);
  if (missing.length || extra.length) {
    failures.push(`${label} concept IDs differ from Java comments; missing: ${missing.join(", ") || "none"}; extra: ${extra.join(", ") || "none"}`);
  }
}

const completeBlocks = [...handout.matchAll(/<pre\b[^>]*data-code-version=["']complete["'][^>]*>\s*<code\b[^>]*>([\s\S]*?)<\/code>\s*<\/pre>/gi)];
if (completeBlocks.length !== report.counts.completeCodeBlocks) {
  failures.push("Every Complete code block must contain one readable code element");
}
for (const match of completeBlocks) {
  const code = codeText(match[1]);
  if (!/<span\b[^>]*class=["'][^"']*\b(?:token|tok-[\w-]+|hljs-[\w-]+)\b[^"']*["']/i.test(match[1])) {
    failures.push("Every Complete handout block needs offline syntax-color markup");
  }
  const className = code.match(/\bpublic\s+class\s+(\w+)/)?.[1];
  if (!className) {
    failures.push("A Complete handout block has no public class");
    continue;
  }
  const javaPath = path.join(examplesDir, `${className}.java`);
  if (!fs.existsSync(javaPath)) {
    failures.push(`Complete handout code has no matching examples/${className}.java`);
    continue;
  }
  const javaCode = fs.readFileSync(javaPath, "utf8").replaceAll("\r\n", "\n");
  if (code !== javaCode) failures.push(`Complete handout code differs from examples/${className}.java`);
}

console.log(JSON.stringify({ ...report, failures }, null, 2));
if (failures.length) process.exit(1);
