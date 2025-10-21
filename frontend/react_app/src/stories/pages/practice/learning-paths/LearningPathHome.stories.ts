import type { Meta, StoryObj } from '@storybook/react-vite';
import LearningPathsHome from '../../../../pages/practice/learning-paths/Home';

const meta = {
  title: 'Pages/Practice/Learning Paths/Home',
  component: LearningPathsHome,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
  },
} satisfies Meta<typeof LearningPathsHome>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        paths: [{
            description: 'This is the description',
            difficulty: {
                difficultyLvl: "Easy"
            },
            hasProgress: false,
            id: 0,
            link: '#',
            name: 'Learning Path 1',
            numCompletedChallenges: 5,
            numSolves: 1346,
            numTotalChallenges: 8,
            variant: 'standard'
        },
        {
            description: 'This is the description',
            difficulty: {
                difficultyLvl: "Medium"
            },
            hasProgress: false,
            id: 1,
            link: '#',
            name: 'Learning Path 2',
            numCompletedChallenges: 8,
            numSolves: 179,
            numTotalChallenges: 15,
            variant: 'standard'
        },
        {
            description: 'This is the description',
            difficulty: {
                difficultyLvl: "Hard"
            },
            hasProgress: false,
            id: 2,
            link: '#',
            name: 'Learning Path 3',
            numCompletedChallenges: 3,
            numSolves: 584,
            numTotalChallenges: 10,
            variant: 'standard'
        }]
    }
};