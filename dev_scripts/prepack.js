import fs from 'fs'
const fsPromises = fs.promises;
import pkg from '../package.json' assert { type: 'json' };
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
    // pkg.main = 
    delete pkg.devDependencies
    delete pkg.engines
    delete pkg.standard
    delete pkg.scripts
    delete pkg.files

    await fsPromises.writeFile(`${dir}/${filename}`, JSON.stringify(pkg, undefined, 4))
  } catch (err) {
    console.log(err)
  }
}

export async function populaTemplate (answers) {
  console.log(JSON.stringify(answers, null, '  '));
}


replaceInFile('./README.md', pkg.version)
stripFile('./package.json')
