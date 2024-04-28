import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {
  ProcessQueriesService,
  TaskInstancesService,
} from '@sparrowmini/jbpm-api';
import { UserService } from '@sparrowmini/sparrow-keycloak-admin-api';
import { FlowService } from '../../../services/flow.service';
import { map, switchMap, zip, combineLatest } from 'rxjs';

export enum ProcessSate {
  Completed = 'Completed',
  Created = 'Created',
  Error = 'Error',
  Exited = 'Exited',
  Failed = 'Failed',
  InProgress = 'InProgress',
  Obsolete = 'Obsolete',
  Ready = 'Ready',
  Reserved = 'Reserved',
  Suspended = 'Suspended',
}

@Component({
  selector: 'lib-task-instances',
  templateUrl: './task-instances.component.html',
  styleUrls: ['./task-instances.component.css'],
})
export class TaskInstancesComponent implements OnInit {
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
    // 'actions',
  ];

  seletedStatus: any[] = [
    ProcessSate.InProgress,
    ProcessSate.Ready,
    ProcessSate.Reserved,
  ];
  ProcessState = ProcessSate;
  containers?: any[];
  container?: string;
  page = { pageIndex: 0, pageSize: 5 };
  constructor(
    private processQueriesService: ProcessQueriesService,
    private dialog: MatDialog,
    private userService: UserService,
    private taskInstancesService: TaskInstancesService,
    public flowService: FlowService
  ) {}

  ngOnInit(): void {
    this.onPageChange(this.page);
  }

  onPageChange(event: any) {
    this.page = Object.assign({}, event);
    this.dataSource = new MatTableDataSource<any>();
    if (this.type === 'TODO') {
      this.processQueriesService
        .getTasksAssignedAsPotentialOwner(
          undefined,
          undefined,
          undefined,
          event.pageIndex,
          event.pageSize
        )
        .pipe(
          map((res: any) => res['task-summary']),
          switchMap((res: any) =>
            zip(
              ...res.map((m: any) => {
                const proc: any = this.processQueriesService
                  .getProcessInstanceById(m['task-proc-inst-id'])
                  .pipe(
                    switchMap((proc1: any) =>
                      this.userService
                        .getUserInfo(proc1.initiator)
                        .pipe(
                          map((r) => Object.assign(proc1, { initiatorInfo: r }))
                        )
                    )
                  );
                const task: any = this.taskInstancesService.getTask(
                  m['task-container-id'],
                  m['task-id'],
                  true
                );

                return combineLatest(proc, task).pipe(
                  map((c: any) => Object.assign({}, c[1], { proc: c[0] }))
                );
              })
            )
          )
          // tap((res) => console.log(res))
        )
        .subscribe((res: any) => {
          if (res.length === event.pageSize) {
            this.total = (event.pageIndex + 1) * event.pageSize + 1;
          } else {
            this.total = (event.pageIndex + 1) * event.pageSize;
          }
          this.dataSource = new MatTableDataSource<any>(res);
        });
    }

    if (this.type === 'DONE') {
      this.processQueriesService
        .getTasksOwnedByStatus(
          this.seletedStatus,
          undefined,
          event.pageIndex,
          event.pageSize
        )
        .pipe(
          map((res: any) => res['task-summary']),
          switchMap((res: any) =>
            zip(
              ...res.map((m: any) => {
                const proc: any = this.processQueriesService
                  .getProcessInstanceById(m['task-proc-inst-id'])
                  .pipe(
                    switchMap((proc1: any) =>
                      this.userService
                        .getUserInfo(proc1.initiator)
                        .pipe(
                          map((r) => Object.assign(proc1, { initiatorInfo: r }))
                        )
                    )
                  );
                const task: any = this.taskInstancesService
                  .getTask(m['task-container-id'], m['task-id'], true)
                  .pipe(
                    switchMap((task1: any) =>
                      this.userService
                        .getUserInfo(task1['task-actual-owner'])
                        .pipe(
                          map((r) =>
                            Object.assign(task1, {
                              'task-actual-owner-info': r,
                            })
                          )
                        )
                    )
                  );

                return combineLatest(proc, task).pipe(
                  map((c: any) => Object.assign({}, c[1], { proc: c[0] }))
                );
              })
            )
          )
        )
        .subscribe((res: any) => {
          // console.log(res);
          if (res.length === event.pageSize) {
            this.total = (event.pageIndex + 1) * event.pageSize + 1;
          } else {
            this.total = (event.pageIndex + 1) * event.pageSize;
          }
          this.dataSource = new MatTableDataSource<any>(res);
        });
    }
  }

  onStatusChange(e: any, status: ProcessSate[]) {
    if (e.checked) {
      this.seletedStatus.push(...status);
    } else {
      status.forEach((f) => {
        this.seletedStatus = this.seletedStatus.filter((s) => s !== f);
      });
    }
    this.onPageChange(this.page);
    console.log(this.seletedStatus);
  }
}
