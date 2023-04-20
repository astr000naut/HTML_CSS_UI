import {vInputs} from '../../../common/validation-code.js'

/**
 * Hiển thị element bằng cách gỡ class display--none
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function showElement(queryString) {
  const el = getEl(queryString);
  el.classList.remove('display--none');
}

/**
 * Ẩn element bằng cách thêm class display--none
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function hideElement(queryString) {
  const el = getEl(queryString);
  el.classList.add('display--none');
}

/**
 * Tìm một element theo queryString
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function getEl(queryString) {
  return document.querySelector(queryString);
}

/**
 * Tìm tất cả element theo queryString
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function getElAll(queryString) {
  return document.querySelectorAll(queryString);
}

/**
 * Làm sạch tất cả các dữ liệu trên form 
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function refreshForm(queryString) {
  const el = getEl(queryString);

  //Xóa thông tin đã nhập ở textbox và radio 
  const inputs = el.querySelectorAll('input');
  for (let i = 0; i < inputs.length; ++ i) {
    if (inputs[i].getAttribute('type') == 'text')
      inputs[i].value = "";
    else 
      inputs[i].checked = false;
  }

  // Xóa các trạng thái lỗi của textbox, combobox
  const requiredElements = el.querySelectorAll('.error-noti');
  for (let i = 0; i < requiredElements.length; ++ i) {
    requiredElements[i].classList.remove('error-noti');
  }
}

/**
 * Validate form
 * 
 * Author: Dũng (19/04/2023)
 */
export function validateForm() {
  return validateFormAllTextInput();
}

/**
 * Validate các trường input và combobox trên form 
 * 
 * Author: Dũng (19/04/2023)
 */
export function validateFormAllTextInput() {
  return checkRegexAndPushNoti(vInputs);
}

/** 
* * Validate các trường input và combobox trên form 
* @param {Array} validationInputs chứa thông tin về các element và rules áp dụng
* @returns {Boolean} cập nhật trạng thái của field và trả về false nếu
* vi phạm một luật hoặc true nếu vượt qua tất cả các luật
* Author: Dũng (19/04/2023)
*/
function checkRegexAndPushNoti(validationInputs) {
  let response = true;
  let hasFocused = 0;
  validationInputs.forEach(input => {
    const queryString = input.elementQueryString;
    const el = getEl(queryString);

    const inputEl = el.querySelector('input');
    const textValue = inputEl.value;

    const rules = input.rules;
    let thisElPassed = 1;

    for (let i = 0; i < rules.length; ++ i) {
      
      let regex = rules[i].regex;
      if (!regex.test(textValue)) {
        response = false;
        // Cập nhật trạng thái lỗi
        const notiEl = el.querySelector('.noti');
        notiEl.innerText = rules[i].errorMessage;
        el.classList.add('error-noti');
        // Dừng lại ngay khi sai rule 
        thisElPassed = 0;
        break;
      };
    }
    // Focus vào ô lỗi đầu tiên
    if (!hasFocused && !thisElPassed) {
      hasFocused = true;
      inputEl.focus();
    }
    if (thisElPassed) {
      // Nếu pass hết các rule của một ô input thì xóa trạng thái error
      el.classList.remove('error-noti');
      const notiEl = el.querySelector('.noti');
      notiEl.innerText = ``;
    } 
  }) 

  return response;

}

/**
 * Kiểm tra tất cả texfield xem đang có dữ liệu nhập vào không
 * 
 * 
 * Author: Dũng (19/04/2023)
 */
export function checkFormHasInput() {
  const form = getEl('.wrapper--form');
  const inputs = form.querySelectorAll('input');

  for (let i = 0; i < inputs.length; ++ i) {
    if (inputs[i].getAttribute('type') == 'text') {
      if (inputs[i].value != "") {  
        return true;
      }
    } else {
      if (inputs[i].checked == true) { 
        return true;
      }
    }
  }
  return false;
}

/**
 * Check textfield hoặc combobox có thông tin hay không
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function notEmptyCheckByQueryString(queryString) {
  const el = getEl(queryString);
  return notEmptyCheckByElement(el);
} 

/**
 * Check textfield hoặc combobox có thông tin hay không
 * @param {elementObj} el 
 * Author: Dũng (19/04/2023)
 */
export function notEmptyCheckByElement(el) {

  const textField = el.querySelector('input');

  if (textField.value.trim() == '') {
    el.classList.add('error-noti');
    const notiEl = el.querySelector('.noti');
    notiEl.innerText = `${el.querySelector('.label').innerText} không được để trống`;
    return false;
  } else {
    el.classList.remove('error-noti');
    const notiEl = el.querySelector('.noti');
    notiEl.innerText = ``;
    return true;
  }
}

