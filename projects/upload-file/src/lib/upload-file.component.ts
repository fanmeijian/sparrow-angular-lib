import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SimpleChanges,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadFileService } from './upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { UploadService } from './upload-service';

// 定义状态
type UploadStatus = 'idle' | 'uploading' | 'done' | 'error' | 'cancelled';

interface UploadItem {
  file: File;
  progress: number;
  speed: string;
  status: 'uploading' | 'done' | 'error' | 'cancelled';
  previewUrl?: string;
  sub?: Subscription;
  lastTime: number;
  lastLoaded: number;
  amount?: number; // 新增字段：数量
}

@Component({
  selector: 'lib-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit, OnDestroy {
binding: any;
  updateAmount(item: UploadItem) {
    this.onAmountChange.emit({ file: item.file, amount: item.amount || 0 });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  @Input() label: string = '上传';
  @Input() multiple: boolean = false;
  @Input() strategy!: UploadService;
  // 增加 Output 属性
  @Output() onFileComplete = new EventEmitter<any>();
  @Output() onAllComplete = new EventEmitter<void>(); // 可选：全部上传完成的通知
  @Output() onAmountChange = new EventEmitter<{ file: File; amount: number }>(); // 数量变化事件
  @Output() onFileRemove = new EventEmitter<any>();

  // 上传队列
  uploadQueue: UploadItem[] = [];

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    if (!files.length || !this.strategy) return;

    // 将 FileList 转换为数组并处理
    Array.from(files).forEach(file => {
      const newItem: UploadItem = {
        file,
        progress: 0,
        speed: '0 B/s',
        status: 'uploading',
        lastTime: Date.now(),
        lastLoaded: 0,
        previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      };

      this.uploadQueue.push(newItem);
      this.startUpload(newItem);
    });
  }

  private startUpload(item: UploadItem) {
    item.sub = this.strategy.upload(item.file).subscribe({
      next: (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress && event.total) {
          item.progress = Math.round((100 * event.loaded) / event.total);
          this.updateItemSpeed(item, event.loaded);
        }

        // 关键点：当底层策略返回 Response 时
        else if (event.type === HttpEventType.Response) {
          item.status = 'done';
          item.progress = 100;

          // 触发回调，回传文件对象和后端数据
          this.onFileComplete.emit({
            file: item.file,
            response: event.body
          });

          // 检查是否全部完成
          this.checkAllComplete();
        }
      },
      error: (err) => {
        item.status = 'error';
        console.error(`${item.file.name} 上传失败`, err);
      }
    });
  }

  private checkAllComplete() {
    const isAllDone = this.uploadQueue.every(i => i.status === 'done' || i.status === 'error' || i.status === 'cancelled');
    if (isAllDone) {
      this.onAllComplete.emit();
    }
  }

  private updateItemSpeed(item: UploadItem, currentLoaded: number) {
    const now = Date.now();
    const timeDiff = (now - item.lastTime) / 1000;

    if (timeDiff >= 0.5) {
      const bytesDiff = currentLoaded - item.lastLoaded;
      item.speed = this.formatSpeed(bytesDiff / timeDiff);
      item.lastTime = now;
      item.lastLoaded = currentLoaded;
    }
  }

  cancelUpload(item: UploadItem) {
    item.sub?.unsubscribe();
    item.status = 'cancelled';
  }

  removeFromQueue(index: number) {
    const item = this.uploadQueue[index];
    item.sub?.unsubscribe();
    if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
    this.uploadQueue.splice(index, 1);
    this.onFileRemove.emit(item)
  }

  ngOnDestroy() {
    // 销毁时取消所有正在进行的上传并清理内存
    this.uploadQueue.forEach(item => {
      item.sub?.unsubscribe();
      if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
    });
  }

  private formatSpeed(bps: number): string {
    if (bps > 1048576) return (bps / 1048576).toFixed(1) + ' MB/s';
    if (bps > 1024) return (bps / 1024).toFixed(1) + ' KB/s';
    return bps.toFixed(0) + ' B/s';
  }
}
