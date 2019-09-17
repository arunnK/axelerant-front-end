(function global() {
  function menuToggle() {
    const navs = document.querySelectorAll('.navbar-items-right');

    navs.forEach(nav => nav.classList.toggle('navbar-toggle-show'));
  }

  document
    .querySelector('.navbar-menu-button')
    .addEventListener('click', menuToggle);
})();
