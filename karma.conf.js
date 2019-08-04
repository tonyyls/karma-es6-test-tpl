const webpackConfig = require("./webpack.test");
module.exports = function(config) {
  config.set({
    basePath: "",

    // 断言库
    frameworks: ["mocha", "chai"],
    // 生效的文件
    files: [
      "src/lib/**/*.js","unit/**/*.spec.js"
    ],

    // 排除的文件
    exclude: [],

    // 预处理器，例如 webpack, coverage等
    preprocessors: {
      "src/lib/**/*.js": ["webpack","coverage"],
      "unit/**/*.spec.js": ["webpack", "sourcemap"]
    },
    // webpack配置
    webpack: webpackConfig,
    // webpack不输出结果
    webpackMiddleware: {
      noInfo: true
    },
    // 使用的插件,需要在此声明
    plugins: [
      "karma-phantomjs-launcher", // 使用无头浏览器,也可以使用 karma-chrome-launcher等
      "karma-sourcemap-loader",
      "karma-mocha",
      "karma-chai",
      "karma-coverage",
      "karma-webpack",
      "karma-coverage-istanbul-reporter"
    ],

    reporters: ["coverage-istanbul"],
    // 更多配置参考: https://github.com/mattlewis92/karma-coverage-istanbul-reporter
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: 'docs/coverage' // 指定生成的目录
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,

    // 无头浏览器器（没有界面的浏览器），也可以使用 'Chrome'
    browsers: ["PhantomJS"],
    singleRun: true,
    concurrency: Infinity
  });
};
