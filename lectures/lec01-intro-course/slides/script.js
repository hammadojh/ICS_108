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

function showSlide(index) {
  currentIndex = Math.max(0, Math.min(slides.length - 1, index));
  updateDeck();
}

document.addEventListener("keydown", (event) => {
  if (event.defaultPrevented) return;

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
    currentIndex = slides.length - 1;
    deckState[currentIndex].step = deckState[currentIndex].maxStep;
    updateDeck();
  }
});

prevButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

slides.forEach((slide) => {
  slide.addEventListener("click", (event) => {
    if (event.target.closest("button, a")) return;
    const bounds = slide.getBoundingClientRect();
    event.clientX - bounds.left < bounds.width * 0.32 ? previous() : next();
  });
});

window.addEventListener("hashchange", () => {
  const hashIndex = indexFromHash();
  if (hashIndex !== null && hashIndex !== currentIndex) showSlide(hashIndex);
});

const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
