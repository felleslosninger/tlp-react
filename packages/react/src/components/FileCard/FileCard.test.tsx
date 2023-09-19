import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';
import { FileJsonIcon } from '@navikt/aksel-icons';

import type { FileCardProps } from './FileCard';
import { FileCard } from './FileCard';

let mockIsMobile = false;

jest.mock('../../hooks/useIsMobile', () => () => mockIsMobile);

describe('FileCard', () => {
  it('should have the fileCard class', () => {
    render({
      heading: 'test',
      description: 'test',
      filePath: '/test',
    });
    const list = screen.getByLabelText('test');
    expect(list.classList).toContain('fileCard');
  });

  it('should render the heading', () => {
    render({
      heading: 'test heading',
      description: 'test',
      filePath: '/test',
    });
    const heading = screen.getByText('test heading');
    expect(heading).toBeInTheDocument();
  });

  it('should render the description', () => {
    render({
      heading: 'test',
      description: 'test description',
      filePath: '/test',
    });
    const description = screen.getByText('test description');
    expect(description).toBeInTheDocument();
  });

  it('should render the file icon when icon is passed', () => {
    render({
      heading: 'test',
      description: 'test',
      filePath: '/test',
      icon: <FileJsonIcon title='JSON Icon' />,
    });
    const fileIcon = screen.getByTitle('JSON Icon');
    expect(fileIcon).toBeInTheDocument();
  });

  it('should be focusable', () => {
    render({
      heading: 'test',
      description: 'test',
      filePath: '/test',
    });
    const fileCard = screen.getByLabelText('test');
    fileCard.focus();
    expect(fileCard).toHaveFocus();
  });

  it('should have class "isMobile", when isMobile is true', () => {
    mockIsMobile = true;
    render({
      heading: 'test',
      description: 'test',
      filePath: '/test',
    });
    const fileCard = screen.getByLabelText('test label');
    expect(fileCard.classList).toContain('isMobile');
  });
});

const render = (props: FileCardProps) => renderRtl(<FileCard {...props} />);
