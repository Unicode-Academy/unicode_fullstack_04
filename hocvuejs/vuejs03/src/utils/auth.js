import { instance } from "../configs/axios";

export const saveToken = (token) => {
  localStorage.setItem("access_token", token.access_token);
  localStorage.setItem("refresh_token", token.refresh_token);
};

export const getToken = () => {
  return {
    access_token: localStorage.getItem("access_token"),
    refresh_token: localStorage.getItem("refresh_token"),
  };
};

export const removeToken = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
};

export const getRefreshToken = async () => {
  const token = getToken();
  try {
    if (token) {
      const refreshToken = token.refresh_token;
      const response = await instance.post(`/auth/refresh-token`, {
        refreshToken,
      });
      return response.data;
    }
  } catch (error) {
    return false;
  }
};
