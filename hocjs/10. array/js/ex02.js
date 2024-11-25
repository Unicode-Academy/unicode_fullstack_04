/*
Nhóm 1: Phương thức không phải vòng lặp

Nhóm 2: Phương thức vòng lặp
*/
console.log(Array.prototype);

// const users = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 3", "Item 5"];

//1. length --> Trả về số phần tử mảng

//2. at(index) --> Trả về phần tử theo index
// console.log(users.at(0));

//3. concat(arr1, arr2,...) --> Nối các mảng
// const newArr = users.concat([1, 2, 3], [4, 5, 6], "Dương", "An", [["Unicode"]]);
// console.log(newArr);

//4. fill(value) --> Thay đổi tất cả phần tử mảng thành 1 giá trị giống nhau (Thay đổi mảng ban đầu)
// const newArr = users.fill("An");
// console.log(newArr);
// console.log(users);

//5. includes(value) --> Kiểm tra phần tử mảng có giá trị value không (Trả về true, false)
// console.log(users.includes("Item 3"));

//6. indexOf(value) --> Kiểm tra phần tử mảng có giá trị value không (Trả về vị trí xuất hiện đầu tiên)
// console.log(users.indexOf("Item 3"));

//7. lastIndexOf(value) --> Kiểm tra phần tử mảng có giá trị value không (Trả về vị trí xuất hiện cuối cùng)
// console.log(users.lastIndexOf("Item 3"));

//8. slice(start, end) --> Căt mảng từ start đến end - 1
// console.log(users.slice(1, 3));
// console.log(users.slice(1));
// console.log(users.slice(-2));

//9. push(value1, value2, value3) --> Thêm các phần tử vào cuối mảng
// - Trả về tổng số lượng phần tử sau khi đã thêm
// - Thay đổi mảng ban đầu
// const result = users.push("An", "Dương");
// console.log(result);
// console.log(users);

//10. unshift(value1, value2, value3) --> Thêm các phần tử vào đầu mảng
// - Trả về tổng số lượng phần tử sau khi đã thêm
// - Thay đổi mảng ban đầu
// const result = users.unshift("An", "Dương");
// console.log(result);
// console.log(users);

//11. pop() --> Xóa phần tử cuối mảng
// - Trả về giá trị vừa xóa
// - Thay đổi mảng ban đầu
// const deleted = users.pop();
// console.log(deleted);
// console.log(users);

//12. shift() --> Xóa phần tử đầu mảng
// - Trả về giá trị vừa xóa
// - Thay đổi mảng ban đầu
// const deleted = users.shift();
// console.log(deleted);
// console.log(users);

//13. reverse() --> Đảo ngược mảng
// - Trả về mảng mới sau đảo ngược
// - Thay đổi mảng ban đầu
// const newArr = users.reverse();
// console.log(newArr);
// console.log(users);

//14. sort() --> Sắp xếp mảng theo chuỗi tăng dần
// const customers = ["An", "Tâm", "Bằng", "Yến"];
// customers.sort();
// console.log(customers);

// const numbers = [1, 100, 2, 8, 10];
// numbers.sort();
// console.log(numbers);

/*
Nâng cao của sort --> Có 1 tham số là 1 hàm callback
sort(function(a, b) {
    a: Phần tử sau
    b: Phần tử trước
    Nếu hàm này return về số âm --> Thay đổi vị trí
})
*/

// const numbers = [1, 100, 2, 8, 10];
// console.log(numbers);

// numbers.sort(function (a, b) {
//   //   if (a < b) {
//   //     return -1;
//   //   }
//   return a - b;
// });
// console.log(numbers);

//15. join() --> Nối mảng thành chuỗi
// const newStr = users.join(" - ");
// console.log(newStr);

//Bài tập: Chuyển họ tên dưới thành tên chuẩn (Ký tự hoa bắt đầu mỗi từ và xóa dấu cách thừa)
// Yêu cầu: Dùng kỹ thuật xử lý mảng
// let fullname = "tạ    hoàng an";
// fullname = fullname.toLowerCase();
// const fullNameArr = fullname.split(" ");
// const newNameArr = [];
// for (let i = 0; i < fullNameArr.length; i++) {
//   if (fullNameArr[i] !== "") {
//     //Xử lý chuyển ký tự đầu thành chữ hoa
//     fullNameArr[i] =
//       fullNameArr[i].charAt(0).toUpperCase() + fullNameArr[i].slice(1);
//     newNameArr.push(fullNameArr[i]);
//   }
// }
// fullname = newNameArr.join(" ");
// console.log(fullname);

//15. splice(index, count) --> Xóa count phần từ index
// console.log(users);
// const newArr = users.splice(1, 0, "An", "Dương", "Đạt");
// console.log(users);
// console.log(newArr);

