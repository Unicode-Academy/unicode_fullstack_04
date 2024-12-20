// //Scroll Event
// let currentPosition = 0;
// window.addEventListener("scroll", function () {
//   const positionY = this.scrollY;
//   //   const positionX = this.scrollX;
//   //   console.log(positionX, positionY);
//   //So sánh -> xử lý logic

//   //Cập nhật lại currentPosition
// });

// const btn = document.querySelector("button");
// const contentEl = document.querySelector(".content");

// btn.addEventListener("click", function () {
//   const offsetTop = contentEl.offsetTop;
//   window.scroll({
//     top: offsetTop - 20,
//     behavior: "smooth",
//   });
// });

const chatbox = document.querySelector(".chatbox");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  chatbox.scroll({
    top: chatbox.scrollHeight,
    behavior: "smooth",
  });
});
chatbox.addEventListener("scroll", function () {
  console.log(chatbox.scrollTop);
});
