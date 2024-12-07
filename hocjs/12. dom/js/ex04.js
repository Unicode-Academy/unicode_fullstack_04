const countEl = document.querySelector("h1 span");
const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
incrementBtn.addEventListener("click", function () {
  let count = countEl.innerText;
  count++;
  countEl.innerText = count;
});
decrementBtn.addEventListener("click", function () {
  let count = countEl.innerText;
  count--;
  countEl.innerText = count;
});
