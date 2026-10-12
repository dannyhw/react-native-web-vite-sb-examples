import type { StorybookConfig } from "@storybook/react-native-web-vite";

export default {
  stories: [
    "../components/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  addons: ["@chromatic-com/storybook"],

  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      modulesToTranspile: [],
      pluginReactOptions: {
        jsxRuntime: "automatic",
        jsxImportSource: "nativewind",
        babel: {
          plugins: [
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-worklets/plugin",
          ],
        },
      },
    },
  },

  viteFinal: (config) => {
    // expo-modules-core ships TS source with type-only re-exports inside a
    // `declare namespace` (src/ts-declarations/global.ts). Newer rolldown
    // versions keep those imports, which fails the dev dependency optimizer
    // with MISSING_EXPORT and leaves the preview hanging. Shimming the
    // missing (type-only) exports lets the optimizer finish.
    config.optimizeDeps = {
      ...config.optimizeDeps,
      rolldownOptions: {
        ...config.optimizeDeps?.rolldownOptions,
        shimMissingExports: true,
      },
    };
    return config;
  },
} satisfies StorybookConfig;
