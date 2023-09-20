import React from 'react';
import cn from 'classnames';

import classes from './Quote.module.css';

interface QuoteProps {
  author: string;
  children: React.ReactNode;
}

const Quote = ({ children, author }: QuoteProps) => {
  return (
    <div className={cn(classes.quoteWrapper)}>
      <div className={cn(classes.quoteInfo)}>
        <div className={cn(classes.quote)}>{children}</div>
        <div className={cn(classes.author)}>{author}</div>
      </div>
    </div>
  );
};

export { Quote };
export type { QuoteProps };
