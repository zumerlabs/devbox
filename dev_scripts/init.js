import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import npmName from 'npm-name'
let projectName
function init() {
    const program = new Command()
    .arguments('<project-name>')
    .usage(`${chalk.green('<project-name>')} [options]`)
    .action(async name => {
      projectName = name
      console.log(projectName)
      console.log(await npmName(projectName))
      try {
        await npmName(projectName)
      } catch (error) {
        console.log(error.message);
        // Invalid package name: _ABC
        // - name cannot start with an underscore
        // - name can no longer contain capital letters
      }
      // check npm name
      // if available console and create folder and keeop name
      // else not avilable : change or no problem I dont  want to publish (overrride)
      // 
      //fs.mkdirSync(`./${projectName}`)
      //fs.copyFile('./dev_scripts/README.md', `./${projectName}/README2.md`, (err) => {
      //  if (err) throw err;
          
      //  console.log('File Copy Successfully.');
      //});
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