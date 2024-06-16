const validateTong = (nhanVien) => {
  let isvalid = 1;
  let inputsUser = document.querySelectorAll(
    "#formQLSV input,#formQLSV select"
  );
  for (let inputUser of inputsUser) {
    let { name, value, id } = inputUser;
    nhanVien[name] = value.trim();
    let span_tag = document
      .getElementById(id)
      .parentElement.parentElement.querySelector(".sp-thongbao");
    if (name === "tk" && !validate_Account(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "name" && !validateOnlyLetters(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "email" && !validateEmail(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "password" && !validatePassword(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "ngaylam" && !validateDateOfBirth(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "luongCB" && !validateLuongCB(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "chucvu" && value === "") {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "gioLam" && !validateGioLam(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
  }
  if (isvalid) {
    for (let inputUser of inputsUser) {
      inputUser.value = "";
    }
    return 1;
  }

  return 0;
};

const validate_Account = (value) => {
  if (value.trim() == undefined) return 0;
  value = value.trim();
  const newString_length = value.length;
  return 4 <= newString_length && newString_length <= 6;
};
const validateOnlyLetters = (value) => {
  if (value.trim() === "undefined") return 0;
  value = value.trim();
  // Biểu thức chính quy kiểm tra chỉ chứa chữ cái
  const regex = /^[A-Za-z]+$/;
  return regex.test(value);
};
const validateEmail = (email) => {
  if (email.trim() === "undefined") return 0;
  email = email.trim();
  // Biểu thức chính quy kiểm tra tính hợp lệ của email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
const validatePassword = (password) => {
  if (password.trim() === "undefined") return 0;
  // Biểu thức chính quy kiểm tra tính hợp lệ của mật khẩu
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
  return regex.test(password);
};
const validateDateOfBirth = (dateString) => {
  if (dateString.trim() === "undefined") return 0;
  // Biểu thức chính quy kiểm tra định dạng mm/dd/yyyy
  dateString = dateString.trim();
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
  return regex.test(dateString);
};
const validateLuongCB = (luong) => {
  if (luong.trim() === "undefined") return 0;
  luong = luong.trim();
  const regex = /^[0-9]+$/;
  if (!regex.test(luong * 1)) return 0;

  return 1000000 <= luong * 1 && luong * 1 <= 20000000;
};
const validateGioLam = (gioLam) => {
  if (gioLam.trim() === "undefined") return 0;

  gioLam = gioLam.trim();
  const regex = /^[0-9]+$/;
  if (!regex.test(gioLam * 1)) return 0;
  return 80 <= gioLam * 1 && gioLam * 1 <= 200;
};
