!function(){var e={numbList:document.querySelector("#numb-list-js"),numbers:document.querySelectorAll(".number-js"),questions:document.querySelectorAll(".question-js")};function t(e){gsap.to(e,{duration:1.5,innerHTML:e.dataset.max,roundProps:"innerHTML"})}var n=new IntersectionObserver((function(n,s){n.forEach((function(n){n.isIntersecting&&function(){var n=!0,s=!1,i=void 0;try{for(var r,o=e.numbers[Symbol.iterator]();!(n=(r=o.next()).done);n=!0)t(r.value)}catch(e){s=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(s)throw i}}}();var s=!0,i=!1,r=void 0;if(!n.isIntersecting)try{for(var o,c=e.numbers[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){o.value.innerHTML="0"}}catch(e){i=!0,r=e}finally{try{s||null==c.return||c.return()}finally{if(i)throw r}}}))}));new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:50});function s(t){var n=t.currentTarget;e.questions.forEach((function(e){e.classList.contains("active-js")&&(e.classList.remove("active-js"),e.nextElementSibling.classList.remove("visible-js"))})),n.classList.toggle("active-js"),n.nextElementSibling.classList.toggle("visible-js");var s=n.closest("ul");e.questions.some((function(e){return e.classList.contains("active-js")}))?s.classList.contains("active-question-js")||s.classList.add("active-question-js"):s.classList.remove("active-question-js")}n.observe(e.numbList),console.dir(n),console.log(e.questions),e.questions.forEach((function(e){e.addEventListener("click",s)}))}();
//# sourceMappingURL=index.0998b5e1.js.map
