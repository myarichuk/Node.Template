# Node.Template

A starter template for quickly bootstrapping a Node.js project.

## Features

- **TypeScript** with strict settings
- ES module support
- Fast dependency management with **pnpm**
- **ESLint** and **Prettier** for consistent code style
- **Jest** for testing
- **Husky** and **Commitlint** enforce Conventional Commits and run lint and tests on each commit
- `customize` script to rename the project and update the license
- Release workflow powered by **standard-version**
- **Express** web server example
- **tsup** bundler for packaging
- Dockerfile for container deployments

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- Use `nvm use` to switch to the Node.js version from `.nvmrc`
- Project uses ES modules (`type: module`)

## Available Scripts

- `pnpm dev` - start development mode with automatic reload
- `pnpm start` - run the compiled application
- `pnpm build` - compile TypeScript sources to `dist`
- `pnpm bundle` - bundle the application with tsup
- `pnpm docker:build` - build a Docker image
- `pnpm docker:run` - run the Docker image locally
- `pnpm lint` - run ESLint
- `pnpm test` - run the test suite
- `pnpm format` - format files with Prettier
- `pnpm customize <name> [owner] [type]` - replace template placeholders with `<name>`. If `owner` is provided, the `LICENSE` header is updated. Optionally choose project `type` (`api` or `website`).
- `pnpm release` - update the version and `CHANGELOG.md` using commit history

## Creating a New Project

1. Clone this repository and verify `pnpm` is available:
   ```bash
   node scripts/check-pnpm.mjs
   ```
2. Install dependencies (this also sets up Husky hooks automatically):
   ```bash
   pnpm install
   ```
3. Run the customize script with your project name, owner and project type:
   ```bash
   pnpm run customize my-new-app "Jane Doe" api
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
