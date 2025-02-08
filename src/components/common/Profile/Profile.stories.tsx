import type { Meta, StoryObj } from "@storybook/react";
import Profile from "./Profile";
const meta: Meta<typeof Profile> = {
  title: "Common/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Profile>;

export const Default: Story = {};
