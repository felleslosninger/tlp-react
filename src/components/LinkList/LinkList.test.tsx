/* eslint-disable react/jsx-key */
import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { LinkListProps } from './LinkList';
import { LinkList, Link } from './LinkList';

describe('LinkList', () => {
  it('should have the linkList class', () => {
    render({
      children: [<Link url='#'>test</Link>],
      title: 'title',
      headingLevel: 'h1',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('linkList');
  });

  it('should render an inverted list if inverted prop is provided', () => {
    render({
      children: [<Link url='hei'>test</Link>],
      inverted: true,
      title: 'title',
    });
    const list = screen.getByRole('link');
    expect(list.classList).toContain('invertedTestLinks');
  });

  it('throw error message, if linkTitle is true and url is undefined', () => {
    const renderFnc = () => {
      return render({
        children: [<Link url='#'>test</Link>],
        title: 'title',
        linkTitle: true,
      });
    };
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(renderFnc).toThrow('Enter a valid url in the titleUrl prop');
  });
});

const render = (props?: LinkListProps) =>
  renderRtl(
    <LinkList {...props}>
      <Link url='test'>test</Link>
    </LinkList>,
  );
