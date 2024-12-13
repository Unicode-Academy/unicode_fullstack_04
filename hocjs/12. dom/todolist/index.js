const taskForm = document.querySelector("#task-form");
const todoList = document.querySelector("#to-do-list");
let index = 0;
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const taskInputEl = this.querySelector("#new-task");
  const taskValue = taskInputEl.value;
  if (!taskValue) {
    return alert("Vui lòng nhập task");
  }
  const taskItemHtml = `<li data-index="${index}">
          <i class="fa-regular fa-square-check"></i>
          <i class="fa-solid fa-square-check" style="display: none"></i>
          <input type="checkbox" id="listwork" style="display: none" />
          <label for="listwork">
            <span>${taskValue}</span>
          </label>
          <button class="delete"><i class="fa-solid fa-x"></i></button>
        </li>`;
  todoList.innerHTML += taskItemHtml;
  index++;
  this.reset();
  addEventList();
});

const addEventList = function () {
  const deleteItems = todoList.querySelectorAll(".delete");
  deleteItems.forEach(function (item, index) {
    item.addEventListener("click", function () {
      if (!confirm("Chắc chưa?")) {
        return;
      }
      const taskEl = todoList.querySelector(`li[data-index="${index}"]`);
      taskEl.remove();
    });
  });
};
