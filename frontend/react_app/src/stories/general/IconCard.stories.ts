import type { Meta, StoryObj } from '@storybook/react-vite';
import IconCard from '../../components/general/IconCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/IconCard',
  component: IconCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof IconCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    background: "primary",
    icon: "mode_heat",
    size: "sm"
  }
};

export const Large: Story = {
  args: {
    background: "primary",
    icon: "mode_heat",
    size: "lg"
  }
};
