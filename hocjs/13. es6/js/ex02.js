//Arrow function
// Lưu ý: Không dùng để thay thế hàm truyền thống

// const getMessage = (msg) => {
//   console.log("Hello anh em", msg);
// };

// getMessage("Unicode");

// const sum = (a, b) => a + b;

// console.log(sum(1, 2));

// const getUser = (fullname, email) => ({
//   fullname,
//   email,
// });
// console.log(getUser("Hoàng An", "hoangan.web@gmail.com"));

// const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
// // const newArr = users.map((user) => `<h2>${user}</h2>`);
// const newArr = users.map(function (user) {
//   return `<h2>${user}</h2>`;
// });
// console.log(newArr);

// const users = [
//   {
//     id: 3,
//     name: "User 3",
//   },
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 2",
//   },
// ];
// const getUser = (userId) => users.find(({ id }) => id === userId);
// const getUser = function (userId) {
//   return users.find(function (user) {
//     return user.id === userId;
//   });
// };
// console.log(getUser(2));

//Những lưu ý khi dùng arrow function
/*
- Không bind được this
- Không bind được arguments
- Không nên sử dụng làm method của object
- Không được sử dụng làm Constructor
- Không có object prototype
*/
// const something = function () {
//   console.log("ahihi");
// };

// const something = () => console.log("ahihi");

// something.prototype.message = "Ahihi";
// console.dir(something);
