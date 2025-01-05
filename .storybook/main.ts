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
      plugins: [
        babel({
          include: [/node_modules\/(react-native|@react-native)/],
          babelConfig: {
            babelrc: false,
            configFile: false,
            presets: [
              [
                "@babel/preset-react",
                {
                  development: process.env.NODE_ENV,
                  jsxRuntime: "automatic",
                  jsxImportSource: "nativewind",
                },
              ],
            ],
            plugins: [
              [
                require("@babel/plugin-transform-modules-commonjs"),
                {
                  strict: false,
                  strictMode: false, // prevent "use strict" injections
                  allowTopLevelThis: true, // dont rewrite global `this` -> `undefined`
                },
              ],
            ],
          },
        }),
      ],
    } satisfies InlineConfig);
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen",
  },
} satisfies StorybookConfig;
