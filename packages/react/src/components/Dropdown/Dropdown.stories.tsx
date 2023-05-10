import React, { useState, useRef } from 'react';
import {
  EnterIcon,
  PersonCircleIcon,
  HouseIcon,
  HouseHeartIcon,
  KeyVerticalIcon,
} from '@navikt/aksel-icons';
import { Button } from '@digdir/design-system-react';

import { Dropdown } from './Dropdown';

const CHILDREN = [
  <Dropdown.Item key={1}>Altinn</Dropdown.Item>,
  <Dropdown.Item key={2}>Ansattporten</Dropdown.Item>,
  <Dropdown.Item key={3}>Digdir</Dropdown.Item>,
  <Dropdown.Item key={4}>Min profil</Dropdown.Item>,
  <Dropdown.Item key={5}>Logg ut</Dropdown.Item>,
];

const CHILDRENWITHICONS = [
  <Dropdown.Item
    icon={<HouseIcon fontSize='1.2rem' />}
    key={1}
  >
    Altinn
  </Dropdown.Item>,
  <Dropdown.Item
    icon={<KeyVerticalIcon fontSize='1.2rem' />}
    key={2}
  >
    Ansattporten
  </Dropdown.Item>,
  <Dropdown.Item
    icon={<HouseHeartIcon fontSize='1.2rem' />}
    key={3}
  >
    Digdir
  </Dropdown.Item>,
  <Dropdown.Item
    icon={<PersonCircleIcon fontSize='1.2rem' />}
    key={4}
  >
    Min profil
  </Dropdown.Item>,
  <Dropdown.Item
    icon={<EnterIcon fontSize='1.2rem' />}
    key={5}
  >
    Logg ut
  </Dropdown.Item>,
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Dark',
          value: '#1E2B3C',
        },
        {
          name: 'Light',
          value: '#FFFFFF',
        },
      ],
    },
  },
};

export const NormalWithButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownButtonRef = useRef<HTMLButtonElement>(null);
  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: 'relative',
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        height: '300px',
      }}
    >
      <Button
        ref={dropdownButtonRef}
        onClick={handleToggleDropdown}
      >
        Åpne nedtrekksliste
      </Button>
      <div> test</div>
      {isOpen && (
        <Dropdown
          open={isOpen}
          anchorEl={dropdownButtonRef.current}
        >
          <Dropdown.Item key={1}>Altinn</Dropdown.Item>
          <Dropdown.Item key={2}>Ansattporten</Dropdown.Item>
          <Dropdown.Item key={3}>Digdir</Dropdown.Item>
          <Dropdown.Item key={4}>Min profil</Dropdown.Item>
          <Dropdown.Item
            key={5}
            as='a'
          >
            Logg ut
          </Dropdown.Item>
        </Dropdown>
      )}
    </div>
  );
};

export const Normal = {
  args: {
    children: CHILDREN,
  },
};

export const WithIcons = {
  args: {
    children: CHILDRENWITHICONS,
  },
};
