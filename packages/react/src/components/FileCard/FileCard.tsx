import React from 'react';
import cn from 'classnames';

import classes from './FileCard.module.css';

interface FileCardProps {
  children: React.ReactNode;
}

const FileCard = ({ children }: FileCardProps) => {
  return <div className={cn(classes.myClass)}>{children}</div>;
};

export { FileCard };
export type { FileCardProps };
