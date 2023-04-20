const vInputs = []
const validationInputIndexField = {
  elementQueryString: '.fu__index .txtfield',

  rules: [
    {
      regex: /^(?!\s*$).+/,
      errorMessage: 'Mã không được để trống'
    }
  ]
};
const validationInputNameField = {
  elementQueryString: '.fu__name .txtfield',

  rules: [
    {
      regex: /^(?!\s*$).+/,
      errorMessage: 'Tên không được để trống'
    }
  ]
};
const validationInputUnitField = {
  elementQueryString: '.fu__unit .cbox',

  rules: [
    {
      regex: /^(?!\s*$).+/,
      errorMessage: 'Đơn vị không được để trống'
    }
  ]
};

const validationEmailField = {
  elementQueryString: '.fl__email .txtfield',

  rules: [
    {
      regex: /^$|^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      errorMessage: 'Địa chỉ Email không hợp lệ'
    }
  ]
};

const validationPhoneField = {
  elementQueryString: '.fl__phone .txtfield',

  rules: [
    {
      regex: /^$|^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
      errorMessage: 'Số điện thoại không hợp lệ'
    }
  ]
};

const validationPhone2Field = {
  elementQueryString: '.fl__homephone .txtfield',

  rules: [
    {
      regex: /^$|^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      errorMessage: 'Số điện thoại không hợp lệ'
    }
  ]
};
const validationBirthdayField = {
  elementQueryString: '.fu__dob .dpicker',

  rules: [
    {
      regex: /^$|^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
      errorMessage: 'Ngày tháng không hợp lệ'
    }
  ]
};
const validationCMNDDateField = {
  elementQueryString: '.fu__cmnddate .dpicker',

  rules: [
    {
      regex: /^$|^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/,
      errorMessage: 'Ngày tháng không hợp lệ'
    }
  ]
};
const validationCMNDField = {
  elementQueryString: '.fu__cmnd .txtfield',

  rules: [
    {
      regex: /^$|^(\d{10}|\d{12})$/,
      errorMessage: 'Số CMND không hợp lệ'
    }
  ]
};

  
vInputs.push(
  validationInputIndexField,
  validationInputNameField,
  validationInputUnitField,
  validationEmailField,
  validationPhoneField,
  validationPhone2Field,
  validationBirthdayField,
  validationCMNDDateField,
  validationCMNDField);

export {vInputs};