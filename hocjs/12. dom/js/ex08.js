//Đối tượng mô tả thông tin của sự kiện
// Mỗi sự kiện sẽ thuộc 1 nhóm, mỗi 1 nhóm sẽ có những thông tin khác nhau

const btn = document.querySelector("button");
// btn.addEventListener("mousedown", function (event) {
//   //event = event object
//   //   console.log(event);
//   //   console.log(`offsetX: ${event.offsetX}, offsetY: ${event.offsetY}`);
//   //   console.log(`ClientX: ${event.clientX}, ClientY: ${event.clientY}`);
// });
// const input = document.querySelector("input");
// input.addEventListener("input", function (event) {
//   console.log(event);
// });
const h1 = document.querySelector("h1");
let offsetX;
let offsetY;
h1.addEventListener("mousedown", function (event) {
  {
    offsetX = event.offsetX;
    offsetY = event.offsetY;
    document.addEventListener("mousemove", handleDrag);
  }
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});
//Lấy được offset của h1
const handleDrag = function (event) {
  const clientX = event.clientX;
  const clientY = event.clientY;
  Object.assign(h1.style, {
    left: `${clientX - offsetX}px`,
    top: `${clientY - offsetY}px`,
  });
};
