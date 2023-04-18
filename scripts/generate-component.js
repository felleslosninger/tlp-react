const componentName = process.argv[2];
const componentPath = 'src/components/';
const { mkdir, writeFile } = require('fs').promises;

(async function main() {
  // Content for tsx file
  const tsxContent = `import React from 'react';
import cn from 'classnames';

import classes from './${componentName}.module.css';

interface ${componentName}Props {
  children: React.ReactNode;
}

const ${componentName} = ({ children }: ${componentName}Props) => {
  return <div className={cn(classes.myClass)}>{children}</div>;
};

export { ${componentName} };
export type { ${componentName}Props };
`;

  // Content for CSS file
  const cssContent = `.myClass {
  color: red;
}
`;

  // Content for export file
  const exportContent = `export { ${componentName} } from './${componentName}';
export type { ${componentName}Props } from './${componentName}';
`;

  // Content for test file
  const testContent = `import React from 'react';
import { render as renderRtl, screen } from '@testing-library/react';

import type { ${componentName}Props } from './${componentName}';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('should have the myClass class', () => {
    render({
      children: 'myComponent',
    });
    const list = screen.getByRole('list');
    expect(list.classList).toContain('myClass');
  });
});

const render = (props: ${componentName}Props) =>
  renderRtl(<${componentName} {...props}>{props.children}</${componentName}>);
`;

  // Content for story file
  const storyContent = `import { ${componentName} } from './${componentName}';

export default {
  title: 'Components/${componentName}',
  component: ${componentName},
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
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
    children: 'myComponent',
  },
};
`;

  if (componentName === undefined) {
    console.log(' ');
    console.log(
      '======================================================================================',
    );
    console.log(
      '| Please enter the component name as an argument to the genereate-component function |',
    );
    console.log(
      '======================================================================================',
    );
    console.log(' ');
    return;
  }

  // Folder
  mkdir(`${componentPath}/${componentName}`).catch(console.error);

  // Tsx
  writeFile(
    `${componentPath}/${componentName}/${componentName}.tsx`,
    tsxContent,
  );

  // Css
  writeFile(
    `${componentPath}/${componentName}/${componentName}.module.css`,
    cssContent,
  );

  // Export
  writeFile(`${componentPath}/${componentName}/index.ts`, exportContent);

  // Test
  writeFile(
    `${componentPath}/${componentName}/${componentName}.test.tsx`,
    testContent,
  );
  // Story
  writeFile(
    `${componentPath}/${componentName}/${componentName}.stories.tsx`,
    storyContent,
  );

  console.log(' ');
  console.log('=========================================');
  console.log('The component was created successfully! |');
  console.log('=========================================');
  console.log(' ');
})();
