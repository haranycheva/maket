!function(){var e={numbList:document.querySelector("#numb-list-js"),numbers:document.querySelectorAll(".number-js"),questions:document.querySelectorAll(".question-js"),form:document.forms.form,loader:document.querySelector(".loader-js"),body:document.querySelector("body")};function t(e){gsap.to(e,{duration:1.5,innerHTML:e.dataset.max,roundProps:"innerHTML"})}var s=new IntersectionObserver((function(s,n){s.forEach((function(s){s.isIntersecting&&function(){var s=!0,n=!1,r=void 0;try{for(var o,i=e.numbers[Symbol.iterator]();!(s=(o=i.next()).done);s=!0)t(o.value)}catch(e){n=!0,r=e}finally{try{s||null==i.return||i.return()}finally{if(n)throw r}}}();var n=!0,r=!1,o=void 0;if(!s.isIntersecting)try{for(var i,a=e.numbers[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){i.value.innerHTML="0"}}catch(e){r=!0,o=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}}))}));new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:50});function n(t){var s=t.currentTarget;e.questions.forEach((function(e){e.classList.contains("active-js")&&!s.classList.contains("active-js")&&(e.classList.remove("active-js"),e.nextElementSibling.classList.remove("visible-js"))})),s.classList.toggle("active-js"),s.nextElementSibling.classList.toggle("visible-js");var n=s.closest("ul");s.classList.contains("active-js")?n.classList.add("active-question-js"):n.classList.remove("active-question-js")}var r={save:function(e,t){var s=JSON.stringify(e);return localStorage.setItem(t,s)},load:function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):void 0}},o=/^[а-яА-ЯїЇєЄіІґҐ ]+$/;s.observe(e.numbList),e.questions.forEach((function(e){e.addEventListener("click",n)})),e.form.addEventListener("submit",(function(t){t.preventDefault();var s=e.form.elements,n=s.name.value.trim(),i=s.contact.value.trim(),a=!0;console.log(!n.match(o)),n.match(o)&&n&&n.includes(" ")||(a=!1,s.name.classList.add("err-js")),i||(a=!1,s.contact.classList.add("err-js")),a&&(r.save(n,"name"),r.save(i,"contact"),s.contact.classList.remove("err-js"),s.name.classList.remove("err-js")),e.form.reset()})),setTimeout((function(){e.loader.classList.add("is-hidden"),e.body.classList.remove("body-none-scroll")}),5e3)}();
//# sourceMappingURL=index.577c9b80.js.map
