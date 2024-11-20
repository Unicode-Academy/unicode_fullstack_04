//Callback --> Gọi lại
// - Truyền 1 hàm vào 1 hàm khác thông qua đối số
// - Có 2 cách để truyền:
// + Định nghĩa hàm sau đó đưa tên hàm vào đối số
// + Dùng hàm anonymous

//setTimeout --> Delay việc thực thi của 1 hàm khác
// Cú pháp: setTimeout(callback, timeout)
// const handleLog = function () {
//   console.log("Hello anh em");
// };
// setTimeout(function () {
//   console.log("Hello anh em");
// }, 1000);

//setInterval --> Chạy lặp đi lặp lại
// let count = 0;
// let timer = setInterval(function () {
//   console.log("Hello anh em: ", ++count);
//   if (count === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// const something = function (func) {
//   console.log("Something");
//   if (typeof func === "function") {
//     func();
//   }
// };
// something(function () {
//   console.log("Hello anh em");
// });
// something("Hoàng An");

//JS --> Là ngôn ngữ lập trình bất đồng bộ
// const getA = function (callback) {
//   setTimeout(function () {
//     console.log("get A");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 1000);
// };
// const getB = function (callback) {
//   setTimeout(function () {
//     console.log("get B");
//     if (typeof callback === "function") {
//       callback();
//     }
//   }, 500);
// };
// const getC = function () {
//   setTimeout(function () {
//     console.log("get C");
//   }, 3000);
// };

// getA(function () {
//   getB(function () {
//     getC();
//   });
// });

//DOM
// const btn = document.querySelector(".btn");
// const handleClick = function () {
//   console.log("Click me");
// };
// btn.addEventListener("click", handleClick);

//Giải thuật / Thuật toán
//Hàm: Giải thuật đệ quy

// const showNumber = function (n) {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

const fibonacci = function (n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

// console.log(fibonacci(7));

//Chạy thử fibonacci(5)

/*
fibonacci(5) = fibonacci(4) + fibonacci(3)
             = fibonacci(3) + fibonacci(2) + fibonacci(2) + fibonacci(1) 
             = fibonacci(2) + fibonacci(1) + 1 + 1 + 1
             = 1 + 1 + 3 = 5
             */

//Tính tổng S = 1 + 2 + ... + n
const sum = function (n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
};
console.log(sum(10));
