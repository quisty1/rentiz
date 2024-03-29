const burger = document.querySelector('.menu__icon'),
  menu = document.querySelector('.menu'),
  body = document.body,
  filter = document.querySelector('.filter');

if (burger && menu) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  })
}

if (filter) {
  const items = filter.querySelectorAll('.block-filter')

  items.forEach(item => {
    item.addEventListener('click', event => {
      item.querySelector('.block-filter__dropdown').classList.toggle('_active');
      item.querySelector('.block-filter__icon').classList.toggle('_active');

      if (event.target.classList.contains('block-filter__item')) {
        item.querySelector('.block-filter__value').textContent = event.target.textContent;
      }
    })
  })
}

const popularSlider = new Swiper('.popular-slider', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.popular-slider-next',
    prevEl: '.popular-slider-prev',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    660: {
      slidesPerView: 2,
    },
  }
});

const reviewsSlider = new Swiper('.slider-reviews', {
  spaceBetween: 20,
  slidesPerView: 1,
  autoHeight: true,
  navigation: {
    nextEl: '.slider-reviews-next',
    prevEl: '.slider-reviews-prev',
  },
});

const galleryItems = document.querySelectorAll('.gallery__item');

if (galleryItems.length > 0) {
  galleryItems.forEach(item => {
    new Swiper(item, {
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      effect: 'fade',
    })
  })
}