$(() => {
  // eslint-disable-next-line
  const swiper = new Swiper('.services__slider > .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 15,
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      481: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  // eslint-disable-next-line
  const reviewsSwiper = new Swiper('.reviews__slider > .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // eslint-disable-next-line
  const photosSwiper = new Swiper('.photos', {
    slidesPerView: 'auto',
    spaceBetween: 6,
    breakpoints: {
      1025: {
        spaceBetween: 17,
      },
    },
  });

  $('.photos').lightGallery({
    selector: '.photos__item',
    counter: false,
    download: false,
  });
});
