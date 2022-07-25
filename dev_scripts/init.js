import { Command } from 'commander'
import chalk from 'chalk'
let projectName
function init() {
    const program = new Command()
    .arguments('<project-directory>')
    .usage(`${chalk.green('<project-directory>')} [options]`)
    .action(name => {
      projectName = name
      console.log(projectName)
    })
    .parse(process.argv);
    if (typeof projectName === 'undefined') {
        console.error('Please specify the project directory:');
        
        console.log();
        console.log('For example:');
        
        console.log();
        console.log(
          `Run  to see all options.`
        );
        process.exit(1);
      }
}


init()