import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { ClockIcon, PinIcon, BookmarkIcon } from '@navikt/aksel-icons';

import classes from './CourceCard.module.css';

type CourceCardProps = {
  date: Date;
  brand?: 'primary' | 'secondary' | 'tertiary';
  breakpoint?: number;
  title: string;
  location: string;
  tag: string;
};

const CourceCard = ({
  date = new Date(),
  brand = 'primary',
  breakpoint = 768,
  title,
  location,
  tag,
}: CourceCardProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  const day = date.getDate();
  const month = date.toLocaleString('default', {
    month: isMobile ? 'long' : 'short',
  });
  const year = date.getFullYear();

  const formattedMinutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  const formattedHours =
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours();

  return (
    <a
      href='.'
      className={cn(
        classes.courceCardWrapper,
        classes[brand],
        isMobile ? classes.mobile : null,
      )}
    >
      <div
        className={cn(classes.dateBox, isMobile ? classes.mobileDateBox : null)}
      >
        <span
          className={cn(classes.dateDay, isMobile ? classes.mobileDate : null)}
        >
          {day}
        </span>
        <span
          className={cn(
            classes.dateMonth,
            isMobile ? classes.mobileDate : null,
          )}
        >
          {month}
        </span>
        <span
          className={cn(classes.dateYear, isMobile ? classes.mobileDate : null)}
        >
          {year}
        </span>
      </div>
      <div
        className={cn(
          classes.informationBox,
          isMobile ? classes.mobileInformationBox : null,
        )}
      >
        <h2>{title}</h2>
        <div>
          <div
            className={cn(
              classes.courceLabels,
              isMobile ? classes.mobile : null,
            )}
          >
            <div>
              <span className={classes.icon}>
                <ClockIcon fontSize='1rem' />
              </span>
              <span>
                {formattedHours}:{formattedMinutes}
              </span>
            </div>
            <div>
              <span className={classes.icon}>
                <PinIcon fontSize='1rem' />
              </span>
              <span>{location}</span>
            </div>
            <div>
              <span className={classes.icon}>
                <BookmarkIcon fontSize='1rem' />
              </span>
              <span>{tag}</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export { CourceCard };
export type { CourceCardProps };
