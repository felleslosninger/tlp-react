const { execSync } = require('child_process');

function packEid() {
  const packageFilename = process.argv[2];

  if (!packageFilename) {
    console.error('No package filename provided.');
    return;
  }

  try {
    //delete old package
    execSync(`rimraf ./${packageFilename}`);
    execSync('pnpm build');
    //create new package
    execSync(`cd ./dist && pnpm pack`);
    console.log('pack-eid script executed successfully.');
  } catch (error) {
    console.error(
      'An error occurred while executing pack-eid script:',
      error.message,
    );
  }
}

packEid();
