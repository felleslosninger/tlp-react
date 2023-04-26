import React from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children:
    | React.ReactElement<DropdownItemProps>
    | Array<React.ReactElement<DropdownItemProps>>;
}

export interface DropdownItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const DropdownItem = ({ children, icon }: DropdownItemProps) => {
  return (
    <li className={cn(classes.listItem)}>
      <a
        href='h'
        className={cn(classes.listItemInner)}
      >
        {icon && <span className={cn(classes.icon)}>{icon}</span>}
        {children}
      </a>
    </li>
  );
};

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <ul className={cn(classes.dropdownList)}>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;

        if (child.type === Dropdown.Item) {
          return React.cloneElement(child);
        }
        return null;
      })}
    </ul>
  );
};

DropdownItem.displayName = 'Dropdown.Item';
Dropdown.Item = DropdownItem;

export { Dropdown };
export type { DropdownProps };
