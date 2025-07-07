# Node.Template

A minimal TypeScript template.

## Release workflow

1. Ensure all commits follow Conventional Commits.
2. Run `pnpm release` to update the version and `CHANGELOG.md` based on commit history.
3. Push the generated tag and updated files: `git push --follow-tags`.
4. Publish the package if desired: `pnpm publish`.
