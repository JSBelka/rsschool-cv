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