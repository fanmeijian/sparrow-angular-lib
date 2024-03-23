import { NgModule } from '@angular/core';
import { SparrowBreadcrumbComponent } from './sparrow-breadcrumb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SparrowBreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    SparrowBreadcrumbComponent
  ]
})
export class SparrowBreadcrumbModule { }
