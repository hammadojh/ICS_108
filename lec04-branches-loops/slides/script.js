const slides = Array.from(document.querySelectorAll(".slide"));
const progressFill = document.getElementById("progressFill");
const slideCounter = document.getElementById("slideCounter");
const slideTitle = document.getElementById("slideTitle");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const deckState = slides.map((slide) => {
  const steps = Array.from(slide.querySelectorAll("[data-step]"), (node) => Number(node.dataset.step));
  return { step: 0, maxStep: steps.length ? Math.max(...steps) : 0 };
});

let currentIndex = 0;

function indexFromHash() {
  const match = window.location.hash.match(/^#slide-(\d+)$/);
  if (!match) return null;
  return Math.max(0, Math.min(slides.length - 1, Number(match[1]) - 1));
}

function updateDeck() {
  slides.forEach((slide, index) => {
    const active = index === currentIndex;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
    slide.querySelectorAll("[data-step]").forEach((node) => {
      node.classList.toggle("is-visible", deckState[index].step >= Number(node.dataset.step));
    });
  });

  const number = currentIndex + 1;
  slideCounter.textContent = `${String(number).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  slideTitle.textContent = slides[currentIndex].dataset.title || `Slide ${number}`;
  progressFill.style.width = `${(number / slides.length) * 100}%`;
  prevButton.disabled = currentIndex === 0 && deckState[0].step === 0;
  nextButton.disabled = currentIndex === slides.length - 1 && deckState[currentIndex].step === deckState[currentIndex].maxStep;
  history.replaceState(null, "", `#slide-${number}`);
}

function next() {
  const state = deckState[currentIndex];
  if (state.step < state.maxStep) state.step += 1;
  else if (currentIndex < slides.length - 1) currentIndex += 1;
  updateDeck();
}

function previous() {
  const state = deckState[currentIndex];
  if (state.step > 0) state.step -= 1;
  else if (currentIndex > 0) {
    currentIndex -= 1;
    deckState[currentIndex].step = deckState[currentIndex].maxStep;
  }
  updateDeck();
}

function showSlide(index, revealAll = false) {
  currentIndex = Math.max(0, Math.min(slides.length - 1, index));
  if (revealAll) deckState[currentIndex].step = deckState[currentIndex].maxStep;
  updateDeck();
}

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented || event.target.closest("button, a, input, textarea, select, label, form")) return;
  if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
    event.preventDefault();
    next();
  }
  else if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
    event.preventDefault();
    previous();
  }
  else if (event.key === "Home") {
    event.preventDefault();
    showSlide(0);
  }
  else if (event.key === "End") {
    event.preventDefault();
    showSlide(slides.length - 1, true);
  }
});

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    if (event.target.closest("button, input, select, a, label, output")) return;
    const bounds = slide.getBoundingClientRect();
    event.clientX - bounds.left < bounds.width * 0.25 ? previous() : next();
  });
});

window.addEventListener("hashchange", () => {
  const index = indexFromHash();
  if (index !== null && index !== currentIndex) showSlide(index);
});

document.querySelectorAll('[data-predict="hook"] button').forEach((button) => {
  button.addEventListener("click", () => {
    const correct = button.dataset.value === "forever";
    document.querySelectorAll('[data-predict="hook"] button').forEach((choice) => choice.classList.remove("is-correct", "is-incorrect"));
    button.classList.add(correct ? "is-correct" : "is-incorrect");
    document.getElementById("hookResult").textContent = correct
      ? "Correct. count stays 0, so 0 < 3 remains true after every iteration."
      : "The condition is rechecked, but count never changes. Add count++ so the loop can reach 3.";
  });
});

function traceWhile() {
  const input = document.getElementById("whileLimit");
  const limit = Math.max(0, Math.min(5, Math.trunc(Number(input.value) || 0)));
  const checks = [];
  for (let count = 0; count <= limit; count += 1) {
    checks.push(`${count}<${limit} ${count < limit ? "T" : "F"}`);
  }
  input.value = String(limit);
  document.getElementById("whileTraceResult").textContent = checks.join(" → ");
}

document.getElementById("runWhileTrace").addEventListener("click", traceWhile);
document.getElementById("whileLimit").addEventListener("keydown", (event) => {
  if (event.key === "Enter") traceWhile();
});

function runScoreReport() {
  const fields = ["scoreOne", "scoreTwo", "scoreThree"].map((id) => document.getElementById(id));
  const scores = fields.map((field) => Math.max(0, Math.min(100, Math.trunc(Number(field.value) || 0))));
  fields.forEach((field, index) => { field.value = String(scores[index]); });
  const total = scores.reduce((sum, score) => sum + score, 0);
  const passed = scores.filter((score) => score >= 60).length;
  document.getElementById("scoreResult").textContent = `Average ${(total / scores.length).toFixed(1)} · Passed ${passed} · Failed ${scores.length - passed}`;
}

document.getElementById("runScoreReport").addEventListener("click", runScoreReport);
["scoreOne", "scoreTwo", "scoreThree"].forEach((id) => {
  document.getElementById(id).addEventListener("keydown", (event) => {
    if (event.key === "Enter") runScoreReport();
  });
});

document.querySelectorAll(".choice-quiz li").forEach((question) => {
  question.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.value === question.dataset.correct;
      question.classList.toggle("is-correct", correct);
      question.classList.toggle("is-incorrect", !correct);
      question.querySelectorAll("button").forEach((choice) => choice.classList.remove("is-selected"));
      button.classList.add("is-selected");
      question.querySelector("output").setAttribute("aria-label", correct ? "Correct" : "Incorrect; try again");
    });
  });
});

const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
