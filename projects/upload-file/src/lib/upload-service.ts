import { HttpEvent } from "@angular/common/http";
import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
export const UploadFileConfig = new InjectionToken<UploadService>('uploadService');

export interface UploadService {
  upload(files: File): Observable<HttpEvent<any>>
  cancel?(): void;
}
