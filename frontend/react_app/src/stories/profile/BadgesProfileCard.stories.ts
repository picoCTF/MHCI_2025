import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';

import BadgesProfileCard from '../../components/profile/BadgesProfileCard';

const meta = {
  title: 'Profile/BadgesProfileCard',
  component: BadgesProfileCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof BadgesProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badges: [{
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
    },
    {
      shape: 2,
      bgColor: 3,
      strokeColor: 3,
      textColor: 3,
      icon: "flag",
      id: 4,
      title: "Badge 5"
    }],
    selectedBadges: [{
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
    }]
  },
};
