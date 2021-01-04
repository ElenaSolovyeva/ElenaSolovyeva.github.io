'use strict';


const nav = document.querySelector('.nav');
const navLinks = nav.querySelectorAll('.nav__link');
const navButtons = nav.querySelectorAll('.nav__button');
const closeButtons = nav.querySelectorAll('.close-button');
const modalWindows = nav.querySelectorAll('.modal');

const onNavLinkClick = () => {
  for (const navButton of navButtons) {
    if (navButton.classList.contains('nav__button--active')) {
      navButton.classList.remove('nav__button--active');
    }
  }

  for (const modalWindow of modalWindows) {
    if (!modalWindow.classList.contains('visually-hidden')) {
      modalWindow.classList.add('visually-hidden');
    }
  }
};

for (const navLink of navLinks) {
  navLink.addEventListener('click', onNavLinkClick);
}

const onNavButtonClick = (evt) => {
  const currentButton = evt.path[0];
  const modalWindow = currentButton.parentNode.querySelector('.modal');

  modalWindow.classList.toggle('visually-hidden');

  for (const currentWindow of modalWindows) {
    if (!currentWindow.classList.contains('visually-hidden') &&
    !(currentWindow === modalWindow)) {
      const currentNavButton = currentWindow.parentNode.querySelector('.nav__button');
      currentNavButton.classList.remove('nav__button--active');
      currentWindow.classList.add('visually-hidden');
    }
  }

  modalWindow.classList.contains('visually-hidden') ?
    currentButton.classList.remove('nav__button--active') :
    currentButton.classList.add('nav__button--active');
}

for (const current of navButtons) {
  current.addEventListener('click', onNavButtonClick);
}


const onCloseButtonClick = (evt) => {
  const currentCloseButton = evt.path[0];
  const activeNavButton = currentCloseButton.parentNode.parentNode.querySelector('.nav__button');

  currentCloseButton.parentNode.classList.add('visually-hidden');
  activeNavButton.classList.remove('nav__button--active');
}

for (const current of closeButtons) {
  current.addEventListener('click', onCloseButtonClick);
}
