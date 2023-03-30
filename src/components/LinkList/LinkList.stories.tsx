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
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    state: 'normal',
    title: 'Tittel',
  },
};

export const Inverted = {
  args: {
    state: 'inverted',
    title: 'Inverted list',
  },
};
