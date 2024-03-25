import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { CourceCardProps } from './CourceCard';
import { CourceCard } from './CourceCard';

describe('CourceCard', () => {
  it('renders a h2', () => {
    render({
      date: new Date(2018, 11, 24, 10, 3),
      brand: 'primary',
      title: 'Unik sommerjobb ',
      location: 'Leikanger',
      tag: 'Digitalization',
    });
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument;
  });

  it('has the primary class', () => {
    render({
      date: new Date(2018, 11, 24, 10, 3),
      brand: 'primary',
      title: 'Unik sommerjobb ',
      location: 'Leikanger',
      tag: 'Digitalization',
      href: 'https://www.test.com/',
    });

    const cardElement = screen.getByRole('link');
    expect(cardElement).toHaveClass('primary');
  });

  it('has the secondary class', () => {
    render({
      date: new Date(2018, 11, 24, 10, 3),
      brand: 'secondary',
      title: 'Unik sommerjobb ',
      location: 'Leikanger',
      tag: 'Digitalization',
      href: 'https://www.test.com/',
    });

    const cardElement = screen.getByRole('link');
    expect(cardElement).toHaveClass('secondary');
  });

  it('can change element', () => {
    render({
      date: new Date(2018, 11, 24, 10, 3),
      brand: 'primary',
      title: 'Unik sommerjobb ',
      location: 'Leikanger',
      tag: 'Digitalization',
      as: 'div',
    });

    const cardElement = screen.getByTestId('course-card');
    expect(cardElement.tagName.toLowerCase()).toBe('div');
    expect(cardElement.tagName.toLowerCase()).not.toBe('a');
  });

  it('displays the right date', () => {
    render({
      date: new Date(2018, 11, 24, 10, 3),
      brand: 'primary',
      title: 'Unik sommerjobb ',
      location: 'Leikanger',
      tag: 'Digitalization',
    });

    const correctDate = screen.getByText('2018');

    expect(correctDate).toBeInTheDocument();
  });
});

const render = (props: CourceCardProps) =>
  renderRtl(
    <CourceCard
      {...props}
      data-testid='course-card'
    ></CourceCard>,
  );
