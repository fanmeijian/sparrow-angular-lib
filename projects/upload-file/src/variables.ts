import { InjectionToken } from '@angular/core';
import { UploadFileConfig } from './lib/upload-file-config';

export const BASE_PATH = new InjectionToken<string>('basePath');
export const CONFIGURATION = new InjectionToken<UploadFileConfig>('config');
