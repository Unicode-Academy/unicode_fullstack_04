/*
DOM Navigation: Cách chọn phần tử theo phân cấp cha con, anh em
- parentElement: Chọn phần tử cha (1 cấp)
- children: Chọn tất cả phần tử con (1 cấp)
- nextElementSibling: Chọn phần tử sau (1 cấp)
- previousElementSibling: Chọn phần tử trước (1 cấp)

Những thuộc tính liên quan đến Node
- parentNode
- childNodes
- firstChild
- lastChild
- nextSibling
- previousSibling
*/
const buttonList = document.querySelectorAll("button");
buttonList.forEach((button) => {
  button.addEventListener("click", function () {
    const box = this.parentElement;
    box.style.background = `yellow`;
  });
});

const items = document.querySelectorAll("ul a");
items.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    // const li = this.parentElement;
    // const liChildren = li.children;
    // if (liChildren.length === 1) {
    //   console.log("Không có con");
    // } else {
    //   console.log("Có con");
    //   console.log(liChildren[1].children);
    // }
    // const ul = this.nextElementSibling;
    // console.log(ul);
    console.dir(this.nextSibling.nextSibling);
    // this.nextSibling.data = "Bhihi";
    this.nextSibling.nextSibling.data = "Ok rồi";
  });
});
