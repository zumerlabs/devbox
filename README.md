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
- Semver versioning
- Standar commits
- Keep a changelog

## USAGE
`npx devbox <your library name>` 

### FLOW

#### START
1. Run `npx devbox <your library name>` 
2. Check if library name already exist on NPM. Options: name available, proceed; name taken, change or continue wo npm 
3. Answer questions

    - Author's name

    - License

    - Keep a changelog file?

    - Release on Github or Gitlab?

    - Publish on NPM? (if option 2 ok)

    - Include an static demo site on dist folder?

4. Time for DevBox to set up your development environment.
5. `cd <your library name> && npm install`
6. `npm run dev`
7. Happy coding 🥳

#### BUILD
`npm run build`

#### RELEASE
`npm run release` // test before release --dry-run 

## CURRENT VERSION 
<!--VERSION-->v0.1.0<!--/VERSION-->