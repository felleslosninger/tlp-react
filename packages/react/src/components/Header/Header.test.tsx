import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { HeaderProps } from './Header';
import { Header } from './Header';

describe('Header', () => {
  it('should have the header class', () => {
    render();
    const header = screen.getByRole('banner');
    expect(header.classList).toContain('header');
  });
});

const render = (props?: HeaderProps) => renderRtl(<Header {...props} />);
