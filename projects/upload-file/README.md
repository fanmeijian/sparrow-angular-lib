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


<lib-upload-file [attachments]="attachments"></lib-upload-file>

只读模式
disableUpload
<lib-upload-file [attachments]="attachments" [disableUpload]="true"></lib-upload-file>
allowSyntheticDefaultImports
