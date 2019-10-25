import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Register from "./views/Register.vue";
import Screen from "./views/Screen.vue";
import Host from "./views/Host.vue";
import Profile from "./views/Profile.vue";
import auth from "./middleware/auth";
import JoinTab from "./components/JoinTab.vue";
import Meeting from "./views/Demo.vue";
import HostTab from "./components/HostTab.vue";
import ProfileTab from "./components/ProfileTab.vue";
import ScheduleTab from "./components/ScheduleTab.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Login,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/logout",
      component: Logout,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/login",
      component: Login,
      name: "login",
      meta: {
        middleware: auth
      }
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/host",
      name: "host",
      component: Host,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/screen",
      name: "screen",
      component: Screen,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/meeting",
      name: "meeting",
      component: Meeting,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      meta: {
        middleware: auth
      }
    },
    {
      path: "/home",
      component: Home,
      children: [
        { path: "", component: ProfileTab },
        { path: "join", component: JoinTab },
        { path: "host", component: HostTab },
        { path: "schedule", component: ScheduleTab }
      ],
      meta: {
        middleware: auth
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  if (!subsequentMiddleware) return context.next;
  return (...parameters) => {
    context.next(...parameters);
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];
    const context = {
      from,
      next,
      router,
      to
    };
    const nextMiddleware = nextFactory(context, middleware, 1);
    return middleware[0]({ ...context, next: nextMiddleware });
  }
  return next();
});

export default router;
