import { refs } from './refs.js';

export function questionClick(e) {
  const target = e.currentTarget;
  refs.questions.forEach(e => {
    if (e.classList.contains('active-js')) {
      e.classList.remove('active-js');
      e.nextElementSibling.classList.remove('visible-js');
    }
  });
  target.classList.toggle('active-js');
  target.nextElementSibling.classList.toggle('visible-js');
  const ul = target.closest('ul');
  if (
    refs.questions.some(e => {
      return e.classList.contains('active-js');
    })
  ) {
    ul.classList.contains('active-question-js')
      ? ''
      : ul.classList.add('active-question-js');
  } else {
    ul.classList.remove('active-question-js');
  }
}
