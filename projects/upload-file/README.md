npm i @sparrowmini/tx-upload-file

import module
import {
  UploadFileModule,
  BASE_PATH as UploadFileBasePath,
  CONFIGURATION as UploadFileConfig,
} from '@sparrowmini/tx-upload-file';

config provider

    { provide: UploadFileBasePath, useValue: environment.fileServiceApi },
    { provide: UploadFileConfig, useValue: { bucket: 'sportunione-1252583813', region: 'ap-guangzhou' } },

上传模式
<lib-upload-file [attachments]="attachments" [multiple]="true"></lib-upload-file>

只读模式
disableUpload
<lib-upload-file [attachments]="attachments" [disableUpload]="true"></lib-upload-file>


allowSyntheticDefaultImports

调试的时候,需要在主应用安装一下依赖
npm i cos-js-sdk-v5@1.5.0 ts-md5@1.3.1
ng build upload-file --watch
npm link
在主应用里执行
npm link @sparrowmini/tx-upload-file
记得启用
"allowSyntheticDefaultImports": true,
"preserveSymlinks": true,


add this in tsconfig.lib.json
    "paths": {
      "@shared/*": ["app/shared/*"],
      "rxjs": [
        "node_modules/rxjs"
      ],
      "rxjs/*": [
        "node_modules/rxjs/*"
      ]
    },
