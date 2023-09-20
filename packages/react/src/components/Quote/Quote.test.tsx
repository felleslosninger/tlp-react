import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { QuoteProps } from './Quote';
import { Quote } from './Quote';

describe('Quote', () => {
  it('should have the myClass class', () => {
    render({
      children: 'myComponent',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('myClass');
  });
});

const render = (props: QuoteProps) =>
  renderRtl(<Quote {...props}>{props.children}</Quote>);
