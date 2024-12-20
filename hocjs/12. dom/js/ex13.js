/*
<span class="tags-wrap" contenteditable>
    <!-- <span class="item">Tag 1 <span>&times;</span></span>
    <span class="item">Tag 2 <span>&times;</span></span>
    <span class="item">Tag 3 <span>&times;</span></span> -->
</span>
*/
const tagsInput = document.querySelector(".tags");
tagsInput.type = "hidden";
const tagsWrap = document.createElement("span");
tagsWrap.className = "tags-wrap";
tagsWrap.contentEditable = true;

//Thêm span vào sau thẻ input
const parentInputTags = tagsInput.parentElement;

//Lấy phần tử kế tiếp
const inputTagNextElement = tagsInput.nextElementSibling;
if (inputTagNextElement) {
  parentInputTags.insertBefore(tagsWrap, inputTagNextElement);
} else {
  parentInputTags.append(tagsWrap);
}

//Lắng nghe khi người dùng nhập dữ liệu
let value = "";
tagsWrap.addEventListener("keyup", function (e) {
  if (e.key !== "," && e.key !== "Enter") {
    value += e.key;
  }

  if (e.key === "," || e.key === "Enter") {
    console.log(value);

    if (!value) {
      return;
    }
    tagsWrap.innerText = "";
    const itemSpan = document.createElement("span");
    itemSpan.className = "item";
    itemSpan.innerText = value;
    const spanRemove = document.createElement("span");
    spanRemove.innerHTML = "&times;";
    spanRemove.addEventListener("click", function () {
      removeItem(itemSpan);
    });
    itemSpan.append(spanRemove);
    tagsWrap.append(itemSpan);
    value = "";
  }
});

const removeItem = function (item) {
  item.remove();
};
