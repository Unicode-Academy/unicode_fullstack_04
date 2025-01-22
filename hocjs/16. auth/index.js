const loginForm = document.querySelector(".js-login-form");
const profileEl = document.querySelector(".js-profile");
// const profileEl2 = document.querySelector(".js-profile2");
// loginForm.addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const formData = new FormData(e.target);
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const token = await sendLogin(email, password);
//   if (!token) {
//     return alert("Login failed");
//   }
//   saveToken(token.access_token, token.refresh_token);
//   checkAuth(); //Update giao diện
// });

// const saveToken = (accessToken, refreshToken) => {
//   localStorage.setItem("access_token", accessToken);
//   localStorage.setItem("refresh_token", refreshToken);
// };

// const removeToken = () => {
//   localStorage.removeItem("access_token");
//   localStorage.removeItem("refresh_token");
// };

// const sendLogin = async (email, password) => {
//   try {
//     const response = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     if (!response.ok) {
//       throw new Error("Login failed");
//     }
//     return response.json();
//   } catch {
//     return false;
//   }
// };

// const getProfile = async (accessToken) => {
//   try {
//     const response = await fetch(
//       "https://api.escuelajs.co/api/v1/auth/profile",
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Get profile failed");
//     }
//     return response.json();
//   } catch {
//     return false;
//   }
// };
// //Refresh Token
// let refreshTokenPromise = null;
// let check = false;
// const getRefreshToken = () => {
//   const refreshToken = localStorage.getItem("refresh_token");
//   if (!refreshToken) {
//     return false;
//   }
//   try {
//     const requestRefreshToken = async () => {
//       const response = await fetch(
//         "https://api.escuelajs.co/api/v1/auth/refresh-token",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ refreshToken }),
//         }
//       );
//       if (!response.ok) {
//         throw new Error("Refresh token failed");
//       }
//       return response.json();
//     };
//     // if (!refreshTokenPromise) {
//     //   refreshTokenPromise = requestRefreshToken();
//     // }
//     // return refreshTokenPromise;
//     if (!check) {
//       // check = true;
//       return requestRefreshToken();
//     }
//   } catch {
//     return false;
//   }
// };
// //Kiểm tra trạng thái đăng nhập
// const checkAuth = async () => {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     loginForm.classList.add("hide");
//     profileEl.classList.remove("hide");
//     //Hiển thị thông tin profile
//     const user = await getProfile(accessToken);
//     if (user) {
//       profileEl.querySelector(".js-fullname").textContent = user.name;
//       const logoutBtn = profileEl.querySelector(".js-logout");
//       logoutBtn.addEventListener("click", () => {
//         removeToken();
//         checkAuth();
//       });
//     } else {
//       const newToken = await getRefreshToken();
//       if (!newToken) {
//         removeToken();
//       } else {
//         //Update token vào localStorage
//         saveToken(newToken.access_token, newToken.refresh_token);
//         //Gọi lại hàm checkAuth
//       }
//       checkAuth();
//     }
//   } else {
//     loginForm.classList.remove("hide");
//     profileEl.classList.add("hide");
//   }
// };
// const checkAuth2 = async () => {
//   const accessToken = localStorage.getItem("access_token");
//   if (accessToken) {
//     profileEl2.classList.remove("hide");
//     //Hiển thị thông tin profile
//     const user = await getProfile(accessToken);
//     if (user) {
//       profileEl2.querySelector(".js-fullname2").textContent = user.name;
//     } else {
//       const newToken = await getRefreshToken();
//       if (!newToken) {
//         removeToken();
//       } else {
//         //Update token vào localStorage
//         saveToken(newToken.access_token, newToken.refresh_token);
//         //Gọi lại hàm checkAuth
//       }
//       checkAuth2();
//     }
//   } else {
//     profileEl2.classList.add("hide");
//   }
// };
// checkAuth();
// checkAuth2();

/*
Request 1 --> Success 
Request 2 --> Expired --> Refresh Token --> Request 2
Request 3 --> Expired --> Refresh Token --> Request 3
Request 4 --> Expired --> Refresh Token --> Request 4

==> Giải pháp

Request 1 --> Success
Request 2 --> Expired --> Refresh Token --> Request 2
                                                     -->  Request 3 --> Success
                                                     -->  Request 4 --> Success
*/

//Khởi tạo axios
const axiosIntance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  timeout: 10000,
});

//Thiết lập interceptor
axiosIntance.interceptors.request.use(
  function (config) {
    if (localStorage.getItem("access_token")) {
      const accessToken = localStorage.getItem("access_token");
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
let refreshTokenPromise = null;
axiosIntance.interceptors.response.use(
  function (response) {
    // console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    if (error.status === 401 && error.config.url !== "/auth/refresh-token") {
      if (localStorage.getItem("refresh_token")) {
        try {
          const refreshToken = localStorage.getItem("refresh_token");
          if (!refreshTokenPromise) {
            refreshTokenPromise = getRefreshToken(refreshToken);
          }
          const newToken = await refreshTokenPromise;
          saveToken(newToken.access_token, newToken.refresh_token);
          return axiosIntance.request(error.config); //Gọi lại request
        } catch {
          console.log("Xử lý đăng xuất");
        }
      }
    }
    return Promise.reject(error);
  }
);

const saveToken = (accessToken, refreshToken) => {
  localStorage.setItem("access_token", accessToken);
  localStorage.setItem("refresh_token", refreshToken);
};

const getRefreshToken = async (refreshToken) => {
  const response = await axiosIntance.post("/auth/refresh-token", {
    refreshToken,
  });
  return response.data;
};

const getProfile = async () => {
  const response = await axiosIntance.get("/auth/profile");
  return response.data;
};
const showProfile = async () => {
  const user = await getProfile();
  console.log(user);
};
showProfile();
showProfile();
