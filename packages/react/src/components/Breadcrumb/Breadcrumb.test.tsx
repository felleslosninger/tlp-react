import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import { Link } from '@digdir/design-system-react';

import { Breadcrumb } from './Breadcrumb';
import type { BreadcrumbProps } from './Breadcrumb';

describe('Breadcrumb', () => {
  it('should render a single child correctly', () => {
    render({
      children: [
        <Link
          key={1}
          href='#'
        >
          Home
        </Link>,
      ],
    });
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument;

    const list = screen.getByRole('list');
    expect(list.classList).toContain('breadcrumbList');
  });

  it('should render multiple children correctly', () => {
    render({
      children: [
        <Link
          key={1}
          href='#'
        >
          Home
        </Link>,
        <Link
          key={2}
          href='#'
        >
          Home1
        </Link>,
      ],
    });
    const linkElement = screen.getByText('Home');
    expect(linkElement).toBeInTheDocument;
    const linkElement1 = screen.getByText('Home1');
    expect(linkElement1).toBeInTheDocument;
  });

  it('throw error message, if children is empty', () => {
    const renderFn = () => {
      return render({
        children: [''],
      });
    };
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    expect(renderFn).toThrow('You must use one or more valid ReactNodes');
  });
});

const render = (props: BreadcrumbProps) =>
  renderRtl(<Breadcrumb {...props}>{props.children}</Breadcrumb>);
