//Từ khóa this
// const user = {
//   email: "hoangan.web@gmail.com",
//   address: "Hà Nội",
//   getEmail: function () {
//     console.log(this);
//   },
//   getInfo: function () {
//     return {
//       age: 32,
//       getAge: function () {
//         console.log(this.age);
//       },
//       //   getAddress: () => {
//       //     //Arrow function
//       //     //Không binding this mà sẽ đẩy lên hàm cha
//       //     console.log(this.address);
//       //   },
//       getAddress: function () {
//         console.log(this.address);
//       },
//     };
//   },
// };

//Arrow function

//Hàm bind
// const something = function () {
//   console.log(this);
// };
// something();

// const a = { name: "Hoàng An" };
// const somethingBind = something.bind(a);
// somethingBind();

// user.getInfo().getAddress.bind(user)();

//Hàm call
// function something(a, b, c) {
//   console.log(this);

//   console.log(`a: ${a}, b: ${b}, c: ${c}`);
// }
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// // something.bind(user)(10, 20);
// something.call(user, 10, 20, 30);

//apply
// function something(a, b, c) {
//   console.log(this);

//   console.log(`a: ${a}`);
//   console.log(`b: ${b}`);
//   console.log(`c: ${c}`);
// }

// const args = [10, 20, 30];
// const user = {
//   name: "Hoàng An",
//   email: "hoangan.web@gmail.com",
// };
// something.apply(user, args);

//Kế thừa constructor
// function Person(name, email) {
//   this.name = name;
//   this.email = email;
//   this.getName = function () {
//     return this.name;
//   };
//   this.getEmail = function () {
//     return this.email;
//   };
// }

// function Boy(name, email) {
//   Person.call(this, name, email); //Kế thừa các phương thức, thuộc tính của Person
//   this.gender = "male";
//   this.getGender = function () {
//     return this.gender;
//   };
//   this.getInfo = function () {
//     return `
//     Name: ${this.name}
//     Email: ${this.email}
//     Age: ${this.gender}
//     `;
//   };
// }

// const boy = new Boy("Hoàng An", "hoangan.web@gmail.com");
// console.log(boy);

// console.log(boy.getInfo());

//Classes
class Person {
  constructor(name, email) {
    //Hàm khởi tạo, chạy ngay sau khi đối tượng được tạo
    this.name = name;
    this.email = email;
  }
  getName = function () {
    this.name;
  };

  getEmail = function () {
    this.email;
  };
}

class Boy extends Person {
  constructor(name, email) {
    super(name, email);
    this.gender = "male";
  }
  getInfo = function () {
    return `
    Name: ${this.name}
    Email: ${this.email}
    Age: ${this.gender}
    `;
  };
}
const boy = new Boy("Hoàng An", "hoangan.web@gmail.com");
console.log(boy);
