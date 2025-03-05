import axios from "axios";
import {
  getRefreshToken,
  getToken,
  saveToken,
  removeToken,
} from "../utils/auth";
export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_AUTH_API}`,
});

instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token.access_token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
let refreshTokenPromise = null;
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (
      error.status === 401 &&
      error.response.config.url !== "/auth/refresh-token" &&
      window.location.pathname !== "/auth/login"
    ) {
      if (!refreshTokenPromise) {
        refreshTokenPromise = getRefreshToken();
      }
      const newToken = await refreshTokenPromise;
      if (newToken) {
        saveToken(newToken);
        return instance.request(error.config);
      } else {
        removeToken();
        window.location.href = `/auth/login`;
      }
    }

    return Promise.reject(error);
  }
);
