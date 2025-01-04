// alert("Cảnh báo");
// console.log("Step 1");
// console.log("Step 2");
// console.log("Step 3");

// console.log("Step 1");
// setTimeout(() => {
//   console.log("Ahihi");
// }, 1000);
// console.log("Step 2");
// console.log("Step 3");

// setTimeout(() => {
//   console.log("Ahihi");
// }, 0);
// console.log("Ok chưa?");

//Xử lý bất đồng bộ --> biến từ bất đồng bộ thành đồng bộ

// - Dùng callback
// - Promise

// const getData = (url, callback) => {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       if (typeof callback === "function") {
//         callback(this.response);
//       }
//     }
//   };
//   xhttp.open("GET", url, true);
//   xhttp.send();
// };

// const showResult = (data) => {
//   console.log(data);
//   console.log("Lấy dữ liệu thành công");
// };

// getData("https://jsonplaceholder.typicode.com/todos", showResult);

// const getA = (callback) => {
//   setTimeout(() => {
//     console.log("A");
//     callback();
//   }, 1000);
// };
// const getB = (callback) => {
//   setTimeout(() => {
//     console.log("B");
//     callback();
//   }, 500);
// };
// const getC = (callback) => {
//   setTimeout(() => {
//     console.log("C");
//     callback();
//   }, 1500);
// };
// getA(() => {
//   getB(() => {
//     getC(() => {
//       console.log("Finish");
//     });
//   });
// });

const getA = () => {
  return new Promise((resolve, reject) => {
    //resolve là 1 hàm chứa dữ liệu cần trả về ==> resolve('Dữ liệu')
    //reject là 1 hàm chứa thông báo lỗi cần trả về ==> reject('Lỗi')
    setTimeout(() => {
      const data = "Get A";
      // resolve(data);
      reject("Lỗi network");
    }, 1000);
  });
};

const getB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("Get B");
      reject("Get B Error");
    }, 500);
  });
};

const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Get C");
    }, 1500);
  });
};

// getA()
//   .then((data) => {
//     console.log(data);
//     return getB();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((data) => {
//     console.log(data);
//     return getC();
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getA()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finish");
//     //cleanup
//   });

// getA()
//   .then((data) => {
//     console.log(data);
//     return "Unicode";
//   })
//   .then((data) => {
//     console.log(data);
//     return "Dương";
//   })
//   .then((data) => {
//     console.log(data);
//   });
/*
Promise state
- pending: Đang chờ thực thi
- fulfilled: Thực thi thành công
- rejected: Thực thi thất 

Promise Chaining: Khi áp dụng nhiều tác vụ bất đồng bộ phụ thuộc lẫn nhau --> Viết theo kiểu chaining

a().b().c().d()
*/
