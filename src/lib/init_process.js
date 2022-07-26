import fs from 'fs'
const fsPromises = fs.promises;
import pkg from '../../package.json' assert { type: 'json' };
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

async function prepareTemplate (filename, replacements, outDir, type) {
  if (!fs.existsSync(outDir)){fs.mkdirSync(outDir)}
  try {
    const contents = await fsPromises.readFile(filename, 'utf-8')
    if (type === 'text') {
      replacements.forEach(el => {
        let regex = new RegExp(`/(?<=\<!--${el.toUpperCase()}-->v)(.*?)(?=\<!--\/${el.toUpperCase()}-->)/`, 'g')
        contents.replace(regex, el)
      })
      await fsPromises.writeFile(`${outDir}/${filename}`, contents)
    } else {
      replacements.forEach(el => {
        filename[el] = el
      })
      await fsPromises.writeFile(`${outDir}/${filename}`, JSON.stringify(filename, undefined, 3))
    }
  } catch (err) {
    console.log(err)
  }
}

export async function populaTemplate (answers) {
  console.log(JSON.stringify(answers, null, '  '))
  // README.md > change <name>, <license> 
  // package.json > change <name>, <license>, chequear si van todos los scripts...
  // .release-it.json > github/gitlab? , proxy?, npm?, changelog?
  // .env > github_token if release it, proxy?
  // demo on build
}


replaceInFile('./README.md', pkg.version)
stripFile('./package.json')
