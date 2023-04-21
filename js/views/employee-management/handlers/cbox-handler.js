import * as func from '../functions/common-function.js'

var typingTimers = [];
var timeoutVal = 500;
var initedData = false;
var count = 0;
const dataset = [
  {
    value: 0,
    text: 'Phòng Nhân sự'
  },
  {
    value: 1,
    text: 'Phòng Kế toán'
  },
  {
    value: 2,
    text: 'Ban giám đốc'
  },
  {
    value: 3,
    text: 'Phòng Đầu tư'
  },
  {
    value: 4,
    text: 'Phòng Quản lý'
  },
  {
    value: 5,
    text: 'Ban quản lý'
  },
  {
    value: 6,
    text: 'Kho'
  },
  {
    value: 7,
    text: 'Phòng Hành chính'
  },
  {
    value: 8,
    text: 'Phòng Kế hoạch'
  },
  {
    value: 9,
    text: 'Phòng Marketing'
  },
  {
    value: 10,
    text: 'Phòng Kinh doanh'
  }
];

const getDataSet = new Promise((resolve, reject) => {
 
  setTimeout(() => {
    resolve(dataset);
  }, 3000);
});


const filterData = (input) => {
  const response = [];
  for (let i = 0; i < dataset.length; ++ i)   {
    if (dataset[i].text.includes(input)) {
      response.push(dataset[i]);
    }
  }
  if (!response.length) {
    response.push({
      value: '-1',
      text: 'Không tìm thấy'
    })
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 500);
  });
}

const initData = (optionlistEl) => {
  // Display loading
  const selectOptionBox = optionlistEl.closest('.select__optionbox');
  selectOptionBox.querySelector('.optionlist').classList.add('display--none');
  selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');

  getDataSet.then(
    dataset => {
      optionlistEl.innerHTML = '';
      for (const data of dataset) {
        optionlistEl.insertAdjacentHTML('beforeend',
        `<div class="option__item" data-value="${data.value}">
        <div class="option__text">${data.text}</div>
        <div class="option__icon"></div>`);
      };
      const itemOptions = func.getElAll('.cbox .option__item');
      itemOptions.forEach(item => {
        item.addEventListener('click', cboxHandler.itemOptionClick);
      })
      // Hide loading
      selectOptionBox.querySelector('.loaderbox').classList.add('display--none');
      selectOptionBox.querySelector('.optionlist').classList.remove('display--none');
    }
  );
  
  

}


const cboxHandler = {
/**
 * Xử lý sự kiện click cbox btn
 * 
 * Author: Dũng (19/04/2023)
 */
  btnCboxClick: (e) => {
    const btn = e.target;
    const cboxSelect = btn.closest('.cbox__select');
    cboxSelect.querySelector('.select__optionbox').classList.toggle('display--none');
    // Init Data
    const optionlist = cboxSelect.querySelector('.optionlist');
    initData(optionlist);
  },

  itemOptionClick: (e) => {
    const item = e.currentTarget;
    // Lấy dataset value của item
    const value = item.dataset.value;

    // Lấy text của item
    const text = item.querySelector('.option__text').innerText;
    console.log(text);

    // Set text cho ô input
    const cboxSelect = item.closest('.cbox__select');
    const inputEl = cboxSelect.querySelector('input');
    inputEl.value = text;

    // Xóa đánh dấu ở các item khác
    const optionList = item.closest('.optionlist');
    const itemList = optionList.querySelectorAll('.option__item');
    for (const item of itemList) {
      item.classList.remove('item--selected');
    }
    // Đánh dấu item được chọn
    item.classList.add('item--selected');

    // Xóa trạng thái báo lỗi để trống
    const cbox = cboxSelect.closest('.cbox');
    cbox.classList.remove('error-noti');

    // Đóng selectOptionbox
    optionList.parentElement.classList.add('display--none'); 
  }
  ,
  inputKeyup: (e) => {
    const input = e.target;
    const cboxSelect = input.closest('.cbox__select');
    const selectOptionBox = cboxSelect.querySelector('.select__optionbox');
    const optionlistEl = selectOptionBox.querySelector('.optionlist');

    // Nếu cbox__select chưa hiện thì hiện lên sau 0.5s
    if (selectOptionBox.classList.contains('display--none')) {
      setTimeout(() => {
        selectOptionBox.classList.remove('display--none');
      }, 500);
    }

    // Hành động sau typing
    // typingTimers.push(setTimeout(() => {
    //   // Cập nhật lại optionlist theo giá trị của input
      

    //   // Chuyển sang optionlist
    //   selectOptionBox.querySelector('.optionlist').classList.remove('display--none');
    //   selectOptionBox.querySelector('.loaderbox').classList.add('display--none');
    // }, timeoutVal)); 


    while(typingTimers.length > 0) {
      clearTimeout(typingTimers[0]);
      typingTimers.splice(0, 1);
    }

    typingTimers.push(setTimeout(() => {
      
      // Display loading
      const selectOptionBox = optionlistEl.closest('.select__optionbox');
      selectOptionBox.querySelector('.optionlist').classList.add('display--none');
      selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');

      filterData(input.value).then(
        dataset => {
          optionlistEl.innerHTML = '';
          ++ count;
          console.log(count);
          console.log(dataset);
          for (const data of dataset) {
            optionlistEl.insertAdjacentHTML('beforeend',
            `<div class="option__item" data-value="${data.value}">
            <div class="option__text">${data.text}</div>
            <div class="option__icon"></div>`);
          };
          if (dataset[0].value != '-1') {
            const itemOptions = func.getElAll('.cbox .option__item');
            itemOptions.forEach(item => {
              item.addEventListener('click', cboxHandler.itemOptionClick);
            })
          }
          
          // Hide loading
          selectOptionBox.querySelector('.loaderbox').classList.add('display--none');
          selectOptionBox.querySelector('.optionlist').classList.remove('display--none');
        }
      );
    
    }, timeoutVal)); 



  },

  inputKeypress: (e) => {
    const input = e.target;
    const cboxSelect = input.closest('.cbox__select');
    const selectOptionBox = cboxSelect.querySelector('.select__optionbox');
    
    while(typingTimers.length) {
      clearTimeout(typingTimers[0]);
      typingTimers.splice(0, 1);
    }

    // Hành động khi typing
    if (!selectOptionBox.querySelector('.optionlist').classList.contains('display--none')) {
      selectOptionBox.querySelector('.optionlist').classList.add('display--none');
      selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');
    }
  },
}

export {cboxHandler};
