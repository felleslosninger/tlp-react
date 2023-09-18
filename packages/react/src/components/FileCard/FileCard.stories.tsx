import { FileCard } from './FileCard';

export default {
  title: 'Components/FileCard',
  component: FileCard,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
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
    children: 'myComponent',
  },
};
