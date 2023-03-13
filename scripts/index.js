
//Constants
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');
const popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.popup__content');
let nameAuthor = document.querySelector('.profile__info-author');
let jobAuthor = document.querySelector('.profile__info-description');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

//Open popup window function
function openPopup () {
    popupWindow.classList.add('popup_opened');
    nameInput.value = nameAuthor.textContent;
    jobInput.value = jobAuthor.textContent;
};

//Close popup window function
function closePopup () {
    popupWindow.classList.remove('popup_opened');
};

//Submit info from popup function
function handleFormSubmit (evt) {
    evt.preventDefault();
    nameAuthor.textContent = nameInput.value;
    jobAuthor.textContent = jobInput.value;
    closePopup();
};



editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 

//add cards 
initialCards.forEach((card) => {
    const elementsSection = document.querySelector('.elements');
    const elementTemplate = document.querySelector('#element').content;
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

    elementCard.querySelector('.element__image').src = card.link;
    elementCard.querySelector('.element__title').textContent = card.name;
    elementsSection.append(elementCard);
});


