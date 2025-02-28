export const GuestMiddleware = (to, from, next) => {
  if (!to.meta.isLoading && to.meta.isAuth) {
    next({ name: "home" });
  } else {
    next();
  }
};
