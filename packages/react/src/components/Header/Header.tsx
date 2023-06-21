import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { Container } from '../Container/Container';

import classes from './Header.module.css';
import { Hamburger } from '@navikt/ds-icons';
import { XMarkIcon } from '@navikt/aksel-icons';

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
  const [isMobile, setIsMobile] = useState(Boolean);
  const [showMenu, setShowMenu] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < breakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    // Kjører en gang ved oppstart for å sette riktig verdifor isMobile

    handleResize();

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
        {React.Children.map(children, (child) => {
          if (child.type === HeaderLeft) {
            return <div className={classes.left}>{child}</div>;
          }
          if (child.type === HeaderMiddle && !isMobile) {
            return <div className={classes.middle}>{child}</div>;
          }
          if (child.type === HeaderRight) {
            return (
              <div className={classes.right}>
                {!isMobile ? (
                  child
                ) : (
                  <button
                    onClick={toggleMenu}
                    className={cn(classes.mobileMenuButton)}
                  >
                    {showMenu ? (
                      <XMarkIcon fontSize='1.8rem' />
                    ) : (
                      <Hamburger fontSize='1.5rem' />
                    )}
                  </button>
                )}
              </div>
            );
          }
          return null;
        })}
      </Container>

      {React.Children.map(children, (child) => {
        if (child.type === HeaderBottom && !isMobile) {
          return (
            <Container className={cn(classes.container)}>
              <div className={classes.bottom}>{child}</div>
            </Container>
          );
        }
        if (child.type === HeaderMobile && isMobile && showMenu) {
          return (
            <>
              <Container className={cn(classes.mobileContainer)}>
                <div className={classes.mobile}>{child}</div>
              </Container>
              <div
                onClick={toggleMenu}
                className={classes.overlay}
              ></div>
            </>
          );
        }
        return null;
      })}
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
