import { NgModule } from '@angular/core';
import { CamundaBpmComponent } from './camunda-bpm.component';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ApiModule as FlowApiModule } from '@sparrowmini/flow-api';
import { ApiModule as CamundaApiModule } from '@sparrowmini/camunda-api';
import { ProcessDefinitionsComponent } from './process/process-definitions/process-definitions.component';
import { ProcessCreateComponent } from './process/process-create/process-create.component';
import { SparrowPermissionModule } from '@sparrowmini/sparrow-permission';

@NgModule({
  declarations: [
    CamundaBpmComponent,
    ProcessDefinitionsComponent,
    ProcessCreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FlowApiModule,
    CamundaApiModule,
    SparrowPermissionModule,
  ],
  exports: [CamundaBpmComponent],
})
export class CamundaBpmModule {}
