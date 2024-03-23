import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ProcessInstancesService } from '@sparrowmini/jbpm-api';

@Injectable({
  providedIn: 'root'
})
export class FlowService {
  constructor(
    private httpClient: HttpClient,
    private dialog: MatDialog,
    private processInstancesService: ProcessInstancesService,
    private router: Router
  ) {}

  // apiBase = environment.bpmHost + '/server';

  myTasks(params: any) {
    // return this.httpClient
    //   .get(this.apiBase + '/queries/tasks/instances', {
    //     params: new HttpParams({ fromObject: params }),
    //   })
    //   .pipe(
    //     map((res: any) => res['task-summary']),
    //     switchMap((res) =>
    //       zip(
    //         ...res.map((m: any) =>
    //           this.httpClient.get(
    //             this.apiBase + '/queries/tasks/instances/' + m['task-id']
    //           )
    //         )
    //       )
    //     )
    //   );
  }

  openTaskForm(task: any, action: 'edit' | 'view') {
    // this.dialog.open(TaskExecuteComponent, { data: Object.assign({_action:action},task), width: '80%' })
    // let dialogRef: MatDialogRef<any>;
    // switch (task['task-form']) {
    //   case 'GmAudit':
    //     dialogRef = this.dialog.open(GmauditTaskFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;
    //   case 'PmAudit':
    //     dialogRef = this.dialog.open(PmauditTaskFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;
    //   case 'ConfirmFee':
    //     dialogRef = this.dialog.open(ComfirmFeeTaskFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;
    //   case 'ReSubmit':
    //     dialogRef = this.dialog.open(CreateOrderProcessFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;
    //   case 'MaterialAudit':
    //     dialogRef = this.dialog.open(MaterialauditTaskFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;

    //   default:
    //     dialogRef = this.dialog.open(CommonTaskFormComponent, {
    //       data: Object.assign({ _action: action }, task),
    //       width: '80%',
    //     });
    //     break;
    // }
    // return dialogRef;
  }

  openProcessForm(task: any, action: 'edit' | 'view' | 'new') {
    // console.log(task);
    // switch (task['process-id']) {
    //   case 'purchase.CreateOrder':
    //     switch (action) {
    //       case 'edit':
    //       case 'view':
    //         this.dialog.open(ViewCreateOrderProcessFormComponent, {
    //           data: Object.assign({ _action: action }, task),
    //           width: '80%',
    //         });
    //         break;
    //       case 'new':
    //         this.dialog.open(CreateOrderProcessFormComponent, {
    //           data: Object.assign({ _action: action }, task),
    //           width: '80%',
    //         });
    //         break;
    //     }
    //     break;

    //   default:
    //     // this.dialog.open(CommonTaskFormComponent, { data: Object.assign({_action:action},task), width: '80%' })
    //     break;
    // }
  }

  completeTask(task: any, params: any) {
    // return this.httpClient.put(
    //   this.apiBase +
    //     '/containers/' +
    //     task['task-container-id'] +
    //     '/tasks/' +
    //     task['task-id'] +
    //     '/states/completed?auto-progress=true',
    //   params
    // );
  }

  // getFlowStatusName(status: string) {
  //   switch (status) {
  //     case 'Reserved':
  //     case 'Ready':
  //     case 'InProgress':
  //       return { name: '待处理', style: 'color: green; font-size:12px;border-radius:3px;padding:3px;' }
  //     case 'Completed':
  //       return { name: '已处理', style: 'color: grey; font-size:12px;border-radius:3px;padding:3px;' }
  //     default:
  //       return { name: '', style: '' }
  //   }
  // }

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

  viewProcess(containerId: string, processInstanceId: number) {
    // this.dialog.open(ViewProcessImageComponent, {
    //   data: { containerId: containerId, processInstanceId: processInstanceId },
    //   width: '80%',
    // });
  }

  /**
   * 获取表单的component
   * @returns
   */
  // getTaskForm(task: any): Type<any> {
  //   switch (task['task-form']) {
  //     case 'GmAudit':
  //       return PmauditTaskFormComponent;
  //     default:
  //       return CommonTaskFormComponent;
  //   }
  // }
}
