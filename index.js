let nhanVienArr = [];
let errorNotify = {
  tk: "Tài khoản chưa đủ độ dài hợp lệ (4-6)",
  name: "Họ và tên chỉ chứa chữ cái, không chứa chữ số !",
  email: "Email của bạn chưa hợp lệ !",

  password:
    "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",

  ngaylam: "Sai định dạng mm/dd/yyyy !",
  luongCB: "Lương cơ bản 1 000 000 - 20 000 000 và phải là số !",
  chucvu: "Phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)",
  gioLam: " Số giờ làm trong tháng 80 - 200 giờ và chỉ chứa số !",
};
const renderError = (span_tag, name) => {
  span_tag.style.display = "block";
  span_tag.innerHTML = errorNotify[name];
  console.log(errorNotify[name]);
};

function renderNhanVien(renderedNhanVien = nhanVienArr) {
  let content = "";
  let count = 0;
  for (let nhanvien of renderedNhanVien) {
    let { tk, name, email, ngaylam, chucvu } = nhanvien;
    content += `<tr>
        <td>${tk}</td>
         <td>${name}</td>
          <td>${email}</td>
           <td>${ngaylam}</td>
            <td>${chucvu}</td>
             <td>${nhanvien.tongLuong()}</td>
              <td>${nhanvien.xepLoai()}</td>
              <td><button class="btn btn-warning" onclick="getInfor(${count})" data-toggle="modal"
                    data-target="#myModal">Update</button> <button class="btn btn-danger mt-2" onclick="xoaNV(${count})" >X</button></td>
        </tr>`;
    count++;
  }
  document.getElementById("tableDanhSach").innerHTML = content;
  console.log("danh sách nhân viên:", nhanVienArr);
}
function handleSubmit(e) {
  console.log("bạn vào form");
  let nhanVien = new NhanVien();
  if (validateTong(nhanVien)) {
    nhanVienArr.push(nhanVien);

    renderNhanVien();
  }
}

function xoaNV(index) {
  console.log(typeof ten);
  let newArrNhanVien = nhanVienArr.filter((nhanvien, idx) => {
    if (index !== idx) return nhanvien;
  });
  nhanVienArr = [...newArrNhanVien];
  renderNhanVien();
}
function getInfor(idx) {
  console.log("hàm update nhân viên");
  let inputsUser = document.querySelectorAll(
    "#formQLSV input, #formQLSV select"
  );
  for (let inputUser of inputsUser) {
    let { name } = inputUser;
    console.log("thog tin nhân viên:", nhanVienArr[idx][name]);
    inputUser.value = nhanVienArr[idx][name];
    document.getElementById("btnCapNhat").onclick = () => updateNV(idx);
  }
}
function updateNV(idx) {
  let nhanVien = new NhanVien();
  if (validateTong(nhanVien)) {
    nhanVienArr[idx] = { ...nhanVien };
    renderNhanVien();
  }
}
function searchNV(e) {
  let keyword = e.target.value.toLowerCase().trim();
  keyword = removeVietnameseTones(keyword);
  console.log(keyword);
  let arrSinhVienFilter = nhanVienArr.filter((item, idx) => {
    let compTenSinhVien = removeVietnameseTones(
      item.xepLoai().toLowerCase().trim()
    );
    return compTenSinhVien.includes(keyword);
  });
  renderNhanVien(arrSinhVienFilter);
}
document.getElementById("searchName").oninput = searchNV;
