import * as func from '../functions/common-function.js'
const formHandler = {

/**
 * Xử lý sự kiện click btn đóng form
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCloseClick: () => {

    // Kiểm tra form đang được nhập hay không
    if (func.checkFormHasInput('.wrapper--form')) {
      func.showElement('.wrapper--dialog');
    } else {
      func.hideElement('.wrapper--form');
    }
  },

/**
 * Xử lý sự kiện click btn hủy form
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCancelClick: () => {
    func.hideElement('.wrapper--form');
  },

/**
 * Xử lý sự kiện click btn cất form
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCatClick: () => {
    if (func.validateForm()) {
      func.refreshForm('.wrapper--form');
      func.hideElement('.wrapper--form');
    }
  },

  /**
 * Xử lý sự kiện click btn cất và thêm
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCatvathemClick: () => {
    if (func.validateForm()) {
      func.refreshForm('.wrapper--form');
    }
  },
/**
 * Xử lý sự kiện click btn có lưu trong dialog xác nhận đóng
 * 
 * Author: Dũng (19/04/2023)
 */
  btnDialogYesClick: () => {
    func.hideElement('.wrapper--dialog');
    if (func.validateForm()) {
      func.hideElement('.wrapper--form');
    } 
  },
/**
 * Xử lý sự kiện keyup cho input
 * 
 * Author: Dũng (19/04/2023)
 */
  requireInputKeyup: (e) => {
    const textField = e.target;
    const parent = textField.closest('.field--required');
    func.notEmptyCheckByElement(parent);
  },
/**
 * Xử lý sự kiện click checkbox
 * 
 * Author: Dũng (19/04/2023)
 */
  checkboxClick: (e) => {
    const checkbox = e.target;
    checkbox.classList.toggle('mi-checkbox-checked');
  },
/**
 * Xử lý sự kiện click datepicker btn
 * 
 * Author: Dũng (19/04/2023)
 */
  iconDatepickerClick: (e) => {
    const icon = e.target;
    const dpicker = icon.closest('.dpicker');
    const dpickerBox = dpicker.querySelector('.dpicker__box');
    dpickerBox.classList.toggle('display--none');
  },
/**
 * Xử lý sự kiện click cbox btn
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCboxClick: (e) => {
    const btn = e.target;
    const cboxSelect = btn.closest('.cbox__select');
    cboxSelect.querySelector('.select__optionbox').classList.toggle('display--none');
  },
/**
 * Xử lý sự kiện click btn đóng dialog xác nhận đóng form
 * 
 * Author: Dũng (19/04/2023)
 */
  btnDialogCloseClick: () => {
    func.hideElement('.wrapper--dialog');
  },
/**
 * Xử lý sự kiện click btn dialog không lưu 
 * 
 * Author: Dũng (19/04/2023)
 */
  btnDialogNoClick: () => {
    func.hideElement('.wrapper--dialog');
    func.hideElement('.wrapper--form');
  }
};

export {formHandler}
