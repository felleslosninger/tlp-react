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
      <Link
        text='Arkitekturprinsipper'
        url='#'
      ></Link>,
      <Link
        text='Deling av data'
        url='#'
      ></Link>,
      <Link
        text='Informasjonsforvaltning'
        url='#'
      ></Link>,
      <Link
        text='Design'
        url='#'
      ></Link>,
      <Link
        text='Interne applikasjoner'
        url='#'
      ></Link>,
    ],
  },
  parameters: {
    layout: 'centered',
  },
};

export const WithoutTitle = {
  args: {
    children: [
      <Link
        text='Arkitekturprinsipper'
        url='#'
      ></Link>,
      <Link
        text='Deling av data'
        url='#'
      ></Link>,
      <Link
        text='Informasjonsforvaltning'
        url='#'
      ></Link>,
      <Link
        text='Design'
        url='#'
      ></Link>,
      <Link
        text='Interne applikasjoner'
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
        text='Arkitekturprinsipper'
        url='#'
      ></Link>,
      <Link
        text='Deling av data'
        url='#'
      ></Link>,
      <Link
        text='Informasjonsforvaltning'
        url='#'
      ></Link>,
      <Link
        text='Design'
        url='#'
      ></Link>,
      <Link
        text='Interne applikasjoner'
        url='#'
      ></Link>,
    ],
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
