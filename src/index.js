import Head from 'headjs/dist/1.0.0/head';
import Reveal from 'reveal.js';
import '../node_modules/reveal.js/css/reveal.css';
import '../node_modules/reveal.js/css/theme/white.css';
import './style.scss';

window.Reveal = Reveal;

Reveal.initialize({
  overview: false,
  viewDistance: 5,
  history: true,
  center: false,
  controls: false,
  controlsTutorial: false,
  progress: false,
  help: false,
  autoPlayMedia: true,
  mouseWheel: false,
  transition: 'slide',
  autoPlayMedia: true,
  dependencies: [
    { src: 'vendor/reveal-js-menu/menu.js' }
  ]
});

Reveal.addEventListener('fragmentshown', function(event) {
  let bgEl = document.getElementsByClassName('slide-background present')[1];
  bgEl.classList.add('text-focus');
});

Reveal.addEventListener('fragmenthidden', function(event) {
  let bgEl = document.getElementsByClassName('slide-background present')[1];
  bgEl.classList.remove('text-focus');
});

const pageScroll = (el) => {
  el.scrollBy(0, 1);
}
