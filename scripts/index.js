//Imports
import { initialCards } from './cards.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Constants
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const formElementAuthor = document.querySelector('.popup__content-author');
const formElementCard = document.querySelector('.popup__content-card');
const nameAuthor = document.querySelector('.profile__info-author');
const jobAuthor = document.querySelector('.profile__info-description');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const cardName = document.querySelector('.popup__input_card_name');
const cardUrl = document.querySelector('.popup__input_card_url');
const authorPopup = document.querySelector('.popup_author');
const cardPopup = document.querySelector('.popup_card');
const imagePopup = document.querySelector('.popup_image');
const elementsSection = document.querySelector('.elements');
const imageTitle = document.querySelector('.popup__image-title');
const imageView = document.querySelector('.popup__image-view');
const templateSelector = '#element';

//Configuration object
const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
    }

//Open popup window functions
function openPopup (popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscButton);
    popup.addEventListener('mousedown', closePopupClick);
};

function openAuthorPopup(popup) { 
    nameInput.value = nameAuthor.textContent;
    jobInput.value = jobAuthor.textContent;
    openPopup(popup);
}; 

//Open popup image function
function openPopupImage(card) {
    openPopup(imagePopup);
    imageTitle.textContent = card.name;
    imageView.src = card.link;
    imageView.alt = card.name;
}

//Close popup window function
function closePopup (popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscButton);
    popup.removeEventListener("click", closePopupClick);
};

//Submit info from popups functions
function handleFormSubmitAuthor (evt) {
    evt.preventDefault();
    nameAuthor.textContent = nameInput.value;
    jobAuthor.textContent = jobInput.value;
    closePopup(authorPopup);
    authorEditFormValidation.disableButton();
};

function handleFormSubmitCard (evt) {
    evt.preventDefault();
    const cardInfo = 
    {
        name: cardName.value,
        link: cardUrl.value
    };
    const card = new Card (cardInfo, templateSelector, openPopupImage);
    renderCard(card.createCard());
    cardName.value = "";
    cardUrl.value = "";
    closePopup(cardPopup);
    cardAddFormValidation.disableButton();
};

//Close by Escape function
function closePopupEscButton (evt) {
    if (evt.key === 'Escape') {
        const popupOpen = document.querySelector('.popup_opened');
        closePopup(popupOpen);
    }
}

//Close by Click function
function closePopupClick (evt) {
    if (evt.currentTarget === evt.target) {
        const popupOpen = document.querySelector('.popup_opened');
        closePopup(popupOpen);
    }
  }

//Open popup author
buttonEdit.addEventListener('click', () => {
    openAuthorPopup(authorPopup);
});

//Open popup card
buttonAdd.addEventListener('click', () => {
    openPopup(cardPopup);
});

//Close current popup function
document.querySelectorAll('.popup__close').forEach(button => {
    const buttonsPopup = button.closest('.popup'); 
    button.addEventListener('click', () => closePopup(buttonsPopup)); 
  });  

//Submit edit author form button
formElementAuthor.addEventListener('submit', handleFormSubmitAuthor); 

//Submit add card form button
formElementCard.addEventListener('submit', handleFormSubmitCard);

//Render card function
function renderCard (card) {
    elementsSection.prepend(card);
}

//Create six cards
initialCards.reverse().forEach (element => {
    const card = new Card (element, templateSelector, openPopupImage);
    renderCard(card.createCard());
});

//Set validation to popup forms
 const cardAddFormValidation = new FormValidator (validationConfig, formElementCard);
 cardAddFormValidation.enableValidation();

 const authorEditFormValidation = new FormValidator (validationConfig, formElementAuthor);
 authorEditFormValidation.enableValidation();