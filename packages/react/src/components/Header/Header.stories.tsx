import React from 'react';

import myLogo from '../../../../../assets/img/digdir-logo.svg';
import { Link } from '../Link/Link';

import { Header } from './Header';
import classes from './HeaderStories.module.css';

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
      <h2 className={classes.mobileH2}>Links</h2>
      <ul className={classes.mobileUl}>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
      </ul>

      <h2 className={classes.mobileH2}>Languange</h2>
      <ul className={classes.mobileUl}>
        <li className={classes.mobileLi}>
          <Link href='#'>Norsk</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Engelsk</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Samisk</Link>
        </li>
      </ul>
      <h2 className={classes.mobileH2}>Other</h2>
      <ul className={classes.mobileUl}>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
        <li className={classes.mobileLi}>
          <Link href='#'>Link to something</Link>
        </li>
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
