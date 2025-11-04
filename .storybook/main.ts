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
      modulesToTranspile: [
        // "react-native-worklets",
        // "@gorhom/bottom-sheet",
        // "react-native-reanimated",
      ],
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
} satisfies StorybookConfig;
