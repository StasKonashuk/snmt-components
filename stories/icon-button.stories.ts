import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "../packages/icon-button/src";

const meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: `<span role="img" aria-label="Rocket">🚀</span>`,
  },
};

export const Secondary: Story = {
  args: {
    children: `<span role="img" aria-label="Rocket">🚀</span>`,
    secondary: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: `<span role="img" aria-label="Rocket">🚀</span>`,
  },
};

export const Red: Story = {
  args: {
    value: "Red Button",
    backgroundColor: "red",
    children: `<span role="img" aria-label="Rocket">🚀</span>`,
  },
};
