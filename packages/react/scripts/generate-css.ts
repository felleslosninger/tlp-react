import path from 'path';

import postcss from 'postcss';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import glob from 'fast-glob';
import fs from 'fs-extra';

import { generateScopedName } from '../rollup/hash-css-name.mjs';

console.log({
  path: path.resolve(__dirname, '../src/**/*.css').replace(/\\/g, '/'),
});

const files = glob.sync(
  path.resolve(__dirname, '../**/*.css').replace(/\\/g, '/'),
);
const modules = files.filter((file) => file.endsWith('.module.css'));
const global = files.find((file) => file.endsWith('global.css'));

console.log({ files, modules, global });

function prepareFileName(filePath: string) {
  return path.basename(filePath).replace('.module.css', '.css');
}

if (typeof global !== 'string') {
  throw new Error('Could not find global.css file');
}

fs.writeJsonSync(
  path.join(__dirname, '../css-exports.json'),
  { modules: modules.map(prepareFileName), global: prepareFileName(global) },
  { spaces: 2 },
);

const outputFolder = path.resolve(__dirname, '../src/styles');
fs.ensureDirSync(outputFolder);

async function processFile(
  filePath: string,
  scopeBehaviour: 'local' | 'global',
) {
  const result = await postcss([
    postcssModules({
      generateScopedName,
      getJSON: () => {
        return;
      },
      scopeBehaviour,
    }),
    cssnano({ preset: 'default' }),
  ]).process(fs.readFileSync(filePath, 'utf-8'), {
    from: path.basename(filePath),
  });

  const fileName = prepareFileName(filePath);
  return fs.writeFile(path.join(outputFolder, fileName), result.css);
}

modules.forEach((file) => processFile(file, 'local'));
processFile(global, 'global');
