import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
let projectName
function init() {
    const program = new Command()
    .arguments('<project-name>')
    .usage(`${chalk.green('<project-name>')} [options]`)
    .action(name => {
      projectName = name
      console.log(projectName)
      fs.mkdirSync(`./${projectName}`)
      fs.copyFile('./dev_scripts/README.md', `./${projectName}/README2.md`, (err) => {
        if (err) throw err;
          
        console.log('File Copy Successfully.');
      });
    })
    .parse(process.argv)



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