/*
Sự kiện (Event)

- Hành động từ phía người dùng lên các phần tử html từ đó xử lý công việc gì đó
- Mặc định trình duyệt có sẵn các sự kiện
- Các sự kiện bổ biến: click, dblclick, mouseover, mouseout, mousemove, keyup, keydown, keypress (Chỉ nhận ký tự), submit, change,...
*/

//Các cách lắng nghe sự kiện (Event Listener)

//1. Event Handler
// const btn = document.querySelector("button");
// const handleClick = function () {
//   console.log("Ok chưa?");
// };
// btn.onclick = handleClick;

// btn.onclick = function () {
//   console.log("Ok chưa 2");
// };

// const input = document.querySelector("input");
// input.onkeyup = function (e) {
//   console.log("Bạn vừa nhập giá trị:", e.key);
// };

//2. Event Listener (Sử dụng qua các hàm có sẵn)
// const btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("Ok chưa?");
// });

// btn.addEventListener("click", function () {
//   console.log("Ok chưa 2");
// });

// const input = document.querySelector("input");
// input.addEventListener("keyup", function (e) {
//   console.log("Bạn vừa nhập giá trị:", e.key);
// });

//Xóa event listener khỏi phần tử DOM

// const addBtn = document.querySelector(".btn");
// let count = 0;
// const handleAdd = function () {
//   count++;
//   console.log("Count", count);
//   if (count === 5) {
//     addBtn.removeEventListener("click", handleAdd);
//   }
// };
// addBtn.addEventListener("click", handleAdd);
