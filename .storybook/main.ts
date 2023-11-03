import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (storybookWebpackConfig) => {
    if (storybookWebpackConfig.resolve?.modules) {
      storybookWebpackConfig.resolve.modules.unshift(
        path.resolve(__dirname, "../node_modules")
      );
    }

    return storybookWebpackConfig;
  },
};
export default config;
