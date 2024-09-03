document.addEventListener('DOMContentLoaded', function () {
    const upperLine = document.getElementById('upper-line');
    const gliderCardImage = document.getElementById('glider-card-image');
    const mainLine = document.getElementById("line")
    const mainLineWidth = parseInt(window.getComputedStyle(mainLine).width);
    const text1 = document.getElementById("glider-card-text-1")
    const text2 = document.getElementById("glider-card-text-2")
    const gliderCard = document.getElementById("glider-card")


    setInterval(function () {
        var width = document.documentElement.clientWidth;
        const upperLineWidth = parseInt(window.getComputedStyle(upperLine).width);
        const widthPercentage = Number((upperLineWidth / mainLineWidth) * 100)
        if (widthPercentage >= 0 && widthPercentage <= 33) {
            gliderCard.style.backgroundColor = "#A3E3EA"
            text1.innerHTML = "Збільшимо середній чек мінімум у 2 рази"
            text2.innerHTML = "Наші стратегії Up-Sell і Cross-Sell максимально стимулюють покупки через індивідуальні підходи до асортименту"
            gliderCardImage.src = "./img/glider-card-1.webp";
        } else if (widthPercentage >= 33 && widthPercentage <= 66) {
            gliderCard.style.backgroundColor = "#FFE99C"
            text1.innerHTML = "Підвищимо апрув до 95%"
            text2.innerHTML = "Наша команда розробляє індивідуальні багаторівневі скрипти для кожного товару. Готові опрацювати будь-які заперечення."
            gliderCardImage.src = "./img/glider-card-2.webp";
        } else if (widthPercentage >= 66 && widthPercentage <= 100) {
            gliderCard.style.backgroundColor = "#BE8AFF"
            text1.innerHTML = "Персональний менеджер 24/7"
            text2.innerHTML = "Отримайте персонального менеджера, який буде на зв’язку 24/7, починаючи з моменту початку співпраці з нашим колл-центром."
            gliderCardImage.src = "./img/glider-card-3.webp";
        }
    }, 50); // перевірка кожні 100 мілісекунд
    setInterval(function () {
        if(document.documentElement.clientWidth >= 991){
            let welcomeModal = document.getElementById("welcome-pop-up")
            if (welcomeModal.style.display!== "block" &&  welcomeModal.style.display!== "none" ){
                welcomeModal.style.display = "block"
            }
        }else{
            let welcomeModal = document.getElementById("welcome-pop-up-mini")
            if (welcomeModal.style.display!== "block" &&  welcomeModal.style.display!== "none" ){
                welcomeModal.style.display = "block"
            }
        }
        
        
    },30000)


});

let phonesInputsList = [
    "contact-form-phone",
    "input-phone-1",
    "input-phone-2",
    "input-phone-mini-1",
    "input-phone-mini-2",
    "input-modal-phone-1",
    "input-modal-phone-2",
    "input-modal-phone-3",
    "input-modal-phone-mini-1",
    "input-modal-phone-mini-2",
    "input-modal-phone-mini-3",
]
for (let i = 0 ; i < phonesInputsList.length;i ++){
    document.getElementById(phonesInputsList[i]).addEventListener("focus", function() {
        if (this.value === "") {
            this.value = "+380";
        }
    });

    document.getElementById(phonesInputsList[i]).addEventListener("click", function() {
        if (this.value === "") {
            this.value = "+380";
        }
    });

    document.getElementById(phonesInputsList[i]).addEventListener("input", function() {
        if (this.value === "+380") {
            this.setSelectionRange(this.value.length, this.value.length); // Keeps cursor at the end of the text
        }
    });
}


let isScrolling;

document.addEventListener('scroll', function() {
    const target = document.getElementById('prefferences');
    const container = document.getElementById('consultation-container');
    const targetPosition = target.getBoundingClientRect().top; // Позиція елемента відносно вікна
    const windowHeight = window.innerHeight;

    // Якщо елемент увійшов у зону видимості
    if (targetPosition <= windowHeight) {
        container.style.display = 'block'; // Показуємо кнопку
    } else {
        container.style.display = 'none'; // Приховуємо кнопку, якщо не на потрібній позиції
    }
    const button = document.querySelector('#consultation-button');
    
    // Додаємо анімацію під час скролінгу
    button.classList.add('ring-animation');
    
    // Очищаємо попередній таймаут і встановлюємо новий
    clearTimeout(isScrolling);
    
    // Припиняємо анімацію через 500 мс після зупинки скролінгу
    isScrolling = setTimeout(function() {
        button.classList.remove('ring-animation');
    },1000);
});

