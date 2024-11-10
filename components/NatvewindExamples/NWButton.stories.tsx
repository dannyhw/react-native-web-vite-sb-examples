import { Meta, StoryObj } from "@storybook/react";
import { NWButton } from "./NWButton";

const meta = {
  component: NWButton,
} satisfies Meta<typeof NWButton>;

export default meta;

type Story = StoryObj<typeof NWButton>;

export const Primary: Story = {
  args: {
    text: "Click me",
    onPress: () => {},
  },
};
