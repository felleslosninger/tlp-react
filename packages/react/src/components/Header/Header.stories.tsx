import React from 'react';

import classes from './HeaderStories.module.css';
import myLogo from '../../../../../assets/img/digdir-logo.svg';
import { Link } from '../Link/Link';

import { Header } from './Header';
import { Container } from '../Container';

const children = [
  <Header.Left key={0}>
    <a href='.'>
      <img
        src={myLogo}
        alt='SVG logo'
      />
    </a>
  </Header.Left>,
  <Header.Middle key={1}>
    <nav>
      <ul className={classes.middleUl}>
        <li className={classes.middleLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.middleLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.middleLi}>
          <Link href='#'>Link to something</Link>
        </li>
      </ul>
    </nav>
    <p className={classes.middleLi}>Middle</p>
    <p>Middle</p>
  </Header.Middle>,
  <Header.Right key={2}>Right</Header.Right>,
  <Header.Bottom key={3}>
    <p>Header bottom</p>
  </Header.Bottom>,
  <Header.Mobile key={4}>
    <nav className={classes.mobileNav}>
      <Container>
        <Link href='#'>Link to something</Link>
        <Link href='#'>Link to something</Link>
        <Link href='#'>Link to something</Link>
      </Container>
      <h2>Languange</h2>
      <ul className={classes.mobileUl}>
        <li className={classes.mobileLi}>Norsk</li>
        <li className={classes.mobileLi}>Nynorsk</li>
        <li className={classes.mobileLi}>English</li>
      </ul>
      <h2>Other</h2>
      <ul className={classes.mobileUl}>
        <li className={classes.mobileLi}>Something first</li>
        <li className={classes.mobileLi}>Something else</li>
        <li className={classes.mobileLi}>Something last</li>
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
