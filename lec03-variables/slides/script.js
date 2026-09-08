const slides = Array.from(document.querySelectorAll(".slide"));
const progressFill = document.getElementById("progressFill");
const slideCounter = document.getElementById("slideCounter");
const slideTitle = document.getElementById("slideTitle");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

const deckState = slides.map((slide) => {
  const steps = Array.from(slide.querySelectorAll("[data-step]"), (node) =>
    Number(node.dataset.step)
  );
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
      const step = Number(node.dataset.step);
      node.classList.toggle("is-visible", deckState[index].step >= step);
    });
  });

  const number = currentIndex + 1;
  slideCounter.textContent =
    String(number).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
  slideTitle.textContent = slides[currentIndex].dataset.title || "Slide " + number;
  progressFill.style.width = (number / slides.length) * 100 + "%";

  prevButton.disabled = currentIndex === 0 && deckState[0].step === 0;
  nextButton.disabled =
    currentIndex === slides.length - 1 &&
    deckState[currentIndex].step === deckState[currentIndex].maxStep;

  history.replaceState(null, "", "#slide-" + number);
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
  if (event.defaultPrevented || event.target.closest("input, textarea, select")) return;
  if (event.target.closest("button, a") && [" ", "Enter"].includes(event.key)) return;

  if (["ArrowRight", "PageDown", " ", "Enter"].includes(event.key)) {
    event.preventDefault();
    next();
  } else if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
    event.preventDefault();
    previous();
  } else if (event.key === "Home") {
    event.preventDefault();
    showSlide(0);
  } else if (event.key === "End") {
    event.preventDefault();
    showSlide(slides.length - 1, true);
  }
});

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    if (event.target.closest("button, input, a, textarea, select, label, form")) return;
    const bounds = slide.getBoundingClientRect();
    event.clientX - bounds.left < bounds.width * 0.28 ? previous() : next();
  });
});

window.addEventListener("hashchange", () => {
  const index = indexFromHash();
  if (index !== null && index !== currentIndex) showSlide(index);
});

document.querySelectorAll('[data-predict="division-hook"] button').forEach((button) => {
  button.addEventListener("click", () => {
    const correct = button.dataset.value === "3";
    document.querySelectorAll('[data-predict="division-hook"] button').forEach((choice) => {
      choice.classList.remove("is-correct", "is-incorrect");
    });
    button.classList.add(correct ? "is-correct" : "is-incorrect");
    document.getElementById("divisionHookResult").textContent = correct
      ? "Correct. Both operands are int, so Java performs integer division."
      : "Not with int operands. Java discards the fractional part, so the stored value is 3.";
  });
});

const busValues = [5, 8, 6, 2, 7];
const busMessages = [
  "The bus starts with 5 people.",
  "3 people get on: 5 + 3 = 8.",
  "2 people get off: 8 - 2 = 6.",
  "4 people get off: 6 - 4 = 2.",
  "5 people get on: 2 + 5 = 7.",
];
let busIndex = 0;

function updateBus() {
  document.getElementById("busValue").textContent = String(busValues[busIndex]);
  document.getElementById("busAction").textContent = busMessages[busIndex];
  document.querySelectorAll("#busSteps li").forEach((item, index) => {
    item.classList.toggle("is-current", index === busIndex);
  });
  document.getElementById("busNext").disabled = busIndex === busValues.length - 1;
}

document.getElementById("busNext").addEventListener("click", () => {
  if (busIndex < busValues.length - 1) busIndex += 1;
  updateBus();
});

document.getElementById("busReset").addEventListener("click", () => {
  busIndex = 0;
  updateBus();
});

function plural(value, singular, pluralWord) {
  return value + " " + (value === 1 ? singular : pluralWord);
}

function runSeconds() {
  const input = document.getElementById("secondsInput");
  const total = Math.max(0, Math.trunc(Number(input.value) || 0));
  const hours = Math.trunc(total / 3600);
  const afterHours = total % 3600;
  const minutes = Math.trunc(afterHours / 60);
  const seconds = afterHours % 60;

  input.value = String(total);
  document.getElementById("secondsCodeValue").textContent = String(total);
  document.getElementById("hoursOutput").textContent = plural(hours, "hour", "hours");
  document.getElementById("minutesOutput").textContent = plural(minutes, "minute", "minutes");
  document.getElementById("secondsOutput").textContent = plural(seconds, "second", "seconds");
  document.getElementById("secondsTrace").textContent =
    total + " = (" + hours + " × 3600) + (" + minutes + " × 60) + " + seconds;
}

document.getElementById("runSeconds").addEventListener("click", runSeconds);
document.getElementById("secondsInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSeconds();
});

document.querySelectorAll("[data-scan-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const raw = document.getElementById("scannerInput").value;
    const mode = button.dataset.scanMode;
    const token = raw.trim().split(/\s+/)[0] || "";
    const stored = mode === "next" ? token : raw;
    document.getElementById("scannerOutput").textContent = '"' + stored + '"';
    document.getElementById("scannerExplanation").textContent =
      mode === "next"
        ? "next() skips leading whitespace and stops at the next whitespace."
        : "nextLine() keeps spaces and reads the remaining text up to the newline.";
  });
});

document.getElementById("radiusBug").addEventListener("click", (event) => {
  const button = event.currentTarget;
  button.classList.add("is-fixed");
  button.querySelector("code").textContent =
    "radius = circumference / (2 * Math.PI);";
  document.getElementById("debugExplanation").innerHTML =
    '<p class="demo-label">Logic error found</p>' +
    '<h3>The denominator needs parentheses.</h3>' +
    '<p>Without parentheses, Java divides by 2 and then multiplies by π. ' +
    'The intended formula divides by the complete product 2 × π.</p>';
});

const numberFormatter = new Intl.NumberFormat("en-US");

function runHealth() {
  const input = document.getElementById("ageInput");
  const ageYears = Math.max(0, Math.min(130, Math.trunc(Number(input.value) || 0)));
  const ageDays = (ageYears * 365) + Math.trunc(ageYears / 4);
  const ageMinutes = ageDays * 24 * 60;
  const heartbeats = ageMinutes * 72;

  input.value = String(ageYears);
  document.getElementById("ageDaysOutput").textContent = numberFormatter.format(ageDays);
  document.getElementById("ageMinutesOutput").textContent = numberFormatter.format(ageMinutes);
  document.getElementById("heartbeatsOutput").textContent = numberFormatter.format(heartbeats);
}

document.getElementById("runHealth").addEventListener("click", runHealth);
document.getElementById("ageInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") runHealth();
});

document.querySelectorAll(".choice-quiz li").forEach((question) => {
  question.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const correct = button.dataset.value === question.dataset.correct;
      question.classList.toggle("is-correct", correct);
      question.classList.toggle("is-incorrect", !correct);
      question.querySelectorAll("button").forEach((choice) => choice.classList.remove("is-selected"));
      button.classList.add("is-selected");
      question.querySelector("output").setAttribute(
        "aria-label",
        correct ? "Correct" : "Incorrect; try again"
      );
    });
  });
});

const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateBus();
updateDeck();
