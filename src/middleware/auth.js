export default function auth({ to, next, router }) {
  if (localStorage.getItem("token")) {
    if (to.path === "/register" || to.path === "/login") {
      return router.push({ name: "profile" });
    }
    return next();
  } else {
    if (to.path === "/register" || to.path === "/login") {
      return next();
    }
    return router.push({ name: "login" });
  }
}
