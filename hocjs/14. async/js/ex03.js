/*
Nhược điểm của Promise --> Vẫn cần callback --> Gặp khó khăn khi xử lý nhiều promise

Khắc phục bằng Async function

- Luôn trả 1 promise
- Sử dụng được từ khóa await

Tác dụng await
- Đợi khi nào promise trả về kết quả thì code bên dưới mới chạy tiếp
- 1 lần await tương ứng 1 lần then trong promise
*/

const getA = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Get A");
      reject("Error A");
    }, 1000);
  });
const getB = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve("Get B"), 2000);
  });
// const something = async () => {
//   try {
//     const resultA = await getA();
//     console.log(resultA);
//   } catch (error) {
//     console.log(error);
//   }
//   //   const resultB = await getB();
//   //   console.log(resultB);
// };
// something();

//IIFE
// (async () => {
//   try {
//     const resultA = await getA();
//     console.log(resultA);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// (async function () {
//   try {
//     const resultA = await getA();
//     console.log(resultA);
//   } catch (error) {
//     console.log(error);
//   }
// })();

// const getUser = (userId) => {
//   const users = [
//     {
//       id: 1,
//       name: "User 1",
//       salary: 1000,
//     },
//     {
//       id: 2,
//       name: "User 2",
//       salary: 2000,
//     },
//     {
//       id: 3,
//       name: "User 3",
//       salary: 3000,
//     },
//     {
//       id: 4,
//       name: "User 4",
//       salary: 4000,
//     },
//   ];
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const user = users.find((user) => user.id === userId);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };

// const ids = [1, 2, 4];

// const calcSalary = async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     console.log(i);
//     const userId = ids[i];
//     const user = await getUser(userId);
//     total += user.salary;
//   }
//   console.log(total);
// };
// calcSalary();

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("My Data");
    reject("Error");
  }, 1000);
});
const something = async () => {
  try {
    // const result = await myPromise;
    // return result;
    return myPromise;
  } catch (error) {
    console.log(error);
  }
};

something()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//Câu hỏi: 2 cách trên khác gì nhau?
