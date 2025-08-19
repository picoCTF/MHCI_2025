import type { Meta, StoryObj } from '@storybook/react-vite';
import VideoResourceCard from '../../components/General/VideoResourceCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'Learning Paths/VideoResourceCard',
  component: VideoResourceCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof VideoResourceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "This is the video description.",
    youtubeID: ""
  }
};
