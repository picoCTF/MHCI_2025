import type { Meta, StoryObj } from '@storybook/react-vite';
import ClassroomCard from '../../components/General/ClassroomCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/ClassroomCard',
  component: ClassroomCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ClassroomCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 1,
    name: "Classroom Name",
    numMembers: 24,
    recentAssignments: [{
      name: 'Assignment 1',
      completedChallenges: 0,
      totalChallenges: 10,
      isActive: false,
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      dueDate: {
        day: 1,
        month: 1,
        year: 0
      }
    },
    {
      name: 'Assignment 2',
      completedChallenges: 3,
      totalChallenges: 5,
      isActive: false,
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      },
      dueDate: {
        day: 1,
        month: 1,
        year: 0
      }
    }
  ],
  pendingMemberUsernames: [
    {
      username: "Username 1"
    },
    {
      username: "Username 2 "
    }
  ]
  }
};
