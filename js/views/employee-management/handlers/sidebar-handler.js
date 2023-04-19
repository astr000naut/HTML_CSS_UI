import * as func from '../functions/function.js'
const sidebarHandler = {
  itemClick: (e) => {
    const otherItems = func.getElAll('.sidebar__item');
    otherItems.forEach(i => {
      i.classList.remove('sidebar__item--highlight');
    })
    const item = e.currentTarget;
    item.classList.add('sidebar__item--highlight');
  },

  itemResizeClick: (e) => {

    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';
    const headerSidearea = func.getEl('.header__sidearea');
    const itemTexts = func.getElAll('.sidebar .item__text');
    const sidebar = func.getEl('.sidebar');
    // Change footer icon
    if (type == 'big') {
      iconResize.classList.remove('mi-sidebar-left-arrow');
      iconResize.classList.add('mi-sidebar-right-arrow');

      //Resize header
      const applogoEl = func.getEl('.header__applogo');
      applogoEl.remove();
      headerSidearea.style.flexBasis = '78px';
      headerSidearea.style.paddingLeft = '0px';
      // Resize Sidebar
      
      itemTexts.forEach(item => {
        item.innerText = "";
      })
      sidebar.style.flexBasis = '78px';
    } else {
      iconResize.classList.remove('mi-sidebar-right-arrow');
      iconResize.classList.add('mi-sidebar-left-arrow');
      // Resize header
      headerSidearea.style.flexBasis = '200px';
      headerSidearea.style.paddingLeft = '16px';
      headerSidearea.insertAdjacentHTML('beforeend', '<div class="header__applogo"></div>');
      // Resize Sidebar
      itemTexts.forEach(item => {
        item.innerText = item.dataset.text;
      })
      sidebar.style.flexBasis = '200px';
    }
    
  },

  itemHover: (e) => {
    const item = e.currentTarget;
    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';
    if (type == 'small') {
      const hoverBox = item.querySelector('.item__hoverbox');
      hoverBox.classList.remove('display--none');
    }
  },

  itemMouseout: (e) => {
    const item = e.currentTarget;
    const iconResize = func.getEl('.sidebar__footer .item__icon');
    const type = iconResize.classList.contains('mi-sidebar-left-arrow') ? 'big' : 'small';
    if (type == 'small') {
      const hoverBox = item.querySelector('.item__hoverbox');
      hoverBox.classList.add('display--none');
    }
  }

}

export {sidebarHandler}