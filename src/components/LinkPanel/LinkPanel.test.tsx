import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
//import { ChevronRightIcon } from '@navikt/aksel-icons';

import type { LinkPanelProps } from './LinkPanel';
import { LinkPanel } from './LinkPanel';

describe('LinkPanel', () => {
  it('renders a link with the correct text and href', () => {
    render({
      children: 'text',
      href: 'https://www.test.com/',
    });
    screen.debug;
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://www.test.com/',
    );
  });
});

const render = (props: LinkPanelProps) =>
  renderRtl(<LinkPanel {...props}>{props.children}</LinkPanel>);
