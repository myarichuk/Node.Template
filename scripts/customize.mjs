#!/usr/bin/env node
/**
 * Script used to customise this template after cloning.
 *
 * Usage: `pnpm run customize <new-project-name> [owner] [type]`
 *
 * It updates the project metadata (package.json, LICENSE, README and
 * IntelliJ IDEA configuration) so that the template is ready to use
 * under the given name and owner.
 */
import fs from 'fs';
import path from 'path';

const newName = process.argv[2];
const newOwner = process.argv[3] ?? newName;
const projectType = process.argv[4] ?? 'api';
if (!['api', 'website'].includes(projectType)) {
  console.error('Type must be "api" or "website"');
  process.exit(1);
}
if (!newName) {
  console.error('Usage: pnpm run customize <new-project-name> [owner] [type]');
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

// Generate example source depending on chosen type
const indexPath = path.resolve('src', 'index.ts');
let source = '';
if (projectType === 'website') {
  const publicDir = path.resolve('public');
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(
    path.join(publicDir, 'index.html'),
    '<!DOCTYPE html><html><body><h1>Hello world!</h1></body></html>\n',
  );
  source = `import express from 'express';\nimport path from 'path';\n\nconst app = express();\nconst port = process.env.PORT ?? 3000;\n\napp.use(express.static('public'));\napp.get('/', (_req, res) => {\n  res.sendFile(path.resolve('public/index.html'));\n});\n\nif (import.meta.main) {\n  app.listen(port, () => {\n    console.log(\`Server running on port ${port}\`);\n  });\n}\n\nexport default app;\n`;
} else {
  source = `import express from 'express';\n\nconst app = express();\nconst port = process.env.PORT ?? 3000;\n\napp.get('/', (_req, res) => {\n  res.json({ message: 'Hello world!' });\n});\n\nif (import.meta.main) {\n  app.listen(port, () => {\n    console.log(\`Server running on port ${port}\`);\n  });\n}\n\nexport default app;\n`;
}
fs.writeFileSync(indexPath, source);
