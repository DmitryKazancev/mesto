//Popup class
export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupOpened = document.querySelector('.popup_opened');
        this._buttonsClose = document.querySelectorAll('.popup__close');
    }
  
    //open popup function
    open () {
      this._popup.classList.add('popup_opened');
      this.setEventListeners();
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
    
    //disable event listeners when popup closed
    _disableEventListeners() {
      document.removeEventListener('keydown', this._handleEscClose);
      this._popup.removeEventListener('mousedown', this._closePopupClick);
    }
    
    //set event listeners when popup opened
    setEventListeners () {
      this._buttonsClose.forEach(button => {
        const buttonsPopup = button.closest('.popup'); 
        button.addEventListener('click', () => this.close(buttonsPopup)); 
      });
      document.addEventListener('keydown', this._handleEscClose);
      this._popup.addEventListener('mousedown', this._closePopupClick);
    }
   }