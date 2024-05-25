import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {catchError, map, of, switchMap, zip} from "rxjs";
import {CustomQueriesService, FilterTreeBean, JbpmExtService, ProcessQueriesService, TaskInstancesService} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {Table} from "primeng/table";
import { getFlowStatusName } from '../../services/flow-status.service';

@Component({
  selector: 'lib-task-todo',
  templateUrl: './task-todo.component.html',
  styleUrls: ['./task-todo.component.css']
})
export class TaskTodoComponent implements OnInit {
  data: any[] = [];
  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 5, length: 0 };
  formId = '';
  form: any = {};

  @ViewChild('filter') filter!: ElementRef;

  flowStatus=getFlowStatusName

  constructor(
    private processQueryService: ProcessQueriesService,
    private taskInstanceService: TaskInstancesService,
    private customQueryService: CustomQueriesService,
    private route: ActivatedRoute,
    private jbpmExtService: JbpmExtService,
  ) { }

  ngOnInit(): void {
    this.pageChange({ first: 0, rows: this.pageable.pageSize });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  getColumnLabel(column: string) {
    // console.log(this.form.form)
    let component: any[] = this.form.form.components.filter(
      (f: any) => f.key === column
    );
    if (component) {
      return component[0].label;
    } else {
      return column;
    }
  }

  editItem(item: any) { }

  deleteItem(item: any) {
    // this.processQueryService.deleteFormData([item.id]).subscribe(() => {
    //   this.ngOnInit();
    // });
  }

  pageChange(event: { first: number; rows: number }) {
    this.pageable.pageSize = event.rows;
    this.pageable.pageIndex =
      event.first === 0 ? 0 : Math.floor(event.first / event.rows);

    this.jbpmExtService.taskInstances([{
      filterTreeBean: {
        type: FilterTreeBean.TypeEnum.AND,
        name: 'taskData.status',
        op: 'in',
        value: ['Created', 'Ready','InProgress','Reserved']
      }
    }], this.pageable.pageIndex, this.pageable.pageSize).subscribe(res => {
      console.log(res.totalElements)
      this.pageable.length = res.totalElements!
      this.data = res.content?.map((m:any) => Object.assign({}, {
        "task-name": m.name,
        "potentialOwners": m.potentialOwners,
        "task-created-on": m.createdOn,
        "task-container-id": m.deploymentId,
        "task-proc-def-id": m.processId,
        "task-proc-inst-id": m.processInstanceId,
        "task-id": m.id,
        "status":m.status,
        "task-actual-owner": m.actualOwner,
        "process-name": m.processName
      }))!
      this.loading = false
    })


    // this.processQueryService
    //   .getTasksAssignedAsPotentialOwner(
    //     undefined,
    //     undefined,
    //     undefined,
    //     this.pageable.pageIndex,
    //     this.pageable.pageSize
    //   )
    //   .pipe(
    //     map((res: any) => res['task-summary']),
    //     switchMap((tasks) =>
    //       tasks.length === 0 ? of([]) :
    //         zip(
    //           ...tasks.map((task: any) =>
    //             this.taskInstanceService
    //               .getTaskInputContentByTaskId(
    //                 task['task-container-id'],
    //                 task['task-id']
    //               )
    //               .pipe(
    //                 map((inputData) =>
    //                   Object.assign(task, { 'task-input-data': inputData })
    //                 ),
    //                 catchError((e) =>
    //                   of(Object.assign(task, { 'task-input-data': {} }))
    //                 )
    //               )
    //           )
    //         )
    //     )
    //   )
    //   .subscribe((res: any) => {
    //     this.data = res;
    //     this.loading = false;
    //   });

  }

}
