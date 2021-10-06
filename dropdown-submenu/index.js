let navbar = document.querySelector('.navbar');
let searchBox = document.querySelector('.search-box .bx-search'); 

searchBox.addEventListener("click", () => {
    navbar.classList.toggle('showInput');
    if(navbar.classList.contains("showInput")) {
        searchBox.classList.replace("bx-search", 'bx-x');
    } else {
        searchBox.classList.replace("bx-x", 'bx-search');
    }
});

// sidebar open close
let menuOpenBtn = document.querySelector('.navbar .bx-menu');
let closeOpenBtn = document.querySelector('.nav-links .bx-x');
let navLinks = document.querySelector('.nav-links');

menuOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener('click', () => {
    navLinks.style.left = "-100%";
});

//sidebar submenu open close

let htmlCssArrow = document.querySelector('.htmlcss-arrow');

htmlCssArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show1');
});

let moreArrow = document.querySelector('.more-arrow');

moreArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show2');
});

let jsArrow = document.querySelector('.js-arrow');

jsArrow.addEventListener('click', () => {
    navLinks.classList.toggle('show3');
});