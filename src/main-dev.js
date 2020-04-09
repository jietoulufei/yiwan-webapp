import Vue from "vue";
//注意ui库引入第二排最妥当
import "./cube-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "amfe-flexible";

//权限拦截
//import "./permission";

// 开发环境 development, 生产环境 production
// process.env.NODE_ENV 动态获取当前环境
Vue.config.productionTip = process.env.NODE_ENV === "production"; //是否启用生产环境提示
console.log("process.env.NODE_ENV:", process.env.NODE_ENV);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
