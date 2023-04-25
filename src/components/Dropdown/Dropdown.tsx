import React from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown = ({ children }: DropdownProps) => {
  return <div className={cn(classes.myClass)}>{children}</div>;
};

export { Dropdown };
export type { DropdownProps };
