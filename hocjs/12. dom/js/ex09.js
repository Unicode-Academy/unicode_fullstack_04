// const a = document.querySelector("a");
// a.addEventListener("click", function (e) {
//   e.preventDefault();
//   const href = this.href;
//   console.log(href);
// });

// const form = document.querySelector("form");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log("Submit form");
// });
const menu = document.querySelector(".context-menu");
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  const x = e.clientX;
  const y = e.clientY;
  Object.assign(menu.style, {
    display: "block",
    left: `${x}px`,
    top: `${y}px`,
  });
});
document.addEventListener("click", function () {
  menu.style.display = "none";
});
menu.addEventListener("click", function (e) {
  e.stopPropagation(); //Ngăn nổi bọt
});
const liList = document.querySelectorAll(".context-menu li");
liList.forEach(function (li) {
  li.addEventListener("click", function () {
    console.log(li.innerText);
  });
});

const btn = document.querySelector(".btn");
btn.addEventListener("click", function (e) {
  console.log(this);
  console.log(e.target);
});
