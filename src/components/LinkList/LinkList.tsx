import React, { createElement, useEffect, useState } from 'react';
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
  inverted?: boolean;

  /** If true, linkList heading becomes a link and requires a url value*/
  linkTitle?: boolean;

  /** Heading level for heading title, e.g 'h1' or 'h3'*/
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /** The LinkList heading title*/
  title?: string;

  /**  Optional title url, if title is a link */
  titleUrl?: string;

  /** Children in ul, must be instace of <Link/> component */
  children?: React.ReactNode;
}

const LinkList = ({
  inverted = false,
  linkTitle = false,
  headingLevel = 'h3',
  title,
  titleUrl,
  children /* = [
    <Link
      text='test'
      url='#'
    ></Link>,
    <Link
      text='test'
      url='#'
    ></Link>,
    <a>hei</a>,
    <Link
      text='test'
      url='#'
    ></Link>,
  ],*/,
}: LinkListProps) => {
  // Uses React.Children.map to map out and manipulate the child elements in the LinkList
  const linkElements = React.Children.map(children, (child) => {
    // Verifies if the child element is a valid React component and of type Link
    if (React.isValidElement(child) && child.type === Link) {
      // Clones the child element, spreads existing child props and the inverted prop to the cloned element
      return <li>{React.cloneElement(child, { ...child.props, inverted })}</li>;
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
            title,
          ),
        ),
      );
    } else {
      setHeading(null);
    }
  }, [headingLevel, setHeading, linkTitle, title, titleUrl, inverted]);

  return (
    <>
      {heading}
      <ul className={cn(classes.linkList)}>{linkElements}</ul>
    </>
  );
};

export { LinkList };
export type { LinkListProps };
