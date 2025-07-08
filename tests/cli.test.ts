import { execa } from 'execa';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cli = path.join(__dirname, '..', 'src', 'index.ts');

describe('cli greet command', () => {
  it('prints greeting', async () => {
    const { stdout } = await execa('tsx', [cli, 'greet', 'John']);
    expect(stdout).toContain('Hello John!');
  });
});
