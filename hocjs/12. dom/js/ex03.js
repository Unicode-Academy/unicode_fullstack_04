const contentEl = document.querySelector(".content");

//1. innerHTML
// console.log(contentEl.innerHTML);
// contentEl.innerHTML = `<h1>Hoàng An</h1>`;

//2. innerText
// console.log(contentEl.innerText);
// contentEl.innerText = `<h1>Hoàng An</h1>`;

//3. textContent
// console.log(contentEl.textContent);
// contentEl.textContent = `<h1>    Hoàng An</h1>`;

//4. outerHTML
// console.log(contentEl.outerHTML);
// contentEl.outerHTML = `<h1>Hoàng An</h1>`;

const btn = document.querySelector("button");
const content = contentEl.innerHTML;
btn.addEventListener("click", function () {
  if (!contentEl.innerHTML) {
    contentEl.innerHTML = content;
    this.innerText = "Ẩn";
  } else {
    contentEl.innerHTML = "";
    this.innerText = "Hiện";
  }
});
