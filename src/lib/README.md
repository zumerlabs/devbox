## Conventional Commits Cheat Sheet

### Types

**feat**: Features. A new feature

**fix**: Bug Fixes. A bug fix

**docs**: Docume­ntation. Docume­ntation only changes

**style**: Styles. Changes that do not affect the meaning of the code (white­-space, format­ting, missing semi-c­olons, etc)

**refactor**: Code Refact­oring. A code change that neither fixes a bug nor adds a feature

**perf**: Perfor­mance Improv­ements. A code change that improves perfor­mance

**test**: Tests. Adding missing tests or correcting existing tests

**build**: Builds. Changes that affect the build system or external depend­encies (example scopes: gulp, broccoli, npm)

**ci**: Continuous Integr­ations. Changes to our CI config­uration files and scripts (example scopes: Travis, Circle, Browse­rStack, SauceLabs)

**chore**: Chores. Other changes that don't modify src or test files

**revert**: Reverts. Reverts a previous commit

## Release it 

Use --dry-run to show the interactivity and the commands it would execute.

Use --only-version to use a prompt only to determine the version, and automate the rest.

Use --no-increment to not increment the last version, but update the last existing tag/version.

release-it major --preRelease=beta

Consecutive beta releases (2.0.0-beta.1 and so on): release-it --preRelease

release-it --preRelease=rc 

Use script hooks to run shell commands at any moment during the release process (such as before:init or after:release).

https://github.com/release-it/release-it/blob/master/docs/pre-releases.md


https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

https://nodejs.org/api/esm.html#modules-ecmascript-modules





