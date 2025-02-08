import Card from "./Card";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Card> = {
  title: "Common/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagColor: {
      options: ["1", "2", "3", "4", "5", "6", "7"],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    content: "Card Description",
    tagColor: "1",
  },
};

export const Tag: Story = {
  args: {
    content: "Card Description",
    tag: "Tag",
    tagColor: "1",
  },
};
