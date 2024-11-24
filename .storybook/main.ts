import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { mergeConfig } from "vite";
import { flowPlugin, esbuildFlowPlugin } from "@bunchtogether/vite-plugin-flow";

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
          plugins: ["react-native-reanimated/plugin"],
        },
      },
    },
  },

  viteFinal: (config) => {
    return mergeConfig(config, {
      optimizeDeps: {
        esbuildOptions: {
          plugins: [esbuildFlowPlugin()],
        },
      },
      plugins: [flowPlugin()],
    });
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
} satisfies StorybookConfig;
