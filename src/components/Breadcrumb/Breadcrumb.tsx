import React from 'react';
import cn from 'classnames';
import { ChevronRightIcon } from '@navikt/aksel-icons';

import classes from './Breadcrumb.module.css';

interface BreadcrumbProps {
  seperatorIcon: React.ReactNode;
  children: React.ReactNode | Array<React.ReactNode>;
}

const Breadcrumb = ({
  children,
  seperatorIcon = (
    <ChevronRightIcon
      title='a11y-title'
      fontSize='18px'
      className={cn(classes.seperator)}
    />
  ),
}: BreadcrumbProps) => {
  const errorMessage = (message: string) => {
    throw Error(message);
  };

  const breadcrumbElements = React.Children.map(children, (child, index) => {
    if (Array.isArray(children) && React.isValidElement(child)) {
      return (
        <li key={index}>
          {React.cloneElement(child, {
            ...child.props,
          })}
          {index === children.length - 1 ? null : seperatorIcon}
        </li>
      );
    } else {
      errorMessage('Must be a valid Link element');
    }
    return null;
  });

  return (
    <nav className={cn(classes.wrapper)}>
      <ol className={cn(classes.breadcrumbList)}>{breadcrumbElements}</ol>
    </nav>
  );
};

export { Breadcrumb };
export type { BreadcrumbProps };
