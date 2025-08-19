import type { Meta, StoryObj } from '@storybook/react-vite';
import PageNavbar from '../../components/General/PageNavbar';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/PageNavbar',
  component: PageNavbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof PageNavbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
