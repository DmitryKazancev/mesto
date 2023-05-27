//Popup remove class
import Popup from "./Popup.js";

export default class PopupCardRemove extends Popup {
    constructor(popupSelector, submitFormFunction) {
        super(popupSelector);
        this._submitFormFunction = submitFormFunction;
        this._popupFormRemove = document.querySelector('.popup__content-sure');
        this._textSubmitButton = this._popupFormRemove.querySelector('.popup__button');
    }

    //Set default text on submit button
    setCurrentTextButton () {
        this._textSubmitButton.textContent = 'Да';
    }

    //Submit button function
    _handleSubmitButton = (evt) => {
        evt.preventDefault();
        this._textSubmitButton.textContent = 'Удаление...';
        this._submitFormFunction({elementCard: this._element, elementCardId: this._elementCardId});
    }
    
    //Set event listeners for form
    setEventListeners () {
        super.setEventListeners();
        this._popupFormRemove.addEventListener('submit', this._handleSubmitButton);
    }

    //Disable event listener for submit button
    disableSubmitListener () {
        this._popupFormRemove.removeEventListener('submit', this._handleSubmitButton);
    }

    //Open popup
    open = ({elementCard, elementCardId}) => {
        super.open();
        this._element = elementCard;
        this._elementCardId = elementCardId;
        this.setEventListeners();
    }
}