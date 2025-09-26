//-------------- burger-menu

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


//-------------- modal-window
const presentButton = document.querySelector('.about__present-button');
const presentButtonMobile = document.querySelector('.about__present-button_mobile');
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.modal__close')

function openModal() {
    modal.classList.add('modal_open');
    document.body.style.overflow = 'hidden';
}

function closeModal (){
    modal.classList.remove('modal_open');
    document.body.style.overflow = '';
}


presentButton.addEventListener('click', function () {
    openModal();
})

presentButtonMobile.addEventListener('click', function () {
    openModal();
})

modal.addEventListener('click', function (event) {
    const clickedElementModal = event.target;

    if (clickedElementModal.classList.contains('modal') || clickedElementModal.classList.contains('modal__close-img') || clickedElementModal.classList.contains('modal__close')) {
        closeModal ()
    }
})

document.addEventListener('keydown', event=> {
    if (event.code ==='Escape') {
        closeModal ()
    }
})
