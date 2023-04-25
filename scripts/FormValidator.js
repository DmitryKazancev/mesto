// Class for validation forms inputs and buttons 
export default class FormValidator {
    constructor(validationConfig, formElement) {
        this._validationConfig = validationConfig;
        this._formSelector = validationConfig.formSelector;
        this._inputSelector = validationConfig.inputSelector;
        this._submitButtonSelector = validationConfig.submitButtonSelector;
        this._inactiveButtonClass = validationConfig.inactiveButtonClass;
        this._inputErrorClass = validationConfig.inputErrorClass;
        this._errorClass = validationConfig.errorClass;
        this._formElement = formElement;
        this._formInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._formButton = this._formElement.querySelector(this._submitButtonSelector);
    }

    // Check validity (return true or false)
    _hasInvalidInput () {
        return this._formInputs.some(item => !item.validity.valid);
    }

    //Enable submit button 
    _enableButton () {
        this._formButton.classList.remove(this._inactiveButtonClass);
        this._formButton.removeAttribute('disabled');
    }

    //Disable submit button
    _disableButton () {
        this._formButton.classList.add(this._inactiveButtonClass);
        this._formButton.setAttribute('disabled', '');
    }

    //On or Off submit button on form
    _switchButtonForm () {
        if (this._hasInvalidInput(this._formInputs)) {
            this._disableButton(this._formButton);
        }
        else{
            this._enableButton(this._formButton);
        }
    }

    //Check input is valid
    _checkInputValidity(input) {
        const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
        if(input.checkValidity()) {
            currentInputErrorContainer.textContent = '';
            currentInputErrorContainer.classList.remove(this._errorClass);
            input.classList.remove(this._inputErrorClass);
        }
        else {
            currentInputErrorContainer.classList.add(this._errorClass);
            input.classList.add(this._inputErrorClass);
            currentInputErrorContainer.textContent = input.validationMessage;
        }
    }

    //Set listeners for form inputs
    _setEventListeners () {
        this._formInputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._switchButtonForm(input);
            })
        })
    }

    //Enable validation public method
    enableValidation(){
        this._disableButton();
        this._setEventListeners();
    }

 }