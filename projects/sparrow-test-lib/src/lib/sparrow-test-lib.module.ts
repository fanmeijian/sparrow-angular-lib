import { NgModule } from '@angular/core';
import { SparrowTestLibComponent } from './sparrow-test-lib.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    SparrowTestLibComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule
    // MatCardModule
  ],
  exports: [
    SparrowTestLibComponent
  ]
})
export class SparrowTestLibModule { }
