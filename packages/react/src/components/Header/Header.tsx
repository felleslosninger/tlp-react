import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Container } from '../Container/Container';

import classes from './Header.module.css';
import { Hamburger } from '@navikt/ds-icons';

interface HeaderProps {
  children:
    | React.ReactElement<HeaderLeftProps>
    | React.ReactElement<HeaderMiddleProps>
    | React.ReactElement<HeaderRightProps>
    | React.ReactElement<HeaderBottomProps>
    | React.ReactElement<HeaderMobileProps>
    | Array<
        React.ReactElement<
          | HeaderLeftProps
          | HeaderMiddleProps
          | HeaderRightProps
          | HeaderBottomProps
          | HeaderMobileProps
        >
      >;
  className: string;
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

type HeaderMobileProps = {
  children: React.ReactNode;
};

const Header = ({ children, className }: HeaderProps) => {
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={cn(classes.header, className)}>
      <Container className={classes.container}>
        {React.Children.map(children, (child) => (
          <>
            {child.type == Header.Left && (
              <div className={classes.left}>{child}</div>
            )}
            {child.type == Header.Middle && !isMobile && (
              <div className={classes.middle}>{child}</div>
            )}
            {child.type == Header.Right && (
              <div className={classes.right}>
                {!isMobile ? (
                  child
                ) : (
                  <Hamburger onChange={toggleMenu}></Hamburger>
                )}
              </div>
            )}
          </>
        ))}
      </Container>
      <Container className={classes.container}>
        {React.Children.map(children, (child) => (
          <>
            {child.type == Header.Bottom && !isMobile && (
              <div className={classes.bottom}>{child}</div>
            )}
            {child.type == Header.Mobile && isMobile && (
              <div className={classes.bottom}>{child}</div>
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

const HeaderMobile = ({ children }: HeaderMobileProps) => {
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

HeaderMobile.displayName = 'Header.Mobile';
Header.Mobile = HeaderMobile;

export { Header };
export type {
  HeaderProps,
  HeaderLeftProps,
  HeaderMiddleProps,
  HeaderRightProps,
  HeaderBottomProps,
};
