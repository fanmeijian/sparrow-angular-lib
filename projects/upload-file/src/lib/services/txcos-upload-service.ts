import { HttpClient, HttpEvent, HttpEventType, HttpParams, HttpResponse } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { map, Observable } from "rxjs";
import { Md5 } from "ts-md5";
import COS from 'cos-js-sdk-v5';
import { Attachment, CosConfig, UploadService } from "../upload-service";
import { DatePipe } from "@angular/common";

export const TxcosConfig = new InjectionToken<TxcosConfig>('cosConfig');

export interface TxcosConfig extends CosConfig {
  uploadTmpKeyUrl: string,
  downloadTmpKeyUrl: string,
}

@Injectable({
  providedIn: 'root'
})
export class TxcosUploadService implements UploadService {
  attachments: any = []
  config = this.txcosConfig
  cos!: COS
  constructor(
    private http: HttpClient,
    @Inject(TxcosConfig) private txcosConfig: TxcosConfig,
    private datePipe: DatePipe
  ) { }

  upload(file: File): Observable<any> {
    this.cos = new COS({
      getAuthorization: function (options, callback) {
        that.getUploadTmpKey("")
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

    let that = this;
    // 处理上传的文件
    let attachment = {
      name: file.name,
      url: '',
      bucket: this.config.bucket,
      region: this.config.region,
      path: this.config.path + this.datePipe.transform(new Date(),'yyyy/MM/dd') + '/',
      type: file.type,
      size: file.size,
      file: file,
    }


    return new Observable((observer) => {
      let file = attachment.file;
      file
        .text()
        .then((x) => Md5.hashAsciiStr(x))
        .then((hash) => {
          return Object.assign(attachment, { hash: hash });
        })
        .then((attachment: Attachment) => {
          that.cos
            .putObject({
              Bucket: attachment.bucket!,
              Region: attachment.region!,
              Key: attachment.path! + attachment.hash + '.' + this.getFileType(attachment.name),
              Body: file,
              onProgress: function (progressData: { loaded: number, percent: number, speed: number, total: number }) {
                observer.next(Object.assign({ type: HttpEventType.UploadProgress }, progressData));

              },
            })
            .then((res: any) => {
              attachment.url = 'https://' + res.Location;
              attachment.progress = 100;
              observer.next(
                new HttpResponse({
                  status: 200,
                  body: attachment,
                })
              );
              observer.complete();
            });
        });
    })

  }

  download(attachment: Attachment) {
    let that = this
    let cos: COS = new COS({
      getAuthorization: function (options, callback) {
        that.getDownloadTmpKey(attachment.hash!)
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
    const url: URL = new URL(attachment.url!)
    console.log(url.pathname)
    cos.getObject({
      Bucket: attachment.bucket!, /* Your bucket name. Required. */
      Region: attachment.region!,  /* Bucket region, such as `ap-beijing`. Required. */
      Key: url.pathname,  /* Object key stored in the bucket (such as `1.jpg` and `a/b/test.txt`). Required. */
      DataType: 'blob',        // 非必须
      onProgress: function (progressData) {
        console.log(JSON.stringify(progressData));
      },
    }, function (err, data) {

      console.log(err || data);
      let downloadURL = URL.createObjectURL(data.Body as Blob);
      // window.open(downloadURL);

      var anchor = document.createElement("a");
      anchor.download = attachment.name;
      anchor.href = downloadURL;
      anchor.click();
    });
  }

  getUploadTmpKey(fileName: string) {
    return this.http.get(
      this.config.uploadTmpKeyUrl,
      {
        params: new HttpParams({
          fromObject: {
            fileName: fileName,
            bucket: this.config.bucket,
            region: this.config.region,
          },
        }),
      }
    );
  }

  getDownloadTmpKey(fileName: string) {
    return this.http.get(
      this.config.downloadTmpKeyUrl,
      {
        params: new HttpParams({
          fromObject: {
            fileName: fileName,
            bucket: this.config.bucket,
            region: this.config.region,
            path: "*"
          },
        }),
      }
    );
  }

  getFileType(name: string) {
    let names = name.split('.')
    return names[names.length - 1]
  }
}
