import React, { createElement, useEffect, useState } from 'react';
import cn from 'classnames';

import classes from './LinkList.module.css';

interface LinkListProps {
  //Must be normal or inverted
  state: 'normal' | 'inverted';

  //can have normal title, a link title or no title
  titleType: 'regularTitle' | 'linkTitle';

  //Link objects
  links: { title: string; url: string }[];

  //Different heading levels
  headingLevel: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  //Title object, in case of titleUrl
  title?: string;

  //Optional title url, if title is a link
  titleUrl?: string;
}

const LinkList = ({
  state = 'normal',
  titleType = 'regularTitle',
  links = [
    { title: 'test', url: '#' },
    { title: 'test', url: '#' },
  ],
  headingLevel = 'h3',
  title,
  titleUrl,
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
        {links.map((link, index) => (
          <li key={index + link.title}>
            <a
              href={link.url}
              className={cn(classes.link, classes[state])}
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export { LinkList };
export type { LinkListProps };
