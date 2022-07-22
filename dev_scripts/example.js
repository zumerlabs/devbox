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
     name: 'first_name',
     message: "What's your first name",
   },
   {
     type: 'input',
     name: 'last_name',
     message: "What's your last name",
     default() {
       return 'Doe';
     },
   },
   {
     type: 'input',
     name: 'fav_color',
     message: "What's your favorite color",
     transformer(color, answers, flags) {
       const text = chalkPipe(color)(color);
       if (flags.isFinal) {
         return text + '!';
       }
 
       return text;
     },
   },
   {
     type: 'input',
     name: 'phone',
     message: "What's your phone number",
     validate(value) {
       const pass = value.match(
         /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
       );
       if (pass) {
         return true;
       }
 
       return 'Please enter a valid phone number';
     },
   },
 ]
 
 inquirer.prompt(questions).then((answers) => {
   populaTemplate(answers)
 })