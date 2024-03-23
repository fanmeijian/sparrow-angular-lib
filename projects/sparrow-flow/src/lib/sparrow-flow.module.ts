import { NgModule } from '@angular/core';
import { SparrowFlowComponent } from './sparrow-flow.component';
import { ProcessInstancesComponent } from './process/process-instances/process-instances.component';
import { AngularMaterialModule } from './angular-material.modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SparrowFlowComponent,
    ProcessInstancesComponent
  ],
  imports: [
    // BrowserModule,
    // BrowserAnimationsModule,
    AngularMaterialModule
  ],
  exports: [
    SparrowFlowComponent,
    ProcessInstancesComponent,
  ]
})
export class SparrowFlowModule { }
