"use strict";

(function global($) {
  function menuToggle() {
    var navs = document.querySelectorAll('.navbar-items-right');
    navs.forEach(function (nav) {
      return nav.classList.toggle('navbar-toggle-show');
    });
  }

  document.querySelector('.navbar-menu-button').addEventListener('click', menuToggle);
  $(document).ready(function ($) {
    'use strict';

    $('#client-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 6000,
      smartSpeed: 400,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });
})(window.jQuery);