import React from 'react';
import cn from 'classnames';

import classes from './LinkList.module.css';

interface LinkListProps {
  //Must be normal or inverted
  state: 'normal' | 'inverted';

  //can have normal title, a link title or no title
  title?: 'normalTitle' | 'linkTitle';

  //Links
  links: [{ title: string; url: string }];

  headingLevel: 'h1' | 'h2' | 'h3' | 'h4';
}

const LinkList = ({
  state = 'normal',
  title,
  links = [{ title: 'test', url: '#' }],
}: LinkListProps) => {
  return (
    <>
      {title === 'normalTitle' ? (
        <h3 className={classes[title]}> Normal title</h3>
      ) : title === 'linkTitle' ? (
        <h3 className={classes.heading}>
          <a
            className={cn(classes[title])}
            href='https://www.digidir.no'
          >
            Link title
          </a>
        </h3>
      ) : null}
      <ul className={cn(classes.linkList, classes[state])}>
        {links.map((link, index) => (
          <li key={index + link.title}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export { LinkList };
export type { LinkListProps };
