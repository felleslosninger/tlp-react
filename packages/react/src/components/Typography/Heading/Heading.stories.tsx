import { Heading } from './Heading';

export default {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {},
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

export const Default = {
  args: {
    children: 'Heading',
    level: 1,
    size: 'large',
  },
};
