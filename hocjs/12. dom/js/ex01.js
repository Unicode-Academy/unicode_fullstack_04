//DOM: Document Object Model => Mô hình hóa đối tượng tài liệu html
//Chuyển tài liệu html --> Thành object để trình duyệt can thiệp sửa html trước khi hiển thị cho người dùng
//Lập trình viên dùng Javascript để can thiệp vào đối tượng đã được chuyển để tương tác với các phần tử html
/*
- Thay đổi lại nội dung html
- Thay đổi các thuộc tính html
- Thay đổi css inline của html
- Xóa bỏ thẻ html, thêm mới,...
- Lắng nghe các sự kiện từ phía người dùng lên các thẻ html
- Tạo sự kiện mới và xây dựng logic riêng cho nó

Node
*/

// console.dir(document);
// const body = document.body;
// console.log(body);
// const head = document.head;
// console.log(head);
// const title = document.title;
// console.log(title);
// document.title = "Hello anh em";

//1. Chọn phần tử html theo id ==> getElementById

//2. Chọn 1 phần tử theo selector css ==> querySelector

//3. Chọn phần tử theo class ==> getElementsByClassName

//4. Chọn phần tử theo tag name ==> getElementsByTagName

//5. Chọn tất cả phần tử theo css selector ==> querySelectorAll

// ==> Tóm lại: 2, 5

// const title = document.getElementById("title");
// console.log(title);

// const title = document.querySelector(".title");
// console.log(title);

// const h2 = document.querySelector(".content h2");
// console.log(h2);

// const title = document.querySelector("h1");
// console.log(title);

// const titleList = document.querySelectorAll(".title2");
// console.log(titleList);

// for (let i = 0; i < titleList.length; i++) {
//   console.log(titleList[i]);
// }

// const h1 = document.querySelector(".box .content h1");
// console.log(h1);

// const box = document.querySelector(".box2");
// const content = box.querySelector(".content");
// const h1 = content.querySelector("h1");
// console.log(h1);
