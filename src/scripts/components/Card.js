//Create card class
export default class Card {
    constructor(initialCard, templateSelector, openPopupImage, openPopupRemove, selectLike) {
        this._initialCard = initialCard;
        this._templateSelector = templateSelector;
        this._openPopupImage = openPopupImage;
        this._openPopupRemove = openPopupRemove;
        this._name = initialCard.name;
        this._link = initialCard.link;
        this._userId = initialCard.userId;
        this._ownerId = initialCard.owner._id;
        this._likes = initialCard.likes;
        this._cardId = initialCard._id;
        this._likesQuantity = initialCard.likes.length;
        this._selectLike = selectLike;
        this._elementCard = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
        this._trashButton =  this._elementCard.querySelector('.element__button-trash');
        this._imageButton = this._elementCard.querySelector('.element__image');
        this._likeIcon = this._elementCard.querySelector('.element__button-like');
        this._cardLikesQuantity = this._elementCard.querySelector('.element__likes-number'); 
        this._imageButton.src = this._link;
        this._imageButton.alt = this._name;
        this._elementCard.querySelector('.element__title').textContent = this._name;
        this._imagePopup = document.querySelector('.popup_image');
        this._imageView = document.querySelector('.popup__image-view');
        this._imageTitle = document.querySelector('.popup__image-title');
    }

    //Open popup for remove card
    _deleteCard = () => {
        this._openPopupRemove({elementCard: this, elementCardId: this._cardId});
        };
    
    //Delete card
    removeCard () {
        this._elementCard.remove();
        this._elementCard = null;
    }

    //Switch like
    _setLike = () => {
        this._selectLike(this._likeIcon, this._cardId);
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

    //Get status like and set active
    _getStatusLike () {
        this._likes.forEach(element => {
            if (element._id === this._userId) {
                this._likeIcon.classList.add('element__button-like_active');
            }
        })
        this._cardLikesQuantity.textContent = this._likesQuantity;
    }

    //Create card public method
    createCard() {
        if (this._userId === this._ownerId) {
            this._trashButton.style.display = 'block';
        }
        else {
            this._trashButton.style.display = 'none';
        }
        this._setEventListeners();
        this._getStatusLike();
        return this._elementCard;
    }

    //Switc status like
    switchLike (likes) {
        this._likeIcon.classList.toggle('element__button-like_active');
        this._cardLikesQuantity.textContent = likes.length;
    }
}