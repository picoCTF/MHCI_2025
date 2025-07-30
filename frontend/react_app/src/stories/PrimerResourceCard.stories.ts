import type { Meta, StoryObj } from '@storybook/react-vite';
import PrimerResourceCard from '../components/General/PrimerResourceCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/PrimerResourceCard',
  component: PrimerResourceCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof PrimerResourceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
