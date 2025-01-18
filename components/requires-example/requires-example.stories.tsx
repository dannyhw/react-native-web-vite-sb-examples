import { Meta, StoryObj } from "@storybook/react";
import { RequiresExample } from "./requires-example";

const meta = {
  component: RequiresExample,
} satisfies Meta<typeof RequiresExample>;

export default meta;

export const Default: StoryObj<typeof RequiresExample> = {};
