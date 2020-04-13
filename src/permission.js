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
  var token = localStorage.getItem("yiwan-webapp-token");
  console.log("token", token);

  if (!token) {
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
    // 1.2 获取到token,
    // 1.2.1 请求路由 /login ，那就去目标路由
    if (to.path === "/login") {
      next();
    } else {
      // 1.2.2 请求路由非登录页面，先在本地查看是否有用户信息，
      var userInfo = localStorage.getItem("yiwan-webapp-user");
      console.log("userInfo", userInfo);
      if (userInfo) {
        // 本地获取到，则直接让它去目标路由
        next();
      } else {
        console.log("获取用户信息");
        // 如果本地没有用户信息， 就通过token去获取用户信息，
        getUserInfo(token).then(response => {
          const { data } = response;
          //如果获取到用户信息，则进行非登录页面，否则回到登录页面
          //保存到本地
          if (data.flag) {
            localStorage.setItem("yiwan-webapp-user", JSON.stringify(data));
            next();
          } else {
            next({ path: "/login" });
          }
        });
      }
    }
  }
});
