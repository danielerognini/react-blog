# fic-design-system

## Before development

Create a `.npmrc` file in the design-system directory and paste the following lines:

```
@fortawesome:registry=https://npm.fontawesome.com/
//npm.fontawesome.com/:_authToken=<YOUR_FONTAWESOME_LICENSE>
```

Make sure to replace `<YOUR_FONTAWESOME_LICENSE>` with the real license. Without this step you won't be able to install the FontAwesome Pro dependencies.

## Development

```
yarn storybook
```

### How to test the changes of the Design System in a local environment

If you previously linked projects with `yarn link` you can unlink them by running:

- `yarn unlink` in the design-system root directory
- `yarn unlink "@fattureincloud/fic-design-system"` in the project that will use the design system

Install [yalc](https://github.com/whitecolor/yalc) by running the following command:

```
yarn global add yalc
```

yalc allows us to work with packages in local, without pushing them to the remote registry

It allows us to have a build of the latest local version of the design system inside the `node_modules` of our
main project

To achieve this we should run the following command in the design system project folder

```
yalc publish
```

This will add a folder named `@fattureincloud/fic-design-system` inside
`~/.yalc/packages/` which in turn will contain a folder for every design-system version

eg: `~/.yalc/packages/@fattureincloud/fic-design-system/0.1.83`

To link the built version to the main project you should run

```
yalc link @fattureincloud/fic-design-system
```

inside the main project folder

From now on once a design system build is executed (`yarn build` inside the design-system project
directory) it will be enough to run `yalc push` (also inside the design-system project
directory) to "send" it to the main project too.

If you need to change the package.json file inside the design system to install new
dependencies or change the existing ones you mustn't use the `yalc link` command.
You must run

```
yalc add @fattureincloud/fic-design-system
```

Otherwise the design-system version inside the package.json of the main project wouldn't change
and the new dependencies would not be installed

**WARNING!**

Differently from `yalc link` using the `yalc add` command the package.json of the main project
will be changed, so remember to reset your changes before the commit

## Deploy on npm

Bump the package version, using one of the npm commands:
`npm version patch`, `npm version minor`, `npm version major`

Trigger the rollup build pipeline

```
npm run build
```

Publish on npm

```
npm publish --access public
```

`npm version` creates a commit increasing the version number in package.json, so don't forget to push it:

```
git push
```
