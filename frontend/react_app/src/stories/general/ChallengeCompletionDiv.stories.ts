import type { Meta, StoryObj } from '@storybook/react-vite';
import ChallengeCompletionDiv from '../../components/general/ChallengeCompletionDiv';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/ChallengeCompletionDiv',
  component: ChallengeCompletionDiv,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ChallengeCompletionDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numEasyChallenges: 4,
    numMediumChallenges: 10,
    numHardChallenges: 6,
    totalNumChallenges: 20,
    showAdditionalInfo: true
  },
};
