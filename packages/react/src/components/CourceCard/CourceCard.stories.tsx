import React from 'react';

import { CourceCard } from './CourceCard';

export default {
  title: 'Components/CourceCard',
  component: CourceCard,
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

export const Primary = {
  args: {
    date: new Date(2018, 11, 24, 10, 3),
    brand: 'primary',
    title: 'Unik sommerjobb ',
    location: 'Leikanger',
    tag: 'Digitalization',
  },
};

export const Secondary = {
  args: {
    date: new Date(2018, 11, 24, 10, 3),
    brand: 'secondary',
    title: 'U',
    location: 'L',
    tag: 'D',
  },
};

export const Tertiary = {
  args: {
    date: new Date(2018, 11, 24, 10, 3),
    brand: 'tertiary',
    breakpoint: 10000,
    title: 'Unik sommerjobb for studenter innen digitalisering',
    location: 'Leikanger',
    tag: 'Digitalization',
  },
};
