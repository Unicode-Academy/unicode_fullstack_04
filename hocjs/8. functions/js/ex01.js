//Function: Hàm
// - Kỹ thuật trong lập trình dùng để gom các chương trình con để tiện cho việc tái sử dụng
// - Có 2 loại hàm: Hàm có giá trị trả về, hàm không có giá trị trả về (undefined)
// - Đặt tên hàm: Thể hiện là 1 động từ, đặt theo camelCase
// - Khi 1 hàm được định nghĩa, muốn thực thi phải có lời gọi hàm: Chủ động và bị động
/*
Cú pháp decration function: 
function tenham1() {
    Nội dung hàm
}

function tenham2(thamso1, thamso2, thamso3,...) {
    Nội dung hàm
}

tenham1()
tenham2(doiso1, doiso2, doiso3,...)

Cú pháp expression function
const tenham = function() {

}
*/
// let c = 30;
// function sum(a, b) {
//   let total = a + b;
//   console.log(total);
//   return total;
//   console.log("Ahihi");
// }
// const result = sum(10, 20) + c;
// console.log(result);

// function division(a, b) {
//   if (b === 0) {
//     return false;
//   }
//   return a / b;
// }
// const result = division(10, 0);
// console.log(result);

// function doSomething(status) {
//   if (!status) {
//     return;
//   }
//   return "Hoàng An Unicode";
// }
// const result = doSomething(1);
// console.log(result);

// function getMessage(status = true, message) {
//   console.log(message);
//   console.log(status);
// }
// getMessage(true, "Hoàng An");

//rest parameter
// function getMax(msg, ...args) {
//   console.log(`msg: ${msg}`);

//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
// }
// getMax(10, 20, 30, 40, 50, 60);

//Scope --> Phạm vi
// 1. Global scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope
// let total;
// function sum(a, b) {
//   total = a + b;
//   console.log(total);
// }
// sum(10, 20);
// console.log(total);
// function setMessage(value) {
//   message = value;
// }
// function getMessage() {
//   return message;
// }
// let message;
// setMessage("Hello anh em");
// console.log(getMessage());

// let a = 10;
// let b;
// if (a >= 10) {
//   b = 20;
// }
// console.log(b);
// for (let i = 1; i <= 10; i++) {
//   if (i <= 5) {
//     console.log(i);
//   }
// }

// var fullname = "Hoàng An";

// console.log(window.fullname);

//Closure
// let data = "Hoàng An";
// function display(msg) {
//   console.log("Display");
//   function show() {
//     console.log("Show");
//     console.log(a);
//     console.log(msg);
//     console.log(data);
//   }
//   let a = 10;
//   show();
// }
// display("Unicode");
// show();

// function sum(a) {
//   return function (b) {
//     //anonymous function
//     return a + b;
//   };
// }

//anonymous function -> Hàm không tên, được sử dụng khi gán vào 1 biến hoặc đưa vào làm đối số của hàm khác

// const add = sum(10);
// console.log(add(20));

//Expression function
// const showMessage = function (msg) {
//   console.log(msg);
// };
// showMessage("Unicode");

// const sum = function getTotal(a, b) {
//   return a + b;
// };
// function getTotal(a, b) {
//   return a + b;
// }
// const sum = getTotal; //Tính tham chiếu của function
// console.log(sum(10, 20));
// console.log(getTotal(10, 20));

// const html = `<h2>Học lập trình không khó</h2>
// <h3>Hoàng An</h3>
// `;
// document.body.innerHTML = html;

let n = 5; //Số hàng
/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/
//Viết hàm
// const showTriangleNumber = function (line) {
//   let output = "";
//   let count = 0;
//   for (let i = 1; i <= line; i++) {
//     for (let j = 1; j <= i; j++) {
//       count++;
//       output += `${count} `;
//     }
//     output += "<br/>";
//   }
//   console.log(output);

//   document.body.innerHTML = output;
// };
// showTriangleNumber(5);

const showChessBoard = function (number) {
  //number: số hàng, cột
  let html = `<table width="100%" border="1" cellpadding="0" cellspacing="0">
      <tr>
        <td></td>
        <td class="black"></td>
        <td></td>
        <td class="black"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>`;
  document.body.innerHTML = html;
};
showChessBoard(8);
