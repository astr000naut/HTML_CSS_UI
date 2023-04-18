
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
    addEmployeeBtn.addEventListener("click", addEmployeeBtnClickListener);

  } catch (error) {
    console.log(error);
  }
}


/**
 * Xử lý sự kiện click cho button Thêm mới nhân viên
 * Author: astr000naut (18/04/2023)
 * Modyfied: none
 */
function addEmployeeBtnClickListener() {
  const formWrapper = document.querySelector('.form__wrapper');
  formWrapper.classList.toggle('form__wrapper--off');
}

