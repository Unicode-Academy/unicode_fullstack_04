class User {
  constructor() {
    this.name = "Hoàng An";
    this.email = "hoangan.web@gmail.com";
  }
}

// class Customer {
//   constructor() {
//     this.name = "Hoàng An Unicode";
//     this.email = "contact@unicode.vn";
//   }
// }

// const user = new User();
// console.log(user);

// const user = [];

// if (user instanceof User) {
//   console.log("user is instance of User");
// }

// const customer = {};
// console.log(customer);

//Kiểm tra 1 biến có phải không?
// const users = [];
// if (users instanceof Array) {
//   console.log("Đây là mảng");
// }

// const user = {};
// if (user instanceof Object) {
//   console.log("Đây là object");
// }

//Kiểm tra tên của Constructor
// if (user.constructor.name === "User") {
//   console.log("user is instance of User");
// }

// const user = [];
// if (user.constructor.name === "Object") {
//   console.log("Object");
// }

// const user = {};
// const user = {
//   name: "Hoàng An",
//   info: {
//     age: 32,
//   },
// };
// if (user && user.name) {
//   console.log(user.name);
//   if (user.info) {
//     console.log(user.info.age);
//   }
// }

//Toán tử Optional Chaining (?.)
// const user = null;
// const user = {
//   email: "contact@unicode.vn",
//   info: {
//     age: 32,
//   },
// };
// console.log(user?.email);
// console.log(user?.info?.age);
// if (user?.email) {
//   console.log(user.email);
// }

// const user = null;
// console.log(user?.getName?.());

// const users = [];
// console.log(users[1]);

// const a = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const b = a;
// const b = { ...a };
// const b = Object.assign({}, a);
// const json = JSON.stringify(a);
// const b = JSON.parse(json);
// a.name = "Hoàng An Unicode";
// console.log(a);
// console.log(b);

//Bài tập
const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`;

//Yêu cầu: Tìm số lần lặp của từng từ (Không phân biệt chữ hoa, thường)
//Lorem: 4
//Ipsum: 4
/*
{
    Lorem: 4,
    Ipsum: 4
}
*/
// const contentArr = content.split(" ");
// const count = {};
// contentArr.forEach(function (word) {
//   if (!count[word.toLowerCase()]) {
//     count[word.toLowerCase()] = 1;
//   } else {
//     count[word.toLowerCase()]++;
//   }
// });
// console.log(count);

//Bài tập
const address = [
  {
    area: "A",
    name: "Item 1",
    email: "item1@gmail.com",
  },
  {
    area: "B",
    name: "Item 2",
    email: "item2@gmail.com",
  },
  {
    area: "A",
    name: "Item 3",
    email: "item3@gmail.com",
  },
];
//Nhóm các phần tử aria
/*
{
   A: [
    {
        area: "A",
        name: "Item 1",
        email: "item1@gmail.com",
    },
    {
        area: "A",
        name: "Item 3",
        email: "item3@gmail.com",
    }
   ], 
   B: [
        {
            area: "B",
            name: "Item 2",
            email: "item2@gmail.com",
        }
    ]
}
*/
const result = {};
address.forEach(function (value) {
  if (!result[value.area]) {
    result[value.area] = [];
  }

  result[value.area].push(value);
});
console.log(result);

//Xử lý query string
const queryEntries = Array.from(
  new URLSearchParams(window.location.search).entries()
);
console.log(queryEntries);

const query = {};
queryEntries.forEach(function (value) {
  if (!query[value[0]]) {
    query[value[0]] = value[1];
  } else {
    if (!Array.isArray(query[value[0]])) {
      query[value[0]] = [query[value[0]]];
    }
  }
  if (Array.isArray(query[value[0]])) {
    query[value[0]].push(value[1]);
  }
});
console.log(query);
