/* eslint-disable react/jsx-key */
import React from 'react';

import { Link, LinkList } from './LinkList';

const CHILDREN = [
  <Link href='https://www.digdir.no/'>Arkitekturprinsipper</Link>,
  <Link href='https://www.digdir.no/'>Deling av data</Link>,
  <Link href='https://www.digdir.no/'>Informasjonsforvaltning</Link>,
  <Link href='https://www.digdir.no/'>Design</Link>,
  <Link href='https://www.digdir.no/'>Interne applikasjoner</Link>,
];

export default {
  title: 'LinkList',
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
