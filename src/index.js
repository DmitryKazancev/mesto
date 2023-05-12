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
  validationConfig,
  buttonEdit,
  buttonAdd,
  formElementAuthor,
  formElementCard } from './scripts/utils/constants.js';
import Card from './scripts/components/Card.js';
import FormValidator from './scripts/components/FormValidator.js';
import UserInfo from './scripts/components/UserInfo.js';
import PopupWithImage from './scripts/components/PopupWithImage.js';
import Section from './scripts/components/Section.js';
import PopupWithForm from './scripts/components/PopupWithForm.js';

//image popup
const imagePopupWindow = new PopupWithImage (imagePopupSelector);

//info about author
const userInfo = new UserInfo({nameAuthorSelector, jobAuthorSelector});

//popup edit author
const popupAuthor = new PopupWithForm (popupAuthorSelector, (inputsValues) => {
  userInfo.setUserInfo(inputsValues);
})

//popup edit card
const popupCard = new PopupWithForm (popupCardSelector, (inputsValues) => {
  sectionCards.addItem(sectionCards.renderer(inputsValues));
})

//Set validation to popup forms
const cardAddFormValidation = new FormValidator (validationConfig, formElementCard);
cardAddFormValidation.enableValidation();

const authorEditFormValidation = new FormValidator (validationConfig, formElementAuthor);
authorEditFormValidation.enableValidation();

//Open popup author
buttonEdit.addEventListener('click', () => {
    popupAuthor.setInputValues(userInfo.getUserInfo());
    popupAuthor.open();
    authorEditFormValidation.deleteInputError();
    popupAuthor.setEventListeners();
    authorEditFormValidation.disableButton();
});

//Open popup card
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  cardAddFormValidation.deleteInputError();
  popupCard.setEventListeners();
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