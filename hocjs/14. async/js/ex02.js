const getUser = (userId) => {
  const users = [
    {
      id: 1,
      name: "User 1",
      salary: 1000,
    },
    {
      id: 2,
      name: "User 2",
      salary: 2000,
    },
    {
      id: 3,
      name: "User 3",
      salary: 3000,
    },
    {
      id: 4,
      name: "User 4",
      salary: 4000,
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === userId);
      resolve(user);
    }, Math.random() * 2000);
  });
};

const ids = [1, 2, 4];
// const totalPromise = new Promise((resolve) => {
//   let total = 0;
//   let count = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const userId = ids[i];
//     getUser(userId).then((data) => {
//       total += data.salary;
//       count++;
//       if (count === ids.length) {
//         resolve(total);
//       }
//     });
//   }
// });
// //Lấy giá trị total
// totalPromise.then((data) => {
//   console.log(data);
// });

//Multiple Promise
// - Promise 1 -> Promise 2 -> Promise 3...
// - Promise.all() --> Nhận 1 mảng chứa các promise cần xử lý

//1. Tạo 1 mảng chứa danh sách các promise cần xử lý
// const promiseList = ids.map((userId) => getUser(userId));

//2. Đưa mảng trên vào Promise.all để lấy dữ liệu
// Promise.all(promiseList).then((users) => {
//   const total = users.reduce((prev, user) => user.salary + prev, 0);
//   console.log(total);
// });

//Xử lý lỗi (Error Handling) --> Kỹ thuật bắt được lỗi xảy ra của chương trình trong quá trình biên dịch (Không xử lý được lỗi cú pháp)
// try {
//   //   const something = () => {
//   //     console.log("something");
//   //   };
//   //   something();
//   //   abc(); //Chuyển xuống catch ngay lập tức
//   //   console.log("Unicode");
//   let a = 10;
//   let b = 0;
//   if (b === 0) {
//     throw new Error("B không được bằng 0");
//   }

//   let result = a / b;
//   console.log(result);
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("Hoàn thành");
// }
// console.log("Done");
