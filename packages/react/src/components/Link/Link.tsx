import React from 'react';
import cn from 'classnames';

import classes from './Link.module.css';

interface LinkProps {
  inverted?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
}

const Link = ({
  inverted,
  children,
  href = '#',
  className,
  iconBefore,
  iconAfter,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={cn(
        classes.link,
        inverted ? classes.inverted : classes.normal,
        className,
      )}
      href={href}
      {...rest}
    >
      {iconBefore && <span className={classes.iconBefore}>{iconBefore}</span>}
      <span
        className={cn(
          classes.linkInner,
          inverted ? classes.invertedInner : classes.normalInner,
          className,
        )}
      >
        {children}
      </span>
      {iconAfter && <span className={classes.iconAfter}>{iconAfter}</span>}
    </a>
  );
};

export { Link };
export type { LinkProps };
