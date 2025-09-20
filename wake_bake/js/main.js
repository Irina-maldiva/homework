const burgerMenu = document.querySelector('.header__burger-menu');
const navItem = document.querySelector('.nav__list');
const body = document.querySelector('.body');


burgerMenu.addEventListener('click', function () {
    body.classList.toggle('body--opened-menu')
})

navItem.addEventListener('click', function (event) {
    const clickedElement = event.target;
    
    if (clickedElement.classList.contains('nav__link') && body.classList.contains('body--opened-menu')) {
        body.classList.remove('body--opened-menu');
    }
});