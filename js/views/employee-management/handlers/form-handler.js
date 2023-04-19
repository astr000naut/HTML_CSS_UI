import * as func from '../functions/function.js'
const formHandler = {

  btnCloseClick: () => {
    if (func.checkFormHasInput('.wrapper--form')) {
      func.showElement('.wrapper--dialog');
    } else {
      func.hideElement('.wrapper--form');
    }
  },

  btnCancelClick: () => {
    func.hideElement('.wrapper--form');
  },

  btnCatClick: () => {
    if (func.validateForm()) {
      func.refreshForm('.wrapper--form');
      func.hideElement('.wrapper--form');
    }
  },

  btnCatvathemClick: () => {
    if (func.validateForm()) {
      func.refreshForm('.wrapper--form');
    }
  },

  btnDialogYesClick: () => {
    func.hideElement('.wrapper--dialog');
    if (func.validateForm()) {
      func.hideElement('.wrapper--form');
    } 
  },

  requireInputKeyup: (e) => {
    const textField = e.target;
    const parent = textField.closest('.field--required');
    func.notEmptyCheckByElement(parent);
  },

  checkboxClick: (e) => {
    const checkbox = e.target;
    checkbox.classList.toggle('mi-checkbox-checked');
  },

  iconDatepickerClick: (e) => {
    const icon = e.target;
    const dpicker = icon.closest('.dpicker');
    const dpickerBox = dpicker.querySelector('.dpicker__box');
    dpickerBox.classList.toggle('display--none');
  },

  btnCboxClick: (e) => {
    const btn = e.target;
    const cboxSelect = btn.closest('.cbox__select');
    cboxSelect.querySelector('.select__optionbox').classList.toggle('display--none');
  },

  btnDialogCloseClick: () => {
    func.hideElement('.wrapper--dialog');
  },

  btnDialogNoClick: () => {
    func.hideElement('.wrapper--dialog');
    func.hideElement('.wrapper--form');
  }
};

export {formHandler}
