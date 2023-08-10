import React from 'react';
import cn from 'classnames';

import classes from './CourceCard.module.css';

type CourceCardProps = {
  date: Date;
  brand: 'primary' | 'secondary' | 'tertiary';
  time: string;
  location: string;
  tags: string;
  children: React.ReactElement<CourceTitleProps>;
};

type CourceTitleProps = {
  children: React.ReactNode;
};

const CourceCard = ({
  date = new Date(2023, 8, 10),
  brand = 'primary',
  time,
  location,
  tags,
  children,
}: CourceCardProps) => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  return (
    <a
      href='.'
      className={cn(classes.courceCardWrapper)}
    >
      <div
        className={cn(
          classes.dateBox,
          brand === 'primary'
            ? classes.primary
            : brand === 'secondary'
            ? classes.secondary
            : classes.tertiary,
        )}
      >
        <span>{day}</span>
        <span>{month}</span>
        <span>{year}</span>
      </div>
      <div className={cn(classes.informationBox)}>
        {React.Children.map(children, (child) => {
          if (child.type === CourceTitle) return <h2>{child}</h2>;
        })}
        <div>
          <span>{time}</span>
          <span>{location}</span>
          <span>{tags}</span>
        </div>
      </div>
    </a>
  );
};

const CourceTitle = ({ children }: CourceTitleProps) => {
  return <>{children}</>;
};

CourceTitle.displayName = 'CourceCard.Title';
CourceCard.Title = CourceTitle;

export { CourceCard };
export type { CourceCardProps };
