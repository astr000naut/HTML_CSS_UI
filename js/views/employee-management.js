
initEvents();

function initEvents() {
  try {

    // MAIN PAGE
    // sidebar

    // heading 
    
    // content
    initContentEvents();

    // EMPLOYEE FORM 
    initEmployeeFormEvents();

    
    // DIALOG
    initDialogEvents();

  } catch (error) {
    console.log(error);
  }
}

// INIT EVENTS MAIN PAGE

function initContentEvents() {

  // main - titlebar - button
  const addEmployeeBtn = getEl('.pcontent__heading .btn__add');
  addEmployeeBtn.addEventListener('click', addEmployeeBtnClickHandler);
  // main - toolbar

  // main - table

  // main - table - pagination
}

// INIT EVENTS EMPLOYEE FORM

function initEmployeeFormEvents() {
  // BUTTON
  // close button
  const formCloseBtn = getEl('.form__header .btn--close');
  formCloseBtn.addEventListener('click', formCloseBtnClickHandler);
  // cancel button
  const formCancelBtn = getEl('.form__footer .footer__left .btn--secondary');
  formCancelBtn.addEventListener('click', formCancelBtnClickHandler);

  // cat button
  const formCatBtn = getEl('.form__footer .footer__right .btn--secondary');
  formCatBtn.addEventListener('click', formCatBtnClickHandler);

  // catvathem button
  const catVaThemBtn = getEl('.form__footer .footer__right .btn--primary');
  catVaThemBtn.addEventListener('click', formCatVaThemBtnClickHandler);

  // TEXTFIELD
  const requiredInputs = getElAll('.field--required input');
  for (let i = 0; i < requiredInputs.length; ++ i) {
    requiredInputs[i].addEventListener('keyup', requireInputKeyupHandler);
  }

  // COMBOBOX

}


// INIT EVENTS DIALOG
function initDialogEvents() {
  // FORM CLOSE DIALOG
  // formCLoseDialog close btn
  const formCloseDialogCloseBtn = getEl('.dialog__close');
  formCloseDialogCloseBtn.addEventListener('click', formDialogCloseBtnClickHandler);

  // formCLoseDialog no btn
  const formCloseDialogNoBtn = getEl('.dialog__footer > .btn--secondary');
  formCloseDialogNoBtn.addEventListener('click', formDialogNoBtnClickHandler);

  // formCLoseDialog yes btn
  const formCloseDialogYesBtn = getEl('.dialog__footer > .btn--primary');
  formCloseDialogYesBtn.addEventListener('click', formCloseDialogYesBtnClickHandler);
}




// HANDLER


function addEmployeeBtnClickHandler() {
  // Refresh form
  refreshForm('.wrapper--form');

  // Show form
  showElement('.wrapper--form');
}

function formCloseBtnClickHandler() {
  console.log(checkFormHasInput('.wrapper--form'));
  if (checkFormHasInput('.wrapper--form')) {
    // hien thi dialog xac minh
    showElement('.wrapper--dialog');
  } else {
    hideElement('.wrapper--form');
  }
}

function formDialogCloseBtnClickHandler() {
  hideElement('.wrapper--dialog');
}

function formDialogNoBtnClickHandler() {
  hideElement('.wrapper--dialog');
  hideElement('.wrapper--form');
}

function formCancelBtnClickHandler() {
  hideElement('.wrapper--form');
}

function formCatBtnClickHandler() {
  if (validateForm()) {
    refreshForm('.wrapper--form');
    hideElement('.wrapper--form');
  }
}

function formCatVaThemBtnClickHandler() {
  if (validateForm()) {
    refreshForm('.wrapper--form');
  }
}

function formCloseDialogYesBtnClickHandler() {
  hideElement('.wrapper--dialog');
  if (validateForm()) {
    hideElement('.wrapper--form');
  } 
}


function requireInputKeyupHandler(e) {
  const textField = e.target;
  const parent = textField.closest('.field--required');
  validator.notEmptyCheckByElement(parent);
}

// FUNCTION

function showElement(querySelectorString) {
  const el = getEl(querySelectorString);
  el.classList.remove('display--none');
}

function hideElement(querySelectorString) {
  const el = getEl(querySelectorString);
  el.classList.add('display--none');
}

function getEl(querySelectorString) {
  return document.querySelector(querySelectorString);
}

function getElAll(querySelectorString) {
  return document.querySelectorAll(querySelectorString);
}

function refreshForm(querySelector) {
  const el = getEl(querySelector);
  
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

function validateForm() {
  // ValidateInput
  // empty check
  const indexEmptyCheck = validator.notEmptyCheckByQueryString('.fu__index .txtfield');
  const nameEmptyCheck = validator.notEmptyCheckByQueryString('.fu__name .txtfield');
  const unitEmptyCheck = validator.notEmptyCheckByQueryString('.fu__unit .cbox');
  return (indexEmptyCheck && nameEmptyCheck && unitEmptyCheck);
}

function checkFormHasInput(querySelector) {
  const form = getEl(querySelector);
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




var validator = {

  notEmptyCheckByQueryString: function(queryString) {
    const el = getEl(queryString);
    return this.notEmptyCheckByElement(el);
  },
  notEmptyCheckByElement: function(el) {
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
}