import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '../../../../atomic/atoms/Icon/Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: ['search', 'category', 'code', 'star', 'close', 'chevron-down', 'chevron-up'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Search: Story = {
  args: {
    name: 'search',
    size: 'medium',
  },
};

export const Category: Story = {
  args: {
    name: 'category',
    size: 'medium',
  },
};

export const Code: Story = {
  args: {
    name: 'code',
    size: 'medium',
  },
};

export const Star: Story = {
  args: {
    name: 'star',
    size: 'medium',
  },
};

export const Close: Story = {
  args: {
    name: 'close',
    size: 'medium',
  },
};

export const ChevronDown: Story = {
  args: {
    name: 'chevron-down',
    size: 'medium',
  },
};

export const ChevronUp: Story = {
  args: {
    name: 'chevron-up',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    name: 'search',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    name: 'search',
    size: 'small',
  },
};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="search" size="medium" />
        <span style={{ fontSize: '12px' }}>search</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="category" size="medium" />
        <span style={{ fontSize: '12px' }}>category</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="code" size="medium" />
        <span style={{ fontSize: '12px' }}>code</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="star" size="medium" />
        <span style={{ fontSize: '12px' }}>star</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="close" size="medium" />
        <span style={{ fontSize: '12px' }}>close</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="chevron-down" size="medium" />
        <span style={{ fontSize: '12px' }}>chevron-down</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <Icon name="chevron-up" size="medium" />
        <span style={{ fontSize: '12px' }}>chevron-up</span>
      </div>
    </div>
  ),
};
