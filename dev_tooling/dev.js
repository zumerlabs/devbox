const pkq = require('../package.json')
const esbuild = require('esbuild')
const watchDev = async (formats) => {
  formats.forEach(format => {
    esbuild
      .build({
        entryPoints: ['src/index.mjs'],
        bundle: true,
        format,
        outfile: `public/js/${format}/${pkq.name}.js`,
        watch: true,
        metafile: true,
        watch: {
          async onRebuild (error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:', await esbuild.analyzeMetafile(result.metafile))
          }
        }
      })
  })
}

watchDev(['esm', 'iife'])
  .then(result => {
    console.log('watching...')
  })
  .then(result => {
    esbuild.serve({
      servedir: 'public'
    }, {
      entryPoints: ['src/index.js']
    }).then(server => {
      console.log('serving...')
      console.log('host: ', server.host, ':', server.port)
    })
  })
