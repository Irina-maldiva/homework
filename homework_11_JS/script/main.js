const buttonNose = document.querySelector(".nose")
const modal = document.querySelector(".modal")
const buttonClose = document.querySelector(".close")
const modalWindow = document.querySelector(".modal-window")

function closeModal () {
    modal.classList.remove('modal_open')
}

buttonNose.addEventListener('click', function(){
    modal.classList.add('modal_open')
})

buttonClose.addEventListener('click', closeModal)

modal.addEventListener('click',event=> {
    if (event.target && event.target.classList.contains('modal')){
        closeModal ()
    } 
})

document.addEventListener('keydown', event=> {
    if (event.code ==='Escape') {
        closeModal ()
    }
})