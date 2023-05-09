import React from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children:
    | React.ReactElement<DropdownItemProps<React.ElementType>>
    | Array<React.ReactElement<DropdownItemProps<React.ElementType>>>;
  open?: boolean;
}

export interface DropdownItemProps<Type extends React.ElementType> {
  as?: Type;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const DropdownItem = <Type extends React.ElementType = 'button'>({
  as,
  children,
  icon,
  onClick,
  ...rest
}: DropdownItemProps<Type>) => {
  const Component = as || 'button';

  return (
    <li className={cn(classes.listItem)}>
      <Component
        className={cn(classes.listComponent)}
        onClick={onClick}
        {...rest}
      >
        {icon && <span className={cn(classes.icon)}>{icon}</span>}
        {children}
      </Component>
    </li>
  );
};

const Dropdown = ({ open = true, children }: DropdownProps) => {
  return (
    <>
      {open && (
        <ul className={cn(classes.dropdownList)}>
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
