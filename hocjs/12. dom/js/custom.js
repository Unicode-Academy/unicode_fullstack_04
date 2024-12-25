const showMessage = function () {
  const messageEl = document.querySelector(".message");
  messageEl.innerHTML = "Đã hoàn thành";
};

const changeColorTitle = function () {
  const h1 = document.querySelector("h1");
  h1.style.color = "red";
};

let inputRangeEl = document.querySelector("input");

inputRangeEl.addEventListener("finish", function (e) {
  //   showMessage();
  console.log(e);
});

// inputRangeEl.addEventListener("finish", function () {
//   changeColorTitle();
// });
