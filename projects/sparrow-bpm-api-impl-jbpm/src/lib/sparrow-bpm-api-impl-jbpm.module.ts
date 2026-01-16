import { NgModule } from '@angular/core';
import { SparrowBpmApiImplJbpmComponent } from './sparrow-bpm-api-impl-jbpm.component';
import { SparrowBpmApiModule } from '@sparrowmini/bpm-api';



@NgModule({
  declarations: [
    SparrowBpmApiImplJbpmComponent
  ],
  imports: [
    SparrowBpmApiModule
  ],
  exports: [
    SparrowBpmApiImplJbpmComponent
  ]
})
export class SparrowBpmApiImplJbpmModule { }
