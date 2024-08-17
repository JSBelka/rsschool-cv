const card = document.getElementById('Jennifer');
const popUp = document.querySelector('.pop-up');
const button = document.querySelector('.pop-up-button');

card.addEventListener("click", function() {
    popUp.classList.toggle("hidden");
    document.body.style.overflow = "hidden";
    })

button.addEventListener("click", function () {
    popUp.classList.toggle("hidden");
    document.body.style.overflow = "";
    }
)