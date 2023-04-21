import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Breadcrumb } from './Breadcrumb';
import type { BreadcrumbProps } from './Breadcrumb';
import { Link } from '../Link';

import { ChevronRightIcon } from '@navikt/aksel-icons';

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

  it('render seperator icon', () => {
    render({
      seperatorIcon: (
        <ChevronRightIcon className='seperator'></ChevronRightIcon>
      ),
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
    screen.debug();
    const icon = screen.getByRole('img');
    expect(icon.classList).toContain('seperator');
  });
});

const render = (props: BreadcrumbProps) =>
  renderRtl(<Breadcrumb {...props}>{props.children}</Breadcrumb>);
