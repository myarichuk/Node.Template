# Node.Template

A starter template for quickly bootstrapping a Node.js **CLI** project.

## Features

- **TypeScript** with strict settings
- ES module support
- Fast dependency management with **pnpm**
- **ESLint** and **Prettier** for consistent code style
- **Jest** for testing
- **Commander** for command parsing
- **Ora** and **Figlet** for a pleasant CLI experience
- **Husky** and **Commitlint** enforce Conventional Commits and run lint and tests on each commit
- `customize` script to rename the project and update the license
- Release workflow powered by **standard-version**

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- Use `nvm use` to switch to the Node.js version from `.nvmrc`
- Project uses ES modules (`type: module`)

## Available Scripts

- `pnpm dev` - start development mode with automatic reload
- `pnpm start` - run the compiled application
- `pnpm build` - compile TypeScript sources to `dist`
- `pnpm build:sea` - compile sources and produce a Single Executable Application (SEA)
- `pnpm lint` - run ESLint
- `pnpm test` - run the test suite
- `pnpm format` - format files with Prettier
- `pnpm customize <name> [owner]` - replace template placeholders with `<name>`. If `owner` is provided, the `LICENSE` header is updated. The year is automatically set to the current one.
- `pnpm release` - update the version and `CHANGELOG.md` using commit history

## Usage

After building the project you can run the CLI with:

```bash
pnpm start greet World
```

Which will display a greeting with a spinner and ASCII art header.

## Creating a New Project

1. Clone this repository and verify `pnpm` is available:
   ```bash
   node scripts/check-pnpm.mjs
   ```
2. Install dependencies (this also sets up Husky hooks automatically):
   ```bash
   pnpm install
   ```
3. Run the customize script with your project name and optional owner:
   ```bash
   pnpm run customize my-new-app "Jane Doe"
   ```
4. Commit the changes and start coding.

## Release workflow

1. Ensure all commits follow Conventional Commits.
2. Run `pnpm release` to update the version and `CHANGELOG.md` based on commit history.
3. Push the generated tag and updated files: `git push --follow-tags`.
4. Publish the package if desired: `pnpm publish`.

## Approving dependency build scripts

If `pnpm install` prints a warning about ignored build scripts (for example, `esbuild`), run:

```bash
pnpm approve-builds
```

If no packages are listed, the warning can be ignored.
