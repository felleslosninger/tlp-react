import React from 'react';

import { Link } from '../Link/Link';

import { LinkList } from './LinkList';

const CHILDREN = [
  <Link
    key={1}
    href='https://www.digdir.no/'
  >
    Arkitekturprinsipper
  </Link>,
  <Link
    key={2}
    href='https://www.digdir.no/'
  >
    Deling av data
  </Link>,
  <Link
    key={3}
    href='https://www.digdir.no/'
  >
    Informasjonsforvaltning
  </Link>,
  <Link
    key={4}
    href='https://www.digdir.no/'
  >
    Design
  </Link>,
  <Link
    key={5}
    href='https://www.digdir.no/'
  >
    Interne applikasjoner
  </Link>,
];

export default {
  title: 'Components/LinkList',
  component: LinkList,
  tags: ['autodocs'],
  argTypes: {
    inverted: { control: 'boolean' },
    title: { control: 'text' },
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
    inverted: false,
    title: 'Tittel',
    linkTitle: true,
    titleUrl: '#',
    children: CHILDREN,
  },
  parameters: {
    layout: 'centered',
  },
};

export const WithoutTitle = {
  args: {
    children: CHILDREN,
  },
  parameters: {
    layout: 'centered',
  },
};

export const Inverted = {
  args: {
    inverted: true,
    title: 'Inverted list',
    children: CHILDREN,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
