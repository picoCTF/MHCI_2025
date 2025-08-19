import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';

import SkillDistributionProfileCard from '../../components/Profile/SkillDistributionProfileCard';

const meta = {
  title: 'Profile/SkillDistributionProfileCard',
  component: SkillDistributionProfileCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    // title: "Path Title",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique malesuada dignissim. Etiam elementum cursus sapien vitae mattis. Nam nec ultrices sapien. Integer sit amet lorem vel eros iaculis eleifend in id quam. Nam a nulla massa. Etiam blandit leo justo, sed interdum lorem hendrerit at. Duis id tortor quis mauris gravida placerat. Vestibulum suscipit ut ligula a pulvinar. Mauris nunc risus, eleifend sit amet lacinia eget, blandit et nunc. Donec rhoncus molestie blandit. Nulla accumsan velit in eros elementum elementum.",
    // numChallenges: 3,
    // numSolves: 100
  },
} satisfies Meta<typeof SkillDistributionProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    numBinaryExploitationChallenges: 30,
    numCryptographyChallenges: 12,
    numForensicsChallenges: 7,
    numGeneralSkillsChallenges: 25,
    numReverseEngChallenges: 8,
    numWebExploitChallenges: 15,
    totalBinaryExploitChallenges: 100,
    totalCryptographyChallenges: 100,
    totalForensicsChallenges: 80,
    totalGeneralSkillsChallenges: 136,
    totalReverseEngChallenges: 58,
    totalWebExploitChallenges: 243
  },
};
