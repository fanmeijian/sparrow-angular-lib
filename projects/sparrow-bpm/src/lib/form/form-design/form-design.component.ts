import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormioRefreshValue } from '@formio/angular';
import { ProcessFormId, TaskFormId } from '@sparrowmini/flow-api';
import { ProcessAndTaskDefinitionsService } from '@sparrowmini/jbpm-api';
import { map, tap } from 'rxjs';
import { FlowService,CosFileService } from '@sparrowmini/flow-api';
import Prism from 'prismjs';

@Component({
  selector: 'lib-form-design',
  templateUrl: './form-design.component.html',
  styleUrls: ['./form-design.component.css'],
})
export class FormDesignComponent implements OnInit {
  formJson: any;
  formOptions = {
    fileService: this.formioFileService,
  }
  taskFormId?: TaskFormId;
  processFormId?: ProcessFormId;
  variables: any[] = [];
  variablesOutput: any[] = [];

  @ViewChild('json', { static: true }) jsonElement?: ElementRef;
  @ViewChild('code', { static: true }) codeElement?: ElementRef;
  public form: Object = { components: [] };
  public refreshForm: EventEmitter<FormioRefreshValue> = new EventEmitter();
  constructor(
    private formService: FlowService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private processAndTaskDefinitionsService: ProcessAndTaskDefinitionsService,
    private formioFileService: CosFileService,
  ) {
    this.form = { components: [] };
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: any) => {
      if (params.deploymentId) {
        if (params.taskFormName) {
          this.taskFormId = {
            deploymentId: params.deploymentId,
            processId: params.processId,
            taskFormName: params.taskFormName,
          };
          this.formService
            .taskForm(
              this.taskFormId.taskFormName,
              this.taskFormId.deploymentId,
              this.taskFormId.processId
            )
            .subscribe((res) => {
              this.form = res?.form ? JSON.parse(res?.form.form!) : this.form;
              this.formJson = this.form;
            });

          this.processAndTaskDefinitionsService
            .getTasksDefinitions(
              this.taskFormId.deploymentId!,
              this.taskFormId.processId!
            )
            .pipe(
              map(
                (m: any) =>
                  m.task.filter(
                    (f:any) => f['task-form-name'] === this.taskFormId?.taskFormName
                  )[0]
              ),
              tap(
                (v) =>
                  (this.variables = Object.entries(v.taskInputMappings).map(
                    ([name, type]) => ({
                      name,
                      type,
                    })
                  ))
              ),
              tap(
                (v) =>
                  (this.variablesOutput = Object.entries(
                    v.taskOutputMappings
                  ).map(([name, type]) => ({
                    name,
                    type,
                  })))
              )
            )
            .subscribe((res) => {
              // this.variables = res;
              console.log(this.variables);
            });
        } else {
          this.processFormId = {
            deploymentId: params.deploymentId,
            processId: params.processId,
          };
          this.formService
            .processForm(
              this.processFormId.deploymentId,
              this.processFormId.processId
            )
            .subscribe((res) => {
              this.form = res?.form ? JSON.parse(res.form.form!) : this.form;
              this.formJson = this.form;
            });
          this.processAndTaskDefinitionsService
            .getProcessVariables(
              this.processFormId.deploymentId!,
              this.processFormId.processId!
            )
            .pipe(
              map((v:any) =>
                Object.entries(v.variables).map(([name, type]) => ({
                  name,
                  type,
                }))
              )
            )
            .subscribe((res) => {
              this.variables = res;
              console.log(this.variables);
            });
        }
      }
    });
  }

  onChange(event:any) {
    console.log(event);
    this.formJson = event.form;
    // this.jsonElement.nativeElement.innerHTML = '';
    // this.jsonElement.nativeElement.appendChild(
    //   document.createTextNode(JSON.stringify(event.form, null, 4))
    // );
    this.refreshForm.emit({
      property: 'form',
      value: event.form,
    });
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  save() {
    let json = JSON.stringify(this.formJson);
    if (this.taskFormId) {
      this.formService
        .createTaskForm(
          Object.assign({}, { form: json }),this.taskFormId.taskFormName,this.taskFormId.deploymentId,this.taskFormId.processId
        )
        .subscribe(() => this.snackBar.open('保存成功!', '关闭'));
    } else {
      this.formService
        .createProcessForm(
          Object.assign({}, { form: json }), this.processFormId?.deploymentId!,this.processFormId?.processId!
        )
        .subscribe(() => this.snackBar.open('保存成功!', '关闭'));
    }
  }

  @ViewChild('soruceCode') soruceCodeTemplate!: TemplateRef<any>;
  viewSource() {
    console.log(this.soruceCodeTemplate);
    this.dialog.open(this.soruceCodeTemplate, { width: '80%', height: '80%' });
  }

  @ViewChild('preview') previewTemplate!: TemplateRef<any>;
  preview1() {
    this.dialog.open(this.previewTemplate, { width: '80%', height: '80%' });
  }
}