// function toggleButton() {
//     const buttons = document.querySelector('.extra-buttons');
//     buttons.classList.toggle('show');
// }

let header = document.getElementById("under-talk-header")
const navbar = document.getElementById('navbarNav');

navbar.addEventListener('show.bs.collapse', () => {
    if (!navbar.classList.contains("nav-color")) {
        header.classList.add("nav-color")
    }
    navbar.style.transitionDuration = '1000ms';
});

navbar.addEventListener('hide.bs.collapse', () => {
    navbar.style.transitionDuration = '1000ms';
    if (header.classList.contains("nav-color")) {
        header.classList.remove("nav-color")
    }
});

let billing1 = document.getElementById("billing-1")
billing1.addEventListener("click", function () {

})
//FORMS

let submit_button_form_1 = document.getElementById("submit-form-1")
submit_button_form_1.addEventListener("click", function (event) {
    event.preventDefault()
    let input_name_1 = document.getElementById("form-input-name-1")
    let input_phone_1 = document.getElementById("input-phone-1")
    fetchIt(input_name_1.value, input_phone_1.value)
    input_name_1.value = ""
    input_phone_1.value = ""
})
let submit_button_form_2 = document.getElementById("submit-form-2")
submit_button_form_2.addEventListener("click", function (event) {
    event.preventDefault()
    let input_name_1 = document.getElementById("form-input-name-2")
    let input_phone_1 = document.getElementById("input-phone-2")
    fetchIt(input_name_1.value, input_phone_1.value)
    input_name_1.value = ""
    input_phone_1.value = ""
})
let submit_button_form_3 = document.getElementById("submit-form-mini-1")
submit_button_form_3.addEventListener("click", function (event) {
    event.preventDefault()
    let input_name_1 = document.getElementById("form-input-name-mini-1")
    let input_phone_1 = document.getElementById("input-phone-mini-1")
    fetchIt(input_name_1.value, input_phone_1.value)
    input_name_1.value = ""
    input_phone_1.value = ""
})
let submit_button_form_4 = document.getElementById("submit-form-mini-2")
submit_button_form_4.addEventListener("click", function (event) {
    event.preventDefault()
    let input_name_1 = document.getElementById("form-input-name-mini-2")
    let input_phone_1 = document.getElementById("input-phone-mini-2")
    fetchIt(input_name_1.value, input_phone_1.value)
    input_name_1.value = ""
    input_phone_1.value = ""
})

let submit_recall_popup_form = document.getElementById("form-recall-button")
submit_recall_popup_form.addEventListener("click", function (event) {
    event.preventDefault()
    let input_name_1 = document.getElementById("contact-form-name")
    let input_phone_1 = document.getElementById("contact-form-phone")
    fetchIt(input_name_1.value, input_phone_1.value)
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
    if(document.documentElement.clientWidth >= 991){
               location.href = "#form-1"
            
        }else{
                location.href = "#form-1-mini"
        }
});



const work_with_us_2 = document.getElementById("work-with-us-2");
work_with_us_2.addEventListener("click", () => {
    if(document.documentElement.clientWidth >= 991){
               location.href = "#form-1"
            
        }else{
                location.href = "#form-1-mini"
        }
});
const work_with_us_3 = document.getElementById("work-with-us-3");
work_with_us_3.addEventListener("click", () => {
    if(document.documentElement.clientWidth >= 991){
               location.href = "#form-1"
            
        }else{
                location.href = "#form-1-mini"
        }
});
const work_with_us_3_mini = document.getElementById("work-with-us-footer-mini");
work_with_us_3_mini.addEventListener("click", () => {
    location.href = "#form-2"
});


// MODALS
let closeWelcomePopUp = document.getElementById("close-welcome-popup")
closeWelcomePopUp.addEventListener("click",function(){
            if(document.documentElement.clientWidth >= 991){
                let welcomeModal = document.getElementById("welcome-pop-up")
                welcomeModal.style.display = "none"
            }
            
})
let closeWelcomePopUpForm = document.getElementById("close-welcome-popup-form")
closeWelcomePopUpForm.addEventListener("click",function(){
            if(document.documentElement.clientWidth >= 991){
                let welcomeModal = document.getElementById("welcome-form")
                welcomeModal.style.display = "none"
            }else{
                let welcomeModal = document.getElementById("welcome-form")
                welcomeModal.style.display = "none"
            }
            
})
let closeWelcomePopUpMini = document.getElementById("close-welcome-popup-mini")
closeWelcomePopUpMini.addEventListener("click",function(){
            if(document.documentElement.clientWidth >= 991){
                let welcomeModal = document.getElementById("welcome-pop-up-mini")
                welcomeModal.style.display = "none"
            }
            
})
let stayOnSite = document.getElementById("stay-on-site-btn")
stayOnSite.addEventListener("click",function () {
    let welcomeModal = document.getElementById("welcome-pop-up")
            welcomeModal.style.display = "none"
})

