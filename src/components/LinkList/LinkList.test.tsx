import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { LinkListProps } from './LinkList';
import { LinkList, Link } from './LinkList';

describe('LinkList', () => {
  it('should have the linkList class', () => {
    renderInverted();
    const list = screen.getByRole('list');
    expect(list.classList).toContain('linkList');
  });

  it('should render an inverted list if inverted prop is provided', () => {
    renderInverted();
    const list = screen.getByRole('link');
    expect(list.classList).toContain('invertedTestLinks');
  });
});

const renderInverted = (props?: LinkListProps) =>
  renderRtl(
    <LinkList
      inverted
      title='title'
      headingLevel='h1'
      {...props}
    >
      <Link url='https://www.vg.no/'>Deling av data</Link>
    </LinkList>,
  );
