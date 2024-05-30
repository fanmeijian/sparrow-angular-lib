import {Component, OnInit, ViewChild} from '@angular/core';
import {FormioComponent} from "@formio/angular";
import {CosFileService, FlowService, TaskFormId} from "@sparrowmini/flow-api";
import {ActivatedRoute} from "@angular/router";
import {FormService} from "@sparrowmini/form-api";
import {TaskInstancesService} from "@sparrowmini/jbpm-api";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'lib-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  form: any;
  data: any = {};
  formId: string = '';
  dataId?: string;
  taskInstance: any = {};
  taskFormId: TaskFormId = {
    deploymentId: '',
    processId: '',
    taskFormName: '',
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private formService: FormService,
    private flowService: FlowService,
    private taskInstanceService: TaskInstancesService,
    private http: HttpClient,
    public cosFileService: CosFileService
  ) {}

  @ViewChild('formIo', { static: true }) formIo!: FormioComponent;
  ngAfterViewInit(): void {
    // let doc: HTMLElement = this.formIo.formioElement?.nativeElement;
    // let bts: HTMLCollection = doc.getElementsByTagName('button');
    // console.log(bts.);
    // // console.log(doc?.nativeElement.children)
    // // document.getElementsByName('data[submit]')[0].hidden=true
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.taskId) {
        this.taskInstanceService
          .getTask(params.containerId, params.taskId, true, true)
          .subscribe((res: any) => {
            this.taskInstance = res;
            this.taskFormId = {
              deploymentId: res['task-container-id'],
              processId: res['task-process-id'],
              taskFormName: res['task-form'],
            };
            this.flowService
              .taskForm(
                res['task-form'],
                res['task-container-id'],
                res['task-process-id']
              )
              .subscribe((taskForm) => {
                this.form = JSON.parse(taskForm.form?.form!);
                this.data = {
                  data:
                    res['task-status'] === 'Completed'
                      ? Object.assign(
                          {},
                          res['task-input-data'],
                          res['task-output-data']
                        )
                      : res['task-input-data'],
                };
                console.log(this.data)
              });
          });
      }
    });
  }
  afterViewInit() {}

  onSubmit(e: any) {
    console.log(e.data, JSON.stringify(e.data))
    // this.http.post('http://localhost:8090/bpm/jbpm-ext/tasks/complete?deploymentId='+this.taskFormId.deploymentId+'&taskId='+this.taskInstance['task-id'],e.data)
    // .subscribe()
    this.taskInstanceService
      .complete(
        this.taskFormId.deploymentId,
        this.taskInstance['task-id'],
        undefined,
        true,
        JSON.stringify(e.data)
      )
      .subscribe((res) => {
        window.history.back();
      });
  }
}
