import { Component, OnInit } from '@angular/core';
import { ProcessInstancesService } from "@sparrowmini/jbpm-api";
import { ActivatedRoute } from "@angular/router";
import { CosFileService, FlowService } from "@sparrowmini/flow-api";
import { HttpClient } from '@angular/common/http';

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
    private flowService: FlowService,
    private http: HttpClient,
    public cosFileService: CosFileService
  ) { }

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

    // this.http.post('http://localhost:8090/bpm/jbpm-ext/start-process?deploymentId=' + this.data.containerId + '&processid=' + this.data.processId, Object.assign({}, e.data, { total: 0 }, { _initiator: sessionStorage.getItem('username'), applier: sessionStorage.getItem('username') })).subscribe()
    this.processService
      .startProcess(
        this.data.containerId,
        this.data.processId,
        JSON.stringify(Object.assign({}, e.data, { total: 0 }, { _initiator: sessionStorage.getItem('username'), applier: sessionStorage.getItem('username') }))
      )
      .subscribe((res) => {
        console.log(res);
      });
    // this.dialogRef.close();
  }

}
