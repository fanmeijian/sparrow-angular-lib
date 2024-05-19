import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  KIEServerAndKIEContainersService,
  ProcessAndTaskDefinitionsService,
  ProcessQueriesService, TaskInstancesService
} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {map, of, switchMap, zip} from "rxjs";
import {Table} from "primeng/table";

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
    private kIEServerAndKIEContainersService: KIEServerAndKIEContainersService,
    private processQueriesService: ProcessQueriesService,
    private processAndTaskDefinitionsService: ProcessAndTaskDefinitionsService,
    private taskInstancesService: TaskInstancesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.processId) {

        this.processId = params.processId;
        this.containerId = params.containerId;
        this.processName = params.processName

        this.processQueriesService
          .getProcessInstancesByProcessId(
            this.processId!,
            [1, 2, 3],
            'super_sysadmin',
            this.pageable.pageIndex,
            this.pageable.pageSize,
            'START_DATE',
            false
          )
          .pipe(
            map((res: any) => res['process-instance']),
            // tap((a) => console.log(a)),
            switchMap((processInstances: any) =>
              zip(
                ...processInstances.map((processInstance: any) => {
                  return this.processQueriesService
                    .getTasksByStatusByProcessInstanceId(
                      processInstance['process-instance-id']
                    )
                    .pipe(
                      map((res: any) => res['task-summary']),
                      // tap((res) => console.log(res)),
                      switchMap((tasks: any) =>
                        tasks.length > 0
                          ? zip(
                            ...tasks.map((task: any) => {
                              return this.taskInstancesService.getTask(
                                task['task-container-id'],
                                task['task-id'],
                                true,
                                false
                              );
                            })
                          )
                          : of([])
                      ),
                      map((m) =>
                        Object.assign({}, processInstance, {
                          'task-summary': m,
                        })
                      )
                    );
                })
              )
            )
          )
          .subscribe((res: any) => {
            this.customers1 = res;
            this.loading = false;
            console.log(res);
          });
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
}
