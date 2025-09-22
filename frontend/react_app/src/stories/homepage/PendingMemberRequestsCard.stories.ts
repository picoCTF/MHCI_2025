import type { Meta, StoryObj } from '@storybook/react-vite';
import PendingMemberRequestsCard from '../../components/homepage/PendingMemberRequestsCard';
import { mockHomepage } from '../../mock-data/HomeData';

// import { fn } from 'storybook/test';

const meta = {
  title: 'Homepage/PendingMemberRequestsCard',
  component: PendingMemberRequestsCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof PendingMemberRequestsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pendingRequests: mockHomepage.classroomsList.list[0].pendingMemberUsernames
  }
};
