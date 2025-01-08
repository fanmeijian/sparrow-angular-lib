import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Attachment, UploadFileConfig, UploadService } from './upload-service';
import { UploadFileService } from './upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'lib-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit, OnChanges {
  download(_t12: any) {
    this.objService.download(_t12);
  }
  @Input() id?: string;
  @Input() fileType?: string; //允许的文件类型
  @Input() multiple?: boolean;
  @Input() attachments: Attachment[] | any[] = []; //双向绑定
  @Input() disableUpload?: boolean;
  @Input() downloadButtonPgel?: string = 'btn:file:download'
  @Output() fileUploadedEvent = new EventEmitter<Attachment>();
  @Output() fileRemovedEvent = new EventEmitter<Attachment>();


  constructor(
    @Optional() @Inject(UploadFileConfig) private objService: UploadService,
    // public domSanitizer: DomSanitizer,
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {

  }

  handleFileInput(event: any) {
    let selectedFiles: File[] = Array.from(event.target.files);


    selectedFiles.forEach((file, i) => {
      this.attachments.push(
        {
          seq: i,
          file: file,
          name: file.name,
          type: file.type,
          size: file.size,
        }
      )
      if (file.type.includes('image')) {
        this.previewLocalImage(file, this.attachments[i])
      }

      this.objService.upload(file).subscribe({
        next: (event: HttpEvent<any>) => {
          if (event.type === HttpEventType.UploadProgress && event.total) {
            this.attachments[i] = Object.assign({}, this.attachments[i], { progress: Math.round((event.loaded / event.total) * 100) }, event, { type: file.type })
            // console.log('progress', event)
          } else if (event.type === HttpEventType.Response) {
            this.attachments[i] = Object.assign(this.attachments[i],event.body);
          }
        },
        error: (err) => {
          console.error('Upload error:', err);
        },
        complete: () => {
          // console.log('All files uploaded!');
        },
      });
    })
  }

  previewLocalImage(file: File, attachment: Attachment) {
    const reader = new FileReader();

    reader.onload = (e) => {
      attachment.previewUrl = reader.result!;
    };

    reader.readAsDataURL(file);
  }

  removeInitUrl(attachment: Attachment, i: number) {

    this.attachments.splice(i, 1)
    this.fileRemovedEvent.emit(attachment);
  }

  getFileType(name: string) {
    let names = name.split('.')
    return names[names.length - 1]
  }
}
