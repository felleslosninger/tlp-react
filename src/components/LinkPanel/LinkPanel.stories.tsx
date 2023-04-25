import type { ReactElement } from 'react';
import React from 'react';

import classes from '../../utils/storybookLayout.module.css';

import { LinkPanel } from './LinkPanel';

const CHILDREN = 'Test Link';

export default {
  title: 'Components/LinkPanel',
  component: LinkPanel,
  decorators: [
    (Component: () => ReactElement) => (
      <div style={{ margin: '100px' }}>
        <div className={classes.responsiveContainer}>{Component()}</div>
      </div>
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
