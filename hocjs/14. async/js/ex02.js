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
let total = 0;
for (let i = 0; i < ids.length; i++) {
  const userId = ids[i];
  getUser(userId).then((data) => {
    total += data.salary;
    // console.log(total);
  });
}
console.log(total);
