import { Command } from 'commander';
import ora from 'ora';
import figlet from 'figlet';

export function createCLI(): Command {
  const program = new Command();

  program
    .name('node-template')
    .description('Example CLI powered by Node.Template')
    .version('1.0.0');

  program
    .command('greet <name>')
    .description('Print a greeting')
    .action(async (name: string) => {
      const spinner = ora('Preparing greeting').start();
      await new Promise((resolve) => setTimeout(resolve, 300));
      spinner.stop();
      console.log(`Hello ${name}!`);
    });

  return program;
}

export async function run(argv = process.argv) {
  console.log(figlet.textSync('Node CLI'));
  const program = createCLI();
  await program.parseAsync(argv);
}
