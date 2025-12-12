import type { Meta, StoryObj } from '@storybook/react-vite';

// import { fn } from 'storybook/test';

import LearningPathsContentListCard from '../../components/learning-paths/LearningPathsContentNavCard';

const meta = {
  title: 'Learning Paths/LearningPathsContentListCard',
  component: LearningPathsContentListCard,
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
} satisfies Meta<typeof LearningPathsContentListCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Learning Path Name",
    progress: {
      color: 'default',
      ariaLabel: 'Learning Path Progress',
      value: 0,
      endingText: '0/10'
    },
    list: [{
      item: {},
      itemProgress: {},
      children: [{
        tableItems: [{
          contentType: 'Challenge',
          difficulty: {Enum: 1},
          link: '#',
          name: 'Challenge Name',
          numSolves: 1234,
          status: 'Incomplete'
        }]
      }]
    }]
  },
};
