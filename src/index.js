import { refs } from './js/refs.js';
import { observer } from './js/counter.js';
import { swiper } from './js/swiper.js';
import { questionClick } from './js/spoiler.js';
import { formSubmit } from './js/contacts.js';
import { removeLoader } from './js/loader.js';

observer.observe(refs.numbList);

refs.questions.forEach(e => {
    e.addEventListener("click", questionClick)
});

refs.form.addEventListener("submit", formSubmit)

setTimeout(removeLoader, 5000)

let inactivityTimer;
function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        window.close(); 
    }, 60000); 
}
resetInactivityTimer();
document.addEventListener('mousemove', resetInactivityTimer);
document.addEventListener('mousedown', resetInactivityTimer);
document.addEventListener('keypress', resetInactivityTimer);