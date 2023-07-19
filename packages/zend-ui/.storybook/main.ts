/** @type { import('@storybook/react-vite').StorybookConfig } */
import tsConfigPaths from 'vite-tsconfig-paths'
import { mergeConfig } from 'vite'

const config = {
  stories: ['../stories/**/*.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsConfigPaths()]
    })
  }
}
export default config
