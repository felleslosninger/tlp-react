import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { DropdownProps } from './Dropdown';
import { Dropdown } from './Dropdown';

describe('Dropdown', () => {
  it('should have the myClass class', () => {
    render({
      children: 'myComponent',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('myClass');
  });
});

const render = (props: DropdownProps) =>
  renderRtl(<Dropdown {...props}>{props.children}</Dropdown>);
