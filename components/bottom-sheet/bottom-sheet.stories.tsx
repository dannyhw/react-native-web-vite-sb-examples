import type { Meta, StoryObj } from "@storybook/react-native";
import { BottomSheetExample } from "./bottom-sheet";
import { Platform, View } from "react-native";

const meta = {
  component: BottomSheetExample,
  decorators: [
    (Story) => (
      <View
        style={
          Platform.OS === "web" ? { width: 300, height: 300 } : { flex: 1 }
        }
      >
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof BottomSheetExample>;

export default meta;

type Story = StoryObj<typeof BottomSheetExample>;

export const Basic: Story = {};
