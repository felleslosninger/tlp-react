import { LinkList } from './LinkList';

export default {
  title: 'LinkList',
  component: LinkList,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'inline-radio' },
    title: { control: 'inline-radio' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    state: 'normal',
    title: 'linkTitle',
  },
};
