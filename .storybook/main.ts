import type { StorybookConfig } from "@storybook/react-native-web-vite";
import { InlineConfig, mergeConfig } from "vite";
import babel from "vite-plugin-babel";

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
            "react-native-web",
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-reanimated/plugin",
          ],

          babelrc: false,
          configFile: false,
        },
      },
    },
  },

  viteFinal: (config) => {
    return mergeConfig(config, {
      define: {
        "process.env.EXPO_OS": JSON.stringify("web"),
      },

      plugins: [
        babel({
          include: [/node_modules\/(react-native|@react-native)/],
          // gesture handler is already transpiled
          exclude: [/node_modules\/(react-native-gesture-handler)/],
          babelConfig: {
            babelrc: false,
            configFile: false,
            presets: [
              // [
              //   "@babel/preset-react",
              //   {
              //     jsxRuntime: "automatic",
              //     jsxImportSource: "nativewind",
              //   },
              // ],

              // for some reason this works better than the preset above
              ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            ],
            plugins: [
              "react-native-web",
              "@babel/plugin-proposal-export-namespace-from",
              "react-native-reanimated/plugin",
            ],
          },
        }),
      ],
    } satisfies InlineConfig);
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
} satisfies StorybookConfig;
