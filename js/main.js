// popup
var link = document.querySelector(".contacts__link");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal__close");
var name = document.querySelector("input[name=name]");
var email = document.querySelector("input[name=email]");
var form = popup.querySelector("form");



link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
    // name.focus(); не робит((
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    popup.classList.remove("shake");
});


form.addEventListener("submit", function (evt) {

    evt.preventDefault();

    if ( !name.value || !email.value) {
        console.log("Форма не заполнена");
        popup.classList.add("shake");
    } else {
        console.log("Форма отправлена")
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal__show")) {
            popup.classList.remove("modal__show");
        }
    }
});
//slider

var radio1 = document.querySelector(".slider__item:nth-of-type(1)");
var radio2 = document.querySelector(".slider__item:nth-of-type(2)");
var radio3 = document.querySelector(".slider__item:nth-of-type(3)");

var slide1 = document.querySelector(".slide:nth-child(1)");
var slide2 = document.querySelector(".slide:nth-child(2)");
var slide3 = document.querySelector(".slide:nth-child(3)");

var showSlide = document.querySelector(".show_slide");

radio1.addEventListener("click", function (evt) {
    evt.preventDefault();

    console.log("Нажали на первую кнопку");

    slide2.classList.add("hidden");
    slide3.classList.add("hidden");
    slide1.classList.remove("hidden");

    radio1.classList.remove("no_active");
    radio1.classList.add("active");
    radio2.classList.add("no_active");
    radio3.classList.add("no_active");

});


radio2.addEventListener("click", function (evt) {
    evt.preventDefault();

    console.log("Нажали на вторую кнопку");

    slide1.classList.add("hidden");
    slide3.classList.add("hidden");
    slide2.classList.remove("hidden");

    radio1.classList.add("no_active");
    radio2.classList.remove("no_active");
    radio2.classList.add("active");
    radio3.classList.add("no_active");
});

radio3.addEventListener("click", function (evt) {
    evt.preventDefault();

    console.log("Нажали на третью кнопку");

    slide1.classList.add("hidden");
    slide2.classList.add("hidden");
    slide3.classList.remove("hidden");

    radio1.classList.add("no_active");
    radio2.classList.add("no_active");
    radio3.classList.add("active");
    radio3.classList.remove("no_active");
});