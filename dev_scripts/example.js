/**
 * Input prompt example
 */

 import inquirer from 'inquirer'
 // eslint-disable-next-line node/no-missing-import
 import chalkPipe from 'chalk-pipe'
 import { populaTemplate } from './prepack.js';
 
 const questions = [
   {
     type: 'input',
     name: 'author',
     message: "What's author name?",
   },
   {
     type: 'list',
     name: 'license',
     message: "What's library license",
     choices: [ 'MIT', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'GPL','LGPL','MPL-2', 'EPL-2.0'],
   },
   {
    type: 'confirm',
    name: 'changelog',
    message: "Keep a changelog",
    default: true
  },
  {
    type: 'confirm',
    name: 'repo',
    message: "Have a repo?",
    default: true
  },
  {
    type: 'list',
    name: 'release',
    message: "Release on Github or Gitlab?",
    choices: ['Github', 'Gitlab'],
    when(answers) {
      return answers.repo
    }
  },
  {
    type: 'confirm',
    name: 'npm',
    message: "Publish on NPM",
    default: true
  },
  {
    type: 'confirm',
    name: 'demo',
    message: "Demo site on build?",
    default: true
  }
 ]
 
 inquirer.prompt(questions).then((answers) => {
   populaTemplate(answers)
 })