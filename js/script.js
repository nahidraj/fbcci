$(function () {
  "use strict";

  function handlePreloader() {
    if ($(".loader-wrap").length) {
      $(".loader-wrap").delay(800).fadeOut(500);
    }
    TweenMax.to($(".loader-wrap .overlay"), 1.2, {
      force3D: true,
      left: "100%",
      ease: Expo.easeInOut,
    });
  }

  $(window).on("load", function () {
    setTimeout(() => {
      handlePreloader();
    }, 0);
  });


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
      delay: 8000,
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
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
        resistanceRatio: 0
      }
    },
  });


  // service swiper slider js
  // var swiper = new Swiper('.client-slider', {
  //   slidesPerView: 5,
  //   spaceBetween: 24,
  //   speed: 500,
  // });

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

  // event calender js
  $('.calendar').pignoseCalendar();


  // window.onload = function () {
  //   var popup = document.querySelector('.popup');
  //   var skipButton = document.querySelector('.skip');

  //   skipButton.addEventListener('click', closePopup);
  //   popup.addEventListener('click', closePopupOutside);

  //   function closePopup() {
  //     popup.style.display = 'none';
  //     document.body.style.overflow = 'auto';
  //   }

  //   function closePopupOutside(event) {
  //     if (event.target === popup) {
  //       closePopup();
  //     }
  //   }

  //   document.body.style.overflow = 'hidden';
  // };

  // fixed menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('.sticky-top').addClass('shadow-lg').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-lg').css('top', '-100px');
    }
  });


  // mobile menu js
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .icon i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });



  $('.moreless-button').click(function () {
    $('.moretext').slideToggle();
  });



  // window.onload = function () {
  //   var popup = document.querySelector('.popup');
  //   var skipButton = document.querySelector('.skip');

  //   skipButton.addEventListener('click', closePopup);
  //   popup.addEventListener('click', closePopupOutside);

  //   // Check if popup has been shown before
  //   var popupShown = localStorage.getItem('popupShown');

  //   if (!popupShown) {
  //     showPopup();
  //     localStorage.setItem('popupShown', 'true');
  //   } else {
  //     // Popup has been shown before, hide it and enable scrolling
  //     popup.style.display = 'none';
  //     document.body.style.overflow = 'auto';
  //   }

  //   function showPopup() {
  //     document.body.style.overflow = 'hidden';
  //     popup.style.display = 'flex';
  //   }

  //   function closePopup() {
  //     popup.style.display = 'none';
  //     document.body.style.overflow = 'auto';
  //   }

  //   function closePopupOutside(event) {
  //     if (event.target === popup) {
  //       closePopup();
  //     }
  //   }
  // };


});

//# sourceMappingURL=custom.js.map