const apiAddress = process.env.VUE_APP_ROOT_API;

module.exports = {
  devServer: {
    proxy: apiAddress,
  },
};
