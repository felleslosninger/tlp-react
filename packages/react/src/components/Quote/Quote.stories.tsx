import { Quote } from './Quote';

export default {
  title: 'Components/Quote',
  component: Quote,
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
    children:
      'Do not go where the path may lead, go instead where there is no path and leave a trail.',
    author: 'Ralph Waldo Emerson',
  },
};