import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { BASE_PATH, CONFIGURATION } from '../variables';
import { UploadFileConfig } from '../lib/upload-file-config';

@Injectable({
  providedIn: 'root',
})
export class ObjectStorageService {
  protected basePath = 'http://localhost:8080/file-service';
  public defaultHeaders = new HttpHeaders();
  public configuration?: UploadFileConfig;

  constructor(
    protected httpClient: HttpClient,
    @Optional() @Inject(BASE_PATH) basePath: string,
    @Optional() @Inject(CONFIGURATION) configuration: UploadFileConfig
  ) {
    console.log(this.basePath + this.configuration);
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
    } else {
      this.configuration = { bucket: '', region: '' };
    }
  }

  getUploadTmpKey(fileName: string) {
    console.log(this.basePath);
    return this.httpClient.get(
      `${this.basePath}/cos/tx/uploadTmpKeys`,
      {
        params: new HttpParams({
          fromObject: {
            fileName: fileName,
            bucket: this.configuration ? this.configuration.bucket : '',
            region: this.configuration ? this.configuration.region : '',
          },
        }),
      }
    );
  }
}
