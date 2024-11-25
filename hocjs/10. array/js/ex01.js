// const users = ["An", "Đạt", "Dương"];
// console.log(users);

// const users = [];
// users[users.length] = "An";
// users[users.length] = "Đạt";
// users[users.length] = "Tùng";
// users[users.length] = "Dương";
// users[users.length] = "Quân";
// console.log(users);
// console.log(users[users.length - 1]);

// const myArr = [null, undefined, true, false, "An", 10, ["Dương"]];
// console.log(myArr);

// const myArr = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
//   ["User 4", "user4@gmail.com"],
// ];
// console.log(myArr);

// users[1] = "Tùng";

// for (let i = 0; i < users.length; i++) {
//   const value = users[i];
//   console.log(value);
// }

// for (const index in users) {
//   const value = users[index];
//   console.log(value);
// }

// for (const value of users) {
//   console.log(value);
// }

// const users = ["User 1", "User 2", "User 3", "User 4"];
// const indexDelete = 1;
// const newUsers = [];
// console.log(users);

// for (let i = 0; i < users.length; i++) {
//   if (i !== indexDelete) {
//     newUsers[newUsers.length] = users[i];
//   }
// }
// console.log(newUsers);

//Bài tập: Thêm 1 phần tử vào đầu mảng sau

// const users = ["User 1", "User 2", "User 3", "User 4"];
// const newValue = "Hoàng An";
// const newUsers = [newValue];
// // newUsers[0] = newValue;
// for (let i = 0; i < users.length; i++) {
//   const user = users[i];
//   newUsers[newUsers.length] = user;
// }
// console.log(newUsers);

//Bài tập: Tìm số lớn nhất trong mảng sau
// const numbers = [5, 2, 9, -1, 100, 8];
/*
Đặt biến max là phần tử đầu tiên
So sánh max với các phần tử còn lại --> nếu max < phần từ nào thì gán bằng phần tử đó
*/
// let max = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (max < numbers[i]) {
//     max = numbers[i];
//   }
// }
// console.log(max);

//Sắp xếp
// const numbers = [5, 2, 1, 9, 3];
// console.log(numbers);

// for (let i = 0; i < numbers.length - 1; i++) {
//   for (let j = i + 1; j < numbers.length; j++) {
//     // console.log(`${numbers[i]}`, `${numbers[j]}`);
//     if (numbers[i] > numbers[j]) {
//       let tmp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = tmp;
//     }
//   }
// }
// console.log(numbers);

const users = [
  "Tạ Hoàng An",
  "Phạm Văn Dương",
  "Nguyễn Văn Tâm",
  "Trần Văn Tùng",
];
//Sắp xếp users theo thứ tự tăng dần (Theo tên)

//1. Viết hàm lấy tên theo họ tên
const getFirstName = function (fullname) {
  const position = fullname.lastIndexOf(" ");
  return fullname.slice(position + 1);
};

//2. Áp dụng nổi bọt để sắp xếp họ tên theo tên
for (let i = 0; i < users.length - 1; i++) {
  for (let j = i + 1; j < users.length; j++) {
    if (getFirstName(users[i]) > getFirstName(users[j])) {
      const tmp = users[i];
      users[i] = users[j];
      users[j] = tmp;
    }
  }
}
console.log(users);
