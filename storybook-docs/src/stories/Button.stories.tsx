import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Star } from 'lucide-react';  // Add this import
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    icon: { control: false },  // Add this to hide icon from controls
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: 'Design System',  // Changed from 'Button'
    size: 'medium',        // Changed from default size
    backgroundColor: '#1A3F37',  // Your primary color from Figma
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Design System',  // Changed from 'Button'
  },
};

export const Disabled: Story = {
  args: {
    ...Primary.args,
    disabled: true,
  },
};

export const TextIcon: Story = {
  args: {
    ...Primary.args,
    variant: 'text-icon',
    icon: <Star size={16} />,  // Use JSX icon for better control
  },
};

export const TextIconRight: Story = {
  args: {
    ...Primary.args,
    variant: 'text-icon-right',
    icon: <Star size={16} />,  // Use JSX icon for better control
    label: 'Next',
  },
};

