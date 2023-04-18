import React from 'react';
import cn from 'classnames';

import classes from './Link.module.css';

export interface LinkProps {
  inverted?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
}

const Link = ({ inverted, children, href, className, ...rest }: LinkProps) => {
  return (
    <a
      className={cn(
        classes.link,
        inverted ? classes.invertedTestLinks : classes.normal,
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export default Link;
