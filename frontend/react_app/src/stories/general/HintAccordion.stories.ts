import type { Meta, StoryObj } from '@storybook/react-vite';
import HintAccordion from '../../components/General/HintAccordion';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/HintAccprdion',
  component: HintAccordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof HintAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: [
    "This is the first hint.",
    "This is the second hint.",
    "This is the third hint.",
    "This is the fourth hint."
    ]
  }
};
