import { NgModule } from '@angular/core';
import { SparrowBpmPrimengComponent } from './sparrow-bpm-primeng.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormioModule } from '@formio/angular';
import { PrimeModule } from './prime.module';
import { ProcessFormComponent } from './process/process-form/process-form.component';
import { ProcessImageViewComponent } from './process/process-image-view/process-image-view.component';
import { ProcessInstanceListComponent } from './process/process-instance-list/process-instance-list.component';
import { ProcessInstanceViewComponent } from './process/process-instance-view/process-instance-view.component';
import { ProcessListComponent } from './process/process-list/process-list.component';
import { ProcessRouteComponent } from './process/process-route/process-route.component';
import { TaskDoneComponent } from './task/task-done/task-done.component';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { TaskRouteComponent } from './task/task-route/task-route.component';
import { TaskTodoComponent } from './task/task-todo/task-todo.component';



@NgModule({
  declarations: [
    SparrowBpmPrimengComponent,
    ProcessFormComponent,
    ProcessImageViewComponent,
    ProcessInstanceListComponent,
    ProcessInstanceViewComponent,
    ProcessListComponent,
    ProcessRouteComponent,
    TaskDoneComponent,
    TaskFormComponent,
    TaskRouteComponent,
    TaskTodoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PrimeModule,
    FormioModule,
  ],
  exports: [
    SparrowBpmPrimengComponent
  ]
})
export class SparrowBpmPrimengModule { }
