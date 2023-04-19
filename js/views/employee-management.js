
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
  // button
  // close button
  const formCloseBtn = getEl('.form__header .btn--close');
  formCloseBtn.addEventListener('click', formCloseBtnClickHandler);
  // cancel button
  const formCancelBtn = getEl('.form__footer .footer__left .btn--secondary');
  formCancelBtn.addEventListener('click', formCancelBtnClickHandler);

  // cat button
  const formCatBtn = getEl('.form__footer .footer__right .btn--secondary');
  formCatBtn.addEventListener('click', formCatBtnClickHandler);

  // textbox

  // combobox

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
  const fuIndexTxtfield = getEl('.fu__index .txtfield');
  fuIndexTxtfield.classList.add('txtfield--error');
  const fuIndexTxtfieldNoti = fuIndexTxtfield.children[2];

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