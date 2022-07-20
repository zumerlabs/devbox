// 👇️ if using ES6 imports uncomment next line
// import {readFile, writeFile, writeFileSync, promises as fsPromises} from 'fs';
const { readFile, writeFile, promises: fsPromises } = require('fs')

const pkg = require('../package.json')

async function replaceInFile (filename, replacement) {
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8')
    const replaced = contents.replace(/(?<=\<!--VERSION-->v)(.*?)(?=\<!--\/VERSION-->)/, replacement)

    await fsPromises.writeFile(filename, replaced)
  } catch (err) {
    console.log(err)
  }
}

replaceInFile('./README.md', pkg.version)
