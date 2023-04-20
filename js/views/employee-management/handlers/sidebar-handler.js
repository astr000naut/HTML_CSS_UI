import * as func from '../functions/common-function.js'

const sidebarHandler = {
/**
 * Xử lý sự kiện click vào sidebar item
 * 
 * Author: Dũng (19/04/2023)
 */
  itemClick: (e) => {

    // Tắt highlight của các item khác
    const otherItems = func.getElAll('.sidebar__item');
    otherItems.forEach(i => {
      i.classList.remove('sidebar__item--highlight');
    })

    // Highligh vào item được chọn
    const item = e.currentTarget;
    item.classList.add('sidebar__item--highlight');
  },

/**
 * Xử lý sự kiện click vào btn thu gọn
 * 
 * Author: Dũng (19/04/2023)
 */
  itemResizeClick: (e) => {

    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';
    const headerSidearea = func.getEl('.header__sidearea');
    const itemTexts = func.getElAll('.sidebar .item__text');
    const sidebar = func.getEl('.sidebar');

    // Kiểm tra trạng thái kích thước hiện tại của sizebar
    if (type == 'big') {
      // Các hành động thu nhỏ sizebar

      // Thay đổi biểu tượng btn thu gọn
      iconResize.classList.remove('mi-sidebar-left-arrow');
      iconResize.classList.add('mi-sidebar-right-arrow');

      //Thay đổi trên phần header
      const applogoEl = func.getEl('.header__applogo');
      applogoEl.remove();
      headerSidearea.style.flexBasis = '78px';
      headerSidearea.style.paddingLeft = '0px';
     
      // Thay đổi trên sizebar
      itemTexts.forEach(item => {
        item.innerText = "";
      })
      sidebar.style.flexBasis = '78px';

    } else {
      // Các hành động phóng to sizebar

      // Thày đổi biểu tượng thu gọn
      iconResize.classList.remove('mi-sidebar-right-arrow');
      iconResize.classList.add('mi-sidebar-left-arrow');
      
      // Thay đổi header
      headerSidearea.style.flexBasis = '200px';
      headerSidearea.style.paddingLeft = '16px';
      headerSidearea.insertAdjacentHTML('beforeend', '<div class="header__applogo"></div>');
      
      // Thay đổi các item sizebar
      itemTexts.forEach(item => {
        item.innerText = item.dataset.text;
      })
      sidebar.style.flexBasis = '200px';
    }
    
  },

/**
 * Xử lý sự kiện hover vào sizebar item
 * 
 * Author: Dũng (19/04/2023)
 */
  itemHover: (e) => {
    const item = e.currentTarget;
    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';

    // Nếu kích thước sizebar là nhỏ thì mới bắt sự kiện này
    if (type == 'small') {
      const itemYPos = item.getBoundingClientRect().y;
      const hoverBox = item.querySelector('.item__hoverbox');
      hoverBox.style.top = `${itemYPos - 56}px`;
      console.log(itemYPos);
      console.log(hoverBox.style.top);
      hoverBox.classList.remove('display--none');
    }
  },

/**
 * Xử lý sự kiện mouseout khỏi sizebar item
 * 
 * Author: Dũng (19/04/2023)
 */
  itemMouseout: (e) => {
    const item = e.currentTarget;
    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';
    
    // Nếu kích thước sizebar là nhỏ thì mới bắt sự kiện này
    if (type == 'small') {
      const hoverBox = item.querySelector('.item__hoverbox');
      hoverBox.classList.add('display--none');
    }
  }

}

export {sidebarHandler}