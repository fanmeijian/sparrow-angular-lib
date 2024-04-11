import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileService } from '@sparrowmini/org-api';
import { tap } from 'rxjs';

@Component({
  selector: 'lib-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  loaded = 0;
  selectedFiles!: FileList;
  uploadedFiles: any[] = [];
  showProgress = false;

  constructor(
    private http: HttpClient,
    private fileService: FileService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.showProgress = true;
    this.uploadedFiles = [];
    Array.from(this.selectedFiles).forEach((file) => {
      const fileDetails: any = {};
      fileDetails.name = file.name;
      this.uploadedFiles.push(fileDetails);
      this.fileService
        .uploadFileForm(file)
        .pipe(
          tap((event: any) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.loaded = Math.round((100 * event.loaded) / event.total);
              fileDetails.progress = this.loaded;
            }
          })
        )
        .subscribe((event) => {
          if (event instanceof HttpResponse) {
            if (
              this.selectedFiles.item(this.selectedFiles.length - 1) === file
            ) {
              // Invokes fetchFileNames() when last file in the list is uploaded.
            }
          }
        });
    });
  }
}
