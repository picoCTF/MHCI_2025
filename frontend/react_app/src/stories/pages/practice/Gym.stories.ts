import type { Meta, StoryObj } from '@storybook/react-vite';
import Gym from '../../../pages/practice/Gym';

const meta = {
  title: 'Pages/Practice/Gym',
  component: Gym,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Gym>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};