//Imports
import './pages/index.css';

import { 
  initialCards, 
  templateSelector, 
  elementSelector, 
  nameAuthorSelector, 
  jobAuthorSelector, 
  popupAuthorSelector, 
  popupCardSelector, 
  imagePopupSelector, 
  validationConfig } from './scripts/utils/constants.js';
import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';


//Constants 
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const formElementAuthor = document.querySelector('.popup__content-author');
const formElementCard = document.querySelector('.popup__content-card');

//image popup
const imagePopupWindow = new PopupWithImage (imagePopupSelector);

//info about author
const userInfo = new UserInfo({nameAuthorSelector, jobAuthorSelector});

//popup edit author
const popupAuthor = new PopupWithForm (popupAuthorSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupAuthor.getInputValues());
  popupAuthor.close();
})

//popup create card
const popupCard = new PopupWithForm (popupCardSelector, (evt) => {
  evt.preventDefault();
  sectionCards.addItem(sectionCards.renderer(popupCard.getInputValues()));
  popupCard.close();
})

//set event listeners to popup forms
popupAuthor.setEventListeners();
popupCard.setEventListeners();

//Open popup author
buttonEdit.addEventListener('click', () => {
    popupAuthor.setInputValues(userInfo.getUserInfo());
    popupAuthor.open();
    authorEditFormValidation.disableButton();
});

//Open popup card
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  cardAddFormValidation.disableButton();
});

//create card
const sectionCards = new Section(
  {items: initialCards,
  renderer: (element) => {
    const card = new Card (element, templateSelector, imagePopupWindow.open);
    return card.createCard();
  }},
  elementSelector
)

//add all cards
sectionCards.addInitialCards();

//Set validation to popup forms
const cardAddFormValidation = new FormValidator (validationConfig, formElementCard);
cardAddFormValidation.enableValidation();

const authorEditFormValidation = new FormValidator (validationConfig, formElementAuthor);
authorEditFormValidation.enableValidation();

