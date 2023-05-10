import React, { useState, useRef, useLayoutEffect } from 'react';
import cn from 'classnames';

import classes from './Dropdown.module.css';

interface DropdownProps {
  children:
    | React.ReactElement<DropdownItemProps<React.ElementType>>
    | Array<React.ReactElement<DropdownItemProps<React.ElementType>>>;
  open?: boolean;
  anchorEl?: HTMLElement | null;
}

export interface DropdownItemProps<Type extends React.ElementType> {
  as?: Type;
  children: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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

const Dropdown = ({ open = true, children, anchorEl }: DropdownProps) => {
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [positionStyle, setPositionStyle] = useState({});

  useLayoutEffect(() => {
    const updatePosition = () => {
      const dropdownNode = dropdownRef.current;

      if (dropdownNode && anchorEl) {
        const buttonRect = anchorEl.getBoundingClientRect();
        console.log(anchorEl);
        console.log(buttonRect);
        const { width } = buttonRect;
        const positionStyle = {
          position: 'absolute',
          top: `${buttonRect.height}px`,
          width: `${width}px`,
        };
        setPositionStyle(positionStyle);
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
    };
  }, [anchorEl]);

  return (
    <>
      {open && (
        <ul
          ref={dropdownRef}
          className={cn(classes.dropdownList)}
          style={positionStyle}
        >
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
