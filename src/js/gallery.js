import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';

const prevBtn = document.querySelector('.gallery-btn-prev');
const nextBtn = document.querySelector('.gallery-btn-next');

function updateButtons(swiper) {
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}


const swiper = new Swiper('.gallery-swiper', {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 70,
  navigation: {
    nextEl: '.gallery-btn-next',
    prevEl: '.gallery-btn-prev',
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
