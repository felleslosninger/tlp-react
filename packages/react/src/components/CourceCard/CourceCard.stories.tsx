import { CourceCard } from './CourceCard';

export default {
  title: 'Components/CourceCard',
  component: CourceCard,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
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

export const Primary = {
  args: {
    date: new Date(2023, 8, 10),
    brand: 'primary',
  },
};

export const Secondary = {
  args: {
    date: new Date(2023, 8, 10),
    brand: 'secondary',
  },
};

export const Tertiary = {
  args: {
    date: new Date(2023, 8, 10),
    brand: 'tertiary',
  },
};
