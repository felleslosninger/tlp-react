/* eslint-disable react/jsx-key */
import React from 'react';

import myLogo from '../../../../../assets/img/digdir-logo.svg';

import { Header } from './Header';

const children = [
  <Header.Left>
    <img
      src={myLogo}
      alt='SVG logo'
    />
  </Header.Left>,
  <Header.Middle>
    <span>hei</span>
    <span>hei</span>
  </Header.Middle>,
  <Header.Right>rrr</Header.Right>,
  <Header.Bottom>
    <p>Header bottom</p>
  </Header.Bottom>,
  <Header.Mobile>
    <p>heeiiiiiiiiiiiiiiiiiiiiii</p>
  </Header.Mobile>,
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
