<h1 align="center">
    <img src="https://i.imgur.com/aa1IP0w.png" />
    <br/>  <br/>NPM Packages by TLP
</h1>

<div align="center">
<p>NPM packages maintained by the TLP team. Currently has a package of react components.</p>

<a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-yellowgreen" />
</a>

<a href="https://www.npmjs.com/package/@digdir/tlp-react">
    <img src="https://img.shields.io/npm/v/@digdir/tlp-react?label=@digdir/tlp-react&color=0051be" />
</a>

<hr>

</div>

## Get started with development ✨

### 1. Install Node and Pnpm 8

Make sure `node` and `pnpm 8` is installed. You can do this by running:

`node --version && yarn --version`

### 2. Install dependencies

_(run command from root of the project)_

`pnpm install`

### 3. Start storybook

Serve Storybook on localhost:

`yarn storybook`

## Commit ✍️

This ropo uses the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
specification in order to create nice and readable changelogs.
The [Semantic Versioning 2.0](https://semver.org/) specification is used for versioning.

## Release a new version 🚀

Follow these steps if you want to release a new version of the packages with Lerna.
Make sure you are in the **_main_** branch when doing so, to ensure the changelogs are generated correctly.

### 1. Build distribution files

Build distribution files for all the packages. Make sure they all run successfully before proceeding to next step.

`pnpm build`

### 2. Prepare new version

This suggests new versions (click enter), creates a new tag and commit with the changes and pushes them to git.
The new version-numbers for the packages are automatically created based on the commit messages.
Only non-private packages will be handled (package.json).

`pnpm lerna:version`

### 3. Publish

Publish the packages to NPM. Make sure you are logged in to your NPM account from the terminal you are trying to publish from.
Your account also has to be added to the Digdir organisation on NPM.

`pnpm lerna:publish`

## Styling 🎨

CSS modules are used for styling in this library. Camelcase is used as the naming convention for the classes.

## Testing 🪛

Run the following command to start the tests using React Testing Library

`pnpm test`
