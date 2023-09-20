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
        <p className={cn(classes.quote)}>{children}</p>
        <span className={cn(classes.author)}>{author}</span>
      </div>
    </div>
  );
};

export { Quote };
export type { QuoteProps };
