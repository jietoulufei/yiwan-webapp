import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login", //路由名称
    component: login
  },
  {
    path: "/password",
    name: "password",
    component: () => import("@/views/login/password")
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/login/register")
  },
  {
    path: "/",
    name: "layout",
    redirect: "/xu",
    component: () => import("@/components/layout"),
    children: [
      {
        path: "/xu",
        component: () => import("@/views/xu"),
        meta: {
          //用于诸如面包屑导航 需要获取路由对象里的数据 {{$route.meta.title}}
          title: "序言",
          father: "序言"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash", //不建议使用history 在Nginx会出现问题，刷新会出现404
  base: process.env.BASE_URL, //默认路径是'/'
  routes
});

export default router;
