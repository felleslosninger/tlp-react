import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { CourceCardProps } from './CourceCard';
import { CourceCard } from './CourceCard';

describe('CourceCard', () => {
  it('should have the myClass class', () => {
    render({
      children: 'myComponent',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('myClass');
  });
});

const render = (props: CourceCardProps) =>
  renderRtl(<CourceCard {...props}>{props.children}</CourceCard>);
