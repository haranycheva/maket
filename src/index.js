import { refs } from './js/refs.js';
import { observer } from './js/counter.js';
import { swiper } from './js/swiper.js';

observer.observe(refs.numbList);
console.dir(observer);