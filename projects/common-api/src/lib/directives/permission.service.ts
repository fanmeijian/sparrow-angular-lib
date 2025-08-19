import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { tap, shareReplay, auditTime } from 'rxjs/operators';
import { Router } from '@angular/router';
import { BASE_PATH } from '../common-api.service';

@Injectable({ providedIn: 'root' })
export class PermissionService {
  private currentUsername: string = sessionStorage.getItem('username') || '';

  private checkUserChange() {
  const username = sessionStorage.getItem('username') || '';
  if (username !== this.currentUsername) {
    // 用户切换了，清空队列
    this.pendingSet.clear();
    this.currentUsername = username;
  }
}

  // 只用于指令订阅，不缓存
  private permissions$ = new Subject<{ pageId: string; data: Record<string, any> }>();
  private pendingElementIds$ = new Subject<string>();
  private pendingSet: Set<string> = new Set();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(BASE_PATH) private apiBase: string,
  ) {
    // 每 50ms 合并一次请求
    this.pendingElementIds$
      .pipe(auditTime(50))
      .subscribe(() => this.flushPendingElementIds());

  }

  /** 注册当前页面的 permission key */
  registerElementId(elementId: string) {
    this.checkUserChange(); // 检查用户是否变化
    this.pendingSet.add(elementId);
    this.pendingElementIds$.next(elementId);
  }

  /** 合并请求并立即清理队列 */
  private flushPendingElementIds() {
    if (this.pendingSet.size === 0) return;

    const elementIds = Array.from(this.pendingSet);
    const pageId = this.getCurrentPageId();

    this.http
      .get(`${this.apiBase}/permissions/page-elements/permissions`, {
        params: { id: elementIds },
      })
      .pipe(
        tap((res: any) => {
          // 请求完成后立刻通知指令
          this.permissions$.next({ pageId, data: res });
        }),
        shareReplay(1),
      )
      .subscribe();

    // 请求发出后立即清空
    this.pendingSet.clear();
  }

  /** 指令订阅权限变化 */
  watchPermissions(): Observable<{ pageId: string; data: Record<string, any> }> {
    return this.permissions$.asObservable();
  }

  /** 获取当前页面唯一ID（用路由 path） */
  getCurrentPageId(): string {
    const tree = this.router.routerState.snapshot.root;
    const active = this.getDeepestChild(tree);
    return active.routeConfig?.path || '(unknown)';
  }

  private getDeepestChild(snapshot: any): any {
    let node = snapshot;
    while (node.firstChild) {
      node = node.firstChild;
    }
    return node;
  }
}
