//Popup class
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupOpened = document.querySelector('.popup_opened');
        this._buttonClose = this._popup.querySelector('.popup__close');
        this._formPopup = document.querySelector('.popup__content');
    }
  
    //open popup function
    open () {
      this._popup.classList.add('popup_opened');
    }
  
    //close popup function
    close() {
      this._popup.classList.remove('popup_opened');
      this._disableEventListeners();
    }
  
    //close popup by ESC function
    _handleEscClose  = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
    }}
    
    //close popup by click in overlay function
    _closePopupClick  = (evt) => {
      if (evt.currentTarget === evt.target) {
          this.close();
      }
    }
    
    //close popup by button 'close'
    _closePopupByCloseButton = () => {
      this.close();
    }

    //disable event listeners when popup closed
    _disableEventListeners() {
      document.removeEventListener('keydown', this._handleEscClose);
      this._popup.removeEventListener('mousedown', this._closePopupClick);
      this._buttonClose.removeEventListener('click', this._closePopupByCloseButton); 
    }
    
    //set event listeners when popup opened
    setEventListeners () {
      this._buttonClose.addEventListener('click', this._closePopupByCloseButton); 
      document.addEventListener('keydown', this._handleEscClose);
      this._popup.addEventListener('mousedown', this._closePopupClick);
    }
   }