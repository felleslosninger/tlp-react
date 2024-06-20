/* eslint-disable react/jsx-key */
import React from 'react';

import { Footer } from './Footer';

const Children = [
  <Footer.Column>
    <h2>Åpningstider</h2>
    <p>test</p>
    <p>test</p>
    <p>testdewdewewdewdewdewdew dewdfewfwef fwewf </p>
  </Footer.Column>,
  <Footer.Column>
    <h2>E-post</h2>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
  </Footer.Column>,
  <Footer.Column>
    <h2>Viktige lenker</h2>
    <p>test</p>
  </Footer.Column>,
  <Footer.Bottom>
    Tjenesten er levert av Digitaliseringsdirektoratet
  </Footer.Bottom>,
];

const ChildrenSec = [
  <Footer.Column>
    <h2>Åpningstider</h2>
    <p>test</p>
    <p>test</p>
    <p>test test test test</p>
  </Footer.Column>,
  <Footer.Column>
    <h2>E-post</h2>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
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

export const Secondary = {
  args: {
    children: ChildrenSec,
  },
};
