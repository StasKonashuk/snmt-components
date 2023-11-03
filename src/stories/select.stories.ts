import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../packages/select/src";

const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultSelect: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    value: "Option 1",
  },
};

export const DisabledSelect: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    disabled: true,
  },
};

export const RoundedSelect: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    name: "Rounded",
    borderRadius: "8px",
  },
};

export const ErrorSelect: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    value: "Select with Error",
    isError: true,
    errorMsg: "Something wrong",
  },
};

export const SelectWithPlaceholder: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    value: "",
    placeholder: "Placeholder value",
  },
};

export const SelectWithLabel: Story = {
  args: {
    options: [
      { value: "Option 1", label: "Option 1" },
      { value: "Option 2", label: "Option 2" },
    ],
    name: "Label name",
    borderRadius: "8px",
  },
};
