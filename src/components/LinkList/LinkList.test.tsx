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
});

const renderInverted = (props?: LinkListProps) =>
  renderRtl(
    <LinkList
      inverted
      title='title'
      headingLevel='h1'
      linkTitle
      {...props}
    >
      <Link url='#'>Deling av data</Link>
    </LinkList>,
  );
