import Popup from "./Popup.js";

//PopupWithImage class
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._imageView = document.querySelector('.popup__image-view');
      this._imageTitle = document.querySelector('.popup__image-title');
    }
  
    //open popup with image and set name and alt
    open = (initialCard) => {
      this._imageTitle.textContent = initialCard.cardName;
      this._imageView.src = initialCard.link;
      this._imageView.alt = initialCard.cardName;
      super.open();
      super.setEventListeners();
    }
   }