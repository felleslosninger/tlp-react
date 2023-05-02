import React, { useState } from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children:
    | React.ReactElement<DropdownItemProps>
    | React.ReactElement<DropdownButtonProps>
    | Array<React.ReactElement<DropdownItemProps>>;
}

export interface DropdownItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export interface DropdownButtonProps {
  onClick: () => void;
  component: React.ElementType;
  children: React.ReactNode;
}

const DropdownButton = ({
  onClick,
  component: Component = 'button',
  children,
}: DropdownButtonProps) => {
  if (
    typeof Component !== 'string' &&
    Component.displayName !== 'button' &&
    Component.displayName !== 'Button'
  ) {
    throw new Error('DropdownButton only accepts components that are buttons.');
  }

  const handleClick = () => {
    onClick();
  };

  return <Component onClick={handleClick}>{children}</Component>;
};

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
  const [expanded, setExpanded] = useState(true);

  const expandedHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return null;

        if (child.type === Dropdown.Button) {
          return React.cloneElement(child, {
            onClick: expandedHandler,
          });
        }
        return null;
      })}
      <ul className={cn(!expanded && classes.hide, classes.dropdownList)}>
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;

          if (child.type === Dropdown.Item) {
            return React.cloneElement(child);
          }
          return null;
        })}
      </ul>
    </>
  );
};

DropdownItem.displayName = 'Dropdown.Item';
Dropdown.Item = DropdownItem;
DropdownButton.displayName = 'Dropdown.Button';
Dropdown.Button = DropdownButton;

export { Dropdown };
export type { DropdownProps };
