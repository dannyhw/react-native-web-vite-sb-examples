import type { Preview } from "@storybook/react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "../global.css";

const preview: Preview = {
  parameters: {
    // actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <GestureHandlerRootView>
        <View>
          <Story />
        </View>
      </GestureHandlerRootView>
    ),
  ],
};

export default preview;
