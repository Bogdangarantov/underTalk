document.addEventListener('DOMContentLoaded', function() {
      const upperLine = document.getElementById('upper-line');
      const gliderCardImage = document.getElementById('glider-card-image');
      const mainLine = document.getElementById("line")
      const mainLineWidth = parseInt(window.getComputedStyle(mainLine).width);
      const text1 = document.getElementById("glider-card-text-1")
      const text2 = document.getElementById("glider-card-text-2")
      const gliderCard = document.getElementById("glider-card")
       
      setInterval(function() {
        var width = document.documentElement.clientWidth;
          const upperLineWidth = parseInt(window.getComputedStyle(upperLine).width);
        const widthPercentage = Number((upperLineWidth/mainLineWidth) * 100)
        if (widthPercentage >= 0 && widthPercentage <=33) {
          gliderCard.style.backgroundColor = "#A3E3EA"
          text1.innerHTML = "Збільшимо середній чек мінімум у 2 рази"
          text2.innerHTML = "Наші стратегії Up-Sell і Cross-Sell максимально стимулюють покупки через індивідуальні підходи до асортименту"
          gliderCardImage.src = "./img/glider-card-1.png";
        } else if (widthPercentage >= 33 && widthPercentage <= 66) {
          gliderCard.style.backgroundColor = "#FFE99C"
          text1.innerHTML = "Підвищимо апрув до 95%"
          text2.innerHTML = "Наша команда розробляє індивідуальні багаторівневі скрипти для кожного товару. Готові опрацювати будь-які заперечення."
          gliderCardImage.src = "./img/glider-card-2.png";
        } else if (widthPercentage >= 66 && widthPercentage<= 100) {
          gliderCard.style.backgroundColor = "#BE8AFF"
          text1.innerHTML = "Персональний менеджер 24/7"
          text2.innerHTML = "Отримайте персонального менеджера, який буде на зв’язку 24/7, починаючи з моменту початку співпраці з нашим колл-центром."
          gliderCardImage.src = "./img/glider-card-3.png";
        }
      }, 50); // перевірка кожні 100 мілісекунд
      




});
let header = document.getElementById("under-talk-header")
const navbar = document.getElementById('navbarNav');

navbar.addEventListener('show.bs.collapse', () => {
  if(!navbar.classList.contains("nav-color")){
        header.classList.add("nav-color")
      } 
  navbar.style.transitionDuration = '1000ms';
});

navbar.addEventListener('hide.bs.collapse', () => {
  navbar.style.transitionDuration = '1000ms';
  if(header.classList.contains("nav-color")){
    console.log("WATCHING")
    header.classList.remove("nav-color")
  } 
});

let billing1 = document.getElementById("billing-1")
billing1.addEventListener("click",function(){
    console.log("HEHEHEHe")

})
//FORMS 

let submit_button_form_1 = document.getElementById("submit-form-1")
submit_button_form_1.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-input-name-1")
  let input_phone_1 = document.getElementById("input-phone-1")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})
let submit_button_form_2 = document.getElementById("submit-form-2")
submit_button_form_2.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-input-name-2")
  let input_phone_1 = document.getElementById("input-phone-2")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})
let submit_button_form_3 = document.getElementById("submit-form-mini-1")
submit_button_form_3.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-input-name-mini-1")
  let input_phone_1 = document.getElementById("input-phone-mini-1")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})
let submit_button_form_4 = document.getElementById("submit-form-mini-2")
submit_button_form_4.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-input-name-mini-2")
  let input_phone_1 = document.getElementById("input-phone-mini-2")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})

// Scrolls

const prefferences = document.getElementById("prefferences-scroll");
prefferences.addEventListener("click", () => {
  location.href = "#prefferences"
});
const prefferences1 = document.getElementById("prefferences-scroll1");
prefferences1.addEventListener("click", () => {
  location.href = "#prefferences"
});



const profit = document.getElementById("profit-scroll");
profit.addEventListener("click", () => {
  location.href = "#profit"
});
const profit1 = document.getElementById("profit-scroll1");
profit1.addEventListener("click", () => {
  location.href = "#profit"
});



const reviews = document.getElementById("reviews-scroll");
reviews.addEventListener("click", () => {
  location.href = "#reviews"
});
const reviews1 = document.getElementById("reviews-scroll1");
reviews1.addEventListener("click", () => {
  location.href = "#reviews"
});



const cases = document.getElementById("cases-scroll");
cases.addEventListener("click", () => {
  location.href = "#cases"
});
const cases1 = document.getElementById("cases-scroll1");
cases1.addEventListener("click", () => {
  location.href = "#cases"
});


const billings = document.getElementById("billings-scroll");
billings.addEventListener("click", () => {
  location.href = "#billings"
});

const billings1 = document.getElementById("billings-scroll1");
billings1.addEventListener("click", () => {
  location.href = "#billings"
});



const work_with_us_1 = document.getElementById("work-with-us-1");
work_with_us_1.addEventListener("click", () => {
  location.href = "#form-1"
});
const work_with_us_2 = document.getElementById("work-with-us-2");
work_with_us_2.addEventListener("click", () => {
  location.href = "#form-1"
});
const work_with_us_3 = document.getElementById("work-with-us-3");
work_with_us_3.addEventListener("click", () => {
  location.href = "#form-2"
});



// MODALS


var btn0 = document.getElementById("billing-1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-modal-1");
var span_mini1= document.getElementsByClassName("close-mini-1");
btn0.onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-1");
    modal.style.display = "flex";
  }else{
    var modal = document.getElementById("modal-1-mini");
    modal.style.display = "flex";
  }
  
}

