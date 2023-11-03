const path = require("path");
require("dotenv").config();
const OptimizeCssAssetWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin(),
    ];
  }

  return config;
};

const plugins = () => {
  const base = [
    new CleanWebpackPlugin(),
    new FileManagerPlugin({
      events: {
        onEnd: {
          move: [
            {
              source: path.resolve(
                __dirname,
                "dist",
                "packages",
                "input",
                "src",
                "input"
              ),
              destination: path.resolve(__dirname, "dist", "input"),
            },
            {
              source: path.resolve(
                __dirname,
                "dist",
                "packages",
                "input",
                "src",
                "index.d.ts"
              ),
              destination: path.resolve(__dirname, "dist", "index.d.ts"),
            },
          ],
          delete: [path.resolve(__dirname, "dist", "packages")],
        },
      },
    }),
  ];

  return base;
};

module.exports = {
  mode: isDev ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  optimization: optimization(),
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
    ],
  },
};
