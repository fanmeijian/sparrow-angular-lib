import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {catchError, map, of, switchMap, zip} from "rxjs";
import {CustomQueriesService, ProcessQueriesService, TaskInstancesService} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {Table} from "primeng/table";

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

  constructor(
    private processQueryService: ProcessQueriesService,
    private taskInstanceService: TaskInstancesService,
    private customQueryService: CustomQueriesService,
    private route: ActivatedRoute
  ) {}

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

  editItem(item: any) {}

  deleteItem(item: any) {
    // this.processQueryService.deleteFormData([item.id]).subscribe(() => {
    //   this.ngOnInit();
    // });
  }

  pageChange(event: { first: number; rows: number }) {
    this.pageable.pageSize = event.rows;
    this.pageable.pageIndex =
      event.first === 0 ? 0 : Math.floor(event.first / event.rows);

    this.processQueryService
      .getTasksAssignedAsPotentialOwner(
        undefined,
        ['Admin'],
        undefined,
        this.pageable.pageIndex,
        this.pageable.pageSize
      )
      .pipe(
        map((res: any) => res['task-summary']),
        switchMap((tasks) =>
          zip(
            ...tasks.map((task: any) =>
              this.taskInstanceService
                .getTaskInputContentByTaskId(
                  task['task-container-id'],
                  task['task-id']
                )
                .pipe(
                  map((inputData) =>
                    Object.assign(task, {'task-input-data': inputData})
                  ),
                  catchError((e) =>
                    of(Object.assign(task, {'task-input-data': {}}))
                  )
                )
            )
          )
        )
      )
      .subscribe((res: any) => {
        this.data = res;
        this.loading = false;
      });

    let query = {
      'query-name': 'test',
      'query-source': 'jdbc/jbpm-ds',
      'query-expression':
        "SELECT count(distinct(a.task_id)) as id,b.status,a.entity_id FROM PEOPLEASSIGNMENTS_POTOWNERS a left join TASK b on a.task_id=b.id group by b.status,a.entity_id",
      'query-target': 'CUSTOM',
      'query-columns': {
        id: 'NUMBER',
      },
    };

    let queryParams = {
      'order-by': null,
      'order-asc': false,
      'query-params': [
        {
          'cond-column': 'entity_id',
          'cond-operator': 'IN',
          'cond-values': ['Admin', 'super_sysadmin'],
        },
        {
          'cond-column': 'status',
          'cond-operator': 'NOT_IN',
          'cond-values': ['Completed'],
        },
      ],
      'result-column-mapping': null,
      'order-by-clause': null,
    };

    // this.customQueryService.dropQueryDefinition('TasksAssignedAsPotentialOwnerCount').subscribe()

    // this.customQueryService
    //   .createQueryDefinition('TasksAssignedAsPotentialOwnerCount', JSON.stringify(query))
    //   .subscribe()

    this.customQueryService
      .runQueryFiltered(
        'TasksAssignedAsPotentialOwnerCount',
        'RawList',
        undefined,
        undefined,
        undefined,
        JSON.stringify(queryParams)
      )
      .subscribe((aaa) => {
        aaa.reduce((a: any, b: any) => {
          console.log(a);
          return a + b[0];
        }, 0);

        this.pageable.length = aaa.reduce((a: any, b: any) => a + b[0], 0);
      });
  }
}
