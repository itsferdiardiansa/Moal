import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'
import { Variants } from './ButtonStyle'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    variant: {
      control: 'select',
      options: Variants,
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'success',
    label: 'Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'warning',
    label: 'Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'danger',
    label: 'Button',
  },
}
