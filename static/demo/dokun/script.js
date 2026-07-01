const IMAGES = [
  'mvs/Gemini_Generated_Image_g5xwvg5xwvg5xwvg.png',
  'mvs/Gemini_Generated_Image_jqw3p9jqw3p9jqw3.png',
  'mvs/Gemini_Generated_Image_nxlytnxlytnxlytn.png',
];
const SLIDE_DURATION_MS = 8000; // must match --slide-duration in style.css

const slideEls = document.querySelectorAll('.slide');
const zoomEls = document.querySelectorAll('.zoom-layer');
const pulseEls = document.querySelectorAll('.pulse-layer');

let activeIndex = 0;
let imageIndex = 0;

function restartZoom(el) {
  el.style.animation = 'none';
  void el.offsetWidth; // force reflow so the animation restarts from 0%
  el.style.animation = '';
}

function showImageOn(slideIndex, imageSrc) {
  pulseEls[slideIndex].style.backgroundImage = `url('${imageSrc}')`;
  restartZoom(zoomEls[slideIndex]);
}

function advanceSlide() {
  const nextIndex = 1 - activeIndex;
  imageIndex = (imageIndex + 1) % IMAGES.length;
  showImageOn(nextIndex, IMAGES[imageIndex]);
  slideEls[nextIndex].classList.add('visible');
  slideEls[activeIndex].classList.remove('visible');
  activeIndex = nextIndex;
}

function scheduleBeat() {
  const delay = 2500 + Math.random() * 4500; // irregular interval: 2.5s - 7s
  setTimeout(() => {
    const layer = pulseEls[activeIndex];
    layer.classList.remove('beat');
    void layer.offsetWidth;
    layer.classList.add('beat');
    scheduleBeat();
  }, delay);
}

showImageOn(0, IMAGES[imageIndex]);
slideEls[0].classList.add('visible');
setInterval(advanceSlide, SLIDE_DURATION_MS);
scheduleBeat();
