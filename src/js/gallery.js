import Swiper from 'swiper';
import 'swiper/css';

const prevBtn = document.querySelector('.gallery-btn-prev');
const nextBtn = document.querySelector('.gallery-btn-next');

const gallerySwiper = new Swiper('.gallery-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 800,
  on: {
    slideChange: function () {
      prevBtn.disabled = gallerySwiper.isBeginning;
      nextBtn.disabled = gallerySwiper.isEnd;
    }
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
    }
  }
});

prevBtn.addEventListener('click', () => gallerySwiper.slidePrev());
nextBtn.addEventListener('click', () => gallerySwiper.slideNext());