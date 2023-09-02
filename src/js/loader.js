import { refs } from './refs.js';

export function removeLoader(){
   refs.loader.classList.add("is-hidden")
   refs.body.classList.remove("body-none-scroll")
}