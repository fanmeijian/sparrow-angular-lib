import { Component, OnInit } from '@angular/core';
import {FlowService, ProcessFormId} from "@sparrowmini/flow-api";
import {ProcessInstancesService} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lib-process-instance-view',
  templateUrl: './process-instance-view.component.html',
  styleUrls: ['./process-instance-view.component.css']
})
export class ProcessInstanceViewComponent implements OnInit {
  constructor(
    private formService: FlowService,
    private processInstancesService: ProcessInstancesService,
    private route: ActivatedRoute
  ) {}

  form: any;
  formData: any;

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      let processFormId: ProcessFormId = {
        deploymentId: params['container-id'],
        processId: params['process-id'],
      };

      this.formService
        .processForm(processFormId.deploymentId, processFormId.processId)
        .subscribe((res) => {
          this.form = res?.form ? JSON.parse(res.form?.form!) : {};
        });

      this.processInstancesService
        .getProcessInstanceVariables(
          processFormId.deploymentId,
          params['process-instance-id']
        )
        .subscribe((res) => {
          this.formData = { data: res };
        });
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
