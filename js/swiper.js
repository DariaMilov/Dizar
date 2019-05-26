 var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      slidesPerGroup: 1,   
      preloadImages: false,
      lazy: true,
     
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 4
        },
        
        480: {
          slidesPerView: 3,
          spaceBetween: 6
        },
      
        768: {
          slidesPerView: 4,
          spaceBetween: 8
        },
        1023: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }
      , autoplay: {
        delay: 2000,
        disableOnInteraction: false
      },
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });