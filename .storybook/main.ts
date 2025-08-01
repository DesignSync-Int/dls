import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/tokens/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../src/stories/atomic/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: ['@chromatic-com/storybook', '@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
};
export default config;
