import type { Meta, StoryObj } from '@storybook/react-vite';
import WalkthroughSummaryCard from '../components/General/WalkthroughSummaryCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/WalkthroughSummaryCard',
  component: WalkthroughSummaryCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof WalkthroughSummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    link: "#",
    summary: "This is the walkthrough summary"
  }
};
