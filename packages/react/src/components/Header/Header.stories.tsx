import React from 'react';

import myLogo from '../../../../../assets/img/digdir-logo.svg';

import { Link } from '../Link/Link';
import { Header } from './Header';

const children = [
  <Header.Left key={0}>
    <img
      src={myLogo}
      alt='SVG logo'
    />
  </Header.Left>,
  <Header.Middle key={1}>
    <span>Middle</span>
    <span>Middle</span>
  </Header.Middle>,
  <Header.Right key={2}>Right</Header.Right>,
  <Header.Bottom key={3}>
    <p>Header bottom</p>
  </Header.Bottom>,
  <Header.Mobile key={4}>
    <nav style={{ padding: '10px', fontSize: '16px' }}>
      <Link href='#'>Link to something</Link>
      <h2>Languange</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>Norsk</li>
        <li>Nynorsk</li>
        <li>English</li>
      </ul>
      <h2>Other</h2>
      <ul style={{ listStyle: 'none' }}>
        <li>Something first</li>
        <li>Something else</li>
        <li>Something last</li>
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
