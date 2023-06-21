import React from 'react';

import myLogo from '../../../../../assets/img/digdir-logo.svg';

import { Header } from './Header';
import { Link } from '../Link';

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
    <nav style={{ padding: '10px', fontSize: '16px' }}>
      <Link href='#'>Link to something</Link>
      <h2>Languange</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>Norsk</li>
        <li>Nynorsk</li>
        <li>English</li>
      </ul>
      <h2>Languange</h2>
      <ul>
        <li>Norsk</li>
        <li>Nynorsk</li>
        <li>English</li>
      </ul>
    </nav>
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
