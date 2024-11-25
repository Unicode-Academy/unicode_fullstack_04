/*
Kiểm tra độ mạnh / yếu mật khẩu
- >= 6 ký tự
- Có ít nhất 1 ký tự HOA
- Có ít nhất 1 ký tự thường
- Có ít nhất 1 số
- Có ít nhất 1 ký tự đặc biệt: !@#$%^&*()
*/
// const password = "hoanAgAn@123";
// let isLength = false;
// let isUppercase = false;
// let isLowerCase = false;
// let isSpecial = false;
// let isNumber = false;
// if (password.length >= 6) {
//   const NUMBER = "0123456789";
//   const SPECIAL = "!@#$%^&*()";
//   isLength = true;
//   let upperCount = 0;
//   let lowerCount = 0;
//   for (let i = 0; i < password.length; i++) {
//     const char = password.charAt(i);
//     if (char >= "A" && char <= "Z") {
//       upperCount++;
//     }
//     if (char >= "a" && char <= "z") {
//       lowerCount++;
//     }
//     if (NUMBER.includes(char)) {
//       isNumber = true;
//     }
//     if (SPECIAL.includes(char)) {
//       isSpecial = true;
//     }
//   }
//   if (upperCount >= 2) {
//     isUppercase = true;
//   }
//   if (lowerCount >= 2) {
//     isLowerCase = true;
//   }
// }
// if (isLength && isUppercase && isLowerCase && isSpecial && isNumber) {
//   console.log("Mật khẩu mạnh");
// } else {
//   console.log("Mật khẩu yếu");
// }

let fullname = "tạ hoàng an";
//Cần chuyển thành dạng tên chuẩn: Tạ Hoàng An
fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
for (let i = 1; i < fullname.length; i++) {
  const char = fullname.charAt(i);
  const charNext = fullname.charAt(i + 1);
  if (char === " " && charNext !== " ") {
    const index = i + 1;
    fullname =
      fullname.slice(0, index) +
      fullname.charAt(index).toUpperCase() +
      fullname.slice(index + 1);
  }
}
console.log(fullname);