var btn0 = document.getElementById("billing-1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-modal-1");
var span_mini1 = document.getElementsByClassName("close-mini-1");
btn0.onclick = function () {
    if (document.documentElement.clientWidth >= 991) {
        var modal = document.getElementById("modal-1");
        modal.style.display = "flex";
    } else {
        var modal = document.getElementById("modal-1-mini");
        modal.style.display = "flex";
    }

}

for (let i = 0; i < span1.length; i++) {
    span1[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-1");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-1-mini");
            modal.style.display = "none";
        }
    }
}
for (let i = 0; i < span_mini1.length; i++) {
    span_mini1[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-1");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-1-mini");
            modal.style.display = "none";
        }
    }
}


let submit_button_1 = document.getElementById("submit-modal-form-1")
submit_button_1.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-1")
    modal.style.display = "none"
    let input_name_1 = document.getElementById("form-modal-input-name-1")
    let input_phone_1 = document.getElementById("input-modal-phone-1")
    fetch_tarif(input_name_1.value, input_phone_1.value, "Базовий")
    input_name_1.value = ""
    input_phone_1.value = ""
})

let submit_button_1_mini = document.getElementById("submit-modal-form-mini-1")
submit_button_1_mini.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-1-mini")
    modal.style.display = "none"
    let input_name_1 = document.getElementById("form-modal-input-name-mini-1")
    let input_phone_1 = document.getElementById("input-modal-phone-mini-1")
    fetch_tarif(input_name_1.value, input_phone_1.value, "Базовий")
    input_name_1.value = ""
    input_phone_1.value = ""
})


var btn1 = document.getElementById("billing-2");
var span2 = document.getElementsByClassName("close-modal-2");
var span2_mini = document.getElementsByClassName("close-mini-2");

btn1.onclick = function () {
    if (document.documentElement.clientWidth >= 991) {
        var modal = document.getElementById("modal-2");
        modal.style.display = "flex";
    } else {
        var modal = document.getElementById("modal-2-mini");
        modal.style.display = "flex";
    }
}


for (let i = 0; i < span1.length; i++) {
    span1[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-2");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-2-mini");
            modal.style.display = "none";
        }
    }
}

for (let i = 0; i < span2_mini.length; i++) {
    span2_mini[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-2");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-2-mini");
            modal.style.display = "none";
        }
    }
}


let submit_button_2 = document.getElementById("submit-modal-form-2")
submit_button_2.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-2")
    modal.style.display = "none"
    let input_name_2 = document.getElementById("form-modal-input-name-2")
    let input_phone_2 = document.getElementById("input-modal-phone-2")
    fetch_tarif(input_name_2.value, input_phone_2.value, "Оптимальний")
    input_name_2.value = ""
    input_phone_2.value = ""
})

let submit_button_2_mini = document.getElementById("submit-modal-form-mini-2")
submit_button_2_mini.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-2-mini")
    modal.style.display = "none"
    let input_name_2 = document.getElementById("form-modal-input-name-mini-2")
    let input_phone_2 = document.getElementById("input-modal-phone-mini-2")
    fetch_tarif(input_name_2.value, input_phone_2.value, "Оптимальний")
    input_name_2.value = ""
    input_phone_2.value = ""
})


var modal2 = document.getElementById("modal-3");
var btn2 = document.getElementById("billing-3");
var span3 = document.getElementsByClassName("close-modal-3");
var span_mini_3 = document.getElementsByClassName("close-mini-3");
btn2.onclick = function () {
    if (document.documentElement.clientWidth >= 991) {
        var modal = document.getElementById("modal-3");
        modal.style.display = "flex";
    } else {
        var modal = document.getElementById("modal-3-mini");
        modal.style.display = "flex";
    }
}


for (let i = 0; i < span3.length; i++) {
    span3[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-3");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-3-mini");
            modal.style.display = "none";
        }
    }
}
for (let i = 0; i < span_mini_3.length; i++) {
    span_mini_3[i].onclick = function () {
        if (document.documentElement.clientWidth >= 991) {
            var modal = document.getElementById("modal-3");
            modal.style.display = "none";
        } else {
            var modal = document.getElementById("modal-3-mini");
            modal.style.display = "none";
        }
    }
}






