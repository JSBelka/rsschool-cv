// Pop-up
let cardJennifer = document.getElementById('Jennifer');
let popUpJennifer = document.getElementById('pop-up-Jennifer');
let cardKatrine = document.getElementById('Katrine');
let popUpKatrine = document.getElementById('pop-up-Katrine');
let cardWoody = document.getElementById('Woody');
let popUpWoody = document.getElementById('pop-up-Woody');
let cardSophia = document.getElementById('Sophia');
let popUpSophia = document.getElementById('pop-up-Sophia');
let cardTimmy = document.getElementById('Timmy');
let popUpTimmy = document.getElementById('pop-up-Timmy');
let cardCharly = document.getElementById('Charly');
let popUpCharly = document.getElementById('pop-up-Charly');
let cardScarlett = document.getElementById('Scarlett');
let popUpScarlett = document.getElementById('pop-up-Scarlett');
let cardFreddie = document.getElementById('Freddie');
let popUpFreddie = document.getElementById('pop-up-Freddie');
let button = document.querySelector('.pop-up-button');

//Katrine
cardKatrine.addEventListener("click", function() {
    popUpKatrine.classList.toggle("hidden");
    body.classList.toggle("stop");
})

document.addEventListener("click", function(event) {
    if(!popUpKatrine.includes(event.target)) {
        popUpKatrine.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})
/*button.addEventListener("click", function(event) {
    if(!popUpKatrine.includes(event.target)) {
        popUpKatrine.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})*/

/*document.addEventListener("click", function(event) {
    if (!(!popUpKatrine.includes(event.target) || !popUpJennifer.includes(event.target) || !popUpWoody.includes(event.target))) {
        return;
    }
    popUpKatrine.classList.toggle("hidden");
    popUpWoody.classList.toggle("hidden");
    popUpJennifer.classList.toggle("hidden");
    body.classList.remove("stop");
}*/
//Jennifer
cardJennifer.addEventListener("click", function() {
    popUpJennifer.classList.toggle("hidden");
    body.classList.toggle("stop");
})
document.addEventListener("click", function(event) {
    if(!popUpKatrine.includes(event.target)) {
        popUpKatrine.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})

//Woody
cardWoody.addEventListener("click", function() {
    popUpWoody.classList.toggle("hidden");
    body.classList.toggle("stop");
})
//Sophia
/*cardSophia.addEventListener("click", function() {
    popUpSophia.classList.toggle("hidden");
    body.classList.toggle("stop");
})
//Timmy
cardTimmy.addEventListener("click", function() {
    popUpTimmy.classList.toggle("hidden");
    body.classList.toggle("stop");
})
//Charly
cardCharly.addEventListener("click", function() {
    popUpCharly.classList.toggle("hidden");
    body.classList.toggle("stop");
})
//Scarlett
cardScarlett.addEventListener("click", function() {
    popUpScarlett.classList.toggle("hidden");
    body.classList.toggle("stop");
})
//Freddie
cardFreddie.addEventListener("click", function() {
    popUpFreddie.classList.toggle("hidden");
    body.classList.toggle("stop");
})
*/

// Burger-menu
let burger = document.querySelector('.header-burger');
let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('.nav');
let navList = document.querySelector('.nav-list');
let navItem = document.querySelector('.nav-item');
let body = document.querySelector('body');
let background = document.getElementById('main-page')

burger.addEventListener("click", function () {
    nav.classList.toggle("active");
    burger.classList.toggle("active-burger");
    body.classList.toggle("stop");
    background.classList.toggle("dark");
})

/*let navItems = [...navItem].concat(nav,navList,burger,burgerMenu);*/

document.addEventListener("click", function(event) {
    if(nav.includes(event.target)) {
        nav.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("stop");
        background.classList.remove("dark");
    }
})

// Slider
/*
let arrowRight = document.getElementById('button-right');
let arrowLeft = document.getElementById('button-left');
let slider = document.querySelector(".cards-pets")
const cardWidth = document.querySelector(".card").offsetWidth + 20;
const totalCards = document.querySelectorAll(".card").length;
let currentPosition = 0;

arrowRight.addEventListener("click", () => {
    slider.classList.toggle("active-slider");
});
/*arrowLeft.addEventListener("click", () => {
    currentPosition -= cardWidth;
    if (currentPosition <= -cardWidth * (totalCards - 3)) {
        currentPosition = -cardWidth * (totalCards - 3);
    }
    sliderTrack.style.transform = translateX(${currentPosition}px);
});*/

/*arrowRight.addEventListener("click", function {
    slider.classList.toggle("active-slider");
})*/
