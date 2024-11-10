import type { StorybookConfig } from "@storybook/react-native-web-vite";

export default {
  stories: [
    "../components/**/*.stories.mdx",
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
            // "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
          ],
        },
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
} satisfies StorybookConfig;
