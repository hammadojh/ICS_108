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

const indexValues = [23, 25, 24, 22, 26];
document.querySelectorAll("[data-index-demo] button").forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);
    document.querySelectorAll("[data-index-demo] button").forEach((choice) => choice.classList.remove("is-selected"));
    button.classList.add("is-selected");
    document.getElementById("indexResult").innerHTML = `<code>temperatures[${index}]</code> is <strong>${indexValues[index]}</strong>.`;
  });
});

const fillValues = [20, 22, 24, 26, 28];
let fillIndex = 0;

function renderFill() {
  const cells = Array.from(document.querySelectorAll("#fillCells b"));
  cells.forEach((cell, index) => {
    cell.textContent = index < fillIndex ? String(fillValues[index]) : "0";
    cell.parentElement.classList.toggle("selected", index === fillIndex && fillIndex < fillValues.length);
  });
  const result = document.getElementById("fillResult");
  if (fillIndex === 0) result.innerHTML = "Ready: <code>i = 0</code>.";
  else if (fillIndex < fillValues.length) result.innerHTML = `Stored <strong>${fillValues[fillIndex - 1]}</strong> at index ${fillIndex - 1}. Next: <code>i = ${fillIndex}</code>.`;
  else result.innerHTML = "All five elements are filled. Next check: <code>i = 5</code> is false.";
  document.getElementById("nextFill").disabled = fillIndex >= fillValues.length;
}

document.getElementById("nextFill").addEventListener("click", () => {
  if (fillIndex < fillValues.length) fillIndex += 1;
  renderFill();
});
document.getElementById("resetFill").addEventListener("click", () => {
  fillIndex = 0;
  renderFill();
});

let totalIndex = 0;
function renderTotal() {
  const total = fillValues.slice(0, totalIndex).reduce((sum, value) => sum + value, 0);
  const step = document.getElementById("totalStep");
  if (totalIndex === 0) step.textContent = "Before the loop";
  else if (totalIndex < fillValues.length) step.textContent = `After index ${totalIndex - 1}: added ${fillValues[totalIndex - 1]}`;
  else step.textContent = "After index 4: every element was added";
  document.getElementById("totalValue").textContent = `total = ${total}`;
  document.getElementById("nextTotal").disabled = totalIndex >= fillValues.length;
}
document.getElementById("nextTotal").addEventListener("click", () => {
  if (totalIndex < fillValues.length) totalIndex += 1;
  renderTotal();
});
document.getElementById("resetTotal").addEventListener("click", () => {
  totalIndex = 0;
  renderTotal();
});

const maxValues = [-3, -7, -1, -5, -4];
let maxIndex = 1;
let currentMax = maxValues[0];

function renderMax() {
  const step = document.getElementById("maxStep");
  if (maxIndex === 1) step.textContent = "Start: index 0 gives highest = -3";
  else if (maxIndex <= maxValues.length) {
    const checkedIndex = maxIndex - 1;
    step.textContent = `Compared index ${checkedIndex} (${maxValues[checkedIndex]}) with the current highest`;
  }
  document.getElementById("maxValue").textContent = `highest = ${currentMax}`;
  document.getElementById("nextMax").disabled = maxIndex >= maxValues.length;
}

document.getElementById("nextMax").addEventListener("click", () => {
  if (maxIndex < maxValues.length) {
    currentMax = Math.max(currentMax, maxValues[maxIndex]);
    maxIndex += 1;
  }
  renderMax();
});
document.getElementById("resetMax").addEventListener("click", () => {
  maxIndex = 1;
  currentMax = maxValues[0];
  renderMax();
});

document.querySelectorAll("[data-negative-check] button").forEach((button) => {
  button.addEventListener("click", () => {
    const correct = button.dataset.value === "first";
    document.querySelectorAll("[data-negative-check] button").forEach((choice) => choice.classList.remove("is-correct", "is-incorrect"));
    button.classList.add(correct ? "is-correct" : "is-incorrect");
    document.getElementById("negativeResult").textContent = correct
      ? "Correct. The starting value comes from the data."
      : "0 is larger than every value here, so the program would return a value that is not in the array.";
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

renderFill();
renderTotal();
renderMax();

const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
