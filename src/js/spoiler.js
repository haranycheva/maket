import { refs } from './refs.js';

export function questionClick(e) {
  const target = e.currentTarget;
  target.classList.toggle('active');
  target.nextElementSibling.classList.toggle('visible');
  const ul = target.closest('ul');
  if(refs.questions.some(e => {
    return e.classList.contains("active")
  })){
    ul.classList.contains("active-question") ? "" : ul.classList.add("active-question")
  } else {
    ul.classList.remove("active-question")
  }
}
