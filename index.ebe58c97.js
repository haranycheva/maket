!function(){var e={numbList:document.querySelector("#numb-list-js"),numbers:document.querySelectorAll(".number-js"),questions:document.querySelectorAll(".question-js"),form:document.forms.form,loader:document.querySelector(".loader-js"),body:document.querySelector("body")};function t(e){gsap.to(e,{duration:1.5,innerHTML:e.dataset.max,roundProps:"innerHTML"})}var n=new IntersectionObserver((function(n,s){n.forEach((function(n){n.isIntersecting&&function(){var n=!0,s=!1,r=void 0;try{for(var o,i=e.numbers[Symbol.iterator]();!(n=(o=i.next()).done);n=!0)t(o.value)}catch(e){s=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(s)throw r}}}();var s=!0,r=!1,o=void 0;if(!n.isIntersecting)try{for(var i,a=e.numbers[Symbol.iterator]();!(s=(i=a.next()).done);s=!0){i.value.innerHTML="0"}}catch(e){r=!0,o=e}finally{try{s||null==a.return||a.return()}finally{if(r)throw o}}}))}));new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:50});function s(t){var n=t.currentTarget;e.questions.forEach((function(e){e.classList.contains("active-js")&&!n.classList.contains("active-js")&&(e.classList.remove("active-js"),e.nextElementSibling.classList.remove("visible-js"))})),n.classList.toggle("active-js"),n.nextElementSibling.classList.toggle("visible-js");var s=n.closest("ul");n.classList.contains("active-js")?s.classList.add("active-question-js"):s.classList.remove("active-question-js")}var r,o={save:function(e,t){var n=JSON.stringify(e);return localStorage.setItem(t,n)},load:function(e){return localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):void 0}},i=/^[а-яА-ЯїЇєЄіІґҐ ]+$/;function a(){clearTimeout(r),r=setTimeout((function(){window.close()}),6e4)}n.observe(e.numbList),e.questions.forEach((function(e){e.addEventListener("click",s)})),e.form.addEventListener("submit",(function(t){t.preventDefault();var n=e.form.elements,s=n.name.value.trim(),r=n.contact.value.trim(),a=!0;console.log(!s.match(i)),s.match(i)&&s&&s.includes(" ")||(a=!1,n.name.classList.add("err-js")),r||(a=!1,n.contact.classList.add("err-js")),a&&(o.save(s,"name"),o.save(r,"contact"),n.contact.classList.remove("err-js"),n.name.classList.remove("err-js")),e.form.reset()})),setTimeout((function(){e.loader.classList.add("is-hidden"),e.body.classList.remove("body-none-scroll")}),5e3),a(),document.addEventListener("mousemove",a),document.addEventListener("mousedown",a),document.addEventListener("keypress",a)}();
//# sourceMappingURL=index.ebe58c97.js.map
