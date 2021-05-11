module.exports = {
  devServer: {},
  /* i18n 설정 */
  chainWebpack: (config) => {
    config.module
      .rule("yaml")
      .test(/\.ya?ml$/)
      .use("json-loader")
      .loader("json-loader")
      .end()
      .use("yaml-loader")
      .loader("yaml-loader");

    config.plugin("html").tap((args) => {
      args[0].title = "OP.GG Coding Test";
      return args;
    });
  },
  lintOnSave: true,
};
