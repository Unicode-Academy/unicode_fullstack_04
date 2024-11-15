//Câu lệnh rẽ nhánh
// let a = 9;
// let b = 0;
// if (!a) {
//   b += a;
// } else {
//   b += 5; //b = b + 5
// }
// console.log(b);

//Câu lệnh if else nhiều nhánh
// let a = 6;
// if (a < 0) {
//   console.log("Số âm");
// } else if (a >= 0 && a < 5) {
//   console.log("Số nhỏ");
// } else if (a >= 5 && a < 10) {
//   console.log("Số trung bình");
// } else {
//   console.log("Số lớn");
// }

//Câu lệnh if else lồng nhau
// let username, password;
// username = "an";
// password = "123";
// if (!username || !password) {
//   if (!username) {
//     console.log("Vui lồng nhập tài khoản");
//   } else {
//     console.log("Vui lồng nhập mật khẩu");
//   }
// } else {
//   console.log("Thành công");
// }

//Bài tập: Tính lương thực nhận của 1 nhân viên (Sau khi trừ thuếs)
// Cho trước lương là 15.000.000
/*
Lương <= 5.000.000 ==> 0%
Lương trên 5tr đến 10tr ==> 3%
Lương trên 10tr đến 15tr ==> 5%
Lương trên 15tr đến 20tr ==> 7% 
*/
let salary = 15000000;
let tax;
let income;
if (salary > 0 && salary <= 5000000) {
  tax = 0;
} else if (salary > 5000000 && salary <= 10000000) {
  tax = 3;
} else if (salary > 10000000 && salary <= 15000000) {
  tax = 5;
} else {
  tax = 7;
}
income = salary - (salary * tax) / 100;

console.log(`Luong thuc nhan: ${income}`);
