'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

// .classlist to eccess the classes in html. we can add/remove them
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// we are not using brackets whe calling the functions cuz we want to call them when the button is pressed not every time when the code run
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// ESC key working to esc from the modal
// we eccess document cuz keyboard functionality eccess by applying this on whole keyboard
//keydown command is to represent the press on keyboard
/*we are passing e (user defined name) to check which key is pressed, basically we are accessin the object in js that contain info about the action is currently performed*/
document.addEventListener('keydown', function (e) {
  // .key to check key name
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
