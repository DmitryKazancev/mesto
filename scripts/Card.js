//Create card class
export default class Card {
    constructor(initialCard, templateSelector, openPopupImage) {
        this._initialCard = initialCard;
        this._templateSelector = templateSelector;
        this._openPopupImage = openPopupImage;
        this._name = initialCard.name;
        this._link = initialCard.link;
        this._elementCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        this._trashButton =  this._elementCard.querySelector('.element__button-trash');
        this._imageButton = this._elementCard.querySelector('.element__image');
        this._likeIcon = this._elementCard.querySelector('.element__button-like');
        this._imageButton.src = this._link;
        this._imageButton.alt = this._name;
        this._elementCard.querySelector('.element__title').textContent = this._name;
    }

    //Delete card
    _deleteCard = () => {
        this._elementCard.remove();
        this._elementCard = null;
        };
    
    //Switch like
    _setLike = () => {
        this._likeIcon.classList.toggle('element__button-like_active');
    }

    //Open popup with image
    _openPopupCurrentImage = () => {
        this._openPopupImage(this._initialCard);
    }

    //Set listeners for like button, trash button and card image
    _setEventListeners() {
        this._trashButton.addEventListener('click', this._deleteCard);
        this._likeIcon.addEventListener('click', this._setLike);
        this._imageButton.addEventListener('click', this._openPopupCurrentImage);
    };

    //Create card public method
    createCard() {
        this._setEventListeners();
        return this._elementCard;
    }
}