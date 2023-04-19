window.onload = function() {
    // Gán sự kiện cho các thành phần:
    initEvents();
    //load dữ liệu cho table

}


/**
 * Tạo các sự kiện cho các button...
 * Author: astr000naut (18/04/2023)
 */
function initEvents() {
    try {
        // Add:
            const btnAdd = document.querySelector("#btn-add");
            btnAdd.addEventListener("click", btnAddOnclick); 
        // ...
    } catch (error) {
        console.log(error)
    }   
}

/**
 * ....
 */
function btnAddOnclick() {
    // Hiển thị form chi tiết nhân viên
    document.querySelector("..").style.display = "block";
    
    // Lấy mã nhân viên mới và cán vào textbox mã nhân viên
    const code = '....'

    // Focus vào ô nhập liệu đầu tiên
    

    // Luu y: Co refactor code
}

/**
 * ....
 */
function btnSaveOnClick() {
    // Validate dữ liệu
    validateData();

    // Nếu dữ liệu hợp lệ thì gọi api 

    // Nếu dữ liệu không hợp lệ thì thông báo lỗi cụ thể

}

/**
 * 
 */
function validateData() {
    // Kiểm tra các dữ liệu bắt buộc nhập
    let inputRequiredList = document.querySelectorAll('[required');
    for (const input of inputRequiredList) {
    
    }

    // Kiểm tra định dạng dữ liệu

    // Kiểm tra ngày tháng năm sinh không được lớn hơn ngày tháng hiện tại
    
    // Kiểm tra độ dài chuỗi kí tự (nếu có)
}

/**
 * Lấy ra tên nhân viên
 * 
 * @param {type} name ten nhan vien
 * @returns {type} ten nhan vien
 * 
 * Author: Dũng (19/04/2023)
 */
function getName(name) {
    try {
        
    } catch (error) {
        
    }
}

/**
 * Description
 * @param {type} p1 ....
 * @param {type} p2 ....
 * @returns {type} ...
 * Author: NVMANH (18/04/2023)
 * Modifier: NVMANH(19/04/2023) - sua loi sao ten tham so
 */