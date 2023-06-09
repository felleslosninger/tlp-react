import React from 'react';
import { MagnifyingGlassIcon } from '@navikt/aksel-icons';

import { Link } from './Link';

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    inverted: { control: 'boolean' },
  },
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
    children: 'Link',
  },
  parameters: {
    layout: 'centered',
  },
};

export const WithIconBefore = {
  args: {
    iconBefore: <MagnifyingGlassIcon />,
    children: 'Link',
  },
  parameters: {
    layout: 'centered',
  },
};

export const WithIconAfter = {
  args: {
    iconAfter: <MagnifyingGlassIcon />,
    children: 'Link',
  },
  parameters: {
    layout: 'centered',
  },
};

export const Inverted = {
  args: {
    inverted: true,
    children: 'Link',
  },
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Dark',
    },
  },
};
