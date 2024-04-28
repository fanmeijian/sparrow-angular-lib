import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProcessImagesService } from '@sparrowmini/jbpm-api';
import 'svg-pan-zoom-container'

@Component({
  selector: 'lib-view-process-image',
  templateUrl: './view-process-image.component.html',
  styleUrls: ['./view-process-image.component.css']
})
export class ViewProcessImageComponent implements OnInit {
  @ViewChild('processSvg') processSvg!: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private httpClient: HttpClient,
    private processImagesService: ProcessImagesService
  ) {}

  ngOnInit(): void {
    // let processImageUrl: string =
    //   environment.bpmHost +
    //   "/server/containers/" + this.data.containerId + "/images/processes/instances/" +
    //   this.data.processInstanceId;
    // this.httpClient
    //   .get(processImageUrl, {
    //     headers: { "Content-Type": "text/plain; charset=utf-8" },
    //     responseType: "text",
    //   })
    //   .subscribe((res: any) => {
    //     this.processSvg.nativeElement.innerHTML = res;
    //   });

    this.processImagesService
      .getProcessInstanceImage(
        this.data['container-id'],
        this.data['process-instance-id']
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.processSvg.nativeElement.innerHTML = res.toString();
        },
        (error) => {
          console.log(error);
          this.processSvg.nativeElement.innerHTML = error.error.text;
        },
        () => {
          console.log();
        }
      );
  }
}
