import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { LinkPanelProps } from './LinkPanel';
import { LinkPanel } from './LinkPanel';

describe('LinkPanel', () => {
  it('renders', () => {
    render({
      children: 'text',
      href: 'https://www.test.com/',
    });
    expect(screen.getByRole('link')).toBeInTheDocument;
  });

  it('renders with correct text and href', () => {
    render({
      children: 'text',
      href: 'https://www.test.com/',
    });
    screen.debug;
    const link: HTMLAnchorElement = screen.getByRole('link');

    expect(link.textContent).toEqual('text');
    expect(link.href).toEqual('https://www.test.com/');
  });
});

const render = (props: LinkPanelProps) =>
  renderRtl(<LinkPanel {...props}>{props.children}</LinkPanel>);
