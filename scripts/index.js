//Constants
const editButton = document.querySelector('.profile__button-edit');
const addButton = document.querySelector('.profile__button-add');
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
const cardTemplate = document.querySelector('#element').content.querySelector('.element');

//Open popup window functions
function openPopup (popup) {
    popup.classList.add('popup_opened');
};

function openAuthorPopup(popup) { 
    nameInput.value = nameAuthor.textContent;
    jobInput.value = jobAuthor.textContent;
    openPopup(popup);
    } 

//Close popup window function
function closePopup (popup) {
    popup.classList.remove('popup_opened');
};

//Submit info from popup function
function handleFormSubmitAuthor (evt) {
    evt.preventDefault();
    nameAuthor.textContent = nameInput.value;
    jobAuthor.textContent = jobInput.value;
    closePopup(authorPopup);
};

function handleFormSubmitCard (evt) {
    evt.preventDefault();
    const cardInfo = 
    {
        name: cardName.value,
        link: cardUrl.value
    };
    renderCard(cardInfo);
    cardName.value = "";
    cardUrl.value = "";
    closePopup(cardPopup);
};

//Create card function
function createCard (card) {
    const elementsSection = document.querySelector('.elements');
    const elementCard = cardTemplate.cloneNode(true);
    const trashButton =  elementCard.querySelector('.element__button-trash');
    const imageButton = elementCard.querySelector('.element__image');

    imageButton.src = card.link;
    imageButton.alt = card.name;
    elementCard.querySelector('.element__title').textContent = card.name;
    elementCard.querySelector('.element__button-like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('element__button-like_active');
      }); 
    trashButton.addEventListener('click', function () {
        elementCard.remove();
      });
    imageButton.addEventListener('click', function() {
        openPopup(imagePopup);
        imagePopup.querySelector('.popup__image-title').textContent = card.name;
        imagePopup.querySelector('.popup__image-view').src = imageButton.src;
        imagePopup.querySelector('.popup__image-view').alt = card.name;
    })

    return elementCard;
}

//Render card function
function renderCard (card) {
    const elementsSection = document.querySelector('.elements');
    elementsSection.prepend(createCard(card));
}

//Create six cards
initialCards.reverse().forEach ((card) => {
    renderCard(card);
});


//Open popup author
editButton.addEventListener('click', () => {
    openAuthorPopup(authorPopup);
});

//Open popup card
addButton.addEventListener('click', () => {
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
