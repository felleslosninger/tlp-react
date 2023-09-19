import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { Hamburger } from '@navikt/ds-icons';
import { XMarkIcon } from '@navikt/aksel-icons';

import { Container } from '../Container/Container';
import useIsMobile from '../../hooks/useDeviceBreakpoints';

import classes from './Header.module.css';

interface HeaderProps {
  children:
    | React.ReactElement<HeaderLeftProps>
    | React.ReactElement<HeaderMiddleProps>
    | React.ReactElement<HeaderRightProps>
    | React.ReactElement<HeaderBottomProps>
    | React.ReactElement<HeaderMobileProps>
    | React.ReactElement<HeaderMobileProps>
    | Array<
        React.ReactElement<
          | HeaderLeftProps
          | HeaderMiddleProps
          | HeaderRightProps
          | HeaderBottomProps
          | HeaderRightMobileProps
          | HeaderMobileProps
        >
      >;
  className?: string;
  closeMenu?: boolean;
  onMenuOpenChange?: (isOpen: boolean) => void;
}

type HeaderLeftProps = {
  children: React.ReactNode;
};

type HeaderMiddleProps = {
  children: React.ReactNode;
};
type HeaderRightProps = {
  children: React.ReactNode;
};

type HeaderBottomProps = {
  children: React.ReactNode;
};

type HeaderRightMobileProps = {
  children?: React.ReactNode;
};

type HeaderMobileProps = {
  children: React.ReactNode;
};

const Header = ({
  children,
  className,
  closeMenu,
  onMenuOpenChange,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMenuOpen) {
      onMenuOpenChange && onMenuOpenChange(true);
    } else {
      onMenuOpenChange && onMenuOpenChange(false);
    }
  }, [isMenuOpen, onMenuOpenChange]);

  useEffect(() => {
    if (closeMenu) {
      setIsMenuOpen(false);
    }
  }, [closeMenu]);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
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
          if (child.type === HeaderRight && !isMobile) {
            return <div className={classes.right}>{child}</div>;
          }
          if (child.type === HeaderRightMobile && isMobile) {
            return (
              <div className={classes.right}>
                {child}
                <>
                  {isMenuOpen ? (
                    <button
                      onClick={toggleMenu}
                      onFocus={toggleMenu}
                      className={cn(classes.mobileMenuButton)}
                      aria-expanded={true}
                      aria-haspopup={true}
                    >
                      <XMarkIcon fontSize='1.8rem' />
                    </button>
                  ) : (
                    <button
                      onClick={toggleMenu}
                      className={cn(classes.mobileMenuButton)}
                      aria-expanded={false}
                      aria-haspopup={true}
                    >
                      <Hamburger fontSize='1.5rem' />
                    </button>
                  )}
                </>
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
        if (child.type === HeaderMobile && isMobile && isMenuOpen) {
          return (
            <>
              <Container className={cn(classes.mobileContainer)}>
                <div className={classes.mobile}>{child}</div>
              </Container>
              <div
                onFocus={toggleMenu}
                role='button'
                tabIndex={0}
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

const HeaderRightMobile = ({ children }: HeaderRightMobileProps) => {
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

HeaderRightMobile.displayName = 'Header.RightMobile';
Header.RightMobile = HeaderRightMobile;

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
