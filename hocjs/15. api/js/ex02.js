import { BASE_API } from "./config.js";
import { debounce } from "./utils.js";

const renderPosts = (posts) => {
  //Xử lý innerHTML
  const html = posts
    .map(
      (post) => `<div class="col-3">
          <h2>${post.title}</h2>
          <p>
            ${post.excerpt}
          </p>
          <button class="btn btn-primary btn-sm">Detail</button>
        </div>`
    )
    .join("");
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = html;
};
const getPosts = async (keyword = "") => {
  const response = await fetch(`${BASE_API}/posts?q=${keyword}`);
  const posts = await response.json();
  renderPosts(posts);
};

getPosts();

const searchInputEl = document.querySelector(".js-search");
searchInputEl.addEventListener(
  "input",
  debounce(({ target }) => {
    const keyword = target.value;
    getPosts(keyword);
  }, 500)
);

const addBtnEl = document.querySelector(".js-add-btn");
const modalEl = document.getElementById("modal-form");
const modalForm = new bootstrap.Modal(modalEl);
addBtnEl.addEventListener("click", () => {
  modalForm.show("add"); //Không có gì đảm bảo hàm này thành công
});

modalEl.addEventListener("shown.bs.modal", (e) => {
  if (e.relatedTarget === "add") {
    const modalTitle = modalEl.querySelector(".modal-title");
    modalTitle.innerText = `Create new blog`;
  }
});

modalEl.addEventListener("hidden.bs.modal", () => {
  const modalTitle = modalEl.querySelector(".modal-title");
  modalTitle.innerText = "";
});

const form = modalEl.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const titleEl = e.target.querySelector(".title");
  const excerptEl = e.target.querySelector(".excerpt");
  const contentEl = e.target.querySelector(".content");
  const title = titleEl.value;
  const excerpt = excerptEl.value;
  const content = contentEl.value;
  const errorList = modalEl.querySelectorAll(".error");
  const errors = {};
  if (!title) {
    errors.title = "Title is required";
  }
  if (!excerpt) {
    errors.excerpt = "Excerpt is required";
  }
  if (!content) {
    errors.content = "Content is required";
  }
  //reset tất cả lỗi
  errorList.forEach((errorEl) => {
    errorEl.innerText = "";
  });
  if (Object.keys(errors).length > 0) {
    //Có lỗi
    //Hiển thị các lỗi tương ứng
    Object.keys(errors).forEach((key) => {
      const errorEl = modalEl.querySelector(`.error-${key}`);
      errorEl.innerText = errors[key];
    });
  } else {
    //Không có lỗi
    //Call API thêm dữ liệu lên back-end
    const status = await addPost({ title, excerpt, content });
    if (!status) {
      //Trả về thông báo lỗi
      alert("Error network");
    } else {
      //Thành công
      getPosts(); //Call lại API -> Làm mới danh sách
      //Đóng modal
      modalForm.hide(); //Hàm của bootstrap
    }
  }
});

//Hàm thêm dữ liệu lên server
const addPost = async (data) => {
  const response = await fetch(`${BASE_API}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};
