import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface Breadcrumb {
  label: string;
  url: string;
}

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  private breadcrumbsSubject = new BehaviorSubject<Breadcrumb[]>([]);
  breadcrumbs$ = this.breadcrumbsSubject.asObservable();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const root = this.router.routerState.snapshot.root;
        const breadcrumbs = this.createBreadcrumbs(root);

        // 只有当第一个面包屑不是首页时，才手动添加首页
        if (breadcrumbs.length === 0 || breadcrumbs[0].url !== '/') {
          this.breadcrumbsSubject.next([{ label: '首页', url: '/' }, ...breadcrumbs]);
        } else {
          this.breadcrumbsSubject.next(breadcrumbs);
        }
      });
  }

  private createBreadcrumbs(
    route: ActivatedRouteSnapshot,
    url: string = '',
    breadcrumbs: Breadcrumb[] = []
  ): Breadcrumb[] {

    // 1. 获取当前路由节点的 URL 片段
    const routePaths = route.url.map(segment => segment.path).join('/');

    // 2. 拼接出当前节点的完整 URL
    // 如果当前片段不为空，则拼接到 url 后面
    let nextUrl = url;
    if (routePaths) {
      nextUrl = `${url}/${routePaths}`;
    }

    // 3. 获取我们在路由配置中定义的 data: { title: '...' }
    const { title } = route.data;

    if (title) {
      // 检查是否已经存在相同的 label，防止 path: '' 导致的重复添加
      const lastBreadcrumb = breadcrumbs[breadcrumbs.length - 1];
      if (!lastBreadcrumb || lastBreadcrumb.label !== title) {
        breadcrumbs.push({ label: title, url: nextUrl || '/' });
      }
    }

    // 4. 递归处理子路由，注意要把计算好的 nextUrl 传下去
    if (route.firstChild) {
      return this.createBreadcrumbs(route.firstChild, nextUrl, breadcrumbs);
    }

    return breadcrumbs;
  }
}
