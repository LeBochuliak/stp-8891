import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const prevBtn = document.querySelector('.left-rev-button');
const nextBtn = document.querySelector('.right-rev-button');

function updateButtons(swiper) {
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

const swiper = new Swiper('.main-characters-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.right-rev-button',
    prevEl: '.left-rev-button',
  },
  breakpoints: {
    1200: {
      slidesPerView: 1,
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