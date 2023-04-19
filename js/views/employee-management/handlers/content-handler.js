import * as func from '../functions/common-function.js'

const contentHandler = {

/**
 * Sự kiện click vào btn thêm mới nhân viên
 * 
 * Author: Dũng (19/04/2023)
 */
  btnAddEmployeeClick: () => {
    func.refreshForm('.wrapper--form');
    func.showElement('.wrapper--form');
  },

/**
 * Sự kiện click vào btn thay đổi số bản ghi
 * @param {event} e biến sự kiện
 * 
 * Author: Dũng (19/04/2023)
 */
  btnChooseRecordAmountClick: (e) => {
    const btn = e.target;
    const recordCountEl = btn.closest('.pag__recordcount');
    const selecBox = recordCountEl.querySelector('.record__amount__select');
    selecBox.classList.toggle('display--none');
  }
}

export {contentHandler}