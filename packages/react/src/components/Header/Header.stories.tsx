import React from 'react';
import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { Link } from '@digdir/design-system-react';

import myLogo from '../../../../../assets/img/digdir-logo.svg';

import { Header } from './Header';
import classes from './HeaderStories.module.css';

const leftSection = (
  <Header.Left key={0}>
    <Link>
      <img
        src={myLogo}
        alt='SVG logo'
      />
    </Link>
  </Header.Left>
);
const middleSection = (
  <Header.Middle key={1}>
    <nav>
      <ul className={classes.middleUl}>
        {[...Array(3)].map((index) => (
          <li
            className={classes.middleLi}
            key={index}
          >
            <Link href='.'>middle</Link>
          </li>
        ))}
      </ul>
    </nav>
  </Header.Middle>
);

const rightSection = <Header.Right key={2}>Right</Header.Right>;

const bottomSection = (
  <Header.Bottom key={3}>
    <nav className={classes.bottomNav}>
      {[...Array(3)].map((index) => (
        <div
          key={index}
          className={classes.bottomDiv}
        >
          <h2>Links</h2>
          <ul className={classes.mobileUl}>
            {[...Array(3)].map((index) => (
              <li
                className={classes.bottomLi}
                key={index}
              >
                <Link href='#'>Link to something</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  </Header.Bottom>
);

const mobileRightSection = (
  <Header.RightMobile>
    <MagnifyingGlassIcon fontSize='1.7rem'></MagnifyingGlassIcon>
  </Header.RightMobile>
);

const mobileSection = (
  <Header.Mobile key={4}>
    <nav className={classes.mobileNav}>
      {[...Array(3)].map((index) => (
        <React.Fragment key={index}>
          <h2 className={classes.mobileH2}>Links</h2>
          <ul className={classes.mobileUl}>
            {[...Array(3)].map((index) => (
              <li
                key={index}
                className={classes.mobileLi}
              >
                <Link>Link to something</Link>
              </li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </nav>
  </Header.Mobile>
);

export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    closeMenu: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    children: [
      leftSection,
      middleSection,
      rightSection,
      bottomSection,
      mobileSection,
    ],
  },
};

export const WithoutBottom = {
  args: {
    children: [leftSection, middleSection, rightSection, mobileSection],
  },
};

export const OnlyLeftWithMobile = {
  args: {
    children: [leftSection, mobileRightSection, mobileSection],
  },
};
