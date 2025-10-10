import type { Meta, StoryObj } from '@storybook/react-vite';
import Compete from '../../pages/Compete';

const meta = {
  title: 'Pages/Compete',
  component: Compete,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Compete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};