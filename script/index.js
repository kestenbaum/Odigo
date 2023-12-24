const getSelectorBurger = document.querySelector('.burger_wrap')
const getSelectorHeaderNavigate = document.querySelector('.header_nav')

const  clickBurger = () => {
    getSelectorBurger.classList.toggle('burger_active')
    getSelectorHeaderNavigate.classList.toggle('header_nav_active')
}

getSelectorBurger.onclick = clickBurger

