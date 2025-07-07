#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const newName = process.argv[2];
if (!newName) {
  console.error('Usage: pnpm run customize <new-project-name>');
  process.exit(1);
}

// Update package.json
const pkgPath = path.resolve('package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.name = newName;
if (pkg.repository) delete pkg.repository;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// Update README header
const readmePath = path.resolve('README.md');
if (fs.existsSync(readmePath)) {
  const lines = fs.readFileSync(readmePath, 'utf8').split(/\r?\n/);
  lines[0] = `# ${newName}`;
  fs.writeFileSync(readmePath, lines.join('\n') + '\n');
}

// Update .idea files if present
const ideaDir = path.resolve('.idea');
if (fs.existsSync(ideaDir)) {
  const modulesXml = path.join(ideaDir, 'modules.xml');
  if (fs.existsSync(modulesXml)) {
    const xml = fs.readFileSync(modulesXml, 'utf8').replace(/Node\.Template/g, newName);
    fs.writeFileSync(modulesXml, xml);
  }

  const imlOld = path.join(ideaDir, 'Node.Template.iml');
  const imlNew = path.join(ideaDir, `${newName}.iml`);
  if (fs.existsSync(imlOld)) {
    fs.renameSync(imlOld, imlNew);
  }
}
