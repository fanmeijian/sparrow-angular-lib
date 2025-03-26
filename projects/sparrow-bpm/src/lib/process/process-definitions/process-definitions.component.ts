import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ProcessFormId, TaskFormId } from '@sparrowmini/flow-api';
import { map, switchMap, zip, tap, of, combineLatest } from 'rxjs';
import { FlowService } from '@sparrowmini/flow-api';
import {
  KIEServerAndKIEContainersService,
  ProcessAndTaskDefinitionsService,
  ProcessQueriesService,
} from '@sparrowmini/jbpm-api';
import { ProcessDeployComponent } from '../process-deploy/process-deploy.component';
import { ViewProcessImageComponent } from '../view-process-image/view-process-image.component';

@Component({
  selector: 'lib-process-definitions',
  templateUrl: './process-definitions.component.html',
  styleUrls: ['./process-definitions.component.css'],
})
export class ProcessDefinitionsComponent implements OnInit {
  displayedColumns: string[] = [
    'seq',
    'container',
    'name',
    'task',
    // 'weight',
    'form',
    'actions',
  ];
  dataSource = new MatTableDataSource<any>();
  pageable = { pageSize: 10, pageIndex: 0, length: 0 };

  constructor(
    private kIEServerAndKIEContainersService: KIEServerAndKIEContainersService,
    private dialog: MatDialog,
    private flowService: FlowService,
    private processQueriesService: ProcessQueriesService,
    private processAndTaskDefinitionsService: ProcessAndTaskDefinitionsService
  ) {}

  ngOnInit(): void {
    this.kIEServerAndKIEContainersService
      .listContainers()
      // .pipe(
      //   map((res) => res.result['kie-containers']['kie-container']),
      //   switchMap((cs) =>
      //     zip(
      //       ...cs.map((c: any) => {
      //         this.processQueriesService
      //           .getProcessesByDeploymentId1(c['container-id'])
      //           .pipe(
      //             map((ps) => ps.processes),
      //             switchMap((processes: any[]) =>
      //               zip(
      //                 ...processes.map((process) => {
      //                   let processFormId: ProcessFormId = {
      //                     deploymentId: process['container-id'],
      //                     processId: process['process-id'],
      //                   };
      //                   const $isConfigForm = this.flowService.processForm(
      //                     processFormId.deploymentId,
      //                     processFormId.processId
      //                   );
      //                   const $userTasks = this.processAndTaskDefinitionsService
      //                     .getTasksDefinitions(
      //                       process['container-id'],
      //                       process['process-id']
      //                     )
      //                     .pipe(
      //                       map((tm: any) => tm.task),
      //                       switchMap((tasks: any[]) =>
      //                         tasks.length === 0
      //                           ? of([])
      //                           : zip(
      //                               tasks.map((task) =>
      //                                 this.flowService
      //                                   .taskForm(
      //                                     process['container-id'],
      //                                     process['process-id'],
      //                                     task['task-form-name']
      //                                   )
      //                                   .pipe(
      //                                     map((tt) =>
      //                                       Object.assign({}, task, {
      //                                         isConfigForm: tt ? true : false,
      //                                       })
      //                                     )
      //                                   )
      //                               )
      //                             )
      //                       )
      //                     );
      //                   return combineLatest($userTasks, $isConfigForm).pipe(
      //                     map(([a, b]) =>
      //                       Object.assign(
      //                         {},
      //                         process,
      //                         { tasks: a },
      //                         { isConfigForm: b ? true : false }
      //                       )
      //                     )
      //                   );
      //                 })
      //               )
      //             ),
      //             // map(processes=>Object.assign({},c,{processes: processes}))
      //           );
      //       })
      //     )
      //   ),

      //   tap((t) => console.log(t))
      // )
      .subscribe((res: any) => {
        // console.log(res.result['kie-containers']['kie-container'])
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(
          res.result['kie-containers']['kie-container']
        );
      });
  }

  viewProcess(container: any) {
    this.processQueriesService
      .getProcessesByDeploymentId1(container['container-id'])
      .pipe(
        map((ps:any) => ps.processes),
        switchMap((processes: any[]) =>
          zip(
            ...processes.map((process) => {
              let processFormId: ProcessFormId = {
                deploymentId: process['container-id'],
                processId: process['process-id'],
              };
              const $isConfigForm = this.flowService.processForm(
                processFormId.deploymentId,
                processFormId.processId
              );
              return $isConfigForm.pipe(
                map((isConfigForm) =>
                  Object.assign({}, process, { isConfigForm: isConfigForm })
                )
              );
            })
          )
        )
      )
      .subscribe((res) => {
        container.processes = res;
      });
  }

  viewTasks(process: any) {
    this.processAndTaskDefinitionsService
      .getTasksDefinitions(process['container-id'], process['process-id'])
      .pipe(
        map((tm: any) => tm.task),
        switchMap((tasks: any[]) =>
          tasks.length === 0
            ? of([])
            : zip(
                tasks.map((task) =>
                  this.flowService
                    .taskForm(
                      task['task-form-name'],
                      process['container-id'],
                      process['process-id']
                    )
                    .pipe(
                      map((tt) =>
                        Object.assign({}, task, {
                          isConfigForm: tt ? true : false,
                        })
                      )
                    )
                )
              )
        )
      )
      .subscribe((res) => {
        process.tasks = res;
      });
  }

  startFlow(flow: any) {
    this.flowService
      .processForm(
        flow['container-id'],
        flow['process-id'],
        flow['package'],
        flow['process-version']
      )
      .subscribe((res) => {
        // this.dialog.open(ProcessFormComponent, {
        //   data: Object.assign(res, {
        //     containerId: flow['container-id'],
        //     processId: flow['process-id'],
        //   }),
        //   width: '80%',
        //   height: '80%',
        // });
      });
  }

  ifConfigProcessForm(flow: any) {
    let processFormId: ProcessFormId = {
      deploymentId: flow['container-id'],
      processId: flow['process-id'],
    };
    this.flowService
      .processForm(processFormId.deploymentId, processFormId.processId)
      .subscribe((res) => {
        if (res) {
          return true;
        } else {
          return false;
        }
      });
  }

  ifConfigTaskForm(taskFormId: TaskFormId) {
    this.flowService
      .taskForm(
        taskFormId.taskFormName,
        taskFormId.deploymentId,
        taskFormId.processId
      )
      .subscribe((res) => {
        if (res) {
          return true;
        } else {
          return false;
        }
      });
  }

  publish(element: any) {
    this.flowService
      .publishProcess([
        {
          name: '',
          remark: '',
          deploymentId: element['container-id'],
          processId: element['process-id'],
        },
      ])
      .subscribe();
  }

  open() {
    // this.dialog.open(ProcessCreateComponent,{width:'90%'})
  }

  publishKjar() {
    this.dialog
      .open(ProcessDeployComponent, { width: '80%' })
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  dispose(element: any) {
    this.kIEServerAndKIEContainersService
      .disposeContainer(element['container-id'], false)
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  viewImage(process: any) {
    this.dialog.open(ViewProcessImageComponent, {
      data: process,
      width: '90%',
    });
  }
}
