const s={numbList:document.querySelector("#numb-list-js"),numbers:document.querySelectorAll(".number-js"),questions:document.querySelectorAll(".question-js")};function e(s){gsap.to(s,{duration:1.5,innerHTML:s.dataset.max,roundProps:"innerHTML"})}const t=new IntersectionObserver(((t,n)=>{t.forEach((t=>{if(t.isIntersecting&&function(){for(const t of s.numbers)e(t)}(),!t.isIntersecting)for(const e of s.numbers)e.innerHTML="0"}))}));new Swiper(".swiper",{slidesPerView:"auto",spaceBetween:50});function n(e){const t=e.currentTarget;s.questions.forEach((s=>{s.classList.contains("active-js")&&!t.classList.contains("active-js")&&(s.classList.remove("active-js"),s.nextElementSibling.classList.remove("visible-js"))})),t.classList.toggle("active-js"),t.nextElementSibling.classList.toggle("visible-js");const n=t.closest("ul");t.classList.contains("active-js")?n.classList.add("active-question-js"):n.classList.remove("active-question-js")}t.observe(s.numbList),s.questions.forEach((s=>{s.addEventListener("click",n)}));
//# sourceMappingURL=index.6c1b90a8.js.map