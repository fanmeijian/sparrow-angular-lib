import { NgModule } from '@angular/core';
import { SparrowFlowComponent } from './sparrow-flow.component';
import { AngularMaterialModule } from './angular-material.modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlowDesignComponent } from './flow-design/flow-design.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SparrowFlowComponent, FlowDesignComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule,
  ],
  exports: [SparrowFlowComponent],
})
export class SparrowFlowModule {}
