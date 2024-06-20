import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';

import terser from './rollup-terser.mjs';
import packageJson from './package.json';
import { generateScopedName } from './rollup/hash-css-name.mjs';

// css files needs to be bundled
const altinnFigmaTokensExceptCss = /@altinn\/figma-design-tokens.*(?<!css)$/;

const plugins = [
  peerDepsExternal(),
  resolve(),
  commonjs(),
  json(),
  typescript({ tsconfig: './tsconfig.build.json' }),
  svgr({ exportType: 'named' }),
  postcss({
    extract: true,
    modules: {
      generateScopedName,
    },
  }),
  terser(),
  image(),
  copy({
    targets: [
      { src: 'src/tokens/tokens.css', dest: 'dist' },
      { src: 'src/styles/**/*.css', dest: 'dist/styles' },
    ],
  }),
];

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
      },
      {
        file: packageJson.module,
        format: 'esm',
      },
    ],
    external: [
      altinnFigmaTokensExceptCss,
      /@react-hookz\/web/,
      /@radix-ui\/react-popover$/,
      /react-number-format/,
      /react-leaflet/,
      /leaflet/,
      /@navikt\/ds-icons/,
    ],
    plugins,
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/@altinn\/figma-design-tokens/, /\.css$/],
  },
];
