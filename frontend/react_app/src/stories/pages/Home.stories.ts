import type { Meta, StoryObj } from '@storybook/react-vite';
import Homepage from '../../pages/Home';
import { mockHomepage } from '../../mock-data/HomeData';


// import { fn } from 'storybook/test';

const meta = {
  title: 'Pages/Home',
  component: Homepage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Homepage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    banners: mockHomepage.banners,
    learningPathsList: mockHomepage.learningPathsList,
    profileSummary: mockHomepage.profileSummary,
    quickLinksList: mockHomepage.quickLinksList
  }
};