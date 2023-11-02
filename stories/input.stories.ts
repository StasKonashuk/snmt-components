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
    onChange: () => {
      return "Value";
    },
  },
};

export const SecondaryInput: Story = {
  args: {
    value: "Secondary Input",
    secondary: true,
    onChange: () => {
      return "Value";
    },
  },
};

export const PrimaryInput: Story = {
  args: {
    value: "Primary Input",
    onChange: () => {
      return "Value";
    },
  },
};

export const DisabledInput: Story = {
  args: {
    value: "Disabled Input",
    disabled: true,
    onChange: () => {
      return "Value";
    },
  },
};

export const RoundedInput: Story = {
  args: {
    value: "Rounded Input",
    borderRadius: "8px",
    onChange: () => {
      return "Value";
    },
  },
};

export const ErrorInput: Story = {
  args: {
    value: "Input with Error",
    isError: true,
    errorMsg: "Something wrong",
    onChange: () => {
      return "Value";
    },
  },
};

export const InputWithPlaceholder: Story = {
  args: {
    value: "",
    placeholder: "Placeholder value",
    onChange: () => {
      return "Value";
    },
  },
};

export const InputWithLabel: Story = {
  args: {
    value: "",
    name: "Label name",
    borderRadius: "8px",
    onChange: () => {
      return "Value";
    },
  },
};

export const MultilineInput: Story = {
  args: {
    value: "MultiLine Input",
    multiline: true,
    name: "Surname",
    onChange: () => {
      return "Value";
    },
  },
};
