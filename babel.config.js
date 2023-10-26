module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "100",
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        runtime: "automatic",
      },
    ],
    "@babel/preset-typescript",
  ],
  babelrcRoots: ["./"],
  ignore: ["./node_modules/*"],
};
