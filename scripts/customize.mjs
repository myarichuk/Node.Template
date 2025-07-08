#!/usr/bin/env node
/**
 * Script used to customise this template after cloning.
 *
 * Usage: `pnpm run customize <new-project-name> [owner]`
 *
 * It updates the project metadata (package.json, LICENSE, README and
 * IntelliJ IDEA configuration) so that the template is ready to use
 * under the given name and owner.
 */
import fs from 'fs';
import path from 'path';

const newName = process.argv[2];
const newOwner = process.argv[3] ?? newName;
if (!newName) {
  console.error('Usage: pnpm run customize <new-project-name> [owner]');
  process.exit(1);
}

// Update package.json: apply the new project name and drop template repo info
const pkgPath = path.resolve('package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = newName;
if (pkg.repository) delete pkg.repository;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// Update LICENSE year and owner so the copyright is correct
const licensePath = path.resolve('LICENSE');
if (fs.existsSync(licensePath)) {
  const licenseText = fs.readFileSync(licensePath, 'utf8');
  const year = new Date().getFullYear();
  const updated = licenseText.replace(
    /Copyright \(c\) \d{4} .+/,
    `Copyright (c) ${year} ${newOwner}`,
  );
  fs.writeFileSync(licensePath, updated);
}

// Update README header with the new project title
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  const lines = fs.readFileSync(readmePath, 'utf8').split(/\r?\n/);
  lines[0] = `# ${newName}`;
  fs.writeFileSync(readmePath, lines.join('\n') + '\n');
}

// Update .idea files if present to keep IntelliJ configuration in sync
const ideaDir = path.resolve('.idea');
if (fs.existsSync(ideaDir)) {
  const modulesXml = path.join(ideaDir, 'modules.xml');
  if (fs.existsSync(modulesXml)) {
    // Replace occurrences of the template name inside modules.xml
    const xml = fs
      .readFileSync(modulesXml, 'utf8')
      .replace(/Node\.Template/g, newName);
    fs.writeFileSync(modulesXml, xml);
  }

  const imlOld = path.join(ideaDir, 'Node.Template.iml');
  const imlNew = path.join(ideaDir, `${newName}.iml`);
  if (fs.existsSync(imlOld)) {
    // Rename the module file to match the new project name
    fs.renameSync(imlOld, imlNew);
  }
}
