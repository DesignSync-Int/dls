import type { Meta, StoryObj } from '@storybook/react-vite';
import { Link } from '../../../../atomic/atoms/Link/Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    href: {
      control: 'text',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    href: '#',
    children: 'Primary Link',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    href: '#',
    children: 'Secondary Link',
  },
};

export const ExternalLink: Story = {
  args: {
    variant: 'primary',
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'External Link',
  },
};

export const LongText: Story = {
  args: {
    variant: 'primary',
    href: '#',
    children:
      'This is a longer link text that demonstrates how the component handles multiple words',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}
    >
      <Link variant="primary" href="#">
        Primary Link
      </Link>
      <Link variant="secondary" href="#">
        Secondary Link
      </Link>
      <Link variant="primary" href="https://example.com" target="_blank" rel="noopener noreferrer">
        External Link with Primary Style
      </Link>
      <Link
        variant="secondary"
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        External Link with Secondary Style
      </Link>
      <div style={{ maxWidth: '300px' }}>
        <Link variant="primary" href="#">
          This is a longer link that demonstrates text wrapping behavior
        </Link>
      </div>
    </div>
  ),
};

export const InParagraph: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', lineHeight: '1.6' }}>
      <p style={{ margin: 0, color: '#374151' }}>
        This is a paragraph of text that contains a{' '}
        <Link variant="primary" href="#">
          primary link
        </Link>{' '}
        and also a{' '}
        <Link variant="secondary" href="#">
          secondary link
        </Link>{' '}
        to demonstrate how links appear within body text.
      </p>
    </div>
  ),
};
