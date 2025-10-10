import type { Meta, StoryObj } from '@storybook/react-vite';
import ClassroomCard from '../../components/general/ClassroomCard';

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
      id: 1
    },
    {
      name: 'Assignment 2',
      completedChallenges: 3,
      totalChallenges: 5,
      isActive: false,
      id: 2
    }
  ],
  pendingMemberUsernames: [
    {
      username: "Username 1",
      id: 1
    },
    {
      username: "Username 2 ",
      id: 2
    }
  ]
  }
};
