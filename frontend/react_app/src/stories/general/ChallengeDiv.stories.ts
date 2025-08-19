import type { Meta, StoryObj } from '@storybook/react-vite';
import ChallengeDiv from '../../components/General/ChallengeDiv';

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
    category: "Binary_Exploit",
    description: "This is the challenge description.",
    difficulty: {
      Enum: 1
    },
    flag: "TEST_FLAG",
    hints: {
      list: ["Here is hint 1.", "Here is hint 2.", "Here is hint 3.", "Here is hint 4."]
    },
    name: "Challenge Name",
    numSolves: 1468,
    tags: ["Binary Exploit", "Webshell", "abc12345", "abc12345", "abc12345"]
  },
};
