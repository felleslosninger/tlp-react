import type { ReactElement } from 'react';
import React from 'react';

import { StorybookLayout } from '../../utils/components/StorybookLayout/StorybookLayoyt';

import { LinkPanel } from './LinkPanel';

const CHILDREN = 'Test Link';

export default {
  title: 'Components/LinkPanel',
  component: LinkPanel,
  decorators: [
    (Component: () => ReactElement) => (
      <StorybookLayout>{Component()}</StorybookLayout>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Dark',
          value: '#1E2B3C',
        },
        {
          name: 'Light',
          value: '#00000',
        },
      ],
    },
  },
};

export const Normal = {
  args: {
    children: CHILDREN,
  },
  parameters: {
    layout: 'centered',
  },
};
