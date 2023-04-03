import React, { createElement, useEffect, useState, Children } from 'react';
import cn from 'classnames';

import classes from './LinkList.module.css';

export interface LinkProps {
  inverted?: false;

  text: string;

  url: string;
}

export const Link = ({ inverted, text, url }: LinkProps) => {
  return (
    <a
      className={cn(classes.link, inverted ? classes.inverted : classes.normal)}
      href={url}
    >
      {text}
    </a>
  );
};

interface LinkListProps {
  //Must be normal or inverted
  state?: 'normal' | 'inverted';

  inverted?: boolean;

  //can have normal title, a link title or no title
  titleType?: 'regularTitle' | 'linkTitle';

  //Different heading levels
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  //Title object, in case of titleUrl
  title?: string;

  /**  Optional title url, if title is a link */
  titleUrl?: string;

  /** Children in ul, must be instace of <Link/> component */
  children?: React.ReactNode;
}

const LinkList = ({
  state = 'normal',
  titleType = 'regularTitle',
  // links,
  headingLevel = 'h3',
  title,
  titleUrl,
  children,
}: LinkListProps) => {
  const [heading, setHeading] = useState<React.ReactNode | null>(null);
  useEffect(() => {
    if (titleType === 'regularTitle') {
      setHeading(
        createElement(
          headingLevel,
          {
            className: cn(
              classes.heading,
              classes.regularTitle,
              state === 'inverted' ? classes.invertedTitle : null,
            ),
          },
          title,
        ),
      );
    } else if (titleType === 'linkTitle') {
      setHeading(
        createElement(
          headingLevel,
          { className: cn(classes.heading) },
          createElement(
            'a',
            {
              href: titleUrl,
              className: cn(classes.linkTitle, classes[state]),
            },
            title,
          ),
        ),
      );
    } else {
      setHeading(null);
    }
  }, [headingLevel, setHeading, titleType, title, titleUrl, state]);

  return (
    <>
      {heading}
      <ul className={cn(classes.linkList)}>
        {Children.map(children, (child) => (
          <li>{child}</li>
        ))}
      </ul>
    </>
  );
};

export { LinkList };
export type { LinkListProps };
