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
    date: new Date(2023, 8, 10),
    brand: 'primary',
    time: '13:00',
    location: 'Digital',
    tags: 'Digitalization',
    children: (
      <CourceCard.Title>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>
    ),
  },
};

export const Secondary = {
  args: {
    date: new Date(2023, 8, 10),
    brand: 'secondary',
    time: '13:00',
    location: 'Digital',
    tags: 'Digitalization',
    children: (
      <CourceCard.Title>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>
    ),
  },
};

export const Tertiary = {
  args: {
    date: new Date(2023, 8, 10),
    brand: 'tertiary',
    time: '13:00',
    location: 'Digital',
    tags: 'Digitalization',
    children: (
      <CourceCard.Title>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>
    ),
  },
};
