export const GuestMiddleware = (to, from, next) => {
  const isAuth = false;
  if (!isAuth) {
    next();
  } else {
    next({ name: "home" });
  }
};
