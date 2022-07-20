const pkq = require('../package.json')
const setBanner = (platform) => {
  const template = `/**
* ${pkq.name}
* v.${pkq.version} (platform ${platform === 'neutral' ? 'es module' : platform})
* Author ${pkq.author}
* License ${pkq.license}
**/`
  return template
}

const esbuild = require('esbuild')

const build = async (platforms) => {
  platforms.forEach(platform => {
    esbuild
      .build({
        entryPoints: ['src/index.mjs'],
        bundle: true,
        platform,
        outfile: `dist/${platform === 'neutral' ? 'module' : platform}/${pkq.name}.js`,
        metafile: true,
        minify: true,
        banner: {
          js: setBanner(platform)
        }
      })
      .then(async (result) => {
        if (result.errors.length > 0 || result.warnings.length > 0) {
          if (result.errors.length > 0) console.log('build failed:', result.errors)
          if (result.warnings.length > 0) console.log('build warning:', result.warnings)
        } else {
          console.log('build succeeded:', await esbuild.analyzeMetafile(result.metafile))
        }
      })
  })
}

build(['neutral', 'browser', 'node'])
