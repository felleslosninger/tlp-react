import React from 'react';

import { Dropdown } from './Dropdown';

const CHILDREN = [
  <Dropdown.Item key={1}>Option 1</Dropdown.Item>,
  <Dropdown.Item key={2}>Option 2</Dropdown.Item>,
  <Dropdown.Item key={3}>Option 3</Dropdown.Item>,
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
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
          value: '#FFFFFF',
        },
      ],
    },
  },
};
export const Normal = {
  args: {
    children: CHILDREN,
  },
};
