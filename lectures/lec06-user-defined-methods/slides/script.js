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
    if (event.target.closest("button, input, select, a, label, output, textarea, form")) return;
    const bounds = slide.getBoundingClientRect();
    event.clientX - bounds.left < bounds.width * 0.25 ? previous() : next();
  });
});

window.addEventListener("hashchange", () => {
  const index = indexFromHash();
  if (index !== null && index !== currentIndex) showSlide(index);
});


const traceSteps = {
  "menu": [
    "Before the first call: the menu has not been displayed.",
    "Call 1 → printMenu. Output: Sandwich - 12 SAR",
    "Still in call 1. Output: Juice - 5 SAR",
    "Return to main. Output: Order placed: Sandwich",
    "Call 2 → printMenu. Output: Sandwich - 12 SAR",
    "Still in call 2. Output: Juice - 5 SAR",
    "Return to main. The menu is ready for the next order; five output lines."
  ],
  "wallet": [
    "Before preview: main balance = 20; previewBalance is not assigned yet.",
    "Copy the argument: main balance = 20; parameter balance = 20.",
    "Local topUp = 10. The parameter becomes 30; main balance remains 20.",
    "Return 30. main stores previewBalance = 30; its balance is still 20.",
    "Preview again: a fresh call receives 20 and returns 30. No top-up has been confirmed.",
    "Confirmation: balance = previewTopUp(balance) calls with 20, then stores 30 in main balance."
  ]
};
document.querySelectorAll('[data-trace]').forEach(demo => {
 let index = 0; const steps = traceSteps[demo.dataset.trace];
 const render = () => {demo.querySelector('output').textContent = steps[index]; demo.querySelector('[data-next]').disabled = index === steps.length - 1;};
 demo.querySelector('[data-next]').addEventListener('click', () => {index = Math.min(index+1,steps.length-1);render();});
 demo.querySelector('[data-reset]').addEventListener('click', () => {index=0;render();}); render();
});
document.querySelectorAll('[data-quiz]').forEach(quiz => quiz.querySelectorAll('button').forEach(button => {
 button.addEventListener('click', () => {
 quiz.querySelectorAll('button').forEach(b => {b.classList.remove('is-correct','is-incorrect'); b.setAttribute('aria-pressed','false');});
 button.classList.add(button.dataset.answer === 'true' ? 'is-correct' : 'is-incorrect'); button.setAttribute('aria-pressed','true');
 quiz.querySelector('output').textContent = button.dataset.feedback;
 });
}));
const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
