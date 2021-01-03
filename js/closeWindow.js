'use strict';

const closeButtons = document.querySelectorAll('.close-button');

const onCloseClick = (evt) => {
  const currentWindow = evt.path[1];
  currentWindow.classList.add('visually-hidden');
};

for (const button of closeButtons) {
  button.addEventListener('click', onCloseClick);
}
