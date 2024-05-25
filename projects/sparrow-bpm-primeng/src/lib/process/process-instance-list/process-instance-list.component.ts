import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  JbpmExtService,
  KIEServerAndKIEContainersService,
  ProcessAndTaskDefinitionsService,
  ProcessQueriesService, TaskInstancesService
} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {map, of, switchMap, tap, zip} from "rxjs";
import {Table} from "primeng/table";
import { FilterTreeBean } from '@sparrowmini/flow-api';

@Component({
  selector: 'lib-process-instance-list',
  templateUrl: './process-instance-list.component.html',
  styleUrls: ['./process-instance-list.component.css']
})
export class ProcessInstanceListComponent implements OnInit {
  customers1: any[] = [];

  statuses: any[] = [];

  isExpanded: boolean = false;

  loading: boolean = true;

  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  @ViewChild('filter') filter!: ElementRef;
  processId?: string;
  containerId?: string;
  processName?:string

  constructor(

    private route: ActivatedRoute,
    private jbpmExtService: JbpmExtService,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.processId) {

        this.processId = params.processId;
        this.containerId = params.containerId;
        this.processName = params.processName
        this.pageChange({ first: 0, rows: this.pageable.pageSize });

      }
    });
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  pageChange(event: { first: number; rows: number }) {
    this.pageable.pageSize = event.rows;
    this.pageable.pageIndex =
      event.first === 0 ? 0 : Math.floor(event.first / event.rows);

    let username = sessionStorage.getItem('username')!

    this.jbpmExtService.processInstances([{
      filterTreeBean: {
        type: FilterTreeBean.TypeEnum.AND,
        name: 'processId',
        op: '=',
        value: this.processId
      }
    }], this.pageable.pageIndex, this.pageable.pageSize).pipe(
      tap(t => this.pageable.length = t.totalElements!),
      map(m => m.content?.map((s: any) => Object.assign({}, {
        "active-user-tasks": s.activeTasks,
        "container-id": s.deploymentId,
        "correlation-key": s.correlationKey,
        "initiator": s.initiator,
        "parent-instance-id": s.parentId,
        "process-id": s.processId,
        "process-instance-desc": s.processInstanceDescription,
        "process-instance-id": s.id,
        "process-instance-state": s.state,
        // "process-instance-variables":
        "process-name": s.processName,
        "process-version": s.processVersion,
        "sla-compliance": s.slaCompliance,
        "sla-due-date": s.slaDueDate,
        "start-date": s.dataTimeStamp
      }))),
    )
      .subscribe(res => {
        this.loading = false
        this.customers1 = res!
      })

  }
}
