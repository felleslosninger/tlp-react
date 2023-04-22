import React from 'react';
import cn from 'classnames';

import classes from './LinkPanel.module.css';

interface LinkPanelProps {
  children: string;
  href: string;
}

const LinkPanel = ({ children, href = '#', ...rest }: LinkPanelProps) => {
  return (
    <a
      className={cn(classes.wrapper)}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

export { LinkPanel };
export type { LinkPanelProps };
