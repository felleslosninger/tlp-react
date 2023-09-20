import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { QuoteProps } from './Quote';
import { Quote } from './Quote';

describe('Quote', () => {
  it('should render the quote text and author correctly', () => {
    const author = 'John Doe';
    const quoteText = 'This is a test quote';

    render({
      author,
      children: quoteText,
    });
    expect(screen.getByText(quoteText)).toBeInTheDocument();
    expect(screen.getByText(author)).toBeInTheDocument();
  });

  it('should apply the "quoteWrapper" class', () => {
    const { container } = render({
      author: 'Author',
      children: 'Quote Text',
    });
    expect(container.querySelector('.quoteWrapper')).toBeInTheDocument();
  });
});

const render = (props: QuoteProps) =>
  renderRtl(<Quote {...props}>{props.children}</Quote>);
