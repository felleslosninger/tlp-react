import React from 'react';
import cn from 'classnames';

import { capitalizeString } from '../../../utils/StringHelper';

import classes from './Body.module.css';

export interface BodyProps {
  size?: 'small' | 'medium' | 'Large';
  color?: string;
  children: React.ReactNode;
  margin?: boolean;
}

const Body = ({
  size = 'medium',
  color,
  children,
  margin = false,
  ...rest
}: BodyProps) => {
  const Body = ({ ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    return React.createElement('p', props, children);
  };
  const BodyStyle = {
    color,
  };
  return (
    <Body
      {...rest}
      style={BodyStyle}
      className={cn(
        [classes['body']],
        { [classes['bodyMargin']]: margin },
        classes[`body${capitalizeString(size)}`],
      )}
    >
      {children}
    </Body>
  );
};

export { Body };
