import React from 'react';
import cn from 'classnames';

import classes from './Link.module.css';

interface LinkProps {
  inverted?: boolean;
  children: React.ReactNode;
  href?: string;
  className?: string;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  to?: string;
  onClick?: () => void; // Legger til typen for onClick-prop
}

const Link = ({
  inverted,
  children,
  href = '#',
  className,
  iconBefore,
  iconAfter,
  as,
  to,
  onClick,
  ...rest
}: LinkProps) => {
  const Component = as || 'a';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Component
      className={cn(
        classes.link,
        inverted ? classes.inverted : classes.normal,
        className,
      )}
      href={href}
      onClick={handleClick} // Legger til onClick-hendelsesbehandleren
      {...rest}
      to={to}
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
    </Component>
  );
};

export { Link };
export type { LinkProps };
