import { refs } from './js/refs.js';
import { observer } from './js/counter.js';
import { swiper } from './js/swiper.js';
import { questionClick } from './js/spoiler.js';
import { formSubmit } from './js/contacts.js';

observer.observe(refs.numbList);

refs.questions.forEach(e => {
    e.addEventListener("click", questionClick)
});

refs.form.addEventListener("submit", formSubmit)