import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FlowService, ProcessFormId } from '@sparrowmini/flow-api';
import { ProcessInstancesService } from '@sparrowmini/jbpm-api';
import { FormService } from 'dist/form-api/projects';

@Component({
  selector: 'lib-view-process-instance',
  templateUrl: './view-process-instance.component.html',
  styleUrls: ['./view-process-instance.component.css'],
})
export class ViewProcessInstanceComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formService: FlowService,
    private processInstancesService: ProcessInstancesService
  ) {}

  form: any;
  formData: any;

  ngOnInit(): void {
    let processFormId: ProcessFormId = {
      deploymentId: this.data['container-id'],
      processId: this.data['process-id'],
    };
    console.log(this.data);
    this.formService
      .processForm(processFormId.deploymentId, processFormId.processId)
      .subscribe((res) => {
        this.form = res?.form ? JSON.parse(res.form?.form!) : {};
      });

    this.processInstancesService
      .getProcessInstanceVariables(
        processFormId.deploymentId,
        this.data['process-instance-id']
      )
      .subscribe((res) => {
        this.formData = { data: res };
      });
  }

  pvtojson(proc: any) {
    let a = {};
    console.log(proc);
    proc
      .map((m: any) => {
        let o: any = new Object();
        o[m.name] = m.value;
        return o;
      })
      .forEach((element: any) => {
        Object.assign(a, element);
      });
    console.log(a);
    return a;
  }
}
