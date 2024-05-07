import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import {
  FlowService,
  ProcessDefinition,
  ProcessFormId,
  TaskFormId,
} from '@sparrowmini/flow-api';
import { DeploymentService } from '@sparrowmini/camunda-api';
import { map, switchMap } from 'rxjs';
import { ProcessCreateComponent } from '../process-create/process-create.component';
import { BaseOpLogColumnComponent } from '@sparrowmini/sparrow-permission';

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
    private dialog: MatDialog,
    private flowService: FlowService,
    private deploymentService: DeploymentService
  ) {}

  ngOnInit(): void {
    this.flowService
      .processDefinitions([], this.pageable.pageIndex, this.pageable.pageSize)
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res.content);
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

  publish(element: ProcessDefinition) {
    this.deploymentService
      .createDeploymentForm(
        undefined,
        undefined,
        undefined,
        undefined,
        'test',
        undefined,
        new Blob([element.xmlStr!], { type: 'text/xml' })
      )
      .pipe(
        map(
          (m) =>
            m.deployedProcessDefinitions[
              Object.keys(m.deployedProcessDefinitions!)[0]
            ]
        ),
        switchMap((s) =>
          this.flowService.publishProcess([
            {
              name: '',
              remark: '',
              deploymentId: s.deploymentId,
              processId: s.id,
            },
          ])
        )
      )
      .subscribe();
    // this.flowService.publishProcess([{name:'',remark:'',deploymentId:element['container-id'],processId:element['process-id']}]).subscribe()
  }

  open() {
    this.dialog.open(ProcessCreateComponent, { width: '90%' });
  }

  deploy(event: any) {
    this.flowService
      .processDefinition(event)
      .pipe(
        switchMap((s) =>
          this.deploymentService.createDeploymentForm(
            undefined,
            undefined,
            undefined,
            undefined,
            'test',
            undefined,
            new Blob([s.xmlStr!], { type: 'application/octet-stream' })
          )
        )
      )
      .subscribe();
  }
}
