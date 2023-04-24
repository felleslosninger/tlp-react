import React from 'react';
import cn from 'classnames';
import { ChevronRightIcon } from '@navikt/aksel-icons';

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
      <div className={cn(classes.text)}>{children}</div>
      <ChevronRightIcon
        className={cn(classes.icon)}
        fontSize={'2rem'}
      />
    </a>
  );
};

export { LinkPanel };
export type { LinkPanelProps };
