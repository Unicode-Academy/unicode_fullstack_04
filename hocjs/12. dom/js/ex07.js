//DOM CSS: Can thiệp vào thuộc tính style của thẻ html
const box = document.querySelector(".box");
// box.style = "color: red";
// box.style = "background: grey";
// box.style.color = "red";
// box.style.background = "grey";
// box.style.fontSize = "30px"; //font-size
// box.style.fontStyle = "italic";
// console.log(box.style.color);

// const css = {
//   color: "green",
//   background: "yellow",
//   fontSize: "28px",
// };
// Object.assign(box.style, css);

const fadeoutBtn = document.querySelector(".fadeout-btn");
const fadeinBtn = document.querySelector(".fadein-btn");
const TIMEOUT = 1000;
box.style.transition = `opacity ${TIMEOUT}ms ease`;
fadeoutBtn.addEventListener("click", function () {
  box.style.opacity = 0;
  setTimeout(function () {
    box.style.display = "none";
  }, TIMEOUT);
});
fadeinBtn.addEventListener("click", function () {
  box.style.display = null;
  setTimeout(function () {
    box.style.opacity = null;
  }, TIMEOUT / 2);
});
