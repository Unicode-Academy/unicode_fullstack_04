//Constructor
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   getName: function () {
//     //this: context
//     return this.name;
//   },
// };
// const customer = {
//   name: "Hoàng An Unicode",
//   email: "contact@unicode.vn",
//   getName: function () {
//     //this: context
//     return this.name;
//   },
// };

//Function constructor
// const Person = function (name, email) {
//   this.name = name;
//   this.email = email;
//   this.age = 32;
//   this.getName = function () {
//     return this.name;
//   };
//   //   return "Unicode";
// };
//Khởi tạo object --> Thường gọi là instance
// const user = new Person("Hoàng An", "hoangan.web@gmail.com");
// console.log(user);
// console.log(user.getName());

// const customer = new Person("Hoàng An Unicode", "contact@unicode.vn");
// console.log(customer);

// console.log(Person());

// const age = 32;
// const ageObj = new Number(32);
// console.log(ageObj);
// console.log(Number(32));

//Static property, method: Không bị phụ thuộc bởi instance
// Person.message = "Hello anh em"; //static property
// Person.getMessage = function () {
//   //Từ khóa this trong hàm static

//   return "Chào anh em Unicode";
// };
// console.log(Person.message);
// console.log(Person.getMessage());

//Prototype: Object dùng để kế thừa các phương thức, thuộc tính
Object.prototype.message = "Unicode";
Object.prototype.getMessage = function () {
  return "Chào anh em Unicode";
};
const user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};
const customer = {
  name: "Hoàng An Unicode",
  email: "contact@unicode.vn",
};

const Person = function (name, email) {
  this.name = name;
  this.email = email;
  this.age = 32;
  this.getName = function () {
    return this.name;
  };
};
const person = new Person("Hoàng An", "hoangan.web@gmail.com");
// console.log(person);
// console.log(person.message);

// const users = [];
// console.log(users.message);

// const fullname = "Hoàng An";
// console.log(fullname.message);

// const age = 32;
// console.log(age.message);

// const isAuthentication = true; //Boolean
// console.log(isAuthentication.message);

// const age = 123n;
// console.log(age.message);

/*
Object --> prototype
    Constructor --> prototype
        Instance
*/

// Array.prototype.something = "Học JS không khó";
// const users = [];
// console.log(users.something);

// String.prototype.something = "Học JS rất khó";
// const fullname = "Hoàng An";
// console.log(fullname.something);

// Array.prototype.latest = function () {
//   const arr = this;
//   return arr[arr.length - 1];
// };
// const users = ["An", "Đạt", "Dương"];
// console.log(users.latest());

// const customers = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log(customers.latest());

Array.prototype.forEach2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  for (let i = 0; i < this.length; i++) {
    const index = i;
    const value = this[i];
    callback(value, index);
  }
};
Array.prototype.map2 = function (callback) {
  if (typeof callback !== "function") {
    return;
  }
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    const index = i;
    const value = this[i];
    newArr.push(callback(value, index));
  }
  return newArr;
};
const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
const newArr = users.map2(function (user, index) {
  //   return `<h2>${user}</h2>`;
});
console.log(newArr);
