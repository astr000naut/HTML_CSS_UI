import * as func from "./functions/common-function.js";
import { formHandler } from "./handlers/form-handler.js";
import { contentHandler } from "./handlers/content-handler.js";
import { sidebarHandler } from "./handlers/sidebar-handler.js";
import { cboxHandler } from "./handlers/cbox-handler.js";

initEvents();

/**
 * Khởi tạo sự kiện cho trang thông tin nhân viên
 *
 * Author: Dũng (19/04/2023)
 */
function initEvents() {
  try {
    initContentEvents();
    initFormEvents();
    initSidebarEvents();

  } catch (error) {
    console.log(error);
  }
}


/**
 * Xử lý sự kiện cho sidebar
 * 
 * Author: Dũng (19/04/2023)
 */
function initSidebarEvents() {
  // các item trên sizebar
  const items = func.getElAll('.sidebar__item');
  items.forEach(item => {
    item.addEventListener('click', sidebarHandler.itemClick);
    item.addEventListener('mouseover', sidebarHandler.itemHover);
    item.addEventListener('mouseout', sidebarHandler.itemMouseout);
  })

  // btn thu gọn
  const itemResize = func.getEl('.sidebar__footer');
  itemResize.addEventListener('click', sidebarHandler.itemResizeClick);

}

/**
 * Xử lý sự kiện cho phần chính của trang (phần chứa table)
 * 
 * Author: Dũng (19/04/2023)
 */
function initContentEvents() {
  // btn thêm nhân viên
  const btnAddEmployee = func.getEl('.pcontent__heading .btn__add');
  btnAddEmployee.addEventListener('click', contentHandler.btnAddEmployeeClick);

  // main - toolbar

  // main - table

  // btn tùy chọn số bản ghi / trang
  const btnChooseRecordAmount = func.getEl('.pag__arrowdown');
  btnChooseRecordAmount.addEventListener('click', contentHandler.btnChooseRecordAmountClick)
}

/**
 * Xử lý sự kiện cho phần form thông tin nhân viên
 * 
 * Author: Dũng (19/04/2023)
 */
function initFormEvents() {
  // btn đóng form
  const btnClose = func.getEl('.form__header .btn--close');
  btnClose.addEventListener('click', formHandler.btnCloseClick);

  // hủy
  const btnCancel = func.getEl('.form__footer .footer__left .btn--secondary');
  btnCancel.addEventListener('click', formHandler.btnCancelClick);

  // btn cất
  const btnCat = func.getEl('.form__footer .footer__right .btn--secondary');
  btnCat.addEventListener('click', formHandler.btnCatClick);

  // btn cất và thêm
  const btnCatvathem = func.getEl('.form__footer .footer__right .btn--primary');
  btnCatvathem.addEventListener('click', formHandler.btnCatvathemClick);

  // các textfield
  const inputRequireds = func.getElAll('.field--required');
  inputRequireds.forEach(input => {
    input.addEventListener('keyup', formHandler.requireInputKeyup);
  })
  const inputs = func.getElAll('.form input');
  inputs.forEach(input => {
    input.addEventListener('keydown', formHandler.inputKeydown);
  })


  // COMBOBOX
  // dropbox-btn chọn đơn vị
  const btnCboxdrop = func.getEl('.cbox button');
  btnCboxdrop.addEventListener('click', cboxHandler.btnCboxClick);

  // click vào các item trong option chọn đơn vị
  const itemOptions = func.getElAll('.cbox .option__item');
  itemOptions.forEach(item => {
    item.addEventListener('click', cboxHandler.itemOptionClick);
  })

  // cbombobox input 
  const cboxInput = func.getEl('.cbox input');
  cboxInput.addEventListener('keyup', cboxHandler.inputKeyup);
  cboxInput.addEventListener('keypress', cboxHandler.inputKeypress);
  






  // các check box
  const checkboxs = func.getElAll('.form__header .checkbox');
  checkboxs.forEach(checkbox => {
    checkbox.addEventListener('click', formHandler.checkboxClick);
  })

  // datepicker btn mở
  const iconDatepickers = func.getElAll('.dpicker__icon');
  iconDatepickers.forEach(icon => {
    icon.addEventListener('click', formHandler.iconDatepickerClick);
  })

  // btn đóng dialog
  const btnDialogClose = func.getEl('.dialog__close');
  btnDialogClose.addEventListener('click', formHandler.btnDialogCloseClick);

  // btn không dialog
  const btnDialogNo = func.getEl('.dialog__footer > .btn--secondary');
  btnDialogNo.addEventListener('click', formHandler.btnDialogNoClick);

  // btn có dialog
  const btnDialogYes = func.getEl('.dialog__footer > .btn--primary');
  btnDialogYes.addEventListener('click', formHandler.btnDialogYesClick);

}





