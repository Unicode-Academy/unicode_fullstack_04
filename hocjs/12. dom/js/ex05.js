const a = document.querySelector("a");
console.log(a);
// console.log(a.href);
// console.log(a.target);
// console.log(a.title);
// console.log(a.id);
// console.log(a.className);

a.href = "https://unicode.vn";
a.className = "ahihi";
a.style = "color: red";

//Data Attribute: data-*
// console.log(a.getAttribute("data-index"));
// a.setAttribute("data-index", "2");

// console.log(a.dataset);
// console.log(a.dataset.index); //data-index
// a.dataset.index = 2;
a.dataset.animation = "fade-in";
a.dataset.animationDuration = 1000;
a.dataset.animationTimingFunction = "ease-in-out";

//ClassList
const div = document.querySelector("div");
// console.log(div.classList);
div.classList.add("content-4");

div.classList.remove("content-2");

// div.classList.toggle("open");
// div.classList.toggle("open");

div.classList.replace("content-4", "content-5");

if (div.classList.contains("content-5")) {
  console.log("Có class content-5");
}
