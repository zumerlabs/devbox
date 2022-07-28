# DEVBOX

DevBox is a tool for providing a pleasant development environment for ESM libraries.

## FEATURES

DevBox provides out of the box:

- Dev server
- Bundler
- Linter
- Test runner 
- Releaser to Github or Gitlab
- Publish your library to NPM without development setting
- Keep a changelog

## USAGE
`npx devbox <your library name>` 

### FLOW

#### START
1. Run `npx devbox <your library name>` 
2. Answer prompt questions
    2.1. Author
    2.2. License
    2.3. Keep a changelog file?
    2.4. Release on Github o Gitlab?
    2.5. Publish on NPM?
    2.6. Include an static demo site ?
2. `cd <your library name> && npm install`
3. `npm run dev`

#### BUILD
`npm run build`

#### RELEASE
`npm run release` // test before release --dry-run 

## CURRENT VERSION 
<!--VERSION-->v0.1.0<!--/VERSION-->