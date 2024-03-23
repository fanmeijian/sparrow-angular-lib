import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import COS from 'cos-js-sdk-v5';
import { Attachment } from './attachment';
import { ObjectStorageService } from '../services/object-storage.service';
import { UploadFileConfig } from './upload-file-config';
import { Md5 } from 'ts-md5';
import { CONFIGURATION } from '../variables';

@Component({
  selector: 'lib-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit, OnChanges {
  @Input() id?: string;
  @Input() fileType?: string; //允许的文件类型
  @Input() multiple?: boolean;
  @Input() attachments: Attachment[] = []; //双向绑定
  @Output() fileUploadedEvent = new EventEmitter<Attachment>();
  @Output() fileRemovedEvent = new EventEmitter<Attachment>();

  cos!: COS;
  constructor(
    private objService: ObjectStorageService,
    public domSanitizer: DomSanitizer,
    @Inject(CONFIGURATION) public config: UploadFileConfig
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.attachments);
  }

  ngOnInit(): void {
    console.log(this.id, this.attachments);
    if (this.attachments && this.attachments[0] === null) {
      this.attachments = [];
    }
    let that = this;
    console.log(this.attachments);

    this.cos = new COS({
      getAuthorization: function (options, callback) {
        that.objService
          .getUploadTmpKey('apply_ico_delete.png')
          .subscribe((res: any) => {
            console.log(res);
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

  handleFileInput(event: any) {
    let that = this;
    // 处理上传的文件
    let selectedFiles: File[] = Array.from(event.target.files);
    if (selectedFiles.length > 0) {
      let toBeUploadAttachments = selectedFiles.map((file, i) =>
        Object.assign(
          {
            name: '',
            bucket: '',
            region: '',
            path: '',
            hash: '',
          },
          {
            name: file.name,
            url: '',
            seq: this.attachments ? this.attachments.length + i : i,
            bucket: this.config.bucket,
            region: this.config.region,
            path: 'upload/',
            type: file.type,
            size: file.size,
            file: file,
          }
        )
      );
      if (this.multiple === false) {
        this.attachments[0] = toBeUploadAttachments[0];
      } else {
        this.attachments?.unshift(...toBeUploadAttachments);
      }

      // 初始化附件对象
      toBeUploadAttachments.forEach((attachment, i) => {
        if (attachment.file) {
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
                  Bucket: attachment.bucket,
                  Region: attachment.region,
                  Key: attachment.path + attachment.hash,
                  Body: file,
                  onProgress: function (progressData) {
                    if (progressData.speed > 0) {
                      attachment.speed = progressData.speed / 1024;
                    }

                    if (progressData.percent * 100 !== 100) {
                      attachment.progress =
                        progressData.percent * 100 === 100
                          ? 99
                          : progressData.percent * 100;
                    }
                  },
                })
                .then((res: any) => {
                  console.log(attachment);
                  attachment.url = 'https://' + res.Location;
                  attachment.progress = 100;
                  this.fileUploadedEvent.emit(attachment);
                });
            });
        }
      });
    }
  }

  removeInitUrl(attachment: Attachment, i: number) {

    this.attachments.splice(i,1)
    this.fileRemovedEvent.emit(attachment);
  }
}
