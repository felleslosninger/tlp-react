import React from 'react';

import { Dropdown } from './Dropdown';

const CHILDREN = [
  <Dropdown.Item key={1}>Altinn</Dropdown.Item>,
  <Dropdown.Item key={2}>Ansattporten</Dropdown.Item>,
  <Dropdown.Item key={3}>Digdir</Dropdown.Item>,
  <Dropdown.Item key={4}>Min profil</Dropdown.Item>,
  <Dropdown.Item key={5}>Logg ut</Dropdown.Item>,
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
