const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 120);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

document.addEventListener('DOMContentLoaded', function () {
var menuIcon = document.getElementById('menu-icon');
var navList = document.querySelector('.navlist');
var navLinks = document.querySelectorAll('.navlist a');
      
menuIcon.addEventListener('click', function () {
    navList.classList.toggle('active');
});
      

navLinks.forEach(function (link) {
link.addEventListener('click', function () {
navList.classList.remove('active');
});
});
});
      


