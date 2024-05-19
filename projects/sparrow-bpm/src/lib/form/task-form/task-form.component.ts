import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskFormId, FlowService } from '@sparrowmini/flow-api';
import { TaskInstancesService, ProcessQueriesService } from '@sparrowmini/jbpm-api';
import { ProcessFormComponent } from '../process-form/process-form.component';

@Component({
  selector: 'lib-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  form: any;
  viewOnly: boolean = true;
  readOnly: boolean = true;
  taskFormId?: TaskFormId;
  inputDate: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public workitem: any,
    private formService: FlowService,
    private dialogRef: MatDialogRef<ProcessFormComponent>,
    private flowService: FlowService,
    private taskInstancesService: TaskInstancesService,
    private proc: ProcessQueriesService
  ) {}

  data: any;
  ngOnInit(): void {
    this.proc
      .getTaskByWorkItemId(this.workitem['work-item-id'])
      .subscribe((res) => {
        this.data = res;
        console.log(res);
        if (this.data['task-status'] !== 'Completed') {
          this.viewOnly = false;
          this.readOnly = false;
        }
        this.taskFormId = {
          taskFormName: this.data['task-form'],
          deploymentId: this.data['task-container-id'],
          processId: this.data['task-process-id'],
        };

        this.formService
          .taskForm(this.taskFormId?.taskFormName!,this.taskFormId?.deploymentId!,this.taskFormId?.processId!)
          .subscribe((res) => {
            this.form = res?.form ? JSON.parse(res.form?.form!) : {};
          });

        this.taskInstancesService
          .getTask(this.taskFormId?.deploymentId!, this.data['task-id'], true, true)
          .subscribe((res:any) => {
            console.log(res);
            this.inputDate={data: this.data['task-status'] === 'Completed'?res['task-output-data'] : res['task-input-data']}
            // this.inputDate={data:{contract_id:'asdf'}}
          });

        // this.taskInstancesService
        //   .getTaskOutputContentByTaskId(
        //     this.taskFormId.deploymentId,
        //     this.data['task-id']
        //   )
        //   .subscribe((res) => {
        //     console.log(res);
        //   });
      });
  }

  onSubmit(e: any) {
    console.log(e);

    this.taskInstancesService
      .complete(
        this.taskFormId?.deploymentId!,
        this.data['task-id'],
        undefined,
        true,
        JSON.stringify(e.data)
      )
      .subscribe((res) => {});

    this.dialogRef.close();
  }

  @ViewChild('formIo') formIo!: ElementRef<any>;
  submit() {
    // console.log(this.formIo['formio'].submit());
    // console.log(this.formIo.formioElement.nativeElement)
    // this.formIo.formioElement.nativeElement.submit();
  }
}
