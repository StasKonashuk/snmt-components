import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../packages/input/src";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultInput: Story = {
  args: {
    value: "Default Input",
  },
};

export const SecondaryInput: Story = {
  args: {
    value: "Secondary Input",
    secondary: true,
  },
};

export const PrimaryInput: Story = {
  args: {
    value: "Primary Input",
  },
};

export const DisabledInput: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
  },
};

export const RoundedInput: Story = {
  args: {
    value: "Rounded Input",
    borderRadius: "8px",
  },
};

export const ErrorInput: Story = {
  args: {
    value: "Input with Error",
    isError: true,
    errorMsg: "Something wrong",
  },
};

export const InputWithPlaceholder: Story = {
  args: {
    value: "",
    placeholder: "Placeholder value",
  },
};

export const InputWithLabel: Story = {
  args: {
    value: "",
    name: "Label name",
    borderRadius: "8px",
  },
};

export const MultilineInput: Story = {
  args: {
    value: "MultiLine Input",
    multiline: true,
    name: "Surname",
  },
};
