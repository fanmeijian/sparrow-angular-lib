import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FlowService } from '@sparrowmini/flow-api';
import {
  ProcessQueriesService,
  TaskInstancesService,
} from '@sparrowmini/jbpm-api';
import { UserService } from '@sparrowmini/sparrow-keycloak-admin-api';
import { map, switchMap, zip, of, combineLatest } from 'rxjs';
import { ViewProcessImageComponent } from '../view-process-image/view-process-image.component';

@Component({
  selector: 'lib-my-process-instances',
  templateUrl: './my-process-instances.component.html',
  styleUrls: ['./my-process-instances.component.css'],
})
export class MyProcessInstancesComponent implements OnInit {
  datasource: MatTableDataSource<any> = new MatTableDataSource<any>();
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
  constructor(
    public flowService: FlowService,
    private processQueriesService: ProcessQueriesService,
    private dialog: MatDialog,
    private userService: UserService,
    private taskInstancesService: TaskInstancesService
  ) {}

  ngOnInit(): void {
    let username = sessionStorage.getItem('username');
    this.processQueriesService
      .getProcessInstances1(
        [1, 2, 3],
        username!,
        undefined,
        0,
        10000,
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
                            // const $taskInfo = this.taskInstancesService.getTask(
                            //   task['task-container-id'],
                            //   task['task-id'],
                            //   true,
                            //   false
                            // );
                            // const $userInfo = task['task-actual-owner']
                            //   ? this.userService.getUserInfo(
                            //       task['task-actual-owner']
                            //     )
                            //   : of({});
                            // const $inputs =
                            //   this.taskInstancesService.getTaskInputContentByTaskId(
                            //     task['task-container-id'],
                            //     task['task-id']
                            //   );
                            // return combineLatest($userInfo, $taskInfo).pipe(
                            //   map((a: any) =>
                            //     Object.assign(a[1], {
                            //       'task-actual-owner-info': a[0],
                            //     })
                            //   )
                            // );
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
                    Object.assign({}, processInstance, { 'task-summary': m })
                  )
                );

              // const proc: any = this.userService
              //   .getUserInfo(processInstance.initiator)
              //   .pipe(
              //     map((r) =>
              //       Object.assign({}, processInstance, { initiatorInfo: r })
              //     )
              //   );

              // return combineLatest(proc, tasks).pipe(
              //   map((c: any) => Object.assign({}, c[0], c[1]))
              // );
            })
          )
        )
      )
      .subscribe((res: any) => {
        // console.log(res);

        this.datasource = new MatTableDataSource<any>(res);
      });
  }

  getFlowStatusName(status: any) {
    let green = 'color: green; font-size:12px;border-radius:3px;padding:3px;';
    let grey = 'color: grey; font-size:12px;border-radius:3px;padding:3px;';
    let red = 'color: red; font-size:12px;border-radius:3px;padding:3px;';
    switch (status) {
      case 'Reserved':
      case 'Ready':
      case 'InProgress':
        return {
          name: '待处理',
          style: green,
        };
      case 'Completed':
        return {
          name: '已处理',
          style: grey,
        };
      case 2:
        return {
          name: '已结束',
          style: grey,
        };
      case 3:
        return {
          name: '中止',
          style: red,
        };
      case 1:
        return {
          name: '进行中',
          style: green,
        };
      default:
        return { name: '', style: '' };
    }
  }

  viewProcess(element: any) {
    this.dialog.open(ViewProcessImageComponent, {
      data: element,
      width: '80%',
    });
  }
}
