import * as func from '../functions/function.js'
const contentHandler = {
  btnAddEmployeeClick: () => {
    func.refreshForm('.wrapper--form');
    func.showElement('.wrapper--form');
  }
}

export {contentHandler}