import path from 'path';

// @ts-ignore
import postcssPresetMantine from 'postcss-preset-mantine';
import postcss from 'postcss';
import cssnano from 'cssnano';
import postcssModules from 'postcss-modules';
import glob from 'fast-glob';
import fs from 'fs-extra';

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
    postcssPresetMantine,
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

export function hashCode(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    const chr = input.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return (hash + 2147483648).toString(16);
}

export function generateScopedName(selector: string, fileName: string) {
  const componentName = path
    .basename(fileName)
    .replace('.module', '')
    .replace('.css', '');
  return `m-${hashCode(`${componentName}-${selector}`)}`;
}