//16. flat() --> Làm phẳng mảng
// const arr = [1, 2, [3, 4, [5, [6]]]];
// const newArr = arr.flat(Infinity);
// console.log(newArr);
// console.log(arr);

//17. Array.isArray(bien) --> Kiểm tra bien có phải mảng không

//Bài tập: Viết hàm làm phẳng mảng
// const arr = [1, 2, [3, 4, [5, [6]]], [[[[[10]]]]]];
// const flatArr = function (arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (!Array.isArray(item)) {
//       newArr.push(item);
//     } else {
//       const result = flatArr(item); //Biến result sẽ trả về 1 mảng mới --> Cần phải dùng contact để tách mảng đó thành từng phần tử và nối vào mảng newArr
//       newArr = newArr.concat(result);
//     }
//   }
//   return newArr;
// };
// // console.log(arr);

// console.log(flatArr(arr));

//Output: [1, 2, 3, 4, 5, 6]

// const users = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

//forEach(callback) --> Duyệt qua từng phần tử của mảng ban đầu và trả về giá trị, index trong hàm callback
// users.forEach(function (value, index) {
//   console.log(value, index);
// });

//map(callback)
// - Duyệt qua từng phần tử giống forEach
// - Trả về mảng mới có số lượng phần tử giống mảng ban đầu
// - Giá trị phần tử của mảng mới --> Giá trị trả về của callback
// const newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `<h3>${value}</h3>`;
// });
// console.log(newArr);
// document.body.innerHTML = newArr.join("");

//filter(callback)
// - Duyệt qua từng phần tử giống forEach
// - Trả về mảng mới
// - Giá trị phần tử của mảng mới là giá trị của mảng ban đầu nếu callback trả về truthy
// const newArr = users.filter(function (value, index) {
//   console.log(value, index);
//   return index % 2 === 0;
// });
// console.log(newArr);

//Ví dụ: Cho trước 1 mảng số nguyên --> Tìm các số chẵn và tăng lên đơn vị
// const numbers = [1, 2, 3, 4, 5, 6];
// const newNumber = numbers.map(function (value) {
//   if (value % 2 === 0) {
//     return value + 2;
//   }
//   return value;
// });
// console.log(newNumber);

// const newNumber = numbers
//   .filter(function (value) {
//     return value % 2 === 0;
//   })
//   .map(function (value) {
//     return value + 2;
//   });
// console.log(newNumber);

//find(callback)
// - Hoạt động giống filter
// - Trả về phần tử đầu tiên tìm được

//findLast(callback)
// - Hoạt động giống filter
// - Trả về phần tử đầu tiên tìm được
// const numbers = [1, 2, 3, 4, 5, 6];
// const newValue = numbers.findLast(function (value) {
//   return value % 2 === 0;
// });

// console.log(newValue);

// const customers = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
//   ["User 4", "user4@gmail.com"],
// ];
// // Yêu cầu: Tìm tên user của user nào có email là: user2@gmail.com
// console.log(customers);
// const result = customers.find(function (customer) {
//   if (customer[1] === "user2@gmail.com") {
//     return true;
//   }
// });
// if (result) {
//   console.log(result[0]);
// } else {
//   console.log("Không tìm thấy");
// }

//findIndex(callback)
// - Giống hàm find nhưng trả về index tìm được

//findLastIndex(callback)
// - Giống hàm findLast nhưng trả về index tìm được
// const customers = [
//   ["User 1", "user1@gmail.com"],
//   ["User 2", "user2@gmail.com"],
//   ["User 3", "user3@gmail.com"],
//   ["User 4", "user4@gmail.com"],
// ];
// console.log(customers);
// const index = customers.findIndex(function (customer) {
//   return customer[1] === "user2@gmail.com";
// });
// console.log(index);

// if (index !== -1) {
//   customers.splice(index, 1);
// }
// console.log(customers);

// const newCustomer = customers.filter(function (customer) {
//   return customer[1] !== "user2@gmail.com";
// });
// console.log(newCustomer);

//some(callback)
// - Trả về true/false
// - Duyệt qua mảng ban đầu
// - Trả về true nếu có 1 lần lặp trả về truthy

//every(callback)
// - Trả về true/false
// - Duyệt qua mảng ban đầu
// - Trả về false nếu 1 lần lặp trả về falsy
// const numbers = [7, 1, 3, 5, 9];
// const result = numbers.every(function (value) {
//   return value % 2 !== 0;
// });
// console.log(result);

//Bài tập
const arr1 = [1, 2, 5, 6, 9];
const arr2 = [5, 2, 8];
//Tìm giao giữa 2 mảng (Phần tử xuất hiện cả trong mảng 1 và mảng 2)
//Output: [2,5]

//Hàm reduce
