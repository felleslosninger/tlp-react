/* eslint-disable react/jsx-key */
import React from 'react';

import { Header } from './Header';

const children = [
  <Header.Left>dd</Header.Left>,
  <Header.Right>rrr</Header.Right>,
];

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    backgroundColor: 'red',
    children: children,
  },
};
