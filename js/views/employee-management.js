
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
    addEmployeeBtn.addEventListener("click", () => {toggleElement('.wrapper--form')});

    const formCloseButton = document.querySelector('.form__header .btn--close');
    formCloseButton.addEventListener("click", formCloseButtonHandler);

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

/**
 * Ẩn popup / form chứa nút close
 * Author: astr000naut (18/04/2023)
 * Modified: none
 */
function hideWrapper() {
  const closestWrapper = this.closest('.wrapper');
  console.log(this);
  console.log(closestWrapper);
  console.log("--------------------------");
  closestWrapper.classList.add('display--none');
}

/**
 * Sự kiện đóng form thông tin nhân viên
 * Author: astr000naut (18/04/2023)
 * Modified: none
 */
function formCloseButtonHandler() {
  // Popup thông báo bạn có muốn đóng không
    const formCloseComfirmPopup = document.querySelector('.dialog--closeconfirm');
    formCloseComfirmPopup.classList.remove('display--none');
  //


}

