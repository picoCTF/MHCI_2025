import type { Meta, StoryObj } from '@storybook/react-vite';
import Path from '../../../../pages/practice/learning-paths/Path';

const meta = {
  title: 'Pages/Practice/Learning Paths/Path',
  component: Path,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {}
} satisfies Meta<typeof Path>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {}
};