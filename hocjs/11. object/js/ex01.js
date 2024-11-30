//Object để mô tả đặc điểm, hành động của đối tượng: user, customer,...

//Object nguyên bản (Object Literal)
// const user = {
//   //key: value
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   shippingAddress: "Hà Nội",
//   age: 32,
//   "phone-number": "0394822896",
//   getName: function () {
//     return "Hoàng An Unicode";
//   },
//   histories: ["Item 1", "Item 2", "Item 3"],
//   details: {
//     postion: "Teacher",
//     salary: 10000,
//   },
// };
// console.log(user.details.salary);

// const wards = {
//   results: [
//     {
//       district_id: "925",
//       ward_id: "31261",
//       ward_name: "Thị trấn Cờ Đỏ",
//       ward_type: "Thị trấn",
//     },
//     {
//       district_id: "925",
//       ward_id: "31273",
//       ward_name: "Xã Đông Hiệp",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31274",
//       ward_name: "Xã Đông Thắng",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31249",
//       ward_name: "Xã Thạnh Phú",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31276",
//       ward_name: "Xã Thới Đông",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31264",
//       ward_name: "Xã Thới Hưng",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31277",
//       ward_name: "Xã Thới Xuân",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31222",
//       ward_name: "Xã Trung An",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31255",
//       ward_name: "Xã Trung Hưng",
//       ward_type: "Xã",
//     },
//     {
//       district_id: "925",
//       ward_id: "31225",
//       ward_name: "Xã Trung Thạnh",
//       ward_type: "Xã",
//     },
//   ],
// };
// console.log(wards);

// const result = wards.results.find(function (ward) {
//   return ward.ward_id === "31261";
// }).ward_name;
// console.log(result);

const user = {};
user.name = "Hoàng An";
user.email = "hoangan.web@gmail.com";
user.age = 32;
// user.details = {};
// user.details.salary = 10000;

// delete user.email;

console.log(user);

// for (let key in user) {
//   console.log(key, user[key]);
// }

// const myUser = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
// const job = {
//   postion: "Teacher",
//   salary: 1000,
// };

//Nối 2 object thành 1 object (Không dùng các hàm có sẵn bên Object)
/*
{
    name: "Hoàng An",
    email: "hoangan.web@gmail.com",
    age: 32,
    postion: "Teacher",
    salary: 1000,
}
*/
// const outputObj = {};
// for (let key in myUser) {
//   outputObj[key] = myUser[key];
// }

// for (let key in job) {
//   outputObj[key] = job[key];
// }
// console.log(outputObj);

//Kiểm tra 1 biến là object
/*
- typeof là object
- Không phải là mảng
- Khác null
*/
// const a = [];
// if (typeof a === "object" && !Array.isArray(a) && a !== null) {
//   console.log("Là object");
// }

//Bài tập: Chuyển object sau thành dạng query string
// const query = {
//   status: "active",
//   keyword: "Học lập trình",
//   page: 1,
// };
//Output: status=active&keyword=Học+lập+trình&page=1
// replaceAll(' ', '+')
// let queryString = "";
// for (let key in query) {
//   queryString += `${key}=${query[key]}&`;
// }
// queryString = queryString.slice(0, queryString.length - 1).replaceAll(" ", "+");
// console.log(queryString);

//Object.keys() --> Lấy tất cả key của object và chuyển thành mảng
// Object.keys(user).forEach(function (key) {
//   console.log(key, user[key]);
// });

//Object.values --> Lấy tất cả value của object và chuyển thành mảng (Ít dùng)
// console.log(Object.values(user));

//Object.entries() --> Chuyển tất cả key và value của object thành mảng

// const query = {
//   status: "active",
//   keyword: "Học lập trình",
//   page: 1,
// };
// const queryString = Object.entries(query)
//   .map(function (item) {
//     return item.join("=");
//   })
//   .join("&")
//   .replaceAll(" ", "+");
// console.log(queryString);

//Object.assign() --> Nối các object và trả về object mới
// const myUser = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 32,
// };
// const job = {
//   postion: "Teacher",
//   salary: 1000,
// };
// const newObj = Object.assign({}, myUser, job);
// console.log(newObj);
// console.log(myUser);

//Object.fromEntries() --> Chuyển mạng dạng entries (2 chiều) thành object
// const entries = [
//   ["name", "Hoàng An"],
//   ["email", "hoangan.web@gmail.com"],
// ];
// const output = Object.fromEntries(entries);
// console.log(output);

//Bài tập: Chuyển query string sau thành object

// status=active&keyword=Học+lập+trình&page=1
const queryString = `status=active&keyword=Học+lập+trình&page=1`;
/*
{
   status: "active",
   keyword: "Học lập trình",
   page: 1,
 };
*/
let query = queryString.split("&").map(function (item) {
  const itemArr = item.split("=");
  if (typeof itemArr[1] === "string") {
    itemArr[1] = itemArr[1].replaceAll("+", " ");
  }

  const itemNumber = +itemArr[1];
  if (!isNaN(itemNumber)) {
    itemArr[1] = itemNumber;
  }

  return itemArr;
});
query = Object.fromEntries(query);
console.log(query);
