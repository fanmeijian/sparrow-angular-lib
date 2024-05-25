import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomQueriesService, ProcessQueriesService} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {Table} from "primeng/table";

@Component({
  selector: 'lib-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {
  data: any[] = [];
  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 5, length: 0 };
  formId = '';
  form: any = {};

  @ViewChild('filter') filter!: ElementRef;

  constructor(
    private processQueryService: ProcessQueriesService,
    private route: ActivatedRoute,
    private customQueryService: CustomQueriesService
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
      .getTasksOwnedByStatus(
        ['Completed', 'Exited'],
        undefined,
        this.pageable.pageIndex,
        this.pageable.pageSize
      )
      .subscribe((res: any) => {
        this.data = res['task-summary'];
        this.loading = false;
      });

    let query = {
      'query-name': 'test',
      'query-source': 'jdbc/jbpm-ds',
      'query-expression':
        'SELECT count(distinct(id)) as id, status,ACTUALOWNER_ID FROM task group by status,ACTUALOWNER_ID',
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
          'cond-column': 'status',
          'cond-operator': 'IN',
          'cond-values': ['Completed'],
        },
        {
          'cond-column': 'ACTUALOWNER_ID',
          'cond-operator': 'EQUALS_TO',
          'cond-values': 'super_sysadmin',
        },
      ],
      'result-column-mapping': null,
      'order-by-clause': null,
    };

    this.customQueryService
      .runQueryFiltered(
        'TasksOwnedByStatusCount',
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
