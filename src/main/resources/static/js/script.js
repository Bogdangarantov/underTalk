document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("upper-line");const n=document.getElementById("glider-card-image");var e=document.getElementById("line"),l=parseInt(window.getComputedStyle(e).width);const o=document.getElementById("glider-card-text-1"),m=document.getElementById("glider-card-text-2"),i=document.getElementById("glider-card");setInterval(function(){document.documentElement.clientWidth;var e=parseInt(window.getComputedStyle(t).width),e=Number(e/l*100);0<=e&&e<=33?(i.style.backgroundColor="#A3E3EA",o.innerHTML="Збільшимо середній чек мінімум у 2 рази",m.innerHTML="Наші стратегії Up-Sell і Cross-Sell максимально стимулюють покупки через індивідуальні підходи до асортименту",n.src="./img/glider-card-1.webp"):33<=e&&e<=66?(i.style.backgroundColor="#FFE99C",o.innerHTML="Підвищимо апрув до 95%",m.innerHTML="Наша команда розробляє індивідуальні багаторівневі скрипти для кожного товару. Готові опрацювати будь-які заперечення.",n.src="./img/glider-card-2.webp"):66<=e&&e<=100&&(i.style.backgroundColor="#BE8AFF",o.innerHTML="Персональний менеджер 24/7",m.innerHTML="Отримайте персонального менеджера, який буде на зв’язку 24/7, починаючи з моменту початку співпраці з нашим колл-центром.",n.src="./img/glider-card-3.webp")},50),setInterval(function(){if(991<=document.documentElement.clientWidth){let e=document.getElementById("welcome-pop-up");"block"!==e.style.display&&"none"!==e.style.display&&(e.style.display="block")}else{let e=document.getElementById("welcome-pop-up-mini");"block"!==e.style.display&&"none"!==e.style.display&&(e.style.display="block")}},3e4)});let isScrolling;document.addEventListener("scroll",function(){const e=document.getElementById("prefferences"),t=document.getElementById("consultation-container");var n=e.getBoundingClientRect().top,l=window.innerHeight;t.style.display=n<=l?"block":"none";const o=document.querySelector("#consultation-button");o.classList.add("ring-animation"),clearTimeout(isScrolling),isScrolling=setTimeout(function(){o.classList.remove("ring-animation")},1e3)});let header=document.getElementById("under-talk-header");const navbar=document.getElementById("navbarNav");navbar.addEventListener("show.bs.collapse",()=>{navbar.classList.contains("nav-color")||header.classList.add("nav-color"),navbar.style.transitionDuration="1000ms"}),navbar.addEventListener("hide.bs.collapse",()=>{navbar.style.transitionDuration="1000ms",header.classList.contains("nav-color")&&(console.log("WATCHING"),header.classList.remove("nav-color"))});let billing1=document.getElementById("billing-1");billing1.addEventListener("click",function(){console.log("HEHEHEHe")});let submit_button_form_1=document.getElementById("submit-form-1");submit_button_form_1.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("form-input-name-1"),n=document.getElementById("input-phone-1");fetchIt(t.value,n.value),t.value="",n.value=""});let submit_button_form_2=document.getElementById("submit-form-2");submit_button_form_2.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("form-input-name-2"),n=document.getElementById("input-phone-2");fetchIt(t.value,n.value),t.value="",n.value=""});let submit_button_form_3=document.getElementById("submit-form-mini-1");submit_button_form_3.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("form-input-name-mini-1"),n=document.getElementById("input-phone-mini-1");fetchIt(t.value,n.value),t.value="",n.value=""});let submit_button_form_4=document.getElementById("submit-form-mini-2");submit_button_form_4.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("form-input-name-mini-2"),n=document.getElementById("input-phone-mini-2");fetchIt(t.value,n.value),t.value="",n.value=""});let submit_recall_popup_form=document.getElementById("form-recall-button");submit_recall_popup_form.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("contact-form-name"),n=document.getElementById("contact-form-phone");fetchIt(t.value,n.value),t.value="",n.value=""});const prefferences=document.getElementById("prefferences-scroll");prefferences.addEventListener("click",()=>{location.href="#prefferences"});const prefferences1=document.getElementById("prefferences-scroll1");prefferences1.addEventListener("click",()=>{location.href="#prefferences"});const profit=document.getElementById("profit-scroll");profit.addEventListener("click",()=>{location.href="#profit"});const profit1=document.getElementById("profit-scroll1");profit1.addEventListener("click",()=>{location.href="#profit"});const reviews=document.getElementById("reviews-scroll");reviews.addEventListener("click",()=>{location.href="#reviews"});const reviews1=document.getElementById("reviews-scroll1");reviews1.addEventListener("click",()=>{location.href="#reviews"});const cases=document.getElementById("cases-scroll");cases.addEventListener("click",()=>{location.href="#cases"});const cases1=document.getElementById("cases-scroll1");cases1.addEventListener("click",()=>{location.href="#cases"});const billings=document.getElementById("billings-scroll");billings.addEventListener("click",()=>{location.href="#billings"});const billings1=document.getElementById("billings-scroll1");billings1.addEventListener("click",()=>{location.href="#billings"});const work_with_us_1=document.getElementById("work-with-us-1");work_with_us_1.addEventListener("click",()=>{991<=document.documentElement.clientWidth?location.href="#form-1":location.href="#form-1-mini"});const work_with_us_2=document.getElementById("work-with-us-2");work_with_us_2.addEventListener("click",()=>{991<=document.documentElement.clientWidth?location.href="#form-1":location.href="#form-1-mini"});const work_with_us_3=document.getElementById("work-with-us-3");work_with_us_3.addEventListener("click",()=>{991<=document.documentElement.clientWidth?location.href="#form-1":location.href="#form-1-mini"});const work_with_us_3_mini=document.getElementById("work-with-us-footer-mini");work_with_us_3_mini.addEventListener("click",()=>{location.href="#form-2"});let closeWelcomePopUp=document.getElementById("close-welcome-popup");closeWelcomePopUp.addEventListener("click",function(){if(991<=document.documentElement.clientWidth){let e=document.getElementById("welcome-pop-up");e.style.display="none"}});let closeWelcomePopUpForm=document.getElementById("close-welcome-popup-form");closeWelcomePopUpForm.addEventListener("click",function(){if(991<=document.documentElement.clientWidth){let e=document.getElementById("welcome-form");e.style.display="none"}else{let e=document.getElementById("welcome-form");e.style.display="none"}});let closeWelcomePopUpMini=document.getElementById("close-welcome-popup-mini");closeWelcomePopUpMini.addEventListener("click",function(){if(991<=document.documentElement.clientWidth){let e=document.getElementById("welcome-pop-up-mini");e.style.display="none"}});let stayOnSite=document.getElementById("stay-on-site-btn");stayOnSite.addEventListener("click",function(){let e=document.getElementById("welcome-pop-up");e.style.display="none"});var btn0=document.getElementById("billing-1"),span1=document.getElementsByClassName("close-modal-1"),span_mini1=document.getElementsByClassName("close-mini-1");btn0.onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-1").style.display="flex":document.getElementById("modal-1-mini").style.display="flex"};for(let e=0;e<span1.length;e++)span1[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-1").style.display="none":document.getElementById("modal-1-mini").style.display="none"};for(let e=0;e<span_mini1.length;e++)span_mini1[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-1").style.display="none":document.getElementById("modal-1-mini").style.display="none"};let submit_button_1=document.getElementById("submit-modal-form-1");submit_button_1.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-1");t.style.display="none";let n=document.getElementById("form-modal-input-name-1"),l=document.getElementById("input-modal-phone-1");fetch_tarif(n.value,l.value,"Базовий"),n.value="",l.value=""});let submit_button_1_mini=document.getElementById("submit-modal-form-mini-1");submit_button_1_mini.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-1-mini");t.style.display="none";let n=document.getElementById("form-modal-input-name-mini-1"),l=document.getElementById("input-modal-phone-mini-1");fetch_tarif(n.value,l.value,"Базовий"),n.value="",l.value=""});var btn1=document.getElementById("billing-2"),span2=document.getElementsByClassName("close-modal-2"),span2_mini=document.getElementsByClassName("close-mini-2");btn1.onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-2").style.display="flex":document.getElementById("modal-2-mini").style.display="flex"};for(let e=0;e<span1.length;e++)span1[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-2").style.display="none":document.getElementById("modal-2-mini").style.display="none"};for(let e=0;e<span2_mini.length;e++)span2_mini[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-2").style.display="none":document.getElementById("modal-2-mini").style.display="none"};let submit_button_2=document.getElementById("submit-modal-form-2");submit_button_2.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-2");t.style.display="none";let n=document.getElementById("form-modal-input-name-2"),l=document.getElementById("input-modal-phone-2");fetch_tarif(n.value,l.value,"Оптимальний"),n.value="",l.value=""});let submit_button_2_mini=document.getElementById("submit-modal-form-mini-2");submit_button_2_mini.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-2-mini");t.style.display="none";let n=document.getElementById("form-modal-input-name-mini-2"),l=document.getElementById("input-modal-phone-mini-2");fetch_tarif(n.value,l.value,"Оптимальний"),n.value="",l.value=""});var modal2=document.getElementById("modal-3"),btn2=document.getElementById("billing-3"),span3=document.getElementsByClassName("close-modal-3"),span_mini_3=document.getElementsByClassName("close-mini-3");btn2.onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-3").style.display="flex":document.getElementById("modal-3-mini").style.display="flex"};for(let e=0;e<span3.length;e++)span3[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-3").style.display="none":document.getElementById("modal-3-mini").style.display="none"};for(let e=0;e<span_mini_3.length;e++)span_mini_3[e].onclick=function(){991<=document.documentElement.clientWidth?document.getElementById("modal-3").style.display="none":document.getElementById("modal-3-mini").style.display="none"};let contact_manager=document.getElementById("contact-manager-btn"),welcome_form_modal=document.getElementById("welcome-form"),welcome_modal_mini=document.getElementById("welcome-pop-up-mini"),welcomeModal=document.getElementById("welcome-pop-up");contact_manager.onclick=function(){welcome_form_modal.style.display="block",welcomeModal.style.display="none"};let contact_manager_mini=document.getElementsByClassName("contact-manager-svg-button");for(let e=0;e<contact_manager_mini.length;e++)contact_manager_mini[e].onclick=function(){welcome_form_modal.style.display="block",welcomeModal.style.display="none",welcome_modal_mini.style.display="none"};let close_mini_popup=document.getElementsByClassName("close-welcome-popup");for(let e=0;e<close_mini_popup.length;e++)close_mini_popup[e].onclick=function(){welcome_form_modal.style.display="none",welcomeModal.style.display="none",welcome_modal_mini.style.display="none"};let submit_button_3=document.getElementById("submit-modal-form-3"),submit_button_mini_3=document.getElementById("submit-modal-form-mini-3");function fetch_tarif(n,l,o){if(""!==n&&""!==l)if(13!==l.length)alert("Введіть номер в форматі +380960001112");else{let e=document.getElementById("modal-success"),t=document.getElementById("modal-success-mini");991<=document.documentElement.clientWidth?e.style.display="flex":t.style.display="flex";o={name:n,phone:l,tariff:o};fetch("/tariff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).catch(e=>{console.error(e)})}else alert("Заповніть будь ласка усі поля")}submit_button_3.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-3");t.style.display="none";let n=document.getElementById("form-modal-input-name-3"),l=document.getElementById("input-modal-phone-3");fetch_tarif(n.value,l.value,"Преміум"),n.value="",l.value=""}),submit_button_mini_3.addEventListener("click",function(e){e.preventDefault();let t=document.getElementById("modal-3-mini");t.style.display="none";let n=document.getElementById("form-modal-input-name-mini-3"),l=document.getElementById("input-modal-phone-mini-3");fetch_tarif(n.value,l.value,"Преміум"),n.value="",l.value=""}),window.onclick=function(e){var t=document.getElementById("modal-1"),n=document.getElementById("modal-2"),l=document.getElementById("modal-3"),o=document.getElementById("modal-1-mini"),m=document.getElementById("modal-2-mini"),i=document.getElementById("modal-3-mini"),d=document.getElementById("modal-success"),c=document.getElementById("modal-success-img"),s=document.getElementById("modal-success-mini"),a=document.getElementById("model-success-mini-svg"),u=document.getElementById("welcome-form");e.target==t&&(t.style.display="none"),e.target==n&&(n.style.display="none"),e.target==l&&(l.style.display="none"),e.target==o&&(o.style.display="none"),e.target==m&&(m.style.display="none"),e.target==i&&(i.style.display="none"),e.target==d&&(d.style.display="none"),e.target==c&&(d.style.display="none"),e.target==s&&(s.style.display="none"),e.target==a&&(s.style.display="none"),e.target==u&&(u.style.display="none")};let consultation_toggle=document.getElementById("consultation-button");function toggleButtons(){const e=document.querySelector(".extra-buttons");"none"===e.style.display||""===e.style.display?e.style.display="flex":e.style.display="none"}function fetchIt(l,o){if(console.log(l,o),""!==l&&""!==o)if(13!==o.length)alert("Введіть номер в форматі +380960001112");else{let e=document.getElementById("welcome-form");e.style.display="none";let t=document.getElementById("modal-success"),n=document.getElementById("modal-success-mini");991<=document.documentElement.clientWidth?t.style.display="flex":n.style.display="flex";o={name:l,phone:o};fetch("/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).catch(e=>{console.error(e)})}else alert("Заповніть будь ласка усі поля")}consultation_toggle.onclick=function(){toggleButtons()};