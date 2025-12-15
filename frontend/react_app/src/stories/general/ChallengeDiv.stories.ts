import type { Meta, StoryObj } from '@storybook/react-vite';
import ChallengeDiv from '../../components/general/ChallengeCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/ChallengeDiv',
  component: ChallengeDiv,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ChallengeDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    author: "Luke",
    category: {
      id: 0,
      name: 'Binary_Exploit'
    },
    description: "This is the challenge description.",
    difficulty: {
      difficultyLvl: "Easy"
    },
    flag: "TEST_FLAG",
    hints: ["Here is hint 1.", "Here is hint 2.", "Here is hint 3.", "Here is hint 4."],
    name: "Challenge Name",
    numSolves: 1468,
    tags: [{
      name: "Binary Exploit",
      id: 0
    }, {
      name: "Webshell",
      id: 1
    }, {
      name: "abc12345",
      id: 2
    }, {
      name: "abc12345",
      id: 3
    }, {
      name: "abc12345",
      id: 4
    }]
  },
};
