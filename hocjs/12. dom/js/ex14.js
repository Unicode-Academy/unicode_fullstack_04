const checkAll = document.querySelector(".check-all");
const checkItems = document.querySelectorAll(".check-item");
const btn = document.querySelector(".btn-delete");
let count = 0;
checkAll.addEventListener("change", function () {
  const status = this.checked;
  checkItems.forEach(function (item) {
    item.checked = status;
  });
  if (status) {
    btn.disabled = false;
    count = checkItems.length;
  } else {
    btn.disabled = true;
    count = 0;
  }
  btn.children[0].innerText = count;
});

checkItems.forEach(function (item) {
  item.addEventListener("change", function () {
    const status = this.checked;
    if (status) {
      count++;
    } else {
      count--;
    }
    if (count > 0) {
      btn.disabled = false;
    } else {
      btn.disabled = true;
    }
    btn.children[0].innerText = count;
    checkAll.checked = count === checkItems.length;
  });
});
