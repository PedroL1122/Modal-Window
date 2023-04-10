'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');


const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openmodel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openmodel)
btnCloseModal.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter' && !modal.classList.contains('hidden')) {
    closemodal();

  }
})