/* eslint-disable react/jsx-key */
import React from 'react';

import { Link, LinkList } from './LinkList';

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
    children: [
      // eslint-disable-next-line react/jsx-key
      <Link
        text='TestLink'
        url='#'
      ></Link>,
    ],
  },
  parameters: {
    layout: 'centered',
  },
};

export const Inverted = {
  args: {
    inverted: true,
    title: 'Inverted list',
    children: [
      <Link
        text='TestLink'
        url='hei'
      ></Link>,
      <Link
        text='TestLink'
        url='hei'
      ></Link>,
      <Link
        text='TestLink'
        url='hei'
      ></Link>,
    ],
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
