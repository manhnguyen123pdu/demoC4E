// Bài 7
class student {
  constructor(id, name, age, gender, major) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.major = major;
  }
  displayInfo() {
    console.log(`Id : ${this.id}`);
    console.log(`Name : ${this.name}`);
    console.log(`Age : ${this.age}`);
    console.log(`Gender : ${this.gender}`);
    console.log(`Major: ${this.major}`);
  }

  changeMajor(newMajor) {
    this.major = newMajor;
    console.log("---- New major ----");
  }
}
const student001 = new student(
  "SV001",
  "Nguyễn Văn A",
  20,
  "Nam",
  "Công nghệ thông tin"
);
student001.displayInfo();
student001.changeMajor("Kinh Tế");
student001.displayInfo();

//bài 8
quanLyDonHang = [
  {
    maDH: "DH001",
    sanPham: "Áo thun",
    soLuong: 3,
    donGia: 200000,
  },
  {
    maDH: "DH002",
    sanPham: "Quần jean",
    soLuong: 2,
    donGia: 500000,
  },
  {
    maDH: "DH003",
    sanPham: "Giày thể thao",
    soLuong: 1,
    donGia: 800000,
  },
];
// 8a
function hienThiDonhang() {
  const container = document.getElementById("containerDH");
  let write = "";
  write += "<div>";
  for (key of quanLyDonHang) {
    if (key) {
      write += `<p>Mã đơn hàng : ${key.maDH}</p><p>Sản phẩm : ${key.sanPham}</p><p>Số lượng : ${key.soLuong}</p><p>Đơn giá : ${key.donGia}</p><p>----------------------</p>`;
    }
  }
  write += "</div>";
  container.innerHTML = write;
}
// 8b
function chinhSuaDonHang(donhang, num) {
  const showDH = document.getElementById("showDH");
  const changeSL = document.getElementById("changeSL");
  num = Number(changeSL.value);
  donhang = showDH.value;
  for (key of quanLyDonHang) {
    if (donhang === key.maDH) {
      return (key.soLuong = num) + alert("Đã thay đổi");
    }
  }
  return alert("Đơn hàng ko tồn tại!");
}
// 8c
function tongGiaTriDonHang() {
  const sumDonHang = document.getElementById("sumDonHang");
  let sum = 0;
  for (key of quanLyDonHang) {
    sum += key.donGia * key.soLuong;
  }
  sumDonHang.innerHTML = `Tổng giá trị đơn hàng là : ${sum.toLocaleString()} vnđ`;
}
// 8d
function timSP(donhang) {
  const findDH = document.getElementById("findDH");
  const showSP = document.getElementById("showSP");
  donhang = findDH.value;
  for (key of quanLyDonHang) {
    if (key.maDH === donhang) {
      return (showSP.innerHTML = `Sản phẩm là ${key.maDH} là : ${key.sanPham}`);
    }
  }
  return (showSP.innerHTML = "Ko tìm thấy đơn hàng");
}
// 8e
function themDH(maDonHang, sanPham, soLuong, donGia) {
  maDonHang = document.getElementById("maDH");
  sanPham = document.getElementById("sanPham");
  soLuong = document.getElementById("soLuong");
  donGia = document.getElementById("donGia");
  let newDH = {
    maDH: maDonHang.value,
    sanPham: sanPham.value,
    soLuong: Number(soLuong.value),
    donGia: Number(donGia.value),
  };
  for (key of quanLyDonHang) {
    if (key.maDH === maDonHang.value) {
      return alert("Đơn hàng đã tồn tại!");
    }
  }
  return quanLyDonHang.push(newDH) + alert("Thêm thành công");
}
// 8f
function danhSachSanPham() {
  let listSanPham = [];
  for (key of quanLyDonHang) {
    listSanPham.push(key.sanPham);
  }
  document.getElementById("test").innerHTML = listSanPham;
}
