//Configuration object
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_invalid',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
    }

//Validation function
const enableValidation = ({formSelector, ...rest}) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    console.log(forms);
    forms.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            console.log('2')
        })
        setEventListeners(form, rest);
        console.log('3')
    })
}

//Listen events from inputs function
const setEventListeners = (formToValidate, {inputSelector, submitButtonSelector, ...rest}) => {
    const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
    const formButton = formToValidate.querySelector(submitButtonSelector);
    disableButton(formButton, rest);
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, rest);
            if (hasInvalidInput(formInputs)) {
                disableButton(formButton, rest);
            }
            else{
                enableButton(formButton, rest);
            }
    })
    })
}

// Check input validity function
 const checkInputValidity = (input, {inputErrorClass, errorClass, ...rest}) => {
    const currentInputErrorContainer = document.querySelector(`#${input.id}-error`)
    if(input.checkValidity()) {
        currentInputErrorContainer.textContent = '';
        currentInputErrorContainer.classList.remove(errorClass);
        input.classList.remove(inputErrorClass);
    }
    else {
        currentInputErrorContainer.classList.add(errorClass);
        input.classList.add(inputErrorClass);
        currentInputErrorContainer.textContent = input.validationMessage;
    }
 }

 // Check validity function (return true or false)
const hasInvalidInput = (formInputs) => {
    return formInputs.some(item => !item.validity.valid);
}

//Enable submit button function
 const enableButton = (button, {inactiveButtonClass, ...rest}) => {
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
 }

 //Disable submit button function
 const disableButton = (button, {inactiveButtonClass, ...rest}) => {
    // utton.classList.add('popup__button_invalid');
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', '');
 }

 //Run validation function with current config
 enableValidation(validationConfig);
