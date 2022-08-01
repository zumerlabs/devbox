import esbuild from 'esbuild'
const watchDev = async (formats) => {
  formats.forEach(format => {
    esbuild
      .build({
        entryPoints: ['src/index.mjs'],
        bundle: true,
        format,
        outfile: `public/js/${format}/${process.env.npm_package_name}.js`,
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

watchDev(['esm'])
  .then(result => {
    console.log('watching...')
  })
  .then(result => {
    esbuild.serve({
      servedir: 'public'
    }, {
      entryPoints: ['src/index.mjs']
    }).then(server => {
      console.log('serving...')
      console.log('host: ', server.host, ':', server.port)
    })
  })
