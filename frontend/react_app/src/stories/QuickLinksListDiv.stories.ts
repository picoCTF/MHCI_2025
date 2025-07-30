import type { Meta, StoryObj } from '@storybook/react-vite';
import { mockHomepage } from '../mock-data/HomeData';
import QuickLinksListDiv from '../components/Homepage/QuickLinksListCard';

// import { fn } from 'storybook/test';

const meta = {
  title: 'Homepage/QuickLinksListDiv',
  component: QuickLinksListDiv,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof QuickLinksListDiv>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    list: mockHomepage.quickLinksList.list
  }
};
