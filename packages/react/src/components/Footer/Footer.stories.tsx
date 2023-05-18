/* eslint-disable react/jsx-key */
import React from 'react';

import { Footer } from './Footer';

const Children = [
  <Footer.Column>
    <h2>Åpningstider</h2>
  </Footer.Column>,
  <Footer.Column>
    <h2>E-post</h2>
  </Footer.Column>,
  <Footer.Column>
    <h2>Viktige lenker</h2>
  </Footer.Column>,
  <Footer.Bottom>
    Tjenesten er levert av Digitaliseringsdirektoratet
  </Footer.Bottom>,
];

export default {
  title: 'Components/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    children: Children,
  },
};
