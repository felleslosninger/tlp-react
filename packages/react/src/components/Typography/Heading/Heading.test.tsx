import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Heading } from './Heading';
import type { HeadingProps } from './Heading';

describe('heading', () => {
  it('should have the heading class', () => {
    render({
      children: 'Heading text',
    });
    const heading = screen.getByRole('heading');
    expect(heading.classList).toContain('heading');
  });
});

const render = (props: HeadingProps) =>
  renderRtl(<Heading {...props}>{props.children}</Heading>);
