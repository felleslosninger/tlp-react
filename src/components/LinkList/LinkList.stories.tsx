import { LinkList } from './LinkList';

export default {
  title: 'LinkList',
  component: LinkList,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'inline-radio' },
    title: { control: 'text' },
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
    state: 'normal',
    title: 'Tittel',
  },
  parameters: {
    layout: 'centered',
  },
};

export const Inverted = {
  args: {
    state: 'inverted',
    title: 'Inverted list',
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
