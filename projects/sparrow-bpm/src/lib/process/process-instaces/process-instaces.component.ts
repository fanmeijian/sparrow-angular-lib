import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import {
  ProcessQueriesService,
  KIEServerAndKIEContainersService,
  ProcessInstancesService,
  ProcessInstanceList,
} from '@sparrowmini/jbpm-api';
import { ProcessSate } from '../../../models/bpm-constan';
import { map, switchMap, zip } from 'rxjs';
import { ViewProcessImageComponent } from '../view-process-image/view-process-image.component';
import { ViewProcessInstanceComponent } from '../view-process-instance/view-process-instance.component';
import { TaskFormComponent } from '../../form/task-form/task-form.component';

@Component({
  selector: 'lib-process-instaces',
  templateUrl: './process-instaces.component.html',
  styleUrls: ['./process-instaces.component.css'],
})
export class ProcessInstacesComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = [
    'seq',
    'name',
    'position',
    'startdate',
    'status',
    'task',
    'weight',
    'symbol',
  ];
  dataSource = new MatTableDataSource<any>();

  pageable: any = {
    pageIndex: 0,
    pageSize: 5,
    sort: 'start_date',
    sortOrder: 'desc',
  };

  total: number = 0;

  ProcessState = ProcessSate;
  processStates = Object.keys(ProcessSate);

  seletedStatus: any[] = [1];

  containers: any[] = [];
  container: string = '';

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private processQueriesService: ProcessQueriesService,
    private kieServerService: KIEServerAndKIEContainersService,
    private processInstancesService: ProcessInstancesService
  ) {
    console.log(this.processStates);
  }

  ngOnInit(): void {
    this.kieServerService.listContainers().subscribe((res) => {
      this.containers = res.result['kie-containers']['kie-container'];
    });
  }

  viewProcess(processInstance: any) {
    this.dialog.open(ViewProcessInstanceComponent, {
      width: '80%',
      data: processInstance,
    });
  }

  onContainerChange($event: any) {
    this.container = $event;
    this.processQueriesService
      .countProcessInstancesByDeploymentId($event, [1, 2, 3])
      .subscribe((res) => {
        console.log(res);
        this.total = res.count!;
      });
    this.listProcessInstances();
  }

  // list(e: any) {
  //   console.log(e);

  //   this.kieServerService
  //     .containers()
  //     .pipe(
  //       map((res) => res.result['kie-containers']['kie-container']),
  //       switchMap((cs) =>
  //         zip(
  //           ...cs.map((c) =>
  //             this.flowService
  //               .count(c['container-id'], this.seletedStatus)
  //               .pipe(
  //                 tap((total) => (this.total = total.count)),
  //                 map((rs) => Object.assign(c, { count: rs }))
  //               )
  //           )
  //         )
  //       ),

  //       switchMap((cs) =>
  //         zip(
  //           ...cs.map((c) =>
  //             this.flowService.processInstances(
  //               c['container-id'],
  //               Object.assign(this.pageable, {
  //                 page: e.pageIndex,
  //                 pageSize: e.pageSize,
  //                 status: this.seletedStatus,
  //               })
  //             )
  //           )
  //         )
  //       ),
  //       tap((pss) => console.log(pss)),
  //       map((pss) => pss.flat()),
  //       tap((pss) => console.log(pss)),
  //       switchMap((pss) =>
  //         zip(
  //           ...pss.map((ps) =>
  //             this.flowService
  //               .processVariables(ps['container-id'], ps['process-instance-id'])
  //               .pipe(
  //                 map((v) =>
  //                   Object.assign(ps, {
  //                     'process-instance-variables': v['variable-instance'],
  //                   })
  //                 )
  //               )
  //           )
  //         )
  //       )
  //     )
  //     .subscribe((_res) => {

  //     });
  // }

  abort(processInstance: any) {
    this.processInstancesService
      .abortProcessInstance(
        processInstance['container-id'],
        processInstance['process-instance-id']
      )
      .subscribe(() => this.snackBar.open('停止成功！', '关闭'));
  }

  viewImage(processInstance: any) {
    this.dialog.open(ViewProcessImageComponent, {
      data: processInstance,
      width: '90%',
    });
  }

  onStatusChange(e: any, status: ProcessSate) {
    if (e.checked) {
      this.seletedStatus.push(status);
    } else {
      this.seletedStatus = this.seletedStatus.filter((s) => s !== status);
    }
    // this.list(e);
    this.listProcessInstances();
    console.log(this.seletedStatus);
  }

  onPage($event: any) {
    console.log($event);
    this.pageable.pageIndex = $event.pageIndex;
    this.pageable.pageSize = $event.pageSize;
    this.listProcessInstances();
  }

  listProcessInstances() {
    // this.processQueriesService
    // .getProcessInstances1(
    //   [1, 2, 3],
    //   undefined,
    //   undefined,
    //   this.pageable.pageIndex,
    //   10000,
    //   'START_DATE',
    //   false
    // )
    this.processQueriesService
      .getProcessInstancesByDeploymentId1(
        this.container,
        this.seletedStatus,
        this.pageable.pageIndex,
        this.pageable.pageSize,
        'START_DATE',
        false
      )
      .pipe(
        map((res: any) => res['process-instance']),
        switchMap((procs: any[]) =>
          zip(
            ...procs.map((proc) =>
              this.processInstancesService
                .getProcessInstanceHistory(
                  proc['container-id'],
                  proc['process-instance-id']
                )
                .pipe(
                  map((t: any) =>
                    Object.assign({}, proc, {
                      tasks: Array.from(
                        t['node-instance']
                          .filter(
                            (f: any) => f['node-type'] === 'HumanTaskNode'
                          )
                          .reduce(
                            (m: any, t: any) => m.set(t['node-instance-id'], t),
                            new Map()
                          )
                          .values()
                      ),
                    })
                  )
                )
            )
          )
        )
      )

      // ()
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<any>(res);
        // console.log(this.dataSource.data);
      });
  }

  openTask(task: any) {
    console.log(task);
    this.dialog.open(TaskFormComponent, {
      data: task,
      width: '80%',
      height: '80%',
    });
  }
}
