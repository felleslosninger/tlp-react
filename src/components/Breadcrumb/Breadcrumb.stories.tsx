import React from 'react';

import { Link } from '../Link';

import { Breadcrumb } from './Breadcrumb';

const CHILDREN = [
  <Link
    key={1}
    href='Hjem'
  >
    Hjem
  </Link>,
  <Link
    key={2}
    href='Forrige side'
  >
    Forrige side
  </Link>,
  <p key={3}>Nåværende side</p>,
];

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
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
