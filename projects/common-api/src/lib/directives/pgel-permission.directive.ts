import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  EnvironmentInjector,
  Host,
  inject,
  InjectionToken,
  Input,
  OnInit,
  Optional,
  Renderer2,
  SkipSelf,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { PermissionService } from './permission.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentRegistryService } from './component-registry.service';
import { filter } from 'rxjs';

export const PEM_BASE_PATH = new InjectionToken<string>('pemApiBase')

@Directive({
  selector: '[appPgelPermission]',
})
export class PgelPermissionDirective implements OnInit, AfterViewInit {

  private static styleInjected = false;
  elementTypes = ['input', 'select', 'button'];
  private registry = inject(ComponentRegistryService);
  private envInjector: any = inject(EnvironmentInjector);

  constructor(
    private el: ElementRef<any>,
    private permissionService: PermissionService,
    private renderer: Renderer2,
    private route: ActivatedRoute,
  ) {
    // this.el.nativeElement.style.display = 'none';

  }
  ngOnInit(): void {
    this.renderer.setStyle(this.el.nativeElement, 'display', 'none');

  }
  ngAfterViewInit(): void {
    const pageId = this.permissionService.getCurrentPageId();
    if (!pageId) return;

    // 即使多个指令同时调用，这里也只会有一次 HTTP 请求
    this.permissionService.registerElementId(this.permission);
    this.permissionService.watchPermissions().pipe(
      // 只处理当前页面的权限
      filter(res => res.pageId === this.permissionService.getCurrentPageId())
    ).subscribe(res => {
      console.log(pageId, res)
      const allowed = res.data?.[this.permission] === 'ALLOW';
      if (allowed) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      }
    });

  }


  @Input('appPgelPermission') permission!: string;
}
