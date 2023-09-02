import { refs } from './refs.js';
import localStorage from './localStorage.js';
import { KEY__NAME } from './localStorage.js';
import { KEY__CONTACT } from './localStorage.js';

const uaLetters = /^[а-яА-ЯїЇєЄіІґҐ ]+$/;

export function formSubmit(e) {
  e.preventDefault();
  const inputs = refs.form.elements;
  const nameInput = inputs.name.value.trim();
  const contactInput = inputs.contact.value.trim();
  let checked = true;

  console.log(!nameInput.match(uaLetters))

  if (!nameInput.match(uaLetters) || !nameInput || !nameInput.includes(" ")) {
    checked = false;
    inputs.name.classList.add("err-js");
  }

  if(!contactInput){
    checked = false;
    inputs.contact.classList.add("err-js");
  }

  if(checked){
    localStorage.save(nameInput, KEY__NAME)
    localStorage.save(contactInput, KEY__CONTACT)
    inputs.contact.classList.remove("err-js");
    inputs.name.classList.remove("err-js");
  }

  refs.form.reset()
}
