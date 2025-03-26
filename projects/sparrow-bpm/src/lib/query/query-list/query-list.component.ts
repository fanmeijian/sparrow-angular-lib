import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FlowService } from '@sparrowmini/flow-api';
import { CustomQueriesService, ProcessQueriesService, TaskInstancesService } from '@sparrowmini/jbpm-api';
import { map, switchMap, zip, combineLatest } from 'rxjs';
import { ProcessSate } from '../../task/task-instances/task-instances.component';
import { QueryCreateComponent } from '../query-create/query-create.component';
import { QueryExecuteComponent } from '../query-execute/query-execute.component';

@Component({
  selector: 'lib-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements OnInit {
  @Input() type: 'TODO' | 'DONE' = 'TODO';

  // taskFormsRoute = getTaskRoute;
  dataSource!: MatTableDataSource<any>;
  total: number = 0;
  displayedColumns: string[] = [
    // 'seq',
    // 'baoming',
    'status',
    'name',
    'proc1',
    // 'activatedDate',
    // 'createdDate',
    // 'createdBy',
    'actions',
  ];

  seletedStatus: any[] = [
    ProcessSate.InProgress,
    ProcessSate.Ready,
    ProcessSate.Reserved,
  ];
  ProcessState = ProcessSate;
  containers?: any[];
  container?: string;
  page = { pageIndex: 0, pageSize: 5, length: 0 };
  constructor(
    private customQueryService: CustomQueriesService,
    private dialog: MatDialog,
    public flowService: FlowService
  ) { }

  ngOnInit(): void {
    this.onPageChange(this.page);
  }

  onPageChange(event: any) {
    this.page = Object.assign({}, event);
    this.dataSource = new MatTableDataSource<any>();
    this.customQueryService.getQueries(this.page.pageIndex, this.page.pageSize).subscribe(res => {
      this.dataSource = new MatTableDataSource<any>(res.queries)
      this.page.length = 100
    })
  }

  openCreate() {
    this.dialog.open(QueryCreateComponent, { width: '80%' })
  }

  deleteQuery(element:any) {
    this.customQueryService.dropQueryDefinition(element['query-name']).subscribe(() => {
      this.ngOnInit()
    })
  }

  openExecute(element:any) {
    this.dialog.open(QueryExecuteComponent, { data: element, width: '80%' })
  }

}
