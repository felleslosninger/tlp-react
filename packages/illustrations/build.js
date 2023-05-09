import fs from 'fs/promises';

import { rimraf } from 'rimraf';
import { transform } from '@svgr/core';
import camelcase from 'camelcase';
import { transformAsync } from '@babel/core';
import { minify } from 'terser';

const outputPath = './';

async function transformSVGtoJSX(file, componentName, format) {
  const content = await fs.readFile(`./svg/${file}`, 'utf-8');
  const svgReactContent = await transform(
    content,
    {
      icon: false,
    },
    { componentName },
  );

  console.log(componentName)

  const { code } = await transformAsync(svgReactContent, {
    presets: [['@babel/preset-react', { useBuiltIns: true }]],
  });

  if (format === 'esm') {
    const { code: minifiedCode } = await minify(code);
    return minifiedCode;
  }

  const replaceESM = code
    .replace(
      'import * as React from "react";',
      'const React = require("react");',
    )
    .replace('export default', 'module.exports =');

  const { code: minifiedCode } = await minify(replaceESM);
  return minifiedCode;
}

function indexFileContent(files, format, includeExtension = true) {
  let content = '';
  const extension = includeExtension ? '.js' : '';
  files.map((fileName) => {
    const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
      pascalCase: true,
      locale: false,
    })}`;
    const directoryString = `'./${componentName}${extension}'`;
    content +=
      format === 'esm'
        ? `export { default as ${componentName} } from ${directoryString};\n`
        : `module.exports.${componentName} = require(${directoryString});\n`;
  });
  return content;
}

async function buildIcons(format = 'esm') {
  let outDir = outputPath;
  if (format === 'esm') {
    outDir = `${outputPath}/dist/esm`;
  } else {
    outDir = `${outputPath}/dist/cjs`;
  }

  await fs.mkdir(outDir, { recursive: true });

  const files = await fs.readdir('./svg', 'utf-8');

  await Promise.all(
    files.flatMap(async (fileName) => {
      const componentName = `${camelcase(fileName.replace(/.svg/, ''), {
        pascalCase: true,
      })}`;
      const content = await transformSVGtoJSX(fileName, componentName, format);

      const types = `import * as React from 'react';\ndeclare function ${componentName}(props: React.SVGProps<SVGSVGElement>): JSX.Element;\nexport default ${componentName};\n`;

      // console.log(`- Creating file: ${componentName}.js`);
      await fs.writeFile(`${outDir}/${componentName}.js`, content, 'utf-8');
      await fs.writeFile(`${outDir}/${componentName}.d.ts`, types, 'utf-8');
    }),
  );

  console.log('- Creating file: index.js');
  await fs.writeFile(
    `${outDir}/index.js`,
    indexFileContent(files, format),
    'utf-8',
  );
  await fs.writeFile(
    `${outDir}/index.d.ts`,
    indexFileContent(files, 'esm', false),
    'utf-8',
  );
}

(function main() {
  console.log('🏗 Building icon package...');
  rimraf(`${outputPath}/dist`)
    .then(() => Promise.all([buildIcons('cjs'), buildIcons('esm')]))
    .then(() => console.log('✅ Finished building package.'));
})();
