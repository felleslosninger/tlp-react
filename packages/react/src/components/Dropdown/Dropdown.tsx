import React, { useState } from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children:
    | React.ReactElement<DropdownItemProps>
    | Array<React.ReactElement<DropdownItemProps>>;
  open?: false;
}

export interface DropdownItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: () => void;
}

const DropdownItem = ({ children, icon, onClick }: DropdownItemProps) => {
  return (
    <li className={cn(classes.listItem)}>
      <a
        href='h'
        className={cn(classes.listItemInner)}
        onClick={onClick}
      >
        {icon && <span className={cn(classes.icon)}>{icon}</span>}
        {children}
      </a>
    </li>
  );
};

const Dropdown = ({ open, children }: DropdownProps) => {
  const [expanded, setExpanded] = useState(true);

  /*const expandedHandler = () => {
    setExpanded(!expanded);
  };*/

  const handleClose = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <>
      {open && (
        <ul className={cn(!expanded && classes.hide, classes.dropdownList)}>
          {React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) return null;

            if (child.type === Dropdown.Item) {
              return React.cloneElement(child);
            }
            return null;
          })}
        </ul>
      )}
    </>
  );
};

DropdownItem.displayName = 'Dropdown.Item';
Dropdown.Item = DropdownItem;

export { Dropdown };
export type { DropdownProps };
