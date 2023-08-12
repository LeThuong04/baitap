//bai 1
var n = prompt("Nhap so ban can kiem tra");
switch (n % 3) {
  case 0:
    alert("so nay chia het cho 3");
    break;
  case 1:
    alert("so nay khong chia het cho 3");
    break;
}

//bai 2
var n = prompt("Nhap so ban can kiem tra");
n % 2 == 0 ? alert("so nay la so chan") : alert("so nay la so le");
// bai 3
var input = prompt("nhap so can xet");
input > 0 ? alert("so duong") : alert("so am");
// bai 4
var n = prompt("nhap so");
var c = true;
if (n < 2) {
  c = false;
}
for (var i = 2; i < n; i++) {
  if (n % i == 0) {
    n = false;
  }
}
if (c) {
  alert(n + " la so nguyen to");
} else alert(n + " khong phai so nguyen to");
//bt 5
var n = prompt("nhap so lon hon 0 và nho hon 100 ");
switch (n > 0 && n < 100) {
  case true:
    alert("Giá trị này nằm trong khoảng từ 0 đến 100");
    break;
  case false:
    alert("Giá trị này không nằm trong khoảng từ 0 đến 100");
}
// bt 6
var n = prompt("nhap diem trung binh");
if (n >= 8) {
  alert("Gioi");
} else if (n < 8 && n >= 6.5) {
  alert("Khá");
} else if (n < 6.5 && n >= 5) {
  alert("Trung binh");
} else {
  alert("Yeu");
}
