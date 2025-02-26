import { getToken } from "../utils/auth";

export const AuthMiddleware = async (to, from, next) => {
  console.log(2);
  if (!to.meta.isLoading && to.meta.isAuth) {
    return next();
  }
  next({ name: "auth.login" });
};
