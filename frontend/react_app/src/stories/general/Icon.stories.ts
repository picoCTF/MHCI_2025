import type { Meta, StoryObj } from '@storybook/react-vite';
import Icon from '../../components/General/Icon';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/Icon',
  component: Icon,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "article",
    size: "lg",
    weight: "normal",
    color: "primary",
    colorValue: "500"
  }
};
