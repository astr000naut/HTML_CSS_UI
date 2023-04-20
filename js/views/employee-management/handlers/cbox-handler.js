import * as func from '../functions/common-function.js'

var typingTimers = [];
var timeoutVal = 500;
var initedData = false;

const getDataSet = new Promise((resolve, reject) => {
  const response = [
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
      text: 'Phòng Công nghệ thông tin'
    },
    {
      value: 3,
      text: 'Phòng Chăm sóc khách hàng'
    }
  ];
  setTimeout(() => {
    resolve(response);
  }, 3000);
});


const filterData = (input) => {
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
      text: 'Phòng Công nghệ thông tin'
    },
    {
      value: 3,
      text: 'Phòng Chăm sóc khách hàng'
    }
  ];
  const response = [];
  for (let i = 0; i < dataset.length; ++ i) {
    if (Math.floor(Math.random() * 10) < 4) {
      response.push(dataset[i]);
    }
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(response);
    }, 200);
  });
}

const initData = (optionlistEl) => {
  optionlistEl.innerHTML = '';
  // Display loading
  const selectOptionBox = optionlistEl.closest('.select__optionbox');
  selectOptionBox.querySelector('.optionlist').classList.add('display--none');
  selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');

  const dataset = getDataSet.then(
    dataset => {
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



    typingTimers.push(setTimeout(() => {
      optionlistEl.innerHTML = '';
      // Display loading
      const selectOptionBox = optionlistEl.closest('.select__optionbox');
      selectOptionBox.querySelector('.optionlist').classList.add('display--none');
      selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');

      const dataset = filterData(input.value).then(
        dataset => {
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
    
    }, timeoutVal)); 





  },

  inputKeypress: (e) => {
    const input = e.target;
    const cboxSelect = input.closest('.cbox__select');
    const selectOptionBox = cboxSelect.querySelector('.select__optionbox');
    
    typingTimers.forEach(timer => {
      clearTimeout(timer);
    })

    // Hành động khi typing
    if (!selectOptionBox.querySelector('.optionlist').classList.contains('display--none')) {
      selectOptionBox.querySelector('.optionlist').classList.add('display--none');
      selectOptionBox.querySelector('.loaderbox').classList.remove('display--none');
    }
  },
}

export {cboxHandler};
