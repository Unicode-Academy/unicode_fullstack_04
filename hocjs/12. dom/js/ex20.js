const dragEvent = new Event("drag");
const rangeEl = document.querySelector(".range");
const processEl = document.querySelector(".process");
const processSpanEl = document.querySelector(".process span");
let initialX = 0;
let offsetLeft = 0;
rangeEl.addEventListener("mousedown", function (e) {
  const offsetX = e.offsetX;
  const width = this.clientWidth;
  const rate = (offsetX / width) * 100;
  processEl.style.width = `${rate}%`;
  initialX = e.clientX;
  offsetLeft = offsetX;

  document.addEventListener("mousemove", handleDrag);
});

processSpanEl.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handleDrag);
  initialX = e.clientX;
  offsetLeft = this.offsetLeft;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

const handleDrag = function (e) {
  const newClientX = e.clientX;
  const distance = newClientX - initialX;
  const width = rangeEl.clientWidth;
  let rate = ((offsetLeft + distance) / width) * 100;
  if (rate < 0) {
    rate = 0;
  }
  if (rate > 100) {
    rate = 100;
  }
  processEl.style.width = `${rate}%`;
  dragEvent.value = rate;
  rangeEl.dispatchEvent(dragEvent);
};

const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
const { name: fullname, email } = user; //Destructuring
console.log(fullname, email);
