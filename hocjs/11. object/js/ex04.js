// const getError = function (key) {
//   const errors = {
//     name: {
//       required: "Vui lòng nhập tên",
//       min: "Tên phải từ 3 ký tự",
//     },
//     email: {
//       required: "Vui lòng nhập email",
//       email: "Vui lòng nhập đúng định dạng email",
//     },
//   };
//   //Viết chương trình lấy ra lỗi đầu tiên của 1 key
//   const error = errors[key];
//   if (!error) {
//     return;
//   }
//   const errorValues = Object.values(error);
//   return errorValues[0];
// };

//Ví dụ:
// console.log(getError("nam"));
//Vui lòng nhập tên
// getError("email"); //Vui lòng nhập email

//key: value
//obj['nam']

const menus = [
  {
    id: 1,
    name: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Menu 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Menu 4",
    parent: 0,
  },
  {
    id: 5,
    name: "Menu 2.1",
    parent: 2,
  },
  {
    id: 6,
    name: "Menu 2.2",
    parent: 2,
  },
  {
    id: 7,
    name: "Menu 2.3",
    parent: 2,
  },
  {
    id: 8,
    name: "Menu 2.2.1",
    parent: 6,
  },
  {
    id: 9,
    name: "Menu 2.2.2",
    parent: 6,
  },
  {
    id: 10,
    name: "Menu 2.2.3",
    parent: 6,
  },
];

//Output: Chuyển thành dạng nested array
/*
[
  {
    id: 1,
    name: "Menu 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Menu 2",
    parent: 0,
    children: [
        {
            id: 5,
            name: "Menu 2.1",
            parent: 2,
        },
        {
            id: 6,
            name: "Menu 2.2",
            parent: 2,
        },
        {
            id: 7,
            name: "Menu 2.3",
            parent: 2,
        }
    ]
  },
  {
    id: 3,
    name: "Menu 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Menu 4",
    parent: 0,
  }
]
*/
// const results = [];
// for (let i = 0; i < menus.length; i++) {
//   //Lấy các phần tử là cấp cha
//   if (menus[i].parent === 0) {
//     results.push(menus[i]);
//     for (let j = 1; j < menus.length; j++) {
//       //Lấy các phần tử là cấp con
//       if (menus[j].parent === menus[i].id) {
//         // console.log(menus[j], menus[i]);
//         //Thêm con vào cha
//         //1. Kiểm tra xem trong menus[i] có children chưa?
//         if (!menus[i].children) {
//           menus[i].children = [];
//         }
//         //2. Thêm các menu vào con vào children
//         menus[i].children.push(menus[j]);

//         //Cấp cháu
//         for (let k = 0; k < menus.length; k++) {
//           if (menus[k].parent === menus[j].id) {
//             if (!menus[j].children) {
//               menus[j].children = [];
//             }
//             menus[j].children.push(menus[k]);
//           }
//         }
//       }
//     }
//   }
// }
// console.log(results);

//Xây dựng hàm đệ quy
const menusTree = function (menus, parent = 0) {
  const result = [];
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].parent === parent) {
      result.push(menus[i]);
      const sub = menusTree(menus, menus[i].id);
      if (sub.length) {
        menus[i].children = sub;
      }
    }
  }
  return result;
};
console.log(menusTree(menus));
