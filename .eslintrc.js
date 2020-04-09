module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"], //eslint继承的插件
  parserOptions: {
    parser: "babel-eslint" //指定eslint的解析器
  },
  rules: {
    //"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    /*
      是否在开发或生产环境允许输出日志
      npm run sever process.env.NODE_ENV === "development"
      npm run build process.env.NODE_ENV === "production"
    */
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
