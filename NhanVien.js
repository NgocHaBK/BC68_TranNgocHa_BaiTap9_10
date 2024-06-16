class NhanVien{
    tongLuong = function () {
        switch (this.chucvu) {
            case "Sếp": return this.luongCB * 3;
            case "Trưởng phòng": return this.luongCB * 2;
            case "Nhân viên": return luongCB;
        }
    }
    xepLoai = function () {
        if (this.gioLam >= 192) return "Xuất sắc";
        else if (this.gioLam >= 176) return "Giỏi";
        else if (this.gioLam >= 160) return "Khá";
        else return "Nhân viên trung bình";
    }
}