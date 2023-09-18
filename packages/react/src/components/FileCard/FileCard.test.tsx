import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { FileCardProps } from './FileCard';
import { FileCard } from './FileCard';

describe('FileCard', () => {
  it('should have the fileCard class', () => {
    render({
      heading: 'test',
      subHeading: 'test',
      filePath: '/test',
      ariaLabel: 'test',
    });
    const list = screen.getByLabelText('test');
    expect(list.classList).toContain('fileCard');
  });
});

const render = (props: FileCardProps) => renderRtl(<FileCard {...props} />);
