import React from 'react';
import { FilePdfIcon } from '@navikt/aksel-icons';

import { FileCard } from './FileCard';

export default {
  title: 'Components/FileCard',
  component: FileCard,
  tags: ['autodocs'],
  argTypes: {
    brand: {
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'tertiary'],
      },
    },
  },
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
          value: '#00000',
        },
      ],
    },
  },
};

export const Normal = {
  args: {
    icon: <FilePdfIcon />,
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
  },
};

export const Secondary = {
  args: {
    icon: <FilePdfIcon />,
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
    brand: 'secondary',
  },
};

export const Tertiary = {
  args: {
    icon: <FilePdfIcon />,
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
    brand: 'tertiary',
  },
};
