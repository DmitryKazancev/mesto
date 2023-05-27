//Imports
import './index.css';

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
  formElementCard,
  formElementAvatar,
  popupAvatarSelector,
  popupCardRemoveSelector,
  buttonUpdateAvatar } from '../components/utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupCardRemove from '../components/PopupCardRemove.js';
import Api from '../components/Api.js';

//class api for connect to server
const api = new Api ({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-66',
  headers: {
    authorization: '0be97cdd-5214-4857-975b-3ef352f3ad1f',
    'Content-Type': 'application/json'
  }
}); 

//image popup
const imagePopupWindow = new PopupWithImage (imagePopupSelector);
imagePopupWindow.setEventListeners();

//info about author
const userInfo = new UserInfo({nameAuthorSelector, jobAuthorSelector});

//popup remove card
const popupCardRemove = new PopupCardRemove (popupCardRemoveSelector, ({elementCard, elementCardId}) => {
  api.deleteCard(elementCardId)
    .then(() => {
      elementCard.removeCard();
      popupCardRemove.close();
    })
    .catch(error => {
      console.error(`Ошибка при при удалении карточки ${error}`)
    })
    .finally(() => {
      popupCardRemove.setCurrentTextButton();
    })
})

popupCardRemove.setEventListeners();

//popup edit author
const popupAuthor = new PopupWithForm (popupAuthorSelector, (inputsValues) => {
  api.setOwnerInfo(inputsValues)
    .then(res => {
      userInfo.setUserInfo(res);
      popupAuthor.close();
    })
    .catch(error => {
      console.error(`Ошибка при редактировании профиля автора ${error}`)
    })
    .finally(() => {
      popupAuthor.setCurrentTextButton();
    })
})

popupAuthor.setEventListeners();

//popup edit card
const popupCard = new PopupWithForm (popupCardSelector, (inputsValues) => {
  Promise.all([api.getUserInfo(), api.addNewCard(inputsValues)])
    .then(([infoUser, infoCard]) => {
      infoCard.userId = infoUser._id;
      sectionCards.addItem(sectionCards.renderer(infoCard))
      popupCard.close();
    })
    .catch(error => {
      console.error(`Ошибка при добавлении новой карточки ${error}`)
    })
    .finally(() => {
      popupCard.setCurrentTextButton();
    })
})

popupCard.setEventListeners();

//popup update avatar
const popupUpdateAvatar = new PopupWithForm(popupAvatarSelector, (inputsValues) => {
  api.setOwnerAvatar(inputsValues)
    .then(res => {
      userInfo.setUserInfo(res);
      popupUpdateAvatar.close();
    } )
    .catch(error => {
      console.error(`Ошибка при изменении аватара автора ${error}`)
    })
    .finally(() => {
      popupUpdateAvatar.setCurrentTextButton();
    })
})

popupUpdateAvatar.setEventListeners();

//Set validation to popup forms
const cardAddFormValidation = new FormValidator (validationConfig, formElementCard);
cardAddFormValidation.enableValidation();

const authorEditFormValidation = new FormValidator (validationConfig, formElementAuthor);
authorEditFormValidation.enableValidation();

const avatarUpdateFormValidation = new FormValidator(validationConfig, formElementAvatar);
avatarUpdateFormValidation.enableValidation();

//open popup for update avatar
buttonUpdateAvatar.addEventListener('click', () => {
  popupUpdateAvatar.open();
  avatarUpdateFormValidation.deleteInputError();
  avatarUpdateFormValidation.disableButton();
})

//Open popup author
buttonEdit.addEventListener('click', () => {
    popupAuthor.setInputValues(userInfo.getUserInfo());
    popupAuthor.open();
    authorEditFormValidation.deleteInputError();
    authorEditFormValidation.disableButton();
});

//Open popup card
buttonAdd.addEventListener('click', () => {
  popupCard.open();
  cardAddFormValidation.deleteInputError();
  cardAddFormValidation.disableButton();
});

//create card
const sectionCards = new Section(
  {items: initialCards,
  renderer: (element) => {
    const card = new Card (element, templateSelector, imagePopupWindow.open, popupCardRemove.open, (likeIcon, cardId) => {
      if (likeIcon.classList.contains('element__button-like_active')) {
        api.deleteLike(cardId)
          .then(res => {
            card.switchLike(res.likes);
          })
          .catch(error => {
            console.error(`Ошибка при снятии лайка ${error}`)
          })
      }
      else {
        api.addLike(cardId)
          .then(res => {
            card.switchLike(res.likes);
          })
          .catch(error => {
            console.error(`Ошибка при установке лайка ${error}`)
          })
      }
    });
    return card.createCard();
  }},
  elementSelector
)

//get user and cards info, render cards
Promise.all([api.getUserInfo(), api.getCards()])
  .then(([infoUser, infoCards]) => {
    infoCards.forEach(element => {
      element.userId = infoUser._id;
    })
    userInfo.setUserInfo(infoUser);
    sectionCards.addInitialCards(infoCards);
  })
  .catch(error => {
    console.error(`Ошибка запроса данных с сервера ${error}`)
  })