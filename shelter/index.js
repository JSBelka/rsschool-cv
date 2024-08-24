// Pop-up
let cardJennifer = document.getElementById('Jennifer');
let popUpJennifer = document.getElementById('pop-up-Jennifer');
let cardKatrine = document.getElementById('Katrine');
let popUpKatrine = document.getElementById('pop-up-Katrine');
let cardWoody = document.getElementById('Woody');
let popUpWoody = document.getElementById('pop-up-Woody');
let button = document.querySelector('.pop-up-button');

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
button.addEventListener("click", function(event) {
    if(!popUpKatrine.includes(event.target)) {
        popUpKatrine.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})


cardJennifer.addEventListener("click", function() {
    popUpJennifer.classList.toggle("hidden");
    body.classList.toggle("stop");
})

document.addEventListener("click", function(event) {
        if(!popUpJennifer.includes(event.target)) {
            popUpJennifer.classList.toggle("hidden");
            body.classList.remove("stop");
        }
})
button.addEventListener("click", function(event) {
    if(!popUpJennifer.includes(event.target)) {
        popUpJennifer.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})

cardWoody.addEventListener("click", function() {
    popUpWoody.classList.toggle("hidden");
    body.classList.toggle("stop");
})

document.addEventListener("click", function(event) {
    if(!popUpWoody.includes(event.target)) {
        popUpWoody.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})
button.addEventListener("click", function(event) {
    if(!popUpWoody.includes(event.target)) {
        popUpWoody.classList.toggle("hidden");
        body.classList.remove("stop");
    }
})

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

let navItems = [...navItem].concat(nav,navList,burger,burgerMenu);

document.addEventListener("click", function(event) {
    if(!navItems.includes(event.target)) {
        nav.classList.remove("active");
        burger.classList.remove("active-burger");
        body.classList.remove("stop");
        background.classList.remove("dark");
    }
})

