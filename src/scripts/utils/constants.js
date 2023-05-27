//Cards data
const initialCards = [
    {
      cardName: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      cardName: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      cardName: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      cardName: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      cardName: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      cardName: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//Constants
const buttonEdit = document.querySelector('.profile__button-edit');
const buttonAdd = document.querySelector('.profile__button-add');
const formElementAuthor = document.querySelector('.popup__content-author');
const formElementCard = document.querySelector('.popup__content-card');
const formElementAvatar = document.querySelector('.popup__content-avatar');
const templateSelector = '#element';
const elementSelector = '.elements';
const nameAuthorSelector = '.profile__info-author';
const jobAuthorSelector = '.profile__info-description';
const popupAuthorSelector = '.popup_author';
const popupCardSelector = '.popup_card';
const imagePopupSelector = '.popup_image';
const popupAvatarSelector = '.popup_avatar';
const popupCardRemoveSelector = '.popup_sure';
const buttonUpdateAvatar = document.querySelector('.profile__button-avatar');


//Configuration object
const validationConfig = {
    formSelector: '.popup__content',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
    }


export { 
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
  formElementCard,
  formElementAvatar,
  popupAvatarSelector,
  popupCardRemoveSelector,
  buttonUpdateAvatar
}