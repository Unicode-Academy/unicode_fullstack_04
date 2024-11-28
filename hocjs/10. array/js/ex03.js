//Array Like Object
// const arr = {
//   0: "Item 1",
//   1: "Item 2",
//   2: "Item 3",
//   3: "Item 4",
//   length: 4,
// };
// console.log(arr);

// const something = function () {
//   const arr = Array.from(arguments);
//   arr.forEach(function (value) {
//     console.log(value);
//   });
// };
// something(1, 2, 3, 4, 5);

//Array.from() --> Biến 1 object thành mảng (iterable object)
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// console.log(Array.from(user));

//keys()
// const arr = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// arr.keys().forEach(function (key) {
//   console.log(key);
// });

//Array()
// const arr = Array(10);
// arr.keys().forEach(function (value, index) {
//   console.log(value, index);
// });

//Ví dụ: Hiển thị danh sách các số từ 1 đến 100
// document.body.innerHTML = `
// <ul>
//     ${Array.from(Array(100).keys())
//       .map(function (value) {
//         return `<li>Trang ${value + 1}</li>`;
//       })
//       .join("")}
// </ul>
// `;

//Tham chiếu
// const a = ["Hoàng An", "hoangan.web@gmail.com"];
// const b = a;
//Sao chép mảng
// const b = a.slice();
// const b = a.map(function (value) {
//   return value;
// });
// const b = Array.from(a);
// const b = [...a]; //Spread Operator
// // --> Shallow copy
// b[0] = "Hoàng An Unicode";
// console.log(a);
// console.log(b);

// const users = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
// ];
// const customers = Array.from(users);
//Deep copy
//B1: Chuyển mảng --> json
//B2: Chuyển json --> mảng
// const json = JSON.stringify(users); //Chuyển mảng --> json
// console.log(json);

// const customers = JSON.parse(json); //Chuyển json --> mảng
// customers[0][0] = "Hoàng An Unicode";
// // customers[0] = ["Hoàng An Unicode", "user1@gmail.com"];
// console.log(users);
// console.log(customers);

// const a = [1, 2, 3, 4, 5];
// const json = JSON.stringify(a);
// console.log(json);

//Ví dụ: Tìm user có email là user2@gmail.com --> Thay đổi email đó thành 1 khác
const users = [
  ["User 1", "user1@gmail.com"],
  ["User 2", "user2@gmail.com"],
  ["User 3", "user3@gmail.com"],
  ["User 4", "user4@gmail.com"],
  ["User 5", "user5@gmail.com"],
];
// const user = users.find(function (user) {
//   console.log(user);

//   return user[1] === "user2@gmail.com";
// });
// user[1] = "hoangan.web@gmail.com";

// console.log(users);

// const newArr = users.map(function (user) {
//   console.log(user);

//   if (user[1] === "user2@gmail.com") {
//     user[1] = "hoangan.web@gmail.com";
//   }
//   return user;
// });
// console.log(newArr);

const newArr = users.filter(function (user) {
  console.log(user);

  return user[1] === "user2@gmail.com";
});
console.log(newArr);
