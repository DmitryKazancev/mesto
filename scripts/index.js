
//Constants
const editButton = document.querySelector('.profile__button-edit');
const closeButton = document.querySelector('.popup__close');
const popupWindow = document.querySelector('.popup');
let formElement = document.querySelector('.popup__content');
let nameAuthor = document.querySelector('.profile__info-author');
let jobAuthor = document.querySelector('.profile__info-description');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

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
    popupWindow.classList.remove('popup_opened');
};

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit); 

