# UploadFile

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Code scaffolding

Run `ng generate component component-name --project upload-file` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project upload-file`.
> Note: Don't forget to add `--project upload-file` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build upload-file` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build upload-file`, go to the dist folder `cd dist/upload-file` and run `npm publish`.

## Running unit tests

Run `ng test upload-file` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

import module
import {
  UploadFileModule,
  BASE_PATH as UploadFileBasePath,
  CONFIGURATION as UploadFileConfig,
} from '@swordfan/upload-file';

config provider

    { provide: UploadFileBasePath, useValue: environment.fileServiceApi },
    { provide: UploadFileConfig, useValue: { bucket: 'sportunione-1252583813', region: 'ap-guangzhou' } },
