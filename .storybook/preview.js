import '@altinn/figma-design-tokens/dist/tokens.css';
import '@digdir/design-system-tokens/dist/digdir/tokens.css';
import './style.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
