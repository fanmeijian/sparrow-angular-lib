import { NgModule } from '@angular/core';
import { UploadFileComponent } from './upload-file.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UploadFileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    UploadFileComponent
  ]
})
export class UploadFileModule { }
