export const AuthMiddleware = async (to, from, next) => {
  if (!to.meta.isLoading && to.meta.isAuth) {
    return next();
  }
  next({ name: "auth.login" });
};
