import { NgModule } from '@angular/core';
import { SparrowFlowComponent } from './sparrow-flow.component';
import { AngularMaterialModule } from './angular-material.modules';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlowDesignComponent } from './flow-design/flow-design.component';
import { RouterModule } from "@angular/router";
import { BpmnNodePanelComponent } from './components/bpmn-node-panel/bpmn-node-panel.component';
import { BpnmDataPanelComponent } from './components/bpnm-data-panel/bpnm-data-panel.component';

@NgModule({
  declarations: [SparrowFlowComponent, FlowDesignComponent,BpmnNodePanelComponent, BpnmDataPanelComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    RouterModule
  ],
  exports: [SparrowFlowComponent],
})
export class SparrowFlowModule {}
