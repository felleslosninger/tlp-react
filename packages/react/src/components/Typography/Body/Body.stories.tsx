import { Body } from './Body';

export default {
  title: 'Components/Typography/Body',
  component: Body,
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
    children: 'Body',
    size: 'medium',
  },
};
