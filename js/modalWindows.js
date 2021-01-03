'use strict';

const nav = document.querySelector('.nav');
const offerButton = nav.querySelector('#offer');
const orderButton = nav.querySelector('#order');
const deliveryButton = nav.querySelector('#delivery');
const navButtons = [offerButton, orderButton, deliveryButton];

const childrenLink = nav.querySelector('#childrenLink');
const adultsLink = nav.querySelector('#adultsLink');
const mathLink = nav.querySelector('#mathLink');
const contactsLink = nav.querySelector('#contactsLink');
const navLinks = [childrenLink, adultsLink, mathLink, contactsLink];

const modal = document.querySelector('.modal');
const modalIntro = modal.querySelector('.modal__window--intro');
const modalOrder = modal.querySelector('.modal__window--order');
const modalDelivery = modal.querySelector('.modal__window--delivery');
const modalWindows = [modalIntro, modalOrder, modalDelivery];

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

  if (!modalIntro.classList.contains('visually-hidden')) {
    modalIntro.classList.add('visually-hidden');
  }

  if (!modalDelivery.classList.contains('visually-hidden')) {
    modalDelivery.classList.add('visually-hidden');
  }

  orderButton.classList.add('nav__button--active');

  if (offerButton.classList.contains('nav__button--active')) {
    offerButton.classList.remove('nav__button--active');
  }

  if (deliveryButton.classList.contains('nav__button--active')) {
    deliveryButton.classList.remove('nav__button--active');
  }
};

const onDeliveryButtonClick = (evt) => {
  modalDelivery.classList.toggle('visually-hidden');

  if (!modalIntro.classList.contains('visually-hidden')) {
    modalIntro.classList.add('visually-hidden');
  }

  if (!modalOrder.classList.contains('visually-hidden')) {
    modalOrder.classList.add('visually-hidden');
  }

  deliveryButton.classList.add('nav__button--active');

  if (offerButton.classList.contains('nav__button--active')) {
    offerButton.classList.remove('nav__button--active');
  }

  if (orderButton.classList.contains('nav__button--active')) {
    orderButton.classList.remove('nav__button--active');
  }
};

offerButton.addEventListener('click', onOfferButtonClick);
orderButton.addEventListener('click', onOrderButtonClick);
deliveryButton.addEventListener('click', onDeliveryButtonClick);
