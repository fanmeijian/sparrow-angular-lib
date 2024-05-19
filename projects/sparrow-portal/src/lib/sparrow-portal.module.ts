import {NgModule} from '@angular/core';
import {SparrowPortalComponent} from './sparrow-portal.component';
import {DashboardMainComponent} from './dashboard/dashboard-main/dashboard-main.component';
import {DashboardRouteComponent} from './dashboard/dashboard-route/dashboard-route.component';
import {FormDataCreateComponent} from './form/form-data-create/form-data-create.component';
import {FormDataListComponent} from './form/form-data-list/form-data-list.component';
import {FormDataViewComponent} from './form/form-data-view/form-data-view.component';
import {FormListComponent} from './form/form-list/form-list.component';
import {FormRouteComponent} from './form/form-route/form-route.component';
import {OrganizationTreeComponent} from './organization/organization-tree/organization-tree.component';
import {ProcessFormComponent} from './process/process-form/process-form.component';
import {ProcessImageViewComponent} from './process/process-image-view/process-image-view.component';
import {ProcessInstanceListComponent} from './process/process-instance-list/process-instance-list.component';
import {ProcessInstanceViewComponent} from './process/process-instance-view/process-instance-view.component';
import {ProcessListComponent} from './process/process-list/process-list.component';
import {ProcessRouteComponent} from './process/process-route/process-route.component';
import {ReportListComponent} from './report/report-list/report-list.component';
import {ReportRouteComponent} from './report/report-route/report-route.component';
import {ReportViewComponent} from './report/report-view/report-view.component';
import {TaskDoneComponent} from './task/task-done/task-done.component';
import {TaskFormComponent} from './task/task-form/task-form.component';
import {TaskRouteComponent} from './task/task-route/task-route.component';
import {TaskTodoComponent} from './task/task-todo/task-todo.component';
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PrimeModule} from "./prime.module";
import {FormioModule} from "@formio/angular";


@NgModule({
  declarations: [
    SparrowPortalComponent,
    DashboardMainComponent,
    DashboardRouteComponent,
    FormDataCreateComponent,
    FormDataListComponent,
    FormDataViewComponent,
    FormListComponent,
    FormRouteComponent,
    OrganizationTreeComponent,
    ProcessFormComponent,
    ProcessImageViewComponent,
    ProcessInstanceListComponent,
    ProcessInstanceViewComponent,
    ProcessListComponent,
    ProcessRouteComponent,
    ReportListComponent,
    ReportRouteComponent,
    ReportViewComponent,
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
    SparrowPortalComponent,
  ]
})
export class SparrowPortalModule {
}
