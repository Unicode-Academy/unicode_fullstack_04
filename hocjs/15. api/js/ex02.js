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
          <button class="btn btn-warning btn-sm js-edit-btn" data-id="${post.id}">Edit</button>
        </div>`
    )
    .join("");
  const postListEl = document.querySelector(".js-post-list");
  postListEl.innerHTML = html;
  postListEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("js-edit-btn")) {
      const postId = e.target.dataset.id;
      //Gọi hàm để show modal
      modalForm.show({
        type: "update",
        id: postId,
      });
    }
  });
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

//Hàm lấy dữ liệu từ API
const getPost = async (postId) => {
  try {
    const response = await fetch(`${BASE_API}/posts/${postId}`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    return response.json();
  } catch {
    return false;
  }
};

//Hàm cập nhật dữ liệu vào form
const fillFormData = async (postId) => {
  const form = modalEl.querySelector("form");
  const post = await getPost(postId);
  if (!post) {
    return alert("Post not found");
  }
  //Data trả về thành công
  form.querySelector("fieldset").disabled = false;
  form.querySelector(".overlay").style.display = "none";
  Object.keys(post).forEach((key) => {
    if (form.elements[key]) {
      form.elements[key].value = post[key];
    }
  });
};

//Hàm update dữ liệu lên API
const updatePost = async (data, id) => {
  const response = await fetch(`${BASE_API}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};

const addBtnEl = document.querySelector(".js-add-btn");
const modalEl = document.getElementById("modal-form");
const modalForm = new bootstrap.Modal(modalEl);
addBtnEl.addEventListener("click", () => {
  modalForm.show("add"); //Không có gì đảm bảo hàm này thành công
  form.querySelector("fieldset").disabled = false;
  form.querySelector(".overlay").style.display = "none";
});

modalEl.addEventListener("shown.bs.modal", (e) => {
  const modalTitle = modalEl.querySelector(".modal-title");
  if (e.relatedTarget === "add") {
    modalTitle.innerText = `Create new blog`;
  } else if (e.relatedTarget.type === "update") {
    modalTitle.innerText = `Update blog`;
    const form = modalEl.querySelector("form");
    form.dataset.id = e.relatedTarget.id;
    fillFormData(e.relatedTarget.id);
  }
});

modalEl.addEventListener("hidden.bs.modal", () => {
  const modalTitle = modalEl.querySelector(".modal-title");
  modalTitle.innerText = "";

  const form = modalEl.querySelector("form");
  form.reset();

  //Tạo loading
  form.querySelector("fieldset").disabled = true;
  form.querySelector(".overlay").style.display = "flex";

  form.removeAttribute("data-id");
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
    if (form.dataset.id) {
      //Call API update data
      const postId = form.dataset.id;
      const status = await updatePost({ title, excerpt, content }, postId);
      if (!status) {
        alert("Can't update post this time");
      } else {
        getPosts(); //Call lại API -> Làm mới danh sách
        //Đóng modal
        modalForm.hide(); //Hàm của bootstrap
      }
    } else {
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
  }
});
