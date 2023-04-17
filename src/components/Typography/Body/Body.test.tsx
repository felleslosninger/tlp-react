import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import { Body } from './Body';
import type { BodyProps } from './Body';

describe('body', () => {
  it('should have the body class', () => {
    render({
      children: 'Body text',
    });
    const body = screen.getByText('Body text');
    expect(body.classList).toContain('body');
  });
});

const render = (props: BodyProps) =>
  renderRtl(<Body {...props}>{props.children}</Body>);
