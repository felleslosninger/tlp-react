import React, { useState } from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { HeaderProps } from './Header';
import { Header } from './Header';

jest.mock('react', () => {
  const originalModule = jest.requireActual('react');
  return {
    ...originalModule,
    useState: jest.fn(),
    useEffect: jest.fn(),
  };
});

describe('Header', () => {
  beforeEach(() => {
    (useState as jest.Mock).mockImplementation(() => [jest.fn()]);
  });

  it('should have the header class', () => {
    render({
      children: [<Header.Left key={1}>test</Header.Left>],
    });
    const header = screen.getByRole('banner');
    expect(header.classList).toContain('header');
  });

  it('should render HeaderLeft component', () => {
    render({
      children: [<Header.Left key={1}>test</Header.Left>],
    });
    const headerLeft = screen.getByText('test');
    expect(headerLeft).toBeInTheDocument();
  });

  it('should render HeaderMiddle component when isMobile is false', () => {
    (useState as jest.Mock).mockImplementationOnce(() => [false, jest.fn()]);
    render({
      children: [<Header.Middle key={1}>test</Header.Middle>],
    });
    const headerMiddle = screen.getByText('test');
    expect(headerMiddle).toBeInTheDocument();
  });

  it('should not render HeaderMiddle component when isMobile is true', () => {
    (useState as jest.Mock).mockImplementationOnce(() => [true, jest.fn()]);
    render({
      children: [<Header.Middle key={1}>test</Header.Middle>],
    });
    expect(screen.queryByText('test')).toBeNull();
  });

  it('should render HeaderRight component when isMobile is false', () => {
    (useState as jest.Mock).mockImplementationOnce(() => [false, jest.fn()]);
    render({
      children: [<Header.Right key={1}>test</Header.Right>],
    });
    const headerRight = screen.getByText('test');
    expect(headerRight).toBeInTheDocument();
  });

  it('should render HeaderBottom component when isMobile is false', () => {
    (useState as jest.Mock).mockImplementationOnce(() => [false, jest.fn()]);
    render({
      children: [<Header.Bottom key={1}>test</Header.Bottom>],
    });
    const headerBottom = screen.getByText('test');
    expect(headerBottom).toBeInTheDocument();
  });

  it('should not render HeaderBottom component when isMobile is true', () => {
    (useState as jest.Mock).mockImplementationOnce(() => [true, jest.fn()]);
    render({
      children: [<Header.Bottom key={1}>test</Header.Bottom>],
    });
    expect(screen.queryByText('test')).toBeNull();
  });

  it('should render HeaderMobile component when isMobile is true and showMenu is true', () => {
    (useState as jest.Mock)
      .mockImplementationOnce(() => [true, jest.fn()])
      .mockImplementationOnce(() => [true, jest.fn()]);
    render({
      children: [<Header.Mobile key={1}>test</Header.Mobile>],
    });
    const headerMobile = screen.getByText('test');
    expect(headerMobile).toBeInTheDocument();
  });

  it('should not render HeaderMobile component when isMobile is true and showMenu is false', () => {
    (useState as jest.Mock)
      .mockImplementationOnce(() => [true, jest.fn()])
      .mockImplementationOnce(() => [false, jest.fn()]);
    render({
      children: [<Header.Mobile key={1}>test</Header.Mobile>],
    });
    expect(screen.queryByText('test')).toBeNull();
  });
});

const render = (props: HeaderProps) =>
  renderRtl(<Header {...props}>{props.children}</Header>);
