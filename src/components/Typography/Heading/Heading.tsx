import React from 'react';
import cn from 'classnames';

import { capitalizeString } from '../../../utils/helperFunctions/StringHelper';

import classes from './Heading.module.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  size?:
    | 'xlarge'
    | 'xxlarge'
    | 'large'
    | 'medium'
    | 'small'
    | 'xsmall'
    | 'xxsmall';
  color?: string;
  children: React.ReactNode;
  margin?: boolean;
}

const Heading = ({
  level = 1,
  size = 'xlarge',
  color = 'black',
  children,
  margin = false,
  ...rest
}: HeadingProps) => {
  const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    return React.createElement(`h${level}`, props, children);
  };
  const HeadingStyle = {
    color,
  };
  return (
    <Heading
      {...rest}
      style={HeadingStyle}
      className={cn(
        [classes['heading']],
        { [classes['headingMargin']]: margin },
        classes[`heading${capitalizeString(size)}`],
      )}
    >
      {children}
    </Heading>
  );
};

export { Heading };