let contact_manager = document.getElementById("contact-manager-btn")
let welcome_form_modal = document.getElementById("welcome-form")
let welcome_modal_mini = document.getElementById("welcome-pop-up-mini")
let welcomeModal = document.getElementById("welcome-pop-up")
contact_manager.onclick = function(){
    welcome_form_modal.style.display= "block"
    welcomeModal.style.display = "none"

}

let contact_manager_mini = document.getElementsByClassName("contact-manager-svg-button")
for (let i = 0; i < contact_manager_mini.length; i++) {
    contact_manager_mini[i].onclick = function () {
        welcome_form_modal.style.display= "block"
        welcomeModal.style.display = "none"
        welcome_modal_mini.style.display = "none"

    }
}

let close_mini_popup = document.getElementsByClassName("close-welcome-popup")

for (let i = 0; i < close_mini_popup.length; i++) {
    close_mini_popup[i].onclick = function () {
        welcome_form_modal.style.display= "none"
        welcomeModal.style.display = "none"
        welcome_modal_mini.style.display = "none"

    }
}

let submit_button_3 = document.getElementById("submit-modal-form-3")
let submit_button_mini_3 = document.getElementById("submit-modal-form-mini-3")


submit_button_3.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-3")
    modal.style.display = "none"
    let input_name_3 = document.getElementById("form-modal-input-name-3")
    let input_phone_3 = document.getElementById("input-modal-phone-3")
    fetch_tarif(input_name_3.value, input_phone_3.value, "Преміум")
    input_name_3.value = ""
    input_phone_3.value = ""
})

submit_button_mini_3.addEventListener("click", function (event) {
    event.preventDefault()
    let modal = document.getElementById("modal-3-mini")
    modal.style.display = "none"
    let input_name_3 = document.getElementById("form-modal-input-name-mini-3")
    let input_phone_3 = document.getElementById("input-modal-phone-mini-3")
    fetch_tarif(input_name_3.value, input_phone_3.value, "Преміум")
    input_name_3.value = ""
    input_phone_3.value = ""
})


//submit-modal-form-1
//submit-modal-form-2
//submit-modal-form-3


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
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
    var modal_contact_manager = document.getElementById("welcome-form")

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
    if (event.target == modal_contact_manager) {
        modal_contact_manager.style.display = "none";
    }
    
}

function fetch_tarif(name, phone, tariff) {
    const regex = /^\+380\d{9}$/;
    if (name !== "" && phone !== "") {
        if (!regex.test(phone)) {
            alert('Введіть номер в форматі +380960001112');
        } else {
            let modal_success = document.getElementById("modal-success")
            let modal_success_mini = document.getElementById("modal-success-mini")
            if (document.documentElement.clientWidth >= 991) {
                modal_success.style.display = "flex";
            } else {
                modal_success_mini.style.display = "flex";
            }
            let data = {"name": name, "phone": phone, "tariff": tariff}
            fetch("/tariff", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .catch(error => {
                    // Handle any errors
                    console.error(error);
                });
        }
    } else {
        alert('Заповніть будь ласка усі поля');
    }
}


let consultation_toggle = document.getElementById("consultation-button")
consultation_toggle.onclick = function() {
    toggleButtons()
}
function toggleButtons() {
    const buttons = document.querySelector('.extra-buttons');
    if (buttons.style.display === 'none' || buttons.style.display === '') {
        buttons.style.display = 'flex'; // Показати кнопки
    } else {
        buttons.style.display = 'none'; // Приховати кнопки
    }
}

function fetchIt(name, phone) {
    const regex = /^\+380\d{9}$/;
    if (name !== "" && phone !== "" ) {
        if (!regex.test(phone)) {
            alert('Введіть номер в форматі +380960001112');
        } else {
            let welcome_form = document.getElementById("welcome-form")
            welcome_form.style.display = "none"
            let modal_success = document.getElementById("modal-success")
            let modal_success_mini = document.getElementById("modal-success-mini")
            if (document.documentElement.clientWidth >= 991) {
                modal_success.style.display = "flex";
            } else {
                modal_success_mini.style.display = "flex";
            }
            let data = {"name": name, "phone": phone}
            fetch("/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .catch(error => {
                    console.error(error);
                });
        }
    } else {
        alert('Заповніть будь ласка усі поля');
    }
}




