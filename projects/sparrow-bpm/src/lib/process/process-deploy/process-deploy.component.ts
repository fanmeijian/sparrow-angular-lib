import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KIEServerAndKIEContainersService,JbpmExtService } from '@sparrowmini/jbpm-api';
import { tap } from 'rxjs';

@Component({
  selector: 'lib-process-deploy',
  templateUrl: './process-deploy.component.html',
  styleUrls: ['./process-deploy.component.css'],
})
export class ProcessDeployComponent implements OnInit {
  selectedFiles!: FileList;
  showProgress = false;
  loaded = 0;
  uploadedFiles: string[] = [];
  progress: number;

  form: FormGroup = this.fb.group({
    'container-id': [null, Validators.required],
    'release-id': this.fb.group({
      'group-id': [null, Validators.required],
      'artifact-id': [null, Validators.required],
      version: [null, Validators.required],
    }),
    name: [null, Validators.required],
    'container-alias': [null, Validators.required],
  });

  constructor(
    private http: HttpClient,
    private containerService: KIEServerAndKIEContainersService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProcessDeployComponent>,
    private snack: MatSnackBar,
    private jbpmExtService: JbpmExtService,
  ) {}

  ngOnInit(): void {
    this.form.get('container-id').disable();
    this.form.get('release-id').disable();
  }

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
    Array.from(this.selectedFiles).forEach((file) => {
      this.uploadedFiles.push(file.name);
    });
  }

  upload() {
    this.showProgress = true;
    let formData: FormData = new FormData();
    let files: any[]=[]
    let fileNames: string[]=[]
    Array.from(this.selectedFiles).forEach((file) => {
      // formData.append(
      //   'files',
      //   new Blob([file], { type: 'application/octet-stream' }),
      //   file.name
      // );
      files.push({file: new Blob([file], { type: 'application/octet-stream' }),name:file.name})

    });

    // let headers = new HttpHeaders();
    // headers.set('Content-Type', 'multipart/form-data');
    // this.http
    //   .post('http://localhost:8090/bpm/jbpm-ext/kjars/deploy', formData, {
    //     headers: headers,
    //     observe: 'events',
    //     reportProgress: true,
    //   })
      this.jbpmExtService.deployKjar(files)
      .pipe(
        tap((event: any) => {
          console.log(event);
          if (event.type === HttpEventType.UploadProgress) {
            this.loaded = Math.round((100 * event.loaded) / event.total);
            this.progress = this.loaded;
          }
        })
      )
      .subscribe((r: any) => {
        if (r instanceof HttpResponse) {
          let res = r.body;
          let containerId = res.artifactId + '_' + res.version;
          this.form.patchValue({
            'container-id': containerId,
            'release-id': {
              'group-id': res.groupId,
              'artifact-id': res.artifactId,
              version: res.version,
            },
          });
        }

      });
  }

  submit() {
    this.containerService
      .createContainer(
        this.form.getRawValue()['container-id'],
        JSON.stringify(this.form.getRawValue())
      )
      .subscribe((a) => {
        this.dialogRef.close(true)
        this.snack.open('部署成功！','关闭')
      });
  }
}
