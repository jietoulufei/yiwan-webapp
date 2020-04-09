const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true,
        import: ["./src/theme"],
      },
    },
  },
  pluginOptions: {
    "cube-ui": {
      postCompile: true,
      theme: true,
    },
  },
  devServer: {
    port: 9998,
    open: false,
    https: false,
    host: "localhost",
    proxy: {
      //代理
      [process.env.VUE_APP_BASE_API]: {
        // 目标服务器地址，代理访问 http://localhost:8001
        target: process.env.VUE_APP_SERVICE_URL,
        changeOrigin: true, // 开启代理服务器，
        pathRewrite: {
          // /dev-api/db.json 最终会发送 http://localhost:8001/db.json
          // 将 请求地址前缀 /dev-api 替换为 空的，
          // '^/dev-api': '',
          [`^${process.env.VUE_APP_BASE_API}`]: "",
        },
      },
    },
  },
  lintOnSave: false, //默认true，警告仅仅输入到命令行，不会使编译失败
  outputDir: "dist", //默认dist文件，存放build目录
  assetsDir: "assets", //静态资源目录
  indexPath: "index.html",
  /*
    默认index.html，指定生成index的路径，相对于outputDir
    如 indexPath:"demo/index.html", 那么实际地址为 dist/demo/index.html
  */
  productionSourceMap: false, //打包时，不生成.map(非加密但方便调试)文件，加快build速度
  filenameHashing: true, //默认情况下true，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
  //Vue CLI 内部的 webpack 配置是通过 webpack-chain 维护的
  chainWebpack: (config) => {
    /*
      定义开发和生成环境的路口文件 
      .entry("app")获取默认打包路口文件 默认为main.js
      .clear()清空默认文件main.js
      .add()新增路口文件
    */
    //可视化打包文件分析插件
    // config
    //   .plugin("webpack-bundle-analyzer")
    //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin);

    //生产环境
    config.when(process.env.NODE_ENV === "production", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-prod.js");
      //CDN的资源加载
      config.set("externals", {
        vue: "Vue",
        "vue-router": "VueRouter",
        vuex: "Vuex",
        axios: "axios",
      });
      //动态切换相应的html数据，诸如是否在开发环境隐藏cdn连接,此处设置环境变量
      config.plugin("html").tap((args) => {
        args[0].isProd = true;
        return args;
      });
    });

    //开发环境
    config.when(process.env.NODE_ENV === "development", (config) => {
      config
        .entry("app")
        .clear()
        .add("./src/main-dev.js");

      /*
        动态切换相应的html数据，诸如是否在开发环境隐藏cdn连接,此处设置环境变量
        plugin("html")调用htmlWebpackPlugin该插件 vue-cli内置该插件
        htmlWebpackPlugin 的主要作用可以生成创建html入口文件和 给生成的 js 等文件一个独特的 hash 值防止缓存
      */
      config.plugin("html").tap((args) => {
        args[0].isProd = false;
        return args;
      });
    });
  },
  /*configureWebpack 或 chainWebpack 节点的作用相同，来自定义 webpack 的打包配置 
  ① chainWebpack 通过链式编程的形式，来修改默认的 webpack 配置
  ② configureWebpack 通过操作对象的形式，来修改默认的 webpack 配置
  */

  //压缩文件
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: "gzip",
            test: /\.(js|css)$/, // 匹配文件名
            threshold: 2048, // 对超过2k的数据压缩
            deleteOriginalAssets: false, // 是否删除源文件
            minRatio: 0.8, // 压缩比
          }),
        ],
      };
    }
  },
};
