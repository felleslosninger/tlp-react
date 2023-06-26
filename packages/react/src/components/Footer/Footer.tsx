import React from 'react';
import cn from 'classnames';

import { Container } from '../Container/Container';

import classes from './Footer.module.css';

interface FooterProps {
  children:
    | Array<React.ReactElement<FooterColumnProps>>
    | React.ReactElement<FooterBottomProps>;
  className?: string;
}

interface FooterColumnProps {
  children: React.ReactNode;
}

interface FooterBottomProps {
  children: React.ReactNode;
}

const Footer = ({ children, className, ...rest }: FooterProps) => {
  return (
    <footer
      className={cn(classes.footer, className)}
      {...rest}
    >
      <Container>
        <Container className={classes.topContainer}>
          <div className={classes.topContent}>
            {React.Children.map(children, (child) => (
              <>{child && child.type === Footer.Column ? child : ''}</>
            ))}
          </div>
        </Container>
        <Container className={classes.bottomContainer}>
          <div className={classes.bottomContent}>
            {React.Children.map(children, (child) => (
              <>{child.type === Footer.Bottom ? child : ''}</>
            ))}
          </div>
        </Container>
      </Container>
    </footer>
  );
};

const FooterBottom = ({ children }: FooterBottomProps) => {
  return <div className={classes.bottom2}>{children}</div>;
};

const FooterColumn = ({ children }: FooterColumnProps) => {
  return <div className={classes.column}>{children}</div>;
};

FooterColumn.displayName = 'Footer.Column';
Footer.Column = FooterColumn;

FooterBottom.displayName = 'Footer.Bottom';
Footer.Bottom = FooterBottom;

export { Footer };
export type { FooterProps, FooterColumnProps, FooterBottomProps };
