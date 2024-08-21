使用腾讯cos作为formio的附件处理
1. 在项目的app.module.ts里面增加cosconfi和formioapp config
import {
  ApiModule as FormApiModule,
  BASE_PATH as FormApi_BASE_PATH,
  COS_CONFIG as COS_CONFIG,
} from '@sparrowmini/form-api';

{ provide: COS_CONFIG, useValue: {bucket: 'sportunione-1252583813',region: 'ap-guangzhou'}},
{provide: FormioAppConfig, useValue: {appUrl: "http://localhost:4200/asd",apiUrl: "http://localhost:4200/sd"}}

2. 在设计添加附件的时候,勾选storage为url


npm i cos-js-sdk-v5 ts-md5  
"allowSyntheticDefaultImports": true,
