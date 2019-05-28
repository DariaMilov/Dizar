$(function () {


  /*-------------------------------------------
  Load Page
  ---------------------------------------------*/

  $('body').waitForImages({
    finished: function () {
      Website();
      //$('body').jKit();
    },
    waitForAll: true
  });

  
  $('#button, #buttons').on('click', function () {
    $(".opacity-nav").fadeToggle("slow", "linear");
  });

  /*-------------------------------------------
  Load Page - next Open Site
  ---------------------------------------------*/

  function Website() {
    CheckScripts();
    Masonry();
    $('body').jKit();
    backgroundmenu();
    setTimeout(function () {
      $(".preloader").fadeOut(500);
    }, 2000);
    setTimeout(function () {
      $('header').fadeIn();
    }, 500);
  }


  /*-------------------------------------------
  Init and check list scripts
  ---------------------------------------------*/

  function CheckScripts() {

    $(document).ready(function () {
      preloaderCheck();
      Typewriting();
      sidebarhero();
    });

  }


  /*-------------------------------------------
  Masonry Check Script
  ---------------------------------------------*/

  function Masonry() {
    var $container = $('.portfolio-grid');

    $container.imagesLoaded(function () {
      $container.masonry({
        //columnWidth: 200,
        itemSelector: 'li'
      });
    });
  }


  /*-------------------------------------------
  Multi purpose init Background menu
  ---------------------------------------------*/

  function backgroundmenu() {

    $(document).ready(function () {
      if ($("#header-fade").length) {

        $(window).scroll(function () {
          if ($(this).scrollTop() > 10) {
            $('header').fadeOut();
          } else {
            $('header').fadeIn();
          }
        });
      }

      if ($("#header-white").length) {

        $(window).scroll(function () {
          if ($(this).scrollTop() > 10) {
            $('header').css("background", "white");
            $('header .logo > a').css("borderBottom", "0");

          } else {
            $('header').css("background", "none");
          }
        });
      }


    });

  }

  /*-------------------------------------------
  Typewriting init script
  ---------------------------------------------*/

  function Typewriting() {


    $(document).ready(function () {
      setTimeout(function () {
        if ($("#site-type").length) {
          $(".typewrite span").typed({
            strings: ["НАРУЖНАЯ РЕКЛАМА", "ДИЗАЙН", "ПЛАСТИКОВЫЕ КАРТЫ", "ПОЛИГРАФИЯ", "МАРКЕТИНГ", "МЕДИА-УСЛУГИ", "ПОРТФОЛИО"],
            typeSpeed: 100,
            backDelay: 500,
            loop: false,
            contentType: 'html', // or text
            callback: function () {
              var element = document.querySelector(".typewrite span");
              var parent = element.parentNode;
              var wrapper = document.createElement('a');
              wrapper.text = "";
              wrapper.href = "projects.html";
              wrapper.className = "for.link";

              // set the wrapper as child (instead of the element)
              parent.replaceChild(wrapper, element);
              // set element as child of wrapper
              wrapper.appendChild(element);
            },
            // defaults to false for infinite loop
            loopCount: false,
          });
        }
      }, 3000);
    });
  }

  /*-------------------------------------------
  Amazing Fade with scroll Sidebar
  ---------------------------------------------*/

  function sidebarhero() {

    if ($("#hero").length) {
      var fadeStart = 100, fadeUntil = 800, fading = $('#hero');

      $(window).bind('scroll', function () {
        var offset = $(document).scrollTop()
          , opacity = 0
          ;
        if (offset <= fadeStart) {
          opacity = 1;
        } else if (offset <= fadeUntil) {
          opacity = 1 - offset / fadeUntil;
        }
        fading.css('opacity', opacity);
      });
    }
  }


  /*-------------------------------------------
  Check Preloader
  ---------------------------------------------*/

  function preloaderCheck() {
    showPreloader();
    $(window).load(function () {
      hidePreloader();
    });
  }

  /*-------------------------------------------
  Functions Show / Hide Preloader
  ---------------------------------------------*/

  function showPreloader() {
    $(".preloader").fadeIn("slow");
  }

  function hidePreloader() {
    $(".preloader").delay(2000).fadeOut("slow");
  }



})//End