import type { Preview } from '@storybook/react-vite';
import "../src/index.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";
import { Story } from 'storybook/internal/csf';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },

  decorators: [
    // withRouter,
    withThemeByDataAttribute({
      themes: {
          // nameOfTheme: 'dataAttributeForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }
  ),
],

  tags: ['autodocs']
};

// export default {
//   parameters: {
//     reactRouter: reactRouterParameters({ ... })
// } preview;

export default preview;