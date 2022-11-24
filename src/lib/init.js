import fs from 'fs'
import { Command } from 'commander'
import chalk from 'chalk'
import validate from 'validate-npm-package-name'
import fetch from 'node-fetch'
import HttpsProxyAgent from 'https-proxy-agent'
import { preguntas } from './prompts'
const proxy = new HttpsProxyAgent('http://www-proxy.mrec.ar:8080')
let libraryName
let initPrompt = false

export const program = new Command()
  .argument('<library-name>')
  .showHelpAfterError()
  .description('An application for pizza ordering')
  .usage(`${chalk.green('<library-name>')} [options]`)
  .action(async name => {
    libraryName = name

    // insert valitadeName fxn
    const validateRes = validate(libraryName)
    validateRes.warnings = validateRes.warnings || []
    validateRes.errors = validateRes.errors || []
    const validateErrors = [...validateRes.errors, ...validateRes.warnings].map(el => ` - ${el}`).join('\n')
    const resp = `- validating ${libraryName}... ${validateErrors ? '\n' + chalk.red(validateErrors) : chalk.green('ok')}`

    console.log(resp)
    if (validateErrors) console.log(chalk.gray('Change your library name and run me again'))

    if (!validateErrors) {
      try {
        // insert checkAvailabity
        const getNPM = await fetch(`https://registry.npmjs.com/${libraryName}`, { agent: proxy })
        const result = await getNPM.json()
        console.log('- checking availability on NPM...', result.error ? chalk.green('available!') : chalk.red('taken'))
        if (result.hasOwnProperty('error')) {
          initPrompt = true
        } else {
          console.log(chalk.gray('Try another library name and run me again'))
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (initPrompt) {
      // insert checkAvailabity
      console.log('- filling the blanks...')
      preguntas(true)
    }

    // insert buildTemplates

    // check npm name
    // if available console and create folder and keeop name
    // else not avilable : change or no problem I dont  want to publish (overrride)
    //
    fs.mkdirSync(`./${libraryName}`)
    fs.copyFile('./dev_scripts/README.md', `./${libraryName}/README2.md`, (err) => {
      if (err) throw err
      console.log('File Copy Successfully.')
    })
  })
  .parse()
