import React, { createElement, useEffect, useState } from 'react';
import cn from 'classnames';
import type { LinkProps } from '@digdir/design-system-react';
import { Link } from '@digdir/design-system-react';

import { errorMessage } from '../../utils/helperFunctions/ThrowMessageHelper';

import classes from './LinkList.module.css';

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
  const linkElements = React.Children.map(children, (child, index) => {
    /* This fails as a server component, because we use Link here */
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
