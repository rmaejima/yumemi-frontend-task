module.exports = {
  stories: [
    {
      directory: '../src/stories',
      titlePrefix: 'Documents',
      files: '**/*.stories.mdx',
    },
    {
      directory: '../src/stories',
      titlePrefix: 'Components',
      files: '**/*.stories.@(js|jsx|ts|tsx)',
    },
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
