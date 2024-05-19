import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlowService } from '@sparrowmini/flow-api';
import { ProcessInstancesService } from '@sparrowmini/jbpm-api';

@Component({
  selector: 'lib-process-form',
  templateUrl: './process-form.component.html',
  styleUrls: ['./process-form.component.css']
})
export class ProcessFormComponent implements OnInit {
  form: any;
  submission: any;
  data: any;
  window = window

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    // private formService: FormService,
    // private dialogRef: MatDialogRef<ProcessFormComponent>,
    private flowService: FlowService,
    // private keycloakService: KeycloakService,
    private processService: ProcessInstancesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.deploymentId) {
        this.data = {
          containerId: params.deploymentId,
          processId: params.processId,
        };
        console.log(params)
        this.flowService.processForm(this.data.containerId,this.data.processId).subscribe((res) => {
          console.log(res)
          this.form = JSON.parse(res.form?.form!);
        });
      }
    });

    // this.formService.getReleasedForms;
    // this.keycloakService.loadUserProfile(true).then((u) => {
    //   this.submission = { data: { user: u } };
    // });
  }

  onSubmit(e: any) {
    console.log(e);
    this.processService.startProcess
      (
        this.data.containerId,
        this.data.processId,
        Object.assign({}, e.data, { total: 0 })
      )
      .subscribe((res) => {
        console.log(res);
      });
    // this.dialogRef.close();
  }

  @ViewChild('formIo') formIo!: ElementRef<any>;
  submit() {
    // console.log(this.formIo['formio'].submit());
    // console.log(this.formIo.formioElement.nativeElement)
    // this.formIo.formioElement.nativeElement.submit();
  }
}
