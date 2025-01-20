import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { InlineConfig, mergeConfig } from "vite";
import babel from "vite-plugin-babel";
import commonjs from "vite-plugin-commonjs";

export default {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      pluginReactOptions: {
        jsxRuntime: "automatic",
        jsxImportSource: "nativewind",
        babel: {
          plugins: [
            "react-native-web",
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
          ],
        },
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
} satisfies StorybookConfig;
