
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

    const closeBtnList = document.querySelectorAll('.btn--close');
    for (const btn of closeBtnList) {
      btn.addEventListener("click", hideWrapper);
    }

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

