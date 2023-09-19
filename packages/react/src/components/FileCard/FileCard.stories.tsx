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
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
    filePath: '/test',
    fileName: 'test',
  },
};

export const Secondary = {
  args: {
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
    brand: 'secondary',
    filePath: '/test',
    fileName: 'test',
  },
};

export const Tertiary = {
  args: {
    heading: 'Dette er en fil',
    subHeading: 'Dette er en filbeskrivelse',
    brand: 'tertiary',
    filePath: '/test',
    fileName: 'test',
  },
};
