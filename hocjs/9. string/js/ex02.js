let accountNumber = "049100004535576";
//Yêu cầu: Lấy 3 số đầu, 3 số cuối, giữa sẽ thay thành *
let output =
  accountNumber.slice(0, 3) +
  "*".repeat(accountNumber.length - 6) +
  accountNumber.slice(-3);
console.log(output);

//Bài tập: Cho trước 1 email --> yêu cầu: lấy username (Trước @)
// let email = "hoangan.web@gmail.com";
// let username = email.slice(0, email.indexOf("@"));
// console.log(username);

//Bài tập: Kiểm tra tên có hợp lệ không? (Tất cả đều viết hoa)
// let fullname = "TẠ HOàNG AN";
// let isValid = fullname === fullname.toUpperCase();
// console.log(isValid);
// let isValid = true;
// for (let i = 0; i < fullname.length; i++) {
//   const char = fullname.charAt(i);
//   if (char >= "a" && char <= "z") {
//     isValid = false;
//     break;
//   }
// }
// console.log(isValid);

//Bài tập:
let str = "Học lập trình không khó UNICODE ACADEMY";
let keyword = "UNICODE";
let index = str.toLowerCase().indexOf(keyword.toLowerCase());

if (index !== -1) {
  str =
    str.slice(0, index) +
    `<span>${str.slice(index, index + keyword.length)}</span>` +
    str.slice(index + keyword.length);
}

document.body.innerHTML = str;