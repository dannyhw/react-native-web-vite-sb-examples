import { Meta, StoryObj } from "@storybook/react";
import { ExampleCaptureOnMountManually } from "./snapshot";

const meta = {
  title: "Snapshot",
  component: ExampleCaptureOnMountManually,
} satisfies Meta<typeof ExampleCaptureOnMountManually>;

export default meta;

type Story = StoryObj<typeof ExampleCaptureOnMountManually>;

export const Primary: Story = {};
