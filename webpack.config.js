module.exports = (env) => {
  return {
    entry: {
      app: "./src/index.ts"
    },
    output: {
      filename: "[name]-[hash].js",
      path: `${__dirname}/dist`
    },
    resolve: {
      extensions: [".ts", ".tsx","js","jsx"]
    },
    module: {

      rules: [
        {test: /\.tsx?/, use: ['awesome-typescript-loader']}
      ]
    }
  }
};