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
import { ViewProcessImageComponent } from './process/view-process-image/view-process-image.component';
import { ViewProcessInstanceComponent } from './process/view-process-instance/view-process-instance.component';
import { TaskTodoComponent } from './task/task-todo/task-todo.component';
import { TaskDoneComponent } from './task/task-done/task-done.component';
import { MyProcessInstancesComponent } from './process/my-process-instances/my-process-instances.component';
import { TaskCommentComponent } from './task/task-comment/task-comment.component';
import { ProcessPublishedComponent } from './process/process-published/process-published.component';
import { TaskExecutionComponent } from './task/task-execution/task-execution.component';
import { ProcessDeployComponent } from './process/process-deploy/process-deploy.component';
import { QueryListComponent } from './query/query-list/query-list.component';
import { QueryCreateComponent } from './query/query-create/query-create.component';
import { QueryExecuteComponent } from './query/query-execute/query-execute.component';

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
    TaskTodoComponent,
    TaskDoneComponent,
    MyProcessInstancesComponent,
    TaskCommentComponent,
    ProcessPublishedComponent,
    TaskExecutionComponent,
    ProcessDeployComponent,
    QueryListComponent,
    QueryCreateComponent,
    QueryExecuteComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    FormioModule,
    JbpmApiModule,
  ],
  exports: [
    SparrowBpmComponent,
    ProcessInstacesComponent,
    ProcessDefinitionsComponent,
    TaskInstancesComponent,
  ],
})
export class SparrowBpmModule {}
