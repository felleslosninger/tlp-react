import React from 'react';
import { Link, Paragraph } from '@digdir/design-system-react';

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
  <Paragraph
    key={4}
    size='medium'
  >
    Body
  </Paragraph>,
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
