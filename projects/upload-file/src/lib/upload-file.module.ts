import { NgModule } from '@angular/core';
import { UploadFileComponent } from './upload-file.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    UploadFileComponent
  ]
})
export class UploadFileModule { }
