import type { Meta, StoryObj } from '@storybook/react-vite';
import DifficultyChip from '../../components/general/DifficultyChip';

// import { fn } from 'storybook/test';

const meta = {
  title: 'General/DifficultyChip',
  component: DifficultyChip,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof DifficultyChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Easy: Story = {
  args: {
    difficultyLvl: "Easy"
  }
};

export const Medium: Story = {
  args: {
    difficultyLvl: "Medium"
  }
};

export const Hard: Story = {
  args: {
    difficultyLvl: "Hard"
  }
};
