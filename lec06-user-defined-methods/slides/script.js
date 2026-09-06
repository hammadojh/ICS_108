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
 heading: ['Before the first call: no output yet.', 'Call 1 → printHeading. Output: ICS 108', 'Still inside call 1. Output: Methods practice', 'Return to main. Output: Start', 'Call 2 → printHeading. Output: ICS 108', 'Still inside call 2. Output: Methods practice', 'Return to main after call 2. Program ends; five output lines.'],
 score: ['Before the call: main score = 7; updated is not assigned yet.', 'Copy argument: main score = 7; parameter score = 7.', 'Local bonus = 1. Parameter score becomes 8; main score is still 7.', 'Return 8. Helper locals end. main stores updated = 8; main score = 7.', 'A new call with main score = 7 returns 8 again. No value is remembered.', 'score = addPoint(score) calls with 7, then assigns 8 to main score.']
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
document.querySelectorAll('#orderDemo button').forEach(button => button.addEventListener('click', () => {
 const h = Number(button.dataset.hours), m = Number(button.dataset.minutes);
 document.querySelector('#orderDemo output').textContent = `hours = ${h}; minutes = ${m}; return ${h} * 60 + ${m} = ${h*60+m}.`;
}));
const initialHashIndex = indexFromHash();
if (initialHashIndex !== null) currentIndex = initialHashIndex;
updateDeck();
