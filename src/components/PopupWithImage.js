import Popup from "./Popup.js";

//PopupWithImage class
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
      super(popupSelector);
      this._imageView = this._popup.querySelector('.popup__image-view');
      this._imageTitle = this._popup.querySelector('.popup__image-title');
    }
  
    //open popup with image and set name and alt
    open = (initialCard) => {
      this._imageTitle.textContent = initialCard.name;
      this._imageView.src = initialCard.link;
      this._imageView.alt = initialCard.name;
      super.open();
    }
   }