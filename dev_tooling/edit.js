const fs = require('fs')
const fsPromises = require('fs').promises;
const pkg = require('../package.json')
const dir = './dist'

async function replaceInFile (filename, replacement) {
  if (!fs.existsSync(dir)){fs.mkdirSync(dir)}
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8')
    const replaced = contents.replace(/(?<=\<!--VERSION-->v)(.*?)(?=\<!--\/VERSION-->)/, replacement)
    
    await fsPromises.writeFile(filename, replaced)
    await fsPromises.writeFile(`${dir}/${filename}`, replaced)
  } catch (err) {
    console.log(err)
  }
}

async function stripFile (filename) {
  try {
    var contents = pkg
    delete contents.devDependencies
    delete contents.standard
    delete contents.scripts
    delete contents.files

    await fsPromises.writeFile(`${dir}/${filename}`, JSON.stringify(contents, undefined, 4))
  } catch (err) {
    console.log(err)
  }
}

replaceInFile('./README.md', pkg.version)
stripFile('./package.json')
