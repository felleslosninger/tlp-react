import React from 'react';
import {
  EnterIcon,
  PersonCircleIcon,
  HouseIcon,
  HouseHeartIcon,
  KeyVerticalIcon,
} from '@navikt/aksel-icons';
import {
  Button,
  ButtonVariant,
  ButtonColor,
} from '@digdir/design-system-react';

import { Dropdown } from './Dropdown';

const CHILDREN = [
  <Dropdown.Button key={0}>
    <Button
      variant={ButtonVariant.Quiet}
      color={ButtonColor.Secondary}
    >
      Klikk på meg
    </Button>
  </Dropdown.Button>,
  <Dropdown.Item key={1}>Altinn</Dropdown.Item>,
  <Dropdown.Item key={2}>Ansattporten</Dropdown.Item>,
  <Dropdown.Item key={3}>Digdir</Dropdown.Item>,
  <Dropdown.Item key={4}>Min profil</Dropdown.Item>,
  <Dropdown.Item key={5}>Logg ut</Dropdown.Item>,
];

const CHILDRENWITHICONS = [
  <Dropdown.Button key={0}>
    <p>Klikk på meg</p>
  </Dropdown.Button>,
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
