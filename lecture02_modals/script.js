'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const show_modal = document.querySelectorAll('.show-modal');
const btn_close_modal = document.querySelector('.close-modal');

for (let i = 0; i < show_modal.length; i++) {
  show_modal[i].addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

const close_modal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btn_close_modal.addEventListener('click', close_modal);
overlay.addEventListener('click', close_modal);
document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      close_modal();
    }
  }
});
