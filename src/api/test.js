import request from "@/utils/request";

// request.get("/db.json").then(response => {
//   //vue-cli axios的默认路径为public/xxx
//   const data = response.data;
//   console.log(data);sss222
// });

export default {
  getList() {
    const req = request({
      methods: "get",
      url: `/db.json`
    });
    return req;
  }
};
