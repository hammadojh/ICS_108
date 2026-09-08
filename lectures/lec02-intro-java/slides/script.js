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
    const isActive = index === currentIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));

    slide.querySelectorAll("[data-step]").forEach((node) => {
      const step = Number(node.dataset.step);
      node.classList.toggle("is-visible", deckState[index].step >= step);
      node.classList.toggle("is-current", isActive && deckState[index].step === step);
    });
  });

  const visibleNumber = currentIndex + 1;
  slideCounter.textContent = `${String(visibleNumber).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  slideTitle.textContent = slides[currentIndex].dataset.title || `Slide ${visibleNumber}`;
  progressFill.style.width = `${(visibleNumber / slides.length) * 100}%`;

  prevButton.disabled = currentIndex === 0 && deckState[0].step === 0;
  nextButton.disabled =
    currentIndex === slides.length - 1 &&
    deckState[currentIndex].step === deckState[currentIndex].maxStep;

  history.replaceState(null, "", `#slide-${visibleNumber}`);
}

function next() {
  const state = deckState[currentIndex];
  if (state.step < state.maxStep) {
    state.step += 1;
  } else if (currentIndex < slides.length - 1) {
    currentIndex += 1;
  }
  updateDeck();
}

function previous() {
  const state = deckState[currentIndex];
  if (state.step > 0) {
    state.step -= 1;
  } else if (currentIndex > 0) {
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
  if (event.defaultPrevented || event.target.closest("button, input, a, textarea, select")) return;

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
  const hashIndex = indexFromHash();
  if (hashIndex !== null && hashIndex !== currentIndex) showSlide(hashIndex);
});

const salaryInput = document.getElementById("salaryInput");
const salaryMemory = document.getElementById("salaryMemory");
const salaryFormula = document.getElementById("salaryFormula");
const salaryOutput = document.getElementById("salaryOutput");

function runSalaryProgram() {
  const wage = Math.max(0, Math.trunc(Number(salaryInput.value) || 0));
  const salary = wage * 40 * 52;
  salaryInput.value = String(wage);
  salaryMemory.textContent = `wage = ${wage}`;
  salaryFormula.textContent = `${wage} × 40 × 52`;
  salaryOutput.textContent = `Salary is ${salary}`;
}

document.getElementById("runSalary").addEventListener("click", runSalaryProgram);
salaryInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") runSalaryProgram();
});

document.querySelectorAll(".error-line").forEach((line) => {
  line.addEventListener("click", () => {
    const explanation = document.getElementById("errorExplanation");
    explanation.innerHTML = `
      <span>${line.dataset.kind}</span>
      <h3>${line.dataset.kind === "Logic error" ? "The code is valid, but the result is wrong." : "The line violates Java syntax."}</h3>
      <p><strong>Fix:</strong> ${line.dataset.fix}</p>
    `;
    line.classList.add("is-fixed");
  });
});

const nameFields = ["firstName1", "lastName1", "firstName2", "lastName2"].map((id) =>
  document.getElementById(id)
);

function cleanName(value, fallback) {
  const cleaned = value.trim().replace(/\s+/g, " ");
  return cleaned || fallback;
}

function runNamesProgram(event) {
  event?.preventDefault();
  const [firstName1, lastName1, firstName2, lastName2] = nameFields.map((field, index) =>
    cleanName(field.value, ["Pat", "Smith", "Kelly", "Jones"][index])
  );

  const results = [
    `${firstName1} ${lastName1} and ${firstName2} ${lastName2}`,
    `${firstName1} and ${firstName2} ${lastName1}`,
    `${firstName1} and ${firstName2} ${lastName2}`,
    `${firstName1} and ${firstName2} ${lastName1}-${lastName2}`,
    `${firstName1} and ${firstName2} ${lastName2}-${lastName1}`,
  ];

  const outputList = document.getElementById("nameOutputs");
  outputList.replaceChildren();
  results.forEach((result) => {
    const item = document.createElement("li");
    item.textContent = result;
    outputList.append(item);
  });
}

document.getElementById("namesForm").addEventListener("submit", runNamesProgram);

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
updateDeck();
