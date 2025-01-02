import { Meta, StoryObj } from "@storybook/react";
import AnimatedExample from "@components/animated-example/Animated";

const meta = {
  title: "Animated",
  component: AnimatedExample,
} satisfies Meta<typeof AnimatedExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
