const slides = Array.from(document.querySelectorAll(".slide"));
const progressFill = document.getElementById("progressFill");
const slideCounter = document.getElementById("slideCounter");
const slideTitle = document.getElementById("slideTitle");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const revealAnswer = document.getElementById("revealAnswer");

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
    slide.inert = !active;
    slide.querySelectorAll("[data-step]").forEach((node) => {
      const revealed = deckState[index].step >= Number(node.dataset.step);
      node.classList.toggle("is-visible", revealed);
      node.setAttribute("aria-hidden", String(!revealed));
    });
  });

  const number = currentIndex + 1;
  slideCounter.textContent = `${String(number).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  slideTitle.textContent = slides[currentIndex].dataset.title || `Slide ${number}`;
  progressFill.style.width = `${(number / slides.length) * 100}%`;
  prevButton.disabled = currentIndex === 0 && deckState[0].step === 0;
  nextButton.disabled = currentIndex === slides.length - 1 && deckState[currentIndex].step === deckState[currentIndex].maxStep;
  const answerVisible = deckState[slides.length - 1].step > 0;
  revealAnswer.setAttribute("aria-expanded", String(answerVisible));
  revealAnswer.textContent = answerVisible ? "Hide answer" : "Show answer";
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


revealAnswer.addEventListener("click", () => {
  const answerState = deckState[slides.length - 1];
  answerState.step = answerState.step > 0 ? 0 : 1;
  updateDeck();
});

// Expose the complete reading path to assistive technology while printing.
window.addEventListener("beforeprint", () => {
  slides.forEach((slide) => {
    slide.inert = false;
    slide.setAttribute("aria-hidden", "false");
    slide.querySelectorAll("[data-step]").forEach((node) => node.setAttribute("aria-hidden", "false"));
  });
});
window.addEventListener("afterprint", updateDeck);

const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
