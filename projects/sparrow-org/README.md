# SparrowOrg

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Code scaffolding

Run `ng generate component component-name --project sparrow-org` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sparrow-org`.
> Note: Don't forget to add `--project sparrow-org` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build sparrow-org` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sparrow-org`, go to the dist folder `cd dist/sparrow-org` and run `npm publish`.

## Running unit tests

Run `ng test sparrow-org` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


0.1.3 add employee selection

安装nanoedirot,在angular.json的build的assets里加上
{
      "glob": "**/*",
      "input": "node_modules/monaco-editor",
      "output": "assets/monaco-editor"
    },
