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
    children: [
      <CourceCard.Title key='title'>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>,
      <CourceCard.Location key='location'>Leikanger</CourceCard.Location>,
      <CourceCard.Tag key='tag'>Digitalization</CourceCard.Tag>,
    ],
  },
};

export const Secondary = {
  args: {
    date: new Date(2018, 11, 24, 10, 3),
    brand: 'secondary',
    children: [
      <CourceCard.Title key='title'>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>,
      <CourceCard.Location key='location'>Leikanger</CourceCard.Location>,
      <CourceCard.Tag key='tag'>Digitalization</CourceCard.Tag>,
    ],
  },
};

export const Tertiary = {
  args: {
    date: new Date(2018, 11, 24, 10, 3),
    brand: 'tertiary',
    breakpoint: 10000,
    children: [
      <CourceCard.Title key='title'>
        Unik sommerjobb for studenter innen digitalisering
      </CourceCard.Title>,
      <CourceCard.Location key='location'>Leikanger</CourceCard.Location>,
      <CourceCard.Tag key='tag'>Digitalization</CourceCard.Tag>,
    ],
  },
};
