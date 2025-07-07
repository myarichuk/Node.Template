# Node.Template

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- Use `nvm use` to switch to the Node.js version from `.nvmrc`

## Available Scripts

- `pnpm dev` - start development mode with automatic reload
- `pnpm start` - run the compiled application
- `pnpm build` - compile TypeScript sources to `dist`
- `pnpm lint` - type-check the project
- `pnpm test` - run the example test suite
- `pnpm customize <name>` - replace template placeholders with `<name>`

## Creating a New Project

1. Clone this repository and install dependencies:
   ```bash
   pnpm install
   ```
2. Run the customize script with your project name:
   ```bash
   pnpm run customize my-new-app
   ```
3. Commit the changes and start coding.

## Release workflow

1. Ensure all commits follow Conventional Commits.
2. Run `pnpm release` to update the version and `CHANGELOG.md` based on commit history.
3. Push the generated tag and updated files: `git push --follow-tags`.
4. Publish the package if desired: `pnpm publish`.
