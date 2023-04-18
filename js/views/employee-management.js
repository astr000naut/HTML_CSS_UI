
initEvents();


/**
 * Xử lý sự kiện cho các thành phần
 * Author: astr000naut (18/04/2023)
 * Modyfied: none
 */
function initEvents() {
  try {
    // Sự kiện cho các Button
    const addEmployeeBtn = document.querySelector('.pcontent__heading > .btn__add');
    addEmployeeBtn.addEventListener("click", () => {toggleElement('.form__wrapper')});

    const formCloseBtn = document.querySelector('.form__header .header__close button');
    formCloseBtn.addEventListener("click", () => {toggleElement('.form__wrapper')});

  } catch (error) {
    console.log(error);
  }
}


/**
 * Ẩn / hiện element
 * Author: astr000naut (18/04/2023)
 * Modified: none
 */
function toggleElement(selectorParams) {
  const element = document.querySelector(selectorParams);
  element.classList.toggle('display--none');
}

