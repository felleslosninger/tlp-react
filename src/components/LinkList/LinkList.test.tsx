import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Link } from '../Link/Link';

import type { LinkListProps } from './LinkList';
import { LinkList, ERRORMESSAGE } from './LinkList';

describe('LinkList', () => {
  it('should have the linkList class', () => {
    render({
      children: [
        <Link
          key={1}
          href='#'
        >
          test
        </Link>,
      ],
      title: 'title',
      headingLevel: 'h1',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('linkList');
  });

  it('should render an inverted list if inverted prop is provided.', () => {
    render({
      children: [
        <Link
          key={1}
          href='test'
        >
          test
        </Link>,
      ],
      inverted: true,
      title: 'title',
    });
    const list = screen.getByRole('link');
    expect(list.classList).toContain('inverted');
  });

  it('throw error message, if linkTitle is true and url is undefined', () => {
    const renderFnc = () => {
      return render({
        children: [
          <Link
            key={1}
            href='#'
          >
            test
          </Link>,
        ],
        title: 'title',
        linkTitle: true,
      });
    };
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(renderFnc).toThrow('Enter a valid url in the titleUrl prop');
  });

  it('throw error message, if children is not Link component ', () => {
    const renderFn = () => {
      return render({
        children: <p>test</p>,
      });
    };
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(renderFn).toThrow(ERRORMESSAGE);
  });
});

const render = (props: LinkListProps) =>
  renderRtl(<LinkList {...props}>{props.children}</LinkList>);
