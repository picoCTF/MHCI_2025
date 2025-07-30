import type { Meta, StoryObj } from '@storybook/react-vite';
import { mockHomepage } from '../mock-data/HomeData';
import ProfileSummaryDiv from '../components/Homepage/ProfileSummaryDiv';

// import { fn } from 'storybook/test';

const meta = {
  title: 'Homepage/ProfileSummaryDiv',
  component: ProfileSummaryDiv,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ProfileSummaryDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    challengesCompleted: mockHomepage.profileSummary.challengesCompleted,
    numActiveDays: mockHomepage.profileSummary.numActiveDays,
    numBadges: mockHomepage.profileSummary.numBadges,
    numStreakWeeks: mockHomepage.profileSummary.numStreakWeeks,
    username: mockHomepage.profileSummary.username
  }
};
