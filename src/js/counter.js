import { refs } from './refs.js';

function count(numb) {
  gsap.to(numb, {
    duration: 1.5, // тривалість
    innerHTML: numb.dataset.max, // до якого моменту іде анім
    roundProps: 'innerHTML', // які властивості округлювати до цілих
  });
}

function startCount() {
  for (const numb of refs.numbers) {
    count(numb);
  }
}

export const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCount();
    }
    if (!entry.isIntersecting) {
      for (const numb of refs.numbers) {
        numb.innerHTML = '0';
      }
    }
  });
});
