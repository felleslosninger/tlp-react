import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import { FileJsonIcon } from '@navikt/aksel-icons';

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

  it('should render the heading', () => {
    render({
      heading: 'test heading',
      subHeading: 'test',
      filePath: '/test',
      ariaLabel: 'test',
    });
    const heading = screen.getByText('test heading');
    expect(heading).toBeInTheDocument();
  });

  it('should render the subHeading', () => {
    render({
      heading: 'test',
      subHeading: 'test subHeading',
      filePath: '/test',
      ariaLabel: 'test',
    });
    const subHeading = screen.getByText('test subHeading');
    expect(subHeading).toBeInTheDocument();
  });

  it('should render the file icon when icon is passed', () => {
    render({
      heading: 'test',
      subHeading: 'test',
      filePath: '/test',
      ariaLabel: 'test',
      icon: <FileJsonIcon title='JSON Icon' />,
    });
    const fileIcon = screen.getByTitle('JSON Icon');
    expect(fileIcon).toBeInTheDocument();
  });
});

const render = (props: FileCardProps) => renderRtl(<FileCard {...props} />);
