const fs = require("fs");
const path = require("path");
const webpack = require("webpack");

const WEBSITE_URL = "https://traffic.hmm.dev/";
const CIRCLE_BRANCH = process.env.CIRCLE_BRANCH || "production";
const ASSET_PATH = `${WEBSITE_URL}${CIRCLE_BRANCH}/`;

module.exports = env => {
  const baseConfig = {
    entry: ["@babel/polyfill", "./src/index.tsx"],
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    useBuiltIns: false
                  }
                ],
                "@babel/typescript",
                "@babel/react"
              ],
              plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
                "react-hot-loader/babel"
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        src: path.resolve(__dirname, "src/")
      }
    }
  };

  if (env.prod) {
    return {
      ...baseConfig,
      mode: "production",
      plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
          "process.env.CIRCLE_BRANCH": JSON.stringify(CIRCLE_BRANCH),
          "process.env.WEBSITE_URL": JSON.stringify(WEBSITE_URL)
        })
      ],
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: ASSET_PATH
      }
    };
  }

  if (env.dev) {
    const { resolve, ...otherConfig } = baseConfig;
    return {
      ...otherConfig,
      resolve: {
        extensions: resolve.extensions,
        alias: {
          "react-dom": "@hot-loader/react-dom",
          ...resolve.alias
        }
      },
      mode: "development",
      devtool: "source-map",
      devServer: {
        historyApiFallback: true,
        hot: true,
        host: "localhost",
        disableHostCheck: true,
        headers: { "Access-Control-Allow-Origin": "*" },
        https: {
          key: fs.readFileSync("certs/localhost.key"),
          cert: fs.readFileSync("certs/localhost.crt")
        },
        port: 9000
      },
      plugins: [new webpack.HotModuleReplacementPlugin()],
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        publicPath: "https://localhost:9000/"
      }
    };
  }
};
