import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProcessImagesService} from "@sparrowmini/jbpm-api";

@Component({
  selector: 'lib-process-image-view',
  templateUrl: './process-image-view.component.html',
  styleUrls: ['./process-image-view.component.css']
})
export class ProcessImageViewComponent implements OnInit {
  @Input() public containerId!: string;
  @Input() public processId?: string;
  @Input() public processInstanceId?: number;
  @Input() public type: 'LINK'|'BUTTON'|'ICON' = 'BUTTON'
  @Input() public label?:string

  productDialog = false;

  @ViewChild('processSvg') processSvg!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private processImagesService: ProcessImagesService
  ) {}

  ngOnInit(): void {}

  openDialog() {
    this.productDialog = true;
    this.route.queryParams.subscribe((params: any) => {
      this.containerId = params['container-id'] || this.containerId;
      this.processId = params['process-id'] || this.processId;
      this.processInstanceId =
        params['process-instance-id'] || this.processInstanceId;
      if (this.processInstanceId) {
        this.processImagesService
          .getProcessInstanceImage(this.containerId, this.processInstanceId)
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
      } else {
        this.processImagesService
          .getProcessImage(this.containerId, this.processId!)
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
    });
  }
}
