import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../packages/button/src";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "Button",
    type: "button",
  },
};

export const Secondary: Story = {
  args: {
    value: "Secondary",
    type: "button",
    secondary: true,
  },
};

export const Primary: Story = {
  args: {
    value: "Primary",
  },
};

export const Disabled: Story = {
  args: {
    value: "Disabled",
    disabled: true,
  },
};

export const Roundeded: Story = {
  args: {
    value: "Rounded",
    borderRadius: "8px",
  },
};

export const Red: Story = {
  args: {
    value: "Red Button",
    backgroundColor: "red",
  },
};

export const GreenWithBlackText: Story = {
  args: {
    value: "Green Button with black text",
    backgroundColor: "green",
    color: "black",
  },
};
