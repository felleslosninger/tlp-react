import React from 'react';
import classes from './StorybookLayout.module.css';

interface StorybookLayoutProps {
  children: React.ReactNode;
}

const StorybookLayout = ({ children }: StorybookLayoutProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.responsiveContainer}>{children}</div>
    </div>
  );
};

export { StorybookLayout };
export type {};
