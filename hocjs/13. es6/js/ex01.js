//Biến: let, const
//Object, Array: Destructuring
/*
- Phá vỡ cấu trúc array, object để truy cập vào các key và trả về các biến riêng biệt
*/

// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
//   age: 31,
//   address: "Hà Nội",
// };
// console.log(user);
// const { name: fullname, email, age = 32 } = user;
// console.log(fullname);
// console.log(email);
// console.log(age);

// const { age, email, ...rest } = user; //rest
// console.log(age, email);
// console.log(rest);

// const users = [undefined, "Hoàng An", "hoangan.web@gmail.com", "Hà Nội", 32];
// const [fullname, email, , age] = users;
// console.log(fullname);
// console.log(email);
// console.log(age);

// const [something = "ahihi", fullname, ...rest] = users;
// console.log(something, fullname);
// console.log(rest);

// const userLogin = {
//   displayName: "Hoàng An Unicode",
//   emails: [
//     {
//       email: "hoangan.web@gmail.com",
//     },
//   ],
// };
// console.log(userLogin);

//Dùng destructuring lấy ra displayName và email và lưu thành 2 biến: fullname và emailAddress
// const { displayName: fullname, emails } = userLogin;
// const [{ email: emailAddress }] = emails;
// console.log(fullname);
// console.log(emailAddress);

//Object, Array: Spread
// const oldObj = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// const newObj = {
//   age: 32,
//   address: "Hà Nội",
//   ...oldObj, //Giải các phần tử ra ngoài (1 cấp)
// };
// console.log(newObj);

// const oldArr = ["a", "b", "c"];
// const myObj = {
//   list: ["Item 1", "Item 2"],
// };
// const newArr = ["d", ...oldArr, "e", ...myObj.list];
// console.log(newArr);

// const something = function (a, b, c) {
//   console.log(a, b, c);
// };

// // const myArr = [10, 20];
// const myObj = {
//   a: 10,
//   b: 20,
// };

// something(...Object.values(myObj));
// something.apply(null, myArr);

//Enhanced Object Literal
const fullname = "Hoàng An";
const email = "hoangan.web@gmail.com";
const age = undefined;

const user = {
  fullname,
  email,
  age,
  getName() {
    return this.fullname;
  },
};
console.log(user);
console.log(user.getName());
