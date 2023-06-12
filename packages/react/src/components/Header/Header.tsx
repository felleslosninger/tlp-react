import React from 'react';
import cn from 'classnames';
import {
  Button,
  ButtonVariant,
  ButtonColor,
} from '@digdir/design-system-react';
import { MenuHamburgerIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';

import { Container } from '../Container/Container';

import classes from './Header.module.css';

interface HeaderProps {
  children:
    | React.ReactElement<HeaderLeftProps>
    | React.ReactElement<HeaderMiddleProps>
    | React.ReactElement<HeaderRightProps>
    | React.ReactElement<HeaderBottomProps>
    | Array<
        React.ReactElement<
          | HeaderLeftProps
          | HeaderMiddleProps
          | HeaderRightProps
          | HeaderBottomProps
        >
      >;
}

interface HeaderLeftProps {
  children: React.ReactNode;
}

interface HeaderMiddleProps {
  children: React.ReactNode;
}
interface HeaderRightProps {
  children: React.ReactNode;
}
interface HeaderBottomProps {
  children: React.ReactNode;
}

const Header = ({ children, ...rest }: HeaderProps) => {
  return (
    <header
      className={cn(classes.header)}
      {...rest}
    >
      <Container className={classes.container}>
        {React.Children.map(children, (child) => (
          <>
            {child.type == Header.Left && (
              <div className={classes.left}>{child}</div>
            )}
            {child.type == Header.Middle && (
              <div className={classes.middle}>{child}</div>
            )}
            {child.type == Header.Right && (
              <div className={classes.right}>{child}</div>
            )}
          </>
        ))}
      </Container>
    </header>
  );
};

const HeaderLeft = ({ children }: HeaderLeftProps) => {
  return <>{children}</>;
};

const HeaderMiddle = ({ children }: HeaderMiddleProps) => {
  return <>{children}</>;
};

const HeaderRight = ({ children }: HeaderRightProps) => {
  return <>{children}</>;
};

const HeaderBottom = ({ children }: HeaderBottomProps) => {
  return <>{children}</>;
};

HeaderLeft.displayName = 'Header.Left';
Header.Left = HeaderLeft;

HeaderMiddle.displayName = 'Header.Middle';
Header.Middle = HeaderMiddle;

HeaderRight.displayName = 'Header.Right';
Header.Right = HeaderRight;

HeaderBottom.displayName = 'Header.Bottom';
Header.Bottom = HeaderBottom;

export { Header };
export type {
  HeaderProps,
  HeaderLeftProps,
  HeaderMiddleProps,
  HeaderRightProps,
  HeaderBottomProps,
};
