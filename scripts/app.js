function app() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.nav-toggle');
  const activeClass = 'is-show';
  toggle.addEventListener('click', e => {
    e.stopPropagation();
    nav.classList.add(activeClass);
  });

  window.addEventListener('click', e => {
    console.log(document.contains(e.target));

    if (!nav.contains(e.target)) {
      nav.classList.remove(activeClass);
    }
  });
}
app();