for (let i = 0 ; i < span1.length;i++){
  span1[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-1");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-1-mini");
    modal.style.display = "none";
  }
  }
}
for (let i = 0 ; i < span_mini1.length;i++){
  span_mini1[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-1");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-1-mini");
    modal.style.display = "none";
  }
  }
}




let submit_button_1 = document.getElementById("submit-modal-form-1")
submit_button_1.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-modal-input-name-1")
  let input_phone_1 = document.getElementById("input-modal-phone-1")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})

let submit_button_1_mini = document.getElementById("submit-modal-form-mini-1")
submit_button_1_mini.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_1 = document.getElementById("form-modal-input-name-mini-1")
  let input_phone_1 = document.getElementById("input-modal-phone-mini-1")
  fetchIt(input_name_1.value,input_phone_1.value)
  input_name_1.value = ""
  input_phone_1.value = ""
})







var btn1 = document.getElementById("billing-2");
var span2 = document.getElementsByClassName("close-modal-2");
var span2_mini = document.getElementsByClassName("close-mini-2");

btn1.onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-2");
    modal.style.display = "flex";
  }else{
    var modal = document.getElementById("modal-2-mini");
    modal.style.display = "flex";
  }
}


for (let i = 0 ; i < span1.length;i++){
  span1[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-2");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-2-mini");
    modal.style.display = "none";
  }
  }
}

for (let i = 0 ; i < span2_mini.length;i++){
  span2_mini[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-2");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-2-mini");
    modal.style.display = "none";
  }
  }
}


let submit_button_2 = document.getElementById("submit-modal-form-2")
submit_button_2.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_2 = document.getElementById("form-modal-input-name-2")
  let input_phone_2 = document.getElementById("input-modal-phone-2")
  fetchIt(input_name_2.value,input_phone_2.value)
  input_name_2.value = ""
  input_phone_2.value = ""
})

let submit_button_2_mini = document.getElementById("submit-modal-form-mini-2")
submit_button_2.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_2 = document.getElementById("form-modal-input-name-mini-2")
  let input_phone_2 = document.getElementById("input-modal-phone-mini-2")
  fetchIt(input_name_2.value,input_phone_2.value)
  input_name_2.value = ""
  input_phone_2.value = ""
})

  


var modal2 = document.getElementById("modal-3");
var btn2 = document.getElementById("billing-3");
var span3 = document.getElementsByClassName("close-modal-3");
var span_mini_3 = document.getElementsByClassName("close-mini-3");
btn2.onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-3");
    modal.style.display = "flex";
  }else{
    var modal = document.getElementById("modal-3-mini");
    modal.style.display = "flex";
  }
}


for (let i = 0 ; i < span3.length;i++){
  span3[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-3");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-3-mini");
    modal.style.display = "none";
  }
  }
}
for (let i = 0 ; i < span_mini_3.length;i++){
  span_mini_3[i].onclick = function() {
  if (document.documentElement.clientWidth>=991) {
    var modal = document.getElementById("modal-3");
    modal.style.display = "none";
  }else{
    var modal = document.getElementById("modal-3-mini");
    modal.style.display = "none";
  }
  }
}



let submit_button_3 = document.getElementById("submit-modal-form-3")
let submit_button_mini_3 = document.getElementById("submit-modal-form-mini-3")

submit_button_3.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_3 = document.getElementById("form-modal-input-name-3")
  let input_phone_3 = document.getElementById("input-modal-phone-3")
  fetchIt(input_name_3.value,input_phone_3.value)
  input_name_3.value = ""
  input_phone_3.value = ""
})

submit_button_mini_3.addEventListener("click",function(event){
  event.preventDefault()
  let input_name_3 = document.getElementById("form-modal-input-name-mini-3")
  let input_phone_3 = document.getElementById("input-modal-phone-mini-3")
  fetchIt(input_name_3.value,input_phone_3.value)
  input_name_3.value = ""
  input_phone_3.value = ""
})
  

//submit-modal-form-1
//submit-modal-form-2
//submit-modal-form-3


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  var modal0 = document.getElementById("modal-1");
  var modal1 = document.getElementById("modal-2");
  var modal2 = document.getElementById("modal-3");
  var modal_mini_1 = document.getElementById("modal-1-mini");
  var modal_mini_2 = document.getElementById("modal-2-mini");
  var modal_mini_3 = document.getElementById("modal-3-mini");
  var modal_success = document.getElementById("modal-success");
  var modal_success_img = document.getElementById("modal-success-img");
  var modal_success_mini = document.getElementById("modal-success-mini");
  var modal_success_svg = document.getElementById("model-success-mini-svg");
  if (event.target == modal0) {
    modal0.style.display = "none";
  }
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal_mini_1) {
    modal_mini_1.style.display = "none";
  }
  if (event.target == modal_mini_2) {
    modal_mini_2.style.display = "none";
  }
  if (event.target == modal_mini_3) {
    modal_mini_3.style.display = "none";
  }
  if (event.target == modal_success) {
    modal_success.style.display = "none";
  }
  if (event.target == modal_success_img) {
    modal_success.style.display = "none";
  }
  if (event.target == modal_success_mini) {
    modal_success_mini.style.display = "none";
  }
  if (event.target == modal_success_svg) {
    modal_success_mini.style.display = "none";
  }

}

function fetchIt(name,phone){
  let modal_success = document.getElementById("modal-success")
  let modal_success_mini = document.getElementById("modal-success-mini")
  if (document.documentElement.clientWidth>=991) {
    modal_success.style.display = "flex";
  }else{
    modal_success_mini.style.display = "flex";
  }
  console.log(name)
  console.log(phone)

} 