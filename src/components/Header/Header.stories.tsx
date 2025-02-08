import Header from "./Header";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Header> = {
  title: "Header",
  component: Header,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};
