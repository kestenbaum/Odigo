'use strict'

let burgerWrap = document.querySelector('.burger_wrap'),
    headerNav = document.querySelector('.header_nav')

function clickBurger(){
    burgerWrap.classList.toggle('burger_active')
    headerNav.classList.toggle('header_nav_active')
}

burgerWrap.onclick = clickBurger

