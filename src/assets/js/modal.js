const modalBtn = document.querySelectorAll('[data-modal]');
const body = document.body;
const modalCansel = document.querySelectorAll('.modal__cancel');
const modal = document.querySelectorAll('.modal');

modalBtn.forEach(item => {
    item.addEventListener('click', event => {
        let $this = event.currentTarget;
        let modalId = $this.getAttribute('data-modal');
        let modal = document.getElementById(modalId);
        let modalContent = modal.querySelector('.modal__content');

        modalContent.addEventListener('click', event => {
            event.stopPropagation();
        });

        modal.classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(function (){
            modalContent.style.transform = 'none';
        }, 1);
        

    });
});

modalCansel.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target.closest('.modal');

        closeModal(currentModal);
    });
});

modal.forEach(item => {
    item.addEventListener('click', event => {
        let currentModal = event.target;

        closeModal(currentModal);
    });
});

function closeModal(currentModal) {
    let modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');

    setTimeout(() => {
        currentModal.classList.remove('show');
        body.classList.remove('no-scroll');
    }, 200);

}