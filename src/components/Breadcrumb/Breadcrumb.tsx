import React from 'react';
import cn from 'classnames';

import classes from './Breadcrumb.module.css';

interface BreadcrumbProps {
  children: React.ReactNode;
}

const Breadcrumb = ({ children }: BreadcrumbProps) => {
  return <div className={cn(classes.wrapper)}>{children}</div>;
};

export { Breadcrumb };
export type { BreadcrumbProps };
