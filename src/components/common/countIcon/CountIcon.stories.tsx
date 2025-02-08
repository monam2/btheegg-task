import type { Meta, StoryObj } from "@storybook/react";
import CountIcon from "./CountIcon";

const meta: Meta<typeof CountIcon> = {
  title: "Common/CountIcon",
  component: CountIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CountIcon>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

export const Count: Story = {
  args: {
    count: 1,
  },
};

export const LargeNumber: Story = {
  args: {
    count: 99,
  },
};
