import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svgr from '@svgr/rollup';

// css files needs to be bundled
const altinnFigmaTokensExceptCss = /@altinn\/figma-design-tokens.*(?<!css)$/;

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/cjs/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/esm/index.js',
        format: 'esm',
      },
    ],
    external: [
      altinnFigmaTokensExceptCss,
      /@react-hookz\/web/,
      /react-number-format/,
      /react-leaflet/,
      /leaflet/,
      /@navikt\/aksel-icons/,
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      json(),
      typescript({ tsconfig: './tsconfig.json' }),
      svgr({ exportType: 'named' }),
      postcss(),
      image(),
    ],
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/@altinn\/figma-design-tokens/, /\.css$/],
  },
];
