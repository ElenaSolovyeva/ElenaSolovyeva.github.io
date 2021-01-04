'use strict';

const nav = document.querySelector('.nav');
const orderButton = nav.querySelector('#order');
const deliveryButton = nav.querySelector('#delivery');
const navButtons = [orderButton, deliveryButton];

const contactsLink = nav.querySelector('#contactsLink');
const homeLink = nav.querySelector('#contactsLink');
const navLinks = [contactsLink, homeLink];

const modal = document.querySelector('.modal');
const modalOrder = modal.querySelector('.modal__window--order');
const modalDelivery = modal.querySelector('.modal__window--delivery');
const modalWindows = [modalOrder, modalDelivery];

const onNavLinkClick = (evt) => {
  for (const current of modalWindows) {
    if (!current.classList.contains('visually-hidden')) {
      current.classList.add('visually-hidden');
    }
  }

  for (const button of navButtons) {
    if (button.classList.contains('nav__button--active')) {
      button.classList.remove('nav__button--active');
    }
  }
};

for (const navLink of navLinks) {
  navLink.addEventListener('click', onNavLinkClick);
};

const onOfferButtonClick = (evt) => {
  modalIntro.classList.toggle('visually-hidden');

  if (!modalOrder.classList.contains('visually-hidden')) {
    modalOrder.classList.add('visually-hidden');
  }

  if (!modalDelivery.classList.contains('visually-hidden')) {
    modalDelivery.classList.add('visually-hidden');
  }

  offerButton.classList.add('nav__button--active');

  if (orderButton.classList.contains('nav__button--active')) {
    orderButton.classList.remove('nav__button--active');
  }

  if (deliveryButton.classList.contains('nav__button--active')) {
    deliveryButton.classList.remove('nav__button--active');
  }
};

const onOrderButtonClick = (evt) => {
  modalOrder.classList.toggle('visually-hidden');

  if (!modalDelivery.classList.contains('visually-hidden')) {
    modalDelivery.classList.add('visually-hidden');
  }

  orderButton.classList.toggle('nav__button--active');

  if (deliveryButton.classList.contains('nav__button--active')) {
    deliveryButton.classList.remove('nav__button--active');
  }
};

const onDeliveryButtonClick = (evt) => {
  modalDelivery.classList.toggle('visually-hidden');

  if (!modalOrder.classList.contains('visually-hidden')) {
    modalOrder.classList.add('visually-hidden');
  }

  deliveryButton.classList.add('nav__button--active');

  if (orderButton.classList.contains('nav__button--active')) {
    orderButton.classList.remove('nav__button--active');
  }
};

orderButton.addEventListener('click', onOrderButtonClick);
deliveryButton.addEventListener('click', onDeliveryButtonClick);
