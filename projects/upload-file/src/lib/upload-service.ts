import { HttpEvent } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
export const UploadFileConfig = new InjectionToken<UploadService>('uploadService');

export interface CosConfig {
  apiBase: string,
  bucket: string,
  region: string,
  path: string,
  domain?: string
}

export interface Attachment {
  name: string,
  url?: string,
  seq?: number,
  bucket?: string,
  region?: string,
  path?: string,
  hash?: string,
  type: string,
  size: number,
  speed?: number,
  progress?: number,
  file?: File,
  previewUrl?: string | ArrayBuffer,

}


export interface UploadService {
  upload(files: File): Observable<HttpEvent<any>>
  download(attachment: Attachment): any
}
