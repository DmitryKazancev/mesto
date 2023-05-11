import Popup from "./Popup.js";

//PopupWithForm class
export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormFunction) {
      super(popupSelector);
      this._submitFormFunction = submitFormFunction;
      this._formWithInputs = this._popup.querySelector('.popup__content');
      this._inputsList = this._formWithInputs.querySelectorAll('.popup__input');
    }

    //get info from input fields
    getInputValues () {
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

    //set event listeners for close and submit button popup
    setEventListeners () {
        super.setEventListeners();
        this._formWithInputs.addEventListener('submit', this._submitFormFunction)
    }

    //close popup function
    close () {
        this._formWithInputs.reset();
        super.close();
        
       
    }
}