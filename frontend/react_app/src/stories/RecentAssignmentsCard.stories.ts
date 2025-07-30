import type { Meta, StoryObj } from '@storybook/react-vite';
import RecentAssignmentsCard from '../components/General/RecentAssignmentsCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/RecentAssignmentsCard',
  component: RecentAssignmentsCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof RecentAssignmentsCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [
      {
        name: 'Assignment 1',
        completedChallenges: 0,
        totalChallenges: 10,
        isActive: true,
        time: {
          days: 5,
          hours: 3,
          minutes: 0,
          seconds: 1
        },
        dueDate: {
          day: 1,
          month: 8,
          year: 2025
        }
      }
    ]
  }
};
