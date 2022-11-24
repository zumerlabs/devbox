import esbuild from 'esbuild'

const setBanner = (platform) => {
  const template = `/**
* ${process.env.npm_package_name}
* v.${process.env.npm_package_version} (platform ${platform === 'neutral' ? 'es module' : platform})
* Author ${process.env.npm_package_author}
* License ${process.env.npm_package_license}
**/`
  return template
}

const build = async (platforms) => {
  platforms.forEach(platform => {
    esbuild
      .build({
        entryPoints: ['src/index.mjs'],
        bundle: true,
        platform,
        outfile: `dist/${platform === 'neutral' ? 'module' : platform}/${process.env.npm_package_name}.js`,
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
build(['neutral'])
// build(['neutral', 'browser', 'node'])
