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
}

const DropdownItem = ({ children }: DropdownItemProps) => {
  return (
    <li className={cn(classes.listItem)}>
      <a
        href='h'
        className={cn(classes.listItemInner)}
      >
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
