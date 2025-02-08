import type { Meta, StoryObj } from "@storybook/react";
import EmptyCard from "./EmptyCard";

const meta: Meta<typeof EmptyCard> = {
  title: "Common/EmptyCard",
  component: EmptyCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyCard>;

export const Default: Story = {};
