import Popup from "./Popup.js";

//PopupWithForm class
export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
      super(popupSelector);
      this._submitFormFunction = submitFormFunction;
      this._formWithInputs = this._popup.querySelector('.popup__content');
      this._inputsList = this._formWithInputs.querySelectorAll('.popup__input');
      this._textSubmitButton = this._formWithInputs.querySelector('.popup__button');
      this._originalTextSubmitButton = this._textSubmitButton.textContent;
    }

    //set event listeners for close and submit button popup
    setEventListeners () {
        super.setEventListeners();
        this._formWithInputs.addEventListener('submit', this._handleSubmitButton);
    }

    //Set default text on submit button
    setCurrentTextButton () {
        this._textSubmitButton.textContent = this._originalTextSubmitButton;
    }

    //handle submit button function
    _handleSubmitButton = (evt) => {
        evt.preventDefault();
        this._textSubmitButton.textContent = 'Сохранение...';
        this._submitFormFunction(this._getInputValues());
    }

    //get info from input fields
    _getInputValues () {
        this._infoFromInputs = {};
        this._inputsList.forEach(input => {
            this._infoFromInputs[input.name] = input.value;
        });
        return this._infoFromInputs;
    }

    //set info to input fields
    setInputValues (userInfo) {
        this._inputsList.forEach(input => {
            input.value = userInfo[input.name];
        })
    }

    //close popup function
    close () {
        super.close();
        this._formWithInputs.reset();
    }
}