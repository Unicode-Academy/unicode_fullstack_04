//API = Application Programming Interface
/*
- URL
- Method
- Header
- Body

URL + Method = Endpoint

Ví dụ:

Host: https://api.unicode.vn
GET /users ==> Lấy danh sách tất cả users
GET /users/{id} ==> Lấy chi tiết 1 users
POST /users ==> Thêm mới user
PUT /users/{id} ==> Sửa user theo id
DELETE /users/{id} ==> Xóa user theo id
*/

const userApi = `http://localhost:3000/users`;

//Hàm fetch() --> Trả về 1 promise chứa response
// fetch(userApi)
//   .then((response) => {
//     return response.json(); //Tự động JSON.parse data từ API trả về
//   })
//   .then((data) => {
//     console.log(data);
//   });
const getUsers = async () => {
  const response = await fetch(
    `${userApi}?_sort=id&_order=desc&_limit=2&_page=1`
  );
  //Lấy danh sách bản ghi khi sử dụng limit --> Áp dụng giải quyết bài toán phân trang
  const total = response.headers.get("x-total-count");
  console.log(`${total} users`);

  const data = await response.json();
  console.log(data);
};

const getUser = async (id) => {
  const response = await fetch(`${userApi}/${id}`);
  const data = await response.json();
  console.log(data);
};

const createUser = async (user) => {
  const response = await fetch(userApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (response.ok) {
    console.log("Thêm thành công");
  }
};
// createUser({
//   name: "Hoàng An Unicode",
//   email: "hoangan.web@gmail.com",
// });

const deleteUser = async (id) => {
  const response = await fetch(`${userApi}/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    console.log("Xóa thành cong");
  }
};
// deleteUser(1);

const updateUser = async (data, id) => {
  const response = await fetch(`${userApi}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    console.log("Thành công");
  }
};

// updateUser(
//   {
//     email: "contact@unicode.vn",
//   },
//   4
// );

getUsers();
