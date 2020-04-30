import request from "@/utils/request";
// 关于axios post请求报错400
// springboot使用了注解 @RequestParam，这个就只能从请求的地址中取出参数，也就是只能从 username=admin&pwd=11111 这种字符串中解析出参数，
// 也就是编码格式（content-type）为：application/x-www-form-urlencode。
// 但是axios会把请求的数据转换成json格式，即为：application/json;charset=UTF-8，所以格式不同，后台无法取到前端请求值，会报400。
// 解决方案一 @RequestParam（通过字符串解析出参数） ，其实还有另一种是 @RequestBody（从请求体中获取参数），让后端改成 @RequestBody也可以。
// 解决方案二 前端自行transformRequest import qs from "qs";转义
export function login(username, password) {
  return request({
    url: "/user/login",
    method: "post",
    data: {
      username,
      password,
    },
    transformRequest: [
      function(data) {
        let ret = "";
        for (let it in data) {
          ret +=
            encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&";
        }
        return ret;
      },
    ],
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
}

export function getUserInfo(token) {
  return request({
    url: `/user/info/${token}`,
    method: "get",
  });
}

export function logout(token) {
  return request({
    url: "/user/logout",
    method: "post",
    data: {
      token,
    },
  });
}
