
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

  // COMBOBOX

}


// INIT EVENTS DIALOG
function initDialogEvents() {
  // FORM CLOSE DIALOG
  // formCLoseDialog close btn
  const formCloseDialogCloseBtn = getEl('.dialog__close');
  formCloseDialogCloseBtn.addEventListener('click', formDialogCloseBtnClickHandler);

  // formCLoseDialog close btn
  const formCloseDialogNoBtn = getEl('.dialog__footer > .btn--secondary');
  console.log(formCloseDialogNoBtn);
  formCloseDialogNoBtn.addEventListener('click', formDialogNoBtnClickHandler);
  // formCLoseDialog close btn

}




// HANDLER


function addEmployeeBtnClickHandler() {
  showElement('.wrapper--form');
}

function formCloseBtnClickHandler() {
  // hien thi dialog xac minh
  showElement('.wrapper--dialog');

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
  // ValidateInput
  // empty check
  const indexEmptyCheck = validator.notEmptyCheck('.fu__index .txtfield');
  const nameEmptyCheck = validator.notEmptyCheck('.fu__name .txtfield');
  const unitEmptyCheck = validator.notEmptyCheck('.fu__unit .cbox');

  // PASS
  if (indexEmptyCheck && nameEmptyCheck && unitEmptyCheck) {
    clearText('.fu__index .txtfield');
    clearText('.fu__name .txtfield');
    clearText('.fu__unit .cbox');
    hideElement('.wrapper--form');
  }
}

function formCatVaThemBtnClickHandler() {
  formCatBtnClickHandler();
  showElement('.wrapper--form');
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

function clearText(querySelector) {
  const el = getEl(querySelector);
  el.querySelector('input').value = "";
}

var validator = {
  notEmptyCheck: function(querySelector) {
    const el = getEl(querySelector);
    const textField = el.querySelector('input');
    if (textField.value.trim() == '') {
      el.classList.add('error-noti');
      const notiEl = el.querySelector('.noti');
      notiEl.innerText = `${el.querySelector('.field--required').innerText} không được để trống`;
      return false;
    } else {
      el.classList.remove('error-noti');
      const notiEl = el.querySelector('.noti');
      notiEl.innerText = ``;
      return true;
    }
    
  }
}