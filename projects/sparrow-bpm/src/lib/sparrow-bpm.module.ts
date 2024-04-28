import { NgModule } from '@angular/core';
import { SparrowBpmComponent } from './sparrow-bpm.component';
import { AngularMaterialModule } from './angular-material.module';
import { ProcessInstacesComponent } from './process/process-instaces/process-instaces.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskInstancesComponent } from './task/task-instances/task-instances.component';
import { ProcessImageComponent } from './process/process-image/process-image.component';
import { ProcessFormComponent } from './form/process-form/process-form.component';
import { TaskFormComponent } from './form/task-form/task-form.component';
import { FormDesignComponent } from './form/form-design/form-design.component';
import { FormioModule } from '@formio/angular';
import { ProcessDefinitionsComponent } from './process/process-definitions/process-definitions.component';
import { RouterModule } from '@angular/router';
import { ApiModule as JbpmApiModule,BASE_PATH as JbpmApi_BASE_PATH, } from '@sparrowmini/jbpm-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SparrowKeycloakAdminApiModule } from '@sparrowmini/sparrow-keycloak-admin-api';
import { ViewProcessImageComponent } from './process/view-process-image/view-process-image.component';
import { ViewProcessInstanceComponent } from './process/view-process-instance/view-process-instance.component';

@NgModule({
  declarations: [
    SparrowBpmComponent,
    ProcessInstacesComponent,
    TaskInstancesComponent,
    ProcessImageComponent,
    ProcessFormComponent,
    TaskFormComponent,
    FormDesignComponent,
    ProcessDefinitionsComponent,
    ViewProcessImageComponent,
    ViewProcessInstanceComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormioModule,
    JbpmApiModule,
    SparrowKeycloakAdminApiModule,
  ],
  exports: [
    SparrowBpmComponent,
    ProcessInstacesComponent,
    ProcessDefinitionsComponent,
    TaskInstancesComponent,
  ],
})
export class SparrowBpmModule {}
