import AddButton from "./AddButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AddButton> = {
  title: "Common/AddButton",
  component: AddButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AddButton>;

export const Default: Story = {};
