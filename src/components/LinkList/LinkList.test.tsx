import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { LinkListProps } from './LinkList';
import { LinkList, Link } from './LinkList';

describe('LinkList', () => {
  it('should have the linkList class', () => {
    render();
    const list = screen.getByRole('list');
    expect(list.classList).toContain('linkList');
  });

  it('should render an inverted list if inverted prop is provided', () => {
    render();
    const list = screen.getByRole('link');
    expect(list.classList).toContain('invertedTestLinks');
  });
});

const render = (props?: LinkListProps) =>
  renderRtl(
    <LinkList
      inverted
      title='title'
      headingLevel='h1'
      {...props}
    >
      <Link url='https://www.example.no/'>Deling av data</Link>
    </LinkList>,
  );
