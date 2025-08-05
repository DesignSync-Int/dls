import type { Meta, StoryObj } from '@storybook/react-vite';
import { Alert } from '../../../../atomic/atoms/Alert/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Atoms/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: 'This is an informational alert message.',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Operation completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Please review this warning carefully.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'An error occurred. Please try again.',
  },
};

export const LongMessage: Story = {
  args: {
    variant: 'warning',
    children:
      'This is a longer alert message that demonstrates how the component handles multiple lines of text. It should wrap appropriately and maintain proper spacing and alignment.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Alert variant="info">Info: This is an informational message.</Alert>
      <Alert variant="success">Success: Operation completed successfully!</Alert>
      <Alert variant="warning">Warning: Please review this carefully.</Alert>
      <Alert variant="error">Error: Something went wrong.</Alert>
    </div>
  ),
};
