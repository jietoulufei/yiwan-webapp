//路由守卫
/**
 * 权限校验：
 *  Vue Router中的 前置钩子函数 beforeEach(to, from, next)
 * 当进行路由跳转之前，进行判断 是否已经登录 过，登录过则允许访问非登录页面，否则 回到登录页
 *
 * to:  即将要进入的目标路由对象
 * from: 即将要离开的路由对象
 * next: 是一个方法，可以指定路由地址，进行路由跳转
 * 
 * 注意事项
 * 
    next() 表示路由成功，直接进入to路由，不会再次调用router.beforeEach()
    next('login') 表示路由拦截成功，重定向至login，会再次调用router.beforeEach()
    也就是说beforeEach()必须调用next(),否则就会出现无限循环，
    next() 和 next('xxx') 是不一样的，区别就是前者不会再次调用router.beforeEach()，后者会！！！

 */

import router from "./router";
import { getUserInfo } from "@/api/login";

// 主要4种情况
// 没权限的去login页面->next()
// 没权限的去非login页面->next({ path: "/login" })
// 有权限的去login页面->next()
// 有权限的去非login页面->
//     没有userinfo->next({ path: "/login" })
//     有userinfo->next()

router.beforeEach((to, from, next) => {
  // 1. 获取token
  var token = JSON.stringify(localStorage.getItem("yiwan-webapp-token"));
  console.log("token", token);

  if (token === "null") {
    // 1.1 如果没有获取到，
    // 要访问非登录页面，则不让访问，加到登录页面 /login
    if (to.path == "/login") {
      next();
    } else if (to.path == "/register") {
      next();
    } else if (to.path == "/password") {
      next();
    } else {
      // 请求登录页面 /login
      next({ path: "/login" });
    }
  } else {
    next();
  }
});
