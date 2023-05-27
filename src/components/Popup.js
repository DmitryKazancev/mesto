//Popup class
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close');
    }
  
    //open popup function
    open () {
      this._popup.classList.add('popup_opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    //close popup function
    close() {
      this._popup.classList.remove('popup_opened');
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
  
    //set event listeners when popup opened
    setEventListeners () {
      this._buttonClose.addEventListener('click', this._closePopupByCloseButton); 
      this._popup.addEventListener('mousedown', this._closePopupClick);
    }
   }