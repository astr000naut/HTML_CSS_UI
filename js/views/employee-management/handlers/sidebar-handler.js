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
    
  }

}

export {sidebarHandler}