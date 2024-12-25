// const inputEl = document.querySelector(".quantity input");
// const minusBtn = document.querySelector(".minus-btn");
// const plusBtn = document.querySelector(".plus-btn");
// const changeEvent = new Event("change");
// plusBtn.addEventListener("click", function () {
//   inputEl.value++;
//   inputEl.dispatchEvent(changeEvent);
// });

// minusBtn.addEventListener("click", function () {
//   if (inputEl.value > 1) {
//     inputEl.value--;
//     inputEl.dispatchEvent(changeEvent);
//   }
// });

// inputEl.addEventListener("change", function () {
//   const quantity = this.value;
//   getQuantity(quantity);
// });

// const getQuantity = function (quantity) {
//   //logic
//   console.log(quantity);
// };

// inputEl.focus();

//Trigger Event
// - Hàm có sẵn: click(), focus(), blur(), submit()
// - dispatchEvent()

// HTMLElement.prototype.css = function (styles) {
//   Object.assign(this.style, styles);
// };
// const boxEl = document.querySelector(".box");
// boxEl.css({
//   color: "red",
//   fontWeight: "bold",
// });

// const contentEl = document.querySelector(".content");
// const shadowRoot = contentEl.attachShadow({ mode: "open" });

// const h1 = document.createElement("h1");
// h1.innerText = "Xin chào anh em";
// shadowRoot.append(h1);
// const style = document.createElement("style");
// style.textContent = `h1 {
//     color: red;
// }
// h1:hover {
//     color: green;
// }
// `;
// shadowRoot.append(style);

//Tình huống: Giao diện kèm logic được sử dụng ở nhiều nơi trên trang web
// -> Giải pháp: Tạo ra element riêng giống như 1 thẻ html --> Gọi ra chỗ nào cần hiển thị

class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<h1>Hello World</h1>`;
  }
}
customElements.define("hello-world", HelloWorld);
