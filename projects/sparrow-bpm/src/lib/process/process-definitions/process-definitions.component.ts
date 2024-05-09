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

@Component({
  selector: 'lib-process-definitions',
  templateUrl: './process-definitions.component.html',
  styleUrls: ['./process-definitions.component.css'],
})
export class ProcessDefinitionsComponent implements OnInit {
  displayedColumns: string[] = [
    'position',
    'name',
    'task',
    // 'weight',
    'container',
    'form',
    'symbol',
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
      .pipe(
        map((res) => res.result['kie-containers']['kie-container']),
        switchMap((cs) =>
          zip(
            ...cs.map((c: any) =>
              this.processQueriesService
                .getProcessesByDeploymentId1(c['container-id'])
                .pipe(map((ps) => ps.processes))
            )
          )
        ),
        map((m) => m.flat()),
        tap((t) => console.log(t)),
        switchMap((s: any[]) =>
          zip(
            ...s.map((m) => {
              let processFormId: ProcessFormId = {
                deploymentId: m['container-id'],
                processId: m['process-id'],
              };
              const $isConfigForm = this.flowService.processForm(
                processFormId.deploymentId,
                processFormId.processId
              );
              const $userTasks = this.processAndTaskDefinitionsService
                .getTasksDefinitions(m['container-id'], m['process-id'])
                .pipe(
                  map((tm: any) => tm.task),
                  tap((t) => console.log(t)),
                  switchMap((tasks: any[]) =>
                    tasks.length === 0
                      ? of([])
                      : zip(
                          tasks.map((task) =>
                            this.flowService
                              .taskForm(
                                m['container-id'],
                                m['process-id'],
                                task['task-form-name']
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
                );
              return combineLatest($userTasks, $isConfigForm).pipe(
                map(([a, b]) =>
                  Object.assign(
                    {},
                    m,
                    { task: a },
                    { isConfigForm: b ? true : false }
                  )
                )
              );
            })
          )
        ),
        tap((t) => console.log(t))
      )
      .subscribe((res: any) => {
        // console.log(res.result['kie-containers']['kie-container'])
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res.flat());
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
    this.dialog.open(ProcessDeployComponent, {width: '80%'});
  }

  dispose(element: any) {
    this.kIEServerAndKIEContainersService
      .disposeContainer(element['container-id'], false)
      .subscribe(() => {});
  }
}
