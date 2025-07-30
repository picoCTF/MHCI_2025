import type { Meta, StoryObj } from '@storybook/react-vite';
import ResourceLinkCard from '../components/General/ResourceLinkCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/ResourceLinkCard',
  component: ResourceLinkCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof ResourceLinkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "",
    link: "#",
    name: "Resource Name"
  }
};
