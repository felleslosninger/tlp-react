import React from 'react';
import cn from 'classnames';
import { ChevronRightIcon } from '@navikt/aksel-icons';

import { errorMessage } from '../../utils/helperFunctions/ThrowMessageHelper';

import classes from './Breadcrumb.module.css';

interface BreadcrumbProps {
  /**Array of children, that vil be rendered in the component */
  children: Array<React.ReactNode>;
  className?: string;
}

const Breadcrumb = ({ children, className }: BreadcrumbProps) => {
  const breadcrumbElements = React.Children.map(children, (child, index) => {
    if (children.length > 0 && React.isValidElement(child)) {
      return (
        <li
          key={index}
          className={cn(classes.listItem)}
        >
          {React.cloneElement(child, {
            ...child.props,
          })}
          {index === children.length - 1 ? null : (
            <ChevronRightIcon
              className={cn(classes.seperator)}
              aria-hidden='true'
            />
          )}
        </li>
      );
    } else {
      errorMessage('You must use one or more valid ReactNodes');
    }
    return null;
  });

  return (
    <nav className={cn(classes.wrapper, className)}>
      <ol className={cn(classes.breadcrumbList)}>{breadcrumbElements}</ol>
    </nav>
  );
};

export { Breadcrumb };
export type { BreadcrumbProps };
