import type { Meta, StoryObj } from '@storybook/react-vite';
import Profile from '../../pages/Profile';


// import { fn } from 'storybook/test';

const meta = {
  title: 'Pages/Profile',
  component: Profile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    activity: {
        numSolves: 123,
        streakLength: 7
    },
    skillDistribution: {
        numBinaryExploitationChallenges: 25,
        totalBinaryExploitChallenges: 100,
        numCryptographyChallenges: 63,
        totalCryptographyChallenges: 100,
        numForensicsChallenges: 19,
        totalForensicsChallenges: 100,
        numGeneralSkillsChallenges: 38,
        totalGeneralSkillsChallenges: 100,
        numReverseEngChallenges: 55,
        totalReverseEngChallenges: 100,
        numWebExploitChallenges: 97,
        totalWebExploitChallenges: 100
    },
    challengeCompletion: {
        numEasyChallenges: 7,
        numMediumChallenges: 8,
        numHardChallenges: 5,
        totalNumChallenges: 20
    },
    badges: {
        badges: [
          {
            shape: 1,
            bgColor: 1,
            strokeColor: 1,
            textColor: 1,
            icon: 'search',
            id: 0,
            title: 'Badge 1'
          },
          {
            shape: 2,
            bgColor: 2,
            strokeColor: 2,
            textColor: 2,
            icon: 'search',
            id: 1,
            title: 'Badge 2'
          },
          {
            shape: 1,
            bgColor: 2,
            strokeColor: 2,
            textColor: 2,
            icon: 'search',
            id: 2,
            title: 'Badge 3'
          },
          {
            shape: 2,
            bgColor: 1,
            strokeColor: 1,
            textColor: 1,
            icon: 'search',
            id: 3,
            title: 'Badge 4'
          }
        ],
        selectedBadges: [
          {
            shape: 1,
            bgColor: 1,
            strokeColor: 1,
            textColor: 1,
            icon: 'search',
            id: 0,
            title: 'Badge 1'
          },
          {
            shape: 2,
            bgColor: 2,
            strokeColor: 2,
            textColor: 2,
            icon: 'search',
            id: 1,
            title: 'Badge 2'
          },
          {
            shape: 1,
            bgColor: 2,
            strokeColor: 2,
            textColor: 2,
            icon: 'search',
            id: 2,
            title: 'Badge 3'
          },
          {
            shape: 2,
            bgColor: 1,
            strokeColor: 1,
            textColor: 1,
            icon: 'search',
            id: 3,
            title: 'Badge 4'
          }
        ]
    },
    userInfo: {
        avatar: {},
        country: 'United States',
        monthJoined: 'January',
        username: 'Username123',
        yearJoined: '2025'
    }
  }
};