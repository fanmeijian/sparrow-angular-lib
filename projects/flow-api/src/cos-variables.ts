import { InjectionToken } from '@angular/core';
import * as COS from 'cos-js-sdk-v5'

export const COS_CLIENT= new InjectionToken<COS>('cosClient');
export const COS_CONFIG = new InjectionToken<{bucket: string, region: string}>('cosConfig');

