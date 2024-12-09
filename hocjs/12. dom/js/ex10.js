// let items = document.querySelectorAll(".box h3");
// const box = document.querySelector(".box");
// items.forEach(function (item) {
//   item.addEventListener("click", function () {
//     console.log(this.innerText);
//   });
// });
// const btn = document.querySelector("button");
// let count = items.length;
// btn.addEventListener("click", function () {
//   count++;
//   box.innerHTML += `<h3>Item ${count}</h3>`;
// });

// box.addEventListener("click", function (e) {
//   if (e.target.tagName === "H3") {
//     console.log(e.target.innerText);
//   }
// });

const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameEl = form.querySelector(".name");
  const emailEl = form.querySelector(".email");
  let name;
  let email;
  if (nameEl) {
    name = nameEl.value;
  }
  if (emailEl) {
    email = emailEl.value;
  }
  const errors = {};
  if (!name) {
    errors.name = "Vui lòng nhập tên";
  }
  if (!email) {
    errors.email = "Vui lòng nhập email";
  }
  const errorList = form.querySelectorAll(".error");
  errorList.forEach(function (errorEl) {
    errorEl.innerText = "";
  });
  Object.keys(errors).forEach(function (key) {
    const error = errors[key];
    const errorEl = form.querySelector(`.error-${key}`);
    errorEl.innerText = error;
  });
  //Kiểm tra xem có lỗi không
  if (!Object.keys(errors).length) {
    //Gọi hàm thêm dữ liệu lên giao diện
    addUser(name, email);
    form.reset();
  }
});
const addUser = function (name, email) {
  const userList = document.querySelector(".user-list");
  const userHtml = `
  <h3>${name}</h3>
  <h3>${email}</h3>
  `;
  userList.innerHTML += userHtml;
};
