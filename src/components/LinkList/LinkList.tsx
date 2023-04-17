import React, { createElement, useEffect, useState } from 'react';
import cn from 'classnames';

import classes from './LinkList.module.css';

export interface LinkProps {
  inverted?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const Link = ({
  inverted,
  children,
  href,
  className,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={cn(
        classes.link,
        inverted ? classes.invertedTestLinks : classes.normal,
        className,
      )}
      href={href}
      {...rest}
    >
      {children}
    </a>
  );
};

interface LinkListProps {
  inverted?: boolean;
  linkTitle?: boolean;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title?: string;
  titleUrl?: string;
  children:
    | React.ReactElement<LinkProps>
    | Array<React.ReactElement<LinkProps>>;
}

export const ERRORMESSAGE = 'Only use Link components as children';
const LinkList = ({
  inverted = false,
  linkTitle = false,
  headingLevel = 'h3',
  title,
  titleUrl,
  children,
}: LinkListProps) => {
  const errorMessage = (message: string) => {
    throw Error(message);
  };

  const linkElements = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child) && child.type === Link) {
      return (
        <li key={index}>
          {React.cloneElement(child, {
            ...child.props,
            inverted,
          })}
        </li>
      );
    } else {
      errorMessage(ERRORMESSAGE);
    }
    return null;
  });

  const [heading, setHeading] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (!linkTitle) {
      setHeading(
        createElement(
          headingLevel,
          {
            className: cn(
              classes.heading,
              classes.regularTitle,
              inverted ? classes.invertedTitle : null,
            ),
          },
          title,
        ),
      );
    } else if (linkTitle) {
      if (titleUrl === undefined || titleUrl === '') {
        errorMessage('Enter a valid url in the titleUrl prop');
      } else {
        setHeading(
          createElement(
            headingLevel,
            { className: cn(classes.heading) },
            createElement(
              'a',
              {
                href: titleUrl,
                className: cn(inverted ? classes.inverted : classes.linkTitle),
              },
              createElement(
                'span',
                {
                  className: cn(
                    inverted ? classes.invertedSpan : classes.insideLinkTxt,
                  ),
                },
                title,
              ),
            ),
          ),
        );
      }
    } else {
      setHeading(null);
    }
  }, [headingLevel, setHeading, linkTitle, title, titleUrl, inverted]);

  return (
    <div className={classes.wrapper}>
      {heading}
      <ul className={cn(classes.linkList)}>{linkElements}</ul>
    </div>
  );
};

export { LinkList };
export type { LinkListProps };
