const card = document.getElementById('Jennifer');
const popUp = document.getElementById('pop-up-window');
const closeButton = document.querySelector('.close-button');

card.addEventListener("click", function() {
    popUp.classList.add('open')
    document.body.style.overflow = "hidden";
    })
