import * as func from "./functions/function.js";
import { formHandler } from "./handlers/form-handler.js";
import { contentHandler } from "./handlers/content-handler.js";
import { sidebarHandler } from "./handlers/sidebar-handler.js";

initEvents();

function initEvents() {
  try {
    initContentEvents();
    initFormEvents();
    initSidebarEvents();

  } catch (error) {
    console.log(error);
  }
}


// INIT EVENTS MAIN PAGE

function initSidebarEvents() {
  // sidebar item click and hover
  const items = func.getElAll('.sidebar__item');
  items.forEach(item => {
    item.addEventListener('click', sidebarHandler.itemClick);
    item.addEventListener('mouseover', sidebarHandler.itemHover);
    item.addEventListener('mouseout', sidebarHandler.itemMouseout);
  })

  // sidebar resize
  const itemResize = func.getEl('.sidebar__footer');
  itemResize.addEventListener('click', sidebarHandler.itemResizeClick);


  

}

function initContentEvents() {
  // main - titlebar - button
  const btnAddEmployee = func.getEl('.pcontent__heading .btn__add');
  btnAddEmployee.addEventListener('click', contentHandler.btnAddEmployeeClick);
  // main - toolbar

  // main - table

  // main - table - pagination
}

// INIT EVENTS EMPLOYEE FORM

function initFormEvents() {
  // BUTTON
  // close button
  const btnClose = func.getEl('.form__header .btn--close');
  btnClose.addEventListener('click', formHandler.btnCloseClick);

  // cancel button
  const btnCancel = func.getEl('.form__footer .footer__left .btn--secondary');
  btnCancel.addEventListener('click', formHandler.btnCancelClick);

  // cat button
  const btnCat = func.getEl('.form__footer .footer__right .btn--secondary');
  btnCat.addEventListener('click', formHandler.btnCatClick);

  // catvathem button
  const btnCatvathem = func.getEl('.form__footer .footer__right .btn--primary');
  btnCatvathem.addEventListener('click', formHandler.btnCatvathemClick);

  // cbox drop button
  const btnCboxdrop = func.getEl('.cbox button');
  btnCboxdrop.addEventListener('click', formHandler.btnCboxClick);

  // TEXTFIELD
  const inputRequireds = func.getElAll('.field--required input');
  inputRequireds.forEach(input => {
    input.addEventListener('keyup', formHandler.requireInputKeyup);
  })

  // COMBOBOX


  // CHECKBOX
  const checkboxs = func.getElAll('.form__header .checkbox');
  checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', formHandler.checkboxClick);
  })

  // DATEPICKER
  const iconDatepickers = func.getElAll('.dpicker__icon');
  iconDatepickers.forEach(icon => {
    icon.addEventListener('click', formHandler.iconDatepickerClick);
  })

  // DIALOG
  const btnDialogClose = func.getEl('.dialog__close');
  btnDialogClose.addEventListener('click', formHandler.btnDialogCloseClick);

  // formCLoseDialog no btn
  const btnDialogNo = func.getEl('.dialog__footer > .btn--secondary');
  btnDialogNo.addEventListener('click', formHandler.btnDialogNoClick);

  // formCLoseDialog yes btn
  const btnDialogYes = func.getEl('.dialog__footer > .btn--primary');
  btnDialogYes.addEventListener('click', formHandler.btnDialogYesClick);

}





