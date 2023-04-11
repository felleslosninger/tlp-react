import React from 'react';
import { render, render as renderRtl, screen } from '@testing-library/react';

import { LinkListProps } from './LinkList';
import { LinkList } from './LinkList';
import { Link } from './LinkList';

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
    />,
  );

describe('LinkList', () => {
  const props: LinkListProps = {
    title: 'My Link List',
    children: [
      <Link
        key='1'
        text='Link 1'
        url='https://www.example.com'
      />,
      <Link
        key='2'
        text='Link 2'
        url='https://www.example.com'
      />,
      <div key='3'>Not a Link component</div>,
      <Link
        key='4'
        text='Link 3'
        url='https://www.example.com'
      />,
    ],
  };

  it('renders the LinkList component with an inverted title', () => {
    const { getByText } = render(
      <LinkList
        {...props}
        inverted
      />,
    );
    expect(getByText(props.title!)).toHaveClass('invertedTitle');
  });

  it('renders the LinkList component with a link title', () => {
    const { getByText } = render(
      <LinkList
        {...props}
        linkTitle
        titleUrl='https://www.example.com'
      />,
    );
    expect(getByText(props.title!)).toHaveAttribute(
      'href',
      'https://www.example.com',
    );
    expect(getByText(props.title!)).toHaveClass('linkTitle');
  });

  it('renders the LinkList component with a custom heading level', () => {
    const { container } = render(
      <LinkList
        {...props}
        headingLevel='h2'
      />,
    );
    expect(container.querySelector('h2')).toBeInTheDocument();
  });
});
