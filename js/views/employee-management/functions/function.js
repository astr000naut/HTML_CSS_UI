export function showElement(queryString) {
  const el = getEl(queryString);
  el.classList.remove('display--none');
}

export function hideElement(queryString) {
  const el = getEl(queryString);
  el.classList.add('display--none');
}

export function getEl(queryString) {
  return document.querySelector(queryString);
}

export function getElAll(queryString) {
  return document.querySelectorAll(queryString);
}

export function refreshForm(queryString) {
  const el = getEl(queryString);

  //Clear input value and radio checked
  const inputs = el.querySelectorAll('input');
  for (let i = 0; i < inputs.length; ++ i) {
    if (inputs[i].getAttribute('type') == 'text')
      inputs[i].value = "";
    else 
      inputs[i].checked = false;
  }

  // Clear error state
  const requiredElements = el.querySelectorAll('.error-noti');
  for (let i = 0; i < requiredElements.length; ++ i) {
    requiredElements[i].classList.remove('error-noti');
  }
}

export function validateForm() {
  const indexEmptyCheck = notEmptyCheckByQueryString('.fu__index .txtfield');
  const nameEmptyCheck = notEmptyCheckByQueryString('.fu__name .txtfield');
  const unitEmptyCheck = notEmptyCheckByQueryString('.fu__unit .cbox');
  return (indexEmptyCheck && nameEmptyCheck && unitEmptyCheck);
}

export function checkFormHasInput(queryString) {
  const form = getEl(queryString);
  const inputs = form.querySelectorAll('input');
  for (let i = 0; i < inputs.length; ++ i) {
    if (inputs[i].getAttribute('type') == 'text') {
      if (inputs[i].value != "") return true;
    } else {
      if (inputs[i].checked == true) return true;
    }
  }
  return false;
}

export function notEmptyCheckByQueryString(queryString) {
  const el = getEl(queryString);
  return notEmptyCheckByElement(el);
} 

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

