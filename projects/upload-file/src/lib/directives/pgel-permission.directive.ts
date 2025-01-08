import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  Inject,
  Input,
  Renderer2,
} from '@angular/core';
import { TxcosConfig } from '../services/txcos-upload-service';
import { CosConfig } from '../upload-service';

@Directive({
  selector: '[libPgelPermission]',
})
export class PgelPermissionDirective implements AfterViewInit {
  elementTypes = ['input', 'select', 'button'];

  constructor(
    private el: ElementRef<any>,
    private renderer: Renderer2,
    private pageElementService: HttpClient,
    @Inject(TxcosConfig) private cosConfig: CosConfig,
  ) { }
  ngAfterViewInit(): void {
    this.el.nativeElement.style.display = 'none';
    this.pageElementService
      .get(this.cosConfig.apiBase.replace('{id}',this.libPgelPermission!))
      .subscribe(
        (res) => {
          if (res) {
            this.el.nativeElement.style.display = 'block';
          }
        },
        (err) => {
          this.el.nativeElement.style.display = 'none';
        }
      );
  }

  @Input() libPgelPermission?: string;
}
