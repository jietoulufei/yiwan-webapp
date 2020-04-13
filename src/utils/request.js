import axios from "axios";

const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // "开发环境代理标识 /dev-api"
  timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 请求拦截
    return config;
  },
  error => {
    // 出现异常
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  response => {
    // response.data
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default request;
