let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () => {
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
  document.querySelector('#search-form').classList.remove('active');
}

document.querySelector('#user-icon').onclick = () => {
  document.querySelector('.login-modal-div').classList.toggle('active');
}

document.querySelector('.close-div').onclick = () => {
  document.querySelector('.login-modal-div').classList.remove('active');
}

let loginModal = document.querySelector('.login-modal-div');

window.onclick = function(event) {
  if (event.target == loginModal) {
    closeModal();
  }
}

function closeModal() {
  document.querySelector('.login-modal-div').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});