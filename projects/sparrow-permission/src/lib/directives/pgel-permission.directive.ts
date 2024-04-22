import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { MatButton } from '@angular/material/button';
import { PageElementService } from '@sparrowmini/org-api';

@Directive({
  selector: '[libPgelPermission]',
})
export class PgelPermissionDirective implements AfterViewInit {
  elementTypes = ['input', 'select', 'button'];

  constructor(
    private el: ElementRef<any>,
    private renderer: Renderer2,
    private pageElementService: PageElementService
  ) {
    // this.renderer.setProperty(this.el.nativeElement, 'disabled', false);
  }
  ngAfterViewInit(): void {
    this.pageElementService
      .hasPageElementPermission(this.libPgelPermission!)
      .subscribe((res) => {
        if (!res) {
          this.el.nativeElement.style.display = 'none';
        }
      });
    // if (this.libPgelPermission === 'test') {
    //   // this.el.nativeElement.disabled = true;
    //   // this.el.nativeElement.classList.add('mat-button-disabled')
    //   this.el.nativeElement.style.display = 'none';
    // }
  }

  @Input() libPgelPermission?: string;
}
