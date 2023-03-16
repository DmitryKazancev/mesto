
//Constants
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
const closeButtonAuthor = document.querySelector('.popup__close-author');
const closeButtonAdd = document.querySelector('.popup__close-card');
const closeButtonImage = document.querySelector('.popup__close-image');
let formElement = document.querySelector('.popup__content');
let formElementCard = document.querySelector('.popup__content-card');
let nameAuthor = document.querySelector('.profile__info-author');
let jobAuthor = document.querySelector('.profile__info-description');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let cardName = document.querySelector('.popup__input_card_name');
let cardUrl = document.querySelector('.popup__input_card_url');
const authorPopup = document.querySelector('.popup_author');
const cardPopup = document.querySelector('.popup_card');
const imagePopup = document.querySelector('.popup_image');

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
function openPopup (popup) {
    popup.classList.add('popup_opened');
    if (popup === authorPopup) {
        nameInput.value = nameAuthor.textContent;
        jobInput.value = jobAuthor.textContent;
    }
};

//Close popup window function
function closePopup () {
    cardPopup.classList.remove('popup_opened');
    authorPopup.classList.remove('popup_opened');
    imagePopup.classList.remove('popup_opened');
};

//Submit info from popup function
function handleFormSubmit (evt) {
    evt.preventDefault();
    if (authorPopup.classList.value === "popup popup_author popup_opened") {
        nameAuthor.textContent = nameInput.value;
        jobAuthor.textContent = jobInput.value;
    }
    if (cardPopup.classList.value === "popup popup_card popup_opened") {
        addCard();  
    }
    closePopup();
};

//Create six card
initialCards.forEach((card) => {
    const elementsSection = document.querySelector('.elements');
    const elementTemplate = document.querySelector('#element').content;
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
    const trashButton = elementCard.querySelector('.element__button-trash');
    const imageButton = elementCard.querySelector('.element__image');

    elementCard.querySelector('.element__image').src = card.link;
    elementCard.querySelector('.element__title').textContent = card.name;
    elementsSection.append(elementCard);

    elementCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active');
      }); 

    trashButton.addEventListener('click', function () {
        const currentCard = trashButton.closest('.element');
        currentCard.remove();
      }); 

    imageButton.addEventListener('click', function() {
        imagePopup.classList.add('popup_opened');
        imagePopup.querySelector('.popup__image-title').textContent = elementCard.querySelector('.element__title').textContent;
        imagePopup.querySelector('.popup__image-view').src = elementCard.querySelector('.element__image').src;
    })
});

//Add card function
function addCard () {
    const elementsSection = document.querySelector('.elements');
    const elementTemplate = document.querySelector('#element').content;
    const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
    const trashButton =  elementCard.querySelector('.element__button-trash');
    const imageButton = elementCard.querySelector('.element__image');

    elementCard.querySelector('.element__image').src = cardUrl.value;
    elementCard.querySelector('.element__title').textContent = cardName.value;
    elementsSection.prepend(elementCard);
    elementCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active');
      }); 

    trashButton.addEventListener('click', function () {
        const currentCard = trashButton.closest('.element');
        currentCard.remove();
      });
    
    imageButton.addEventListener('click', function() {
        imagePopup.classList.add('popup_opened');
        imagePopup.querySelector('.popup__image-title').textContent = elementCard.querySelector('.element__title').textContent;
        imagePopup.querySelector('.popup__image-view').src = elementCard.querySelector('.element__image').src;
    })

    
}

//Open popup author
editButton.addEventListener('click', () => {
    openPopup(authorPopup);
});

//Open popup card
addButton.addEventListener('click', () => {
    openPopup(cardPopup);
});

//Close popup
closeButtonAuthor.addEventListener('click', closePopup);
closeButtonAdd.addEventListener('click', closePopup);
closeButtonImage.addEventListener('click', closePopup);

//Submit edit author form button
formElement.addEventListener('submit', handleFormSubmit); 
//Submit add card form button
formElementCard.addEventListener('submit', handleFormSubmit);








