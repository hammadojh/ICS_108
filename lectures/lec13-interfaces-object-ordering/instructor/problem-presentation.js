(() => {
  let returnFocus;
  const dialog = document.createElement('dialog');
  dialog.className = 'student-presentation';
  dialog.setAttribute('aria-labelledby', 'presentationTitle');
  dialog.innerHTML = '<header><h2 id="presentationTitle"></h2><button type="button" data-exit-presentation>Exit presentation</button></header><div class="presentation-content"></div>';
  document.body.append(dialog);
  const close = () => dialog.close();
  dialog.querySelector('[data-exit-presentation]').addEventListener('click', close);
  dialog.addEventListener('close', () => { document.body.classList.remove('presenting'); returnFocus?.focus(); });
  dialog.addEventListener('keydown', event => {
    if (event.key === 'Tab') { event.preventDefault(); dialog.querySelector('button').focus(); }
  });
  document.querySelectorAll('[data-present-problem]').forEach(button => button.addEventListener('click', () => {
    const page = button.closest('article.page');
    const prompt = page.querySelector('[data-student-prompt]');
    if (!prompt) return;
    returnFocus = button;
    dialog.querySelector('h2').textContent = page.querySelector('[data-problem-title]').textContent;
    const content = dialog.querySelector('.presentation-content');
    content.replaceChildren(prompt.cloneNode(true));
    content.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
    document.body.classList.add('presenting');
    dialog.showModal();
    dialog.querySelector('button').focus();
  }));
})();
