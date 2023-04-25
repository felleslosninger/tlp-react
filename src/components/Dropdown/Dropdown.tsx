import React from 'react';

interface DropdownProps {
  children: React.ReactNode;
}

export interface DropdownItemProps {
  children: React.ReactNode;
}

const DropdownItem = ({ children }: DropdownItemProps) => {
  return (
    <li>
      <a href='h'>{children}</a>
    </li>
  );
};

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <ul>
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

Dropdown.Item = DropdownItem;

export { Dropdown };
export type { DropdownProps };
