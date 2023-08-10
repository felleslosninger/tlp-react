import React from 'react';
import cn from 'classnames';

import classes from './CourceCard.module.css';

type CourceCardProps = {
  date: Date;
  brand: 'primary' | 'secondary' | 'tertiary';
  title: string;
  time: string;
  location: string;
  tags: string;
};

const CourceCard = ({
  date = new Date(2023, 8, 10),
  brand = 'primary',
  title,
  time,
  location,
  tags,
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
        <h2>{title}</h2>
        <div>
          <span>{time}</span>
          <span>{location}</span>
          <span>{tags}</span>
        </div>
      </div>
    </a>
  );
};

export { CourceCard };
export type { CourceCardProps };
