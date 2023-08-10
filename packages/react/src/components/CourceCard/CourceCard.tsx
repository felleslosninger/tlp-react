import React, { useEffect, useState } from 'react';
import cn from 'classnames';

import { ClockIcon, PinIcon, BookmarkIcon } from '@navikt/aksel-icons';

import classes from './CourceCard.module.css';

type CourceCardProps = {
  date: Date;
  brand: 'primary' | 'secondary' | 'tertiary';
  breakpoint: number;
  children:
    | React.ReactElement<CourceTitleProps>
    | React.ReactElement<CourceTagProps>
    | React.ReactElement<CourceLocationProps>
    | Array<
        React.ReactElement<
          CourceTitleProps | CourceTagProps | CourceLocationProps
        >
      >;
};

type CourceTitleProps = {
  children: React.ReactNode;
};

type CourceLocationProps = {
  children: React.ReactNode;
};

type CourceTagProps = {
  children: React.ReactNode;
};

const CourceCard = ({
  date = new Date(),
  brand = 'primary',
  breakpoint = 768,
  children,
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
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const hours = date.getHours();
  let minutes;

  if (date.getMinutes() < 10) {
    minutes = '0' + date.getMinutes();
  } else {
    minutes = date.getMinutes();
  }

  return (
    <a
      href='.'
      className={cn(
        classes.courceCardWrapper,
        classes[brand],
        isMobile ? classes.mobile : null,
      )}
    >
      <div className={cn(classes.dateBox)}>
        <span className={cn(classes.dateDay)}>{day}</span>
        <span className={cn(classes.dateMonth)}>{month}</span>
        <span className={cn(classes.dateYear)}>{year}</span>
      </div>
      <div className={cn(classes.informationBox)}>
        {React.Children.map(children, (child) => {
          if (child.type === CourceTitle) return <h2>{child}</h2>;
        })}
        <div>
          <div className={cn(classes.courceLabels)}>
            <span>
              <ClockIcon fontSize='1rem' />
              {hours}:{minutes}
            </span>
            {React.Children.map(children, (child) => {
              if (child.type === CourceLocation)
                return (
                  <span>
                    <PinIcon fontSize='1rem' />
                    {child}
                  </span>
                );
            })}
            {React.Children.map(children, (child) => {
              if (child.type === CourceTag)
                return (
                  <span>
                    <BookmarkIcon fontSize='1rem' />
                    {child}
                  </span>
                );
            })}
          </div>
        </div>
      </div>
    </a>
  );
};

const CourceTitle = ({ children }: CourceTitleProps) => {
  return <>{children}</>;
};

const CourceTag = ({ children }: CourceTagProps) => {
  return <>{children}</>;
};

const CourceLocation = ({ children }: CourceLocationProps) => {
  return <>{children}</>;
};

CourceTitle.displayName = 'CourceCard.Title';
CourceCard.Title = CourceTitle;

CourceTag.displayName = 'CourceCard.Tag';
CourceCard.Tag = CourceTag;

CourceLocation.displayName = 'CourceCard.Location';
CourceCard.Location = CourceLocation;

export { CourceCard };
export type { CourceCardProps };
