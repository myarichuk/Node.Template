#!/usr/bin/env node
import { execSync } from 'child_process';

try {
  execSync('pnpm -v', { stdio: 'ignore' });
} catch {
  console.error('pnpm is required but was not found. Install it from https://pnpm.io.');
  process.exit(1);
}

