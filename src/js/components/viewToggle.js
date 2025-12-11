export default function initViewToggle(buttonSelector, wrapperSelector, activeClass = 'active') {
  const buttons = document.querySelectorAll(buttonSelector);
  const wrapper = document.querySelector(wrapperSelector);

  if (!buttons.length || !wrapper) return;

  const applyView = (btn, animate = true) => {
    const newView = btn.dataset.view;
    if (!newView) return;

    const oldView = wrapper.dataset.currentView;

    if (btn.classList.contains(activeClass) && animate) {
      return;
    }

    buttons.forEach((b) => b.classList.remove(activeClass));
    btn.classList.add(activeClass);

    if (oldView) wrapper.classList.remove(oldView);

    wrapper.classList.add(newView);

    wrapper.dataset.currentView = newView;

    if (animate) {
      wrapper.classList.add('animating');
      setTimeout(() => wrapper.classList.remove('animating'), 300);
    }
  };

  const defaultBtn = [...buttons].find((b) => b.classList.contains(activeClass));

  if (defaultBtn) {
    applyView(defaultBtn, false); // animate = false → без анімації
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => applyView(btn, true));
  });
}
