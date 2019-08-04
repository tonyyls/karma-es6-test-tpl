# karma-es6-test-tpl

如果您在日常开发的过程中，善于总结和包装JS类库，那么建议您对这些JS类库单元测试。这里采用 [Karma](https://www.npmjs.com/package/karma)（工具集）+ [mocha](https://www.npmjs.com/package/mocha)（断言库）进行单元测试。

## 关键点说明

* 断言库

断言库有很多，例如: `mocha`, `chai`, `jasmine` 等，这里使用 `mocha & chai`。

* browsers 配置

建议使用无头浏览器(`PhantomJS`或者`Chromeheadless`，无界面)，`Chrome`会打开系统的浏览器，运行完成后关闭，较为繁琐。

* 支持es6

对于模块化的库，需要`webpack`,`babel`, `sourcemap` 的支持。另外，.babelrc 中需要配置 `babel-plugin-istanbul` 插件。

* 支持覆盖率

原生的 `karma-coverage-reporter` 不好使（报错），这里采用 `karma-coverage-istanbul-reporter`(用于生成覆盖率的展示页面等)。

其他配置，在工程中进行了详细的说明，请参考 `karma.conf.js`,`webpack.test.js`, 具体依赖查看 `package.json`。


## 参考资料

[karma-coverage-istanbul-reporter](https://github.com/mattlewis92/karma-coverage-istanbul-reporter)