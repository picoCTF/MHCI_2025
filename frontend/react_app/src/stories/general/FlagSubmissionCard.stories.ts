import type { Meta, StoryObj } from '@storybook/react-vite';
import FlagSubmissionCard from '../../components/general/FlagSubmissionCard';

import { fn } from 'storybook/test';

const meta = {
  title: 'General/FlagSubmissionCard',
  component: FlagSubmissionCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof FlagSubmissionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flag: "TEST_FLAG",
    setCompletion: fn
  }
};
