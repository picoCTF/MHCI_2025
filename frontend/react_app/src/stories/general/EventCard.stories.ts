import type { Meta, StoryObj } from '@storybook/react-vite';
import EventCard from '../../components/general/EventCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/EventCard',
  component: EventCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Experimental: Story = {
  args: {
    variant: "Experimental"
  }
};

export const Competition: Story = {
  args: {
    variant: "Competition"
  }
};