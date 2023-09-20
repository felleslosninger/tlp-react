import React from 'react';
import cn from 'classnames';

import classes from './Quote.module.css';

interface QuoteProps {
  children: React.ReactNode;
}

const Quote = ({ children }: QuoteProps) => {
  return <div className={cn(classes.myClass)}>{children}</div>;
};

export { Quote };
export type { QuoteProps };
