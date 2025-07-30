import type { Meta, StoryObj } from '@storybook/react-vite';
import PendingMemberRequestCard from '../components/General/PendingMemberRequestCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/PendingMemberRequestCard',
  component: PendingMemberRequestCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof PendingMemberRequestCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    username: "Username"
  }
};
