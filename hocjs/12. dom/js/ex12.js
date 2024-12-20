const root = document.querySelector("#root");
// root.innerHTML = `<ul>
// <li>Item 1</li>
// <li>Item 2</li>
// <li>Item 3</li>
// <li>Item 4</li>
// </ul>
// <button>Click me</button>
// `;
// const btn = root.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("click");
//   this.remove();
// });

//Tạo node -> update giao diện

//Tạo element node
// const h1 = document.createElement("h1");
// h1.innerText = "Học lập trình không khó";
// h1.className = "title";

// const button = document.createElement("button");
// button.innerText = "Click me";
// button.addEventListener("click", function () {
//   h1.innerText = "Xin chào";
// });

// const h2 = document.createElement("h2");
// h2.innerText = "Học lập trình JavaScript";

// const h3 = document.createElement("h3");
// h3.innerText = "Học lập trình";
// const span = document.createElement("span");
// span.innerText = "Ahihi";
// h3.append(span);
// h3.append("HTML-CSS");

// //Update node lên giao diện
// root.append(h1);
// root.append(button);
// root.insertBefore(h2, button);
// if (h2.nextElementSibling) {
//   root.insertBefore(h3, h2.nextElementSibling);
// } else {
//   root.append(h3);
// }

//Build giao diện sau bằng DOM Node và thực hành động bấm add -> thêm item mới
/*
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
</ul>
<button>Add</button>
*/
// const ul = document.createElement("ul");
// for (let i = 1; i <= 4; i++) {
//   const li = document.createElement("li");
//   li.innerText = `Item ${i}`;
//   ul.append(li);
//   const removeBtn = document.createElement("button");
//   removeBtn.innerHTML = "&times;";
//   removeBtn.addEventListener("click", function () {
//     handleRemove(li);
//   });
//   li.append(removeBtn);
// }
// const button = document.createElement("button");
// button.innerText = "Add";
// button.addEventListener("click", function () {
//   const li = document.createElement("li");
//   li.innerText = `Item ${ul.children.length + 1}`;
//   ul.append(li);
//   const removeBtn = document.createElement("button");
//   removeBtn.innerHTML = "&times;";
//   removeBtn.addEventListener("click", function () {
//     handleRemove(li);
//   });
//   li.append(removeBtn);
// });
// const handleRemove = function (li) {
//   li.remove();
// };

// root.append(ul);
// root.append(button);

//Thay thế
//Xóa
const h1 = document.createElement("h1");
h1.innerText = `Unicode Academy`;
const btn = document.createElement("button");
btn.innerText = "Click me";
btn.addEventListener("click", function () {
  //   const h2 = document.createElement("h2");
  //   h2.innerText = `Xin chào anh em`;
  //   root.replaceChild(h2, h1);
  //   root.removeChild(h1);
  h1.remove();
});
root.append(h1);
root.append(btn);
