import type { Meta, StoryObj } from '@storybook/react-vite';
import Games from '../../../pages/practice/Games';

const meta = {
  title: 'Pages/Practice/Games',
  component: Games,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Games>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};