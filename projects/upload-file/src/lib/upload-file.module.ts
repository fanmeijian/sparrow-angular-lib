import { NgModule } from '@angular/core';
import { UploadFileComponent } from './upload-file.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {PgelPermissionDirective} from './directives/pgel-permission.directive'
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    UploadFileComponent,
    PgelPermissionDirective

  ],
  imports: [
    CommonModule
  ],
  exports: [
    UploadFileComponent
  ],
  providers:[DatePipe]
})
export class UploadFileModule { }
