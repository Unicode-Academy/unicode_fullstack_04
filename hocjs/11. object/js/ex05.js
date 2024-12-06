const users = [
  {
    id: 1,
    name: "User 1",
    email: "user1@gmail.com",
  },
  {
    id: 2,
    name: "User 2",
    email: "user2@gmail.com",
  },
  {
    id: 3,
    name: "User 3",
    email: "user3@gmail.com",
  },
];

//Render
document.querySelector("tbody").innerHTML = `${users
  .map(function (user, index) {
    return `<tr>
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td><a href="#">Sửa</a></td>
          <td><a href="#">Xóa</a></td>
        </tr>`;
  })
  .join("")}`;
