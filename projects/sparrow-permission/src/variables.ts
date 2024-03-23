import { InjectionToken } from '@angular/core';
import { PermissionConfig } from './model/permission-config';

export const CONFIG = new InjectionToken<PermissionConfig>('basePath');
