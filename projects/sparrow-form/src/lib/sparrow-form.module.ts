import { NgModule } from '@angular/core';
import { SparrowFormComponent } from './sparrow-form.component';
import { FormCreateComponent } from './form/form-create/form-create.component';
import { FormListComponent } from './form/form-list/form-list.component';
import { FormDataCreateComponent } from './form/form-data-create/form-data-create.component';
import { FormDataViewComponent } from './form/form-data-view/form-data-view.component';
import { FormDataListComponent } from './form/form-data-list/form-data-list.component';
import { MyFormListComponent } from './my/my-form-list/my-form-list.component';
import { MyFormDataListComponent } from './my/my-form-data-list/my-form-data-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule } from '@formio/angular';


@NgModule({
  declarations: [
    SparrowFormComponent,
    FormCreateComponent,
    FormListComponent,
    FormDataCreateComponent,
    FormDataViewComponent,
    FormDataListComponent,
    MyFormListComponent,
    MyFormDataListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormioModule,
  ],
  exports: [
    SparrowFormComponent
  ]
})
export class SparrowFormModule { }
