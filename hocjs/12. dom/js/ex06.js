const body = document.body;
const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
btn.addEventListener("click", function () {
  body.classList.toggle("open");
});
overlay.addEventListener("click", function () {
  body.classList.toggle("open");
});
document.addEventListener("keyup", function (e) {
  //e = event object
  if (e.key === "Escape") {
    body.classList.remove("open");
  }
  if (e.key === "Enter") {
    body.classList.add("open");
  }
});
