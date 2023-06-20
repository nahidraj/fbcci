$(function () {
  "use strict";

  //Hide Loading Box (Preloader)
  // function handlePreloader() {
  //   if ($('.loader-wrap').length) {
  //     $('.loader-wrap').delay(800).fadeOut(1000);
  //   }
  //   TweenMax.to($(".loader-wrap .overlay"), 1.2, {
  //     force3D: true,
  //     left: "100%",
  //     ease: Expo.easeInOut,
  //   });
  // }

  $(window).on('load', function () {
    $('.loader-wrap').delay(3000).fadeOut(0);
  })

  // search overlay js
  $(".search-icon").on('click', function () {
    $(".search-overlay").addClass("open-search-overlay")
  });
  $(".close-icon").on('click', function () {
    $(".search-overlay").removeClass("open-search-overlay")
  });

  // siwper slider js
  var swiper = new Swiper('.banner__slider', {
    slidesPerView: 1,
    speed: 1200,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Stop autoplay
  // swiper.autoplay.stop();

  // optional for only banner
  // var swiperContainer = document.querySelector('.banner__slider');

  // swiperContainer.addEventListener('mouseenter', function () {
  //   swiper.autoplay.stop();
  // });

  // swiperContainer.addEventListener('mouseleave', function () {
  //   swiper.autoplay.start();
  // });

  // about us video js
  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // counter up js
  $('.counter').counterUp({
    delay: 50,
    time: 2000
  });

  // service swiper slider js
  var swiper = new Swiper('.services-main', {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 500,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  // service swiper slider js
  var swiper = new Swiper('.client-slider', {
    slidesPerView: 5,
    spaceBetween: 24,
    speed: 500,
  });

  // back to top js
  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 0);
  });

  // gallery popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });


});

//# sourceMappingURL=custom.js.map