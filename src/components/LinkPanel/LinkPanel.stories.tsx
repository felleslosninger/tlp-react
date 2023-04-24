import type { ReactElement } from 'react';
import React from 'react';

import { LinkPanel } from './LinkPanel';

const CHILDREN = 'Test Link';

export default {
  title: 'Components/LinkPanel',
  component: LinkPanel,
  decorators: [
    (Component: () => ReactElement) => (
      <div style={{ width: '500px' }}>{Component()}</div>
    ),
  ],
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
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

export const Small = {
  decorators: [
    (Component: () => ReactElement) => (
      <div style={{ width: '300px', margin: '0 auto' }}>{Component()}</div>
    ),
  ],
  args: {
    children: CHILDREN,
  },
  parameters: {
    layout: 'centered',
  },
};
