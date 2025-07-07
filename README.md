# Node.Template

A simple template for a quick and convenient jumpstart of your project.

## Prerequisites

- [Node.js](https://nodejs.org/) >= 22
- [pnpm](https://pnpm.io/) >= 10
- Use `nvm use` to switch to the Node.js version from `.nvmrc`
- Project uses ES modules (`type: module`)

## Available Scripts

- `pnpm dev` - start development mode with automatic reload
- `pnpm start` - run the compiled application
- `pnpm build` - compile TypeScript sources to `dist`
- `pnpm lint` - type-check the project
- `pnpm test` - run the example test suite
- `pnpm customize <name> [owner]` - replace template placeholders with `<name>`.
  If `owner` is provided, the `LICENSE` header will be updated with the
  specified copyright holder. The year is automatically set to the current one.

## Creating a New Project

1. Clone this repository and verify `pnpm` is available:
   ```bash
   node scripts/check-pnpm.mjs
   ```
2. Install dependencies:
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
