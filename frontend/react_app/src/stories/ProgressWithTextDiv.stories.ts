import type { Meta, StoryObj } from '@storybook/react-vite';
import ProgressWithTextDiv from '../components/General/ProgressWithTextDiv';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/ProgressWithTextDiv',
  component: ProgressWithTextDiv,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ProgressWithTextDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: "Progress Amount",
    color: "primary",
    endingText: "7/10 challenges",
    value: 70
  }
};
