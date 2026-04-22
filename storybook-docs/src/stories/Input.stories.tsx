import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['default', 'readonly', 'disabled', 'error', 'warning', 'focus'],
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'left-icon'],
    },
    icon: { control: false },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    state: 'default',
    variant: 'default',
  },
};

export const Focus: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    state: 'focus',
    variant: 'default',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    state: 'disabled',
    variant: 'default',
  },
};

export const ReadOnly: Story = {
  args: {
    label: 'Label',
    value: 'Read only text',
    state: 'readonly',
    variant: 'default',
  },
};

export const Error: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    state: 'error',
    variant: 'default',
    message: 'This field is required',
  },
};

export const Warning: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
    state: 'warning',
    variant: 'default',
    message: 'This value may be incorrect',
  },
};

export const LeftIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    state: 'default',
    variant: 'left-icon',
  },
};

export const LeftIconFocus: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search...',
    state: 'focus',
    variant: 'left-icon',
  },
};