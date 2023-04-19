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

// LÀM SAU optimize, check null, focus loi
/**
 * Validate các trường input và combobox trên form 
 * 
 * Author: Dũng (19/04/2023)
 */
export function validateForm() {
  const indexEmptyCheck = notEmptyCheckByQueryString('.fu__index .txtfield');
  const nameEmptyCheck = notEmptyCheckByQueryString('.fu__name .txtfield');
  const unitEmptyCheck = notEmptyCheckByQueryString('.fu__unit .cbox');
  return (indexEmptyCheck && nameEmptyCheck && unitEmptyCheck);
}

/**
 * Kiểm tra tất cả texfield xem đang có dữ liệu nhập vào không
 * @param {string} queryString string để query element
 * 
 * Author: Dũng (19/04/2023)
 */
export function checkFormHasInput(queryString) {
  const form = getEl(queryString);
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => {
    if (input.getAttribute('type') == 'text') {
      if (input.value != "") return true;
    } else {
      if (input.checked == true) return true;
    }
  })
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

