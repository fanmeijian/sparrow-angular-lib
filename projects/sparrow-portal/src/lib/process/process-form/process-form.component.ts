import { Component, OnInit } from '@angular/core';
import {ProcessInstancesService} from "@sparrowmini/jbpm-api";
import {ActivatedRoute} from "@angular/router";
import {FlowService} from "@sparrowmini/flow-api";

@Component({
  selector: 'lib-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  form: any;
  submission: any;
  data: any = { containerId: '', processId: '' };
  window = window;

  constructor(
    private processService: ProcessInstancesService,
    private route: ActivatedRoute,
    private flowService: FlowService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.deploymentId) {
        this.data = {
          containerId: params.deploymentId,
          processId: params.processId,
        };

        this.flowService
          .processForm(this.data.containerId, this.data.processId)
          .subscribe((res) => {
            this.form = JSON.parse(res.form?.form!);
          });
      }
    });
  }

  onSubmit(e: any) {
    console.log(e);
    this.processService
      .startProcess(
        this.data.containerId,
        this.data.processId,
        Object.assign({}, e.data, { total: 0 })
      )
      .subscribe((res) => {
        console.log(res);
      });
    // this.dialogRef.close();
  }

}
