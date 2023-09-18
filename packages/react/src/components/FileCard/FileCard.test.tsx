import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { FileCardProps } from './FileCard';
import { FileCard } from './FileCard';

describe('FileCard', () => {
  it('should have the myClass class', () => {
    render({
      children: 'myComponent',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('myClass');
  });
});

const render = (props: FileCardProps) =>
  renderRtl(<FileCard {...props}>{props.children}</FileCard>);
