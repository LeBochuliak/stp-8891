import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const prevBtn = document.querySelector('.left-rev-btn');
const nextBtn = document.querySelector('.right-rev-btn');

function updateButtons(swiper) {
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

const swiper = new Swiper('.reviews-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 70,
  navigation: {
    nextEl: '.right-rev-btn',
    prevEl: '.left-rev-btn',
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 3,
    },
  },
  on: {
    init() {
      updateButtons(this);
    },
    slideChange() {
      updateButtons(this);
    },
  },
});