import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../../../../atomic/atoms/Button/Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
