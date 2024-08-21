import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import COS from 'cos-js-sdk-v5';
import { Md5 } from 'ts-md5';
import { BASE_PATH, COLLECTION_FORMATS, COS_CONFIG } from '../variables';
import { Configuration } from '../configuration';

@Injectable()
export class CosFileService {


  protected basePath = 'http://localhost:4421/org-service';
  protected cosConfig: any = {};
  public defaultHeaders = new HttpHeaders();
  public configuration = new Configuration();
  protected cos!: COS;
  protected cosDownload!: COS;

  constructor(protected httpClient: HttpClient, @Optional() @Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration, @Optional() @Inject(COS_CONFIG) cosConfig: any) {
    if (basePath) {
      this.basePath = basePath;
    }
    if (configuration) {
      this.configuration = configuration;
      this.basePath = basePath || configuration.basePath || this.basePath;
    }

    this.cosConfig = cosConfig
    let that = this;

    this.cos = new COS({
      getAuthorization: function (options, callback) {
        // that.objService
        //   .getUploadTmpKey('apply_ico_delete.png')
        that.httpClient
          .get(that.basePath + '/cos/tx/uploadTmpKeys?fileName=sad')
          .subscribe((res: any) => {
            callback({
              TmpSecretId: res.credentials.tmpSecretId,
              TmpSecretKey: res.credentials.tmpSecretKey,
              SecurityToken: res.credentials.sessionToken,
              StartTime: res.startTime, // 时间戳，单位秒，如：1580000000
              ExpiredTime: res.expiredTime, // 时间戳，单位秒，如：1580000000
            });
          });
      },
    });

    this.cosDownload = new COS({
      getAuthorization: function (options, callback) {
        // that.objService
        //   .getUploadTmpKey('apply_ico_delete.png')
        that.httpClient
          .get(that.basePath + '/cos/tx/downloadTmpKeys?fileName=sad&path=*')
          .subscribe((res: any) => {
            callback({
              TmpSecretId: res.credentials.tmpSecretId,
              TmpSecretKey: res.credentials.tmpSecretKey,
              SecurityToken: res.credentials.sessionToken,
              StartTime: res.startTime, // 时间戳，单位秒，如：1580000000
              ExpiredTime: res.expiredTime, // 时间戳，单位秒，如：1580000000
            });
          });
      },
    });
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    for (const consume of consumes) {
      if (form === consume) {
        return true;
      }
    }
    return false;
  }




  async uploadFile(
    storage: any,
    file: File,
    fileName: any,
    dir: any,
    evt: any,
    url: any,
    options: any
  ) {
    //do something
    console.log(url)
    console.log(storage, file, fileName, dir, evt, url, options);

    let attachment = {
      name: file.name,
      url: '',
      hash: '',
      bucket: this.cosConfig.bucket,
      region: this.cosConfig.region,
      path: 'upload/',
      type: file.type || file.name.split('.')[file.name.split('.').length - 1],
      size: file.size,
      file: file,
    };

    const $filereq = file
      .text()
      .then((x: any) => Md5.hashAsciiStr(x))
      .then((hash: any) => {
        attachment.hash = hash;
        return attachment;
      })
      .then(async (attachment: any) => {
        await this.cos
          .putObject({
            Bucket: attachment.bucket,
            Region: attachment.region,
            Key: attachment.path + attachment.hash,
            Body: file,
            onProgress: evt,
          })
          .then((res: any) => {
            attachment.url = 'https://' + res.Location;
            attachment.progress = 100;
          });
      });
    await $filereq;
    console.log(attachment);
    return attachment;
  }

  async deleteFile(fileInfo: any) {
    //do something
    console.log(fileInfo);
  }
  async downloadFile(fileInfo: any, options: any) {
    console.log('00000', fileInfo);
    let that = this

    this.cosDownload.getObject({
      Bucket: fileInfo.bucket, /* Your bucket name. Required. */
      Region: fileInfo.region,  /* Bucket region, such as `ap-beijing`. Required. */
      Key: fileInfo.path + fileInfo.url.split('/')[fileInfo.url.split('/').length - 1],  /* Object key stored in the bucket (such as `1.jpg` and `a/b/test.txt`). Required. */
      DataType: 'blob',        // 非必须
      onProgress: function (progressData) {
        console.log(JSON.stringify(progressData));
      },
    }, function (err, data) {

      console.log(err || data);
      let downloadURL = URL.createObjectURL(data.Body as Blob);
      // window.open(downloadURL);

      var anchor = document.createElement("a");
      anchor.download = fileInfo.name;
      anchor.href = downloadURL;
      anchor.click();
      // let file = new File([data.Body], 'file.json', { type: 'application/octet-stream' });
      // let url = window.URL.createObjectURL(file);
      // var pwa = window.open(url);
      // if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      //   alert('Please disable your Pop-up blocker and try again.');
      // }
    });

    // let blob
    // await this.http.get(fileInfo.url,{responseType: 'arraybuffer'}).subscribe(res=>
    //   blob = res
    // )
    // return blob
    // return NativePromise.resolve(file);
  }
}
