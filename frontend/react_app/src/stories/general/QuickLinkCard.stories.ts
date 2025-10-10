import type { Meta, StoryObj } from '@storybook/react-vite';
import QuickLinkCard from '../../components/General/QuickLinkCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/QuickLinkCard',
  component: QuickLinkCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof QuickLinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "The description of the card",
    icon: "mode_heat",
    id: 123,
    link: "#",
    name: "Name"
  }
};
