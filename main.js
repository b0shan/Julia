(()=>{var e={628:()=>{}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var p=t[n]={exports:{}};return e[n](p,p.exports,o),p.exports}(()=>{"use strict";var e=document.querySelector("#card-template").content,t=document.querySelector(".places__list");function n(e){e.target.classList.toggle("card__like-button_is-active")}function r(e){e.target.closest(".card").remove()}function p(e){e.classList.add("popup_is-opened"),window.addEventListener("keydown",u)}function i(e){e.classList.remove("popup_is-opened"),window.removeEventListener("keydown",u)}function u(e){"Escape"===e.code&&i(document.querySelector(".popup_is-opened"))}var c=o(628),a=document.querySelector(".popup_type_image"),l=a.querySelector(".popup__image"),s=a.querySelector(".popup__caption"),d=document.querySelector(".profile__edit-button"),_=document.querySelector(".popup_type_edit"),f=document.querySelector(".profile__add-button"),m=document.querySelector(".popup_type_new-card"),x=document.querySelector(".popup__form"),w=x.querySelector(".popup__input_type_name"),y=x.querySelector(".popup__input_type_description"),b=document.querySelector(".profile__title"),v=document.querySelector(".profile__description"),q=document.querySelector(".popup_type_new-card .popup__form"),h=q.querySelector(".popup__input_type_card-name"),S=q.querySelector(".popup__input_type_url"),M=document.querySelectorAll(".popup");function D(o){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"prepend",i=function(t,o,n,r,p){var i=e.querySelector(".card").cloneNode(!0),u=i.querySelector(".card__delete-button"),c=i.querySelector(".card__image");return c.src=o,i.querySelector(".card__title").textContent=t,c.setAttribute("alt","Пейзаж ".concat(t)),i.querySelector(".card__like-button").addEventListener("click",n),u.addEventListener("click",r),c.addEventListener("click",(function(){return p({name:t,link:o})})),i}(o.name,o.link,n,r,H);t[p](i)}function H(e){l.src=e.link,l.alt=e.name,s.textContent=e.name,p(a)}[{name:"Хибины",link:"https://images.unsplash.com/photo-1694975785664-052748f87fc3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUQxJTg1JUQwJUI4JUQwJUIxJUQwJUI4JUQwJUJEJUQxJThCfGVufDB8fDB8fHww"},{name:"Красноярский край",link:"https://images.unsplash.com/photo-1597125760773-b0166e249ea7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Владивосток",link:"https://images.unsplash.com/photo-1563941433-b6a094653ed2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Камчатка",link:"https://images.unsplash.com/photo-1557094005-176cbfe3554d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"},{name:"Мурманская область",link:"https://images.unsplash.com/photo-1633974893032-aea04d1d17cd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fE11cm1hbnNrfGVufDB8fDB8fHww"},{name:"Байкал",link:"https://images.unsplash.com/photo-1584891686381-c099f8cbd70c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHJ1c3NpYXxlbnwwfHwwfHx8MA%3D%3D"}].forEach((function(e){D(e,"append")})),d.addEventListener("click",(function(){w.value=b.textContent,y.value=v.textContent,p(_)})),f.addEventListener("click",(function(){p(m)})),q.addEventListener("submit",(function(e){e.preventDefault(),D({name:h.value,link:S.value}),q.reset(),i(m)})),M.forEach((function(e){e.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_is-opened")||t.target.classList.contains("popup__close"))&&i(e)}))})),x.addEventListener("submit",(function(e){e.preventDefault();var t=w.value,o=y.value;b.textContent=t,v.textContent=o,i(_)})),(0,c.FormValidator)({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})()})();
//# sourceMappingURL=main.js.map