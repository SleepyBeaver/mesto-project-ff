export { clearValidation, enableValidation };

const displayInputError = (formElem, inputElem, errorMsg, config) => {
    const errorElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.add(config.inputErrorClass);
    errorElem.textContent = errorMsg;
    errorElem.classList.add(config.errorClass);
};

const removeInputError = (formElem, inputElem, config) => {
    const errorElem = formElem.querySelector(`.${inputElem.id}-error`);
    inputElem.classList.remove(config.inputErrorClass);
    inputElem.setCustomValidity('');
    errorElem.classList.remove(config.errorClass);
    errorElem.textContent = '';
};

const validateInput = (formElem, inputElem, config) => {
    const customErrorMsg = inputElem.dataset.errorMessage || inputElem.validationMessage;
    if (!inputElem.validity.valid) {
        displayInputError(formElem, inputElem, customErrorMsg, config);
    } else {
        removeInputError(formElem, inputElem, config);
    }
};

const addEventListeners = (formElem, config) => {
    const inputs = Array.from(formElem.querySelectorAll(config.inputSelector));
    const submitBtn = formElem.querySelector(config.submitButtonSelector);
    updateButtonState(inputs, submitBtn, config);
    inputs.forEach(inputElem => {
        inputElem.addEventListener('input', function() {
            validateInput(formElem, inputElem, config);
            updateButtonState(inputs, submitBtn, config);
        });
    });
};

const enableValidation = config => {
    const forms = Array.from(document.querySelectorAll(config.formSelector));
    forms.forEach(formElem => {
        addEventListeners(formElem, config);
    });
};

const hasInvalidInput = inputs => {
    return inputs.some(inputElem => {
        return !inputElem.validity.valid;
    });
};

const updateButtonState = (inputs, submitBtn, config) => {
    if (hasInvalidInput(inputs)) {
        submitBtn.disabled = true;
        submitBtn.classList.add(config.inactiveButtonClass);
    } else {
        submitBtn.disabled = false;
        submitBtn.classList.remove(config.inactiveButtonClass);
    }
};

const clearValidation = (formElem, config) => {
    const inputs = Array.from(formElem.querySelectorAll(config.inputSelector));
    const submitBtn = formElem.querySelector(config.submitButtonSelector);
    inputs.forEach(inputElem => {
        removeInputError(formElem, inputElem, config);
    });
    updateButtonState(inputs, submitBtn, config);
};
