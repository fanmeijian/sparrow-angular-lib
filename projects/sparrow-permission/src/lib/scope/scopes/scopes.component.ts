import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ScopeService, SysroleService } from '@sparrowmini/org-api';
import { combineLatest, map, of, switchMap, tap, zip } from 'rxjs';
import { SysroleCreateComponent } from '../../sysrole/sysrole-create/sysrole-create.component';
import { SysrolePermissionComponent } from '../../sysrole/sysrole-permission/sysrole-permission.component';
import { PageEvent } from '@angular/material/paginator';
import { ScopeCreateComponent } from '../scope-create/scope-create.component';
import { ScopePermissionComponent } from '../scope-permission/scope-permission.component';

@Component({
  selector: 'lib-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.css'],
})
export class ScopesComponent implements OnInit {
  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  // pageable = { page: 0, size: 10 };

  total: number = 0;
  displayedColumns = ['id', 'name', 'code', 'users', 'sysroles', 'actions'];

  filters: any[] = [];
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  constructor(
    private scopeService: ScopeService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private sysroleService: SysroleService
  ) {}

  ngOnInit(): void {
    this.onPage({ pageIndex: 0, pageSize: 10, length: 0 });
  }

  new() {
    this.dialog.open(ScopeCreateComponent);
  }

  delete(sysrole: any) {
    this.scopeService.deleteScopes([sysrole.id]).subscribe(() => {
      this.snack.open('删除成功！', '关闭');
    });
  }

  edit(sysrole: any) {
    this.dialog
      .open(ScopeCreateComponent, { data: sysrole })
      .afterClosed()
      .subscribe(() => this.ngOnInit());
  }

  remove(user: any, sysrole: any) {
    this.scopeService
      .removeScopePermissions([user], '', sysrole.id)
      .subscribe(() => {
        this.snack.open('移除成功！', '关闭');
        this.ngOnInit();
      });
  }

  openPermission(sysrole: any) {
    this.dialog.open(ScopePermissionComponent, { data: sysrole });
  }

  onPage(page: PageEvent) {
    this.dataSource = new MatTableDataSource<any>();
    this.scopeService
      .scopes(page.pageIndex, page.pageSize)
      .pipe(
        tap((t) => (this.total = t.totalElements!)),
        map((res: any) => res.content),
        switchMap((sysroles: any[]) =>
          zip(
            ...sysroles.map((sysrole) => {
              const $users = this.scopeService
                .scopePermissions(sysrole.id, 'USER')
                .pipe(
                  map((m) =>
                    m.content && m.content.length > 0
                      ? m.content?.map((a) => a.id.username)
                      : m.content
                  )
                );
              const $sysroles = this.scopeService
                .scopePermissions(sysrole.id, 'SYSROLE')
                .pipe(
                  map((m) => m.content),
                  switchMap((res: any) =>
                    res.length > 0
                      ? zip(
                          ...res.map((m: any) =>
                            this.sysroleService.sysrole(m.id.sysroleId)
                          )
                        )
                      : of([])
                  )
                );

              return combineLatest($users, $sysroles).pipe(
                map((permissions: any) =>
                  Object.assign({}, sysrole, {
                    users: permissions[0],
                    sysroles: permissions[1],
                  })
                )
              );
            })
          )
        )
      )
      .subscribe((res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res);
      });
  }

  applyFilter() {
    this.onPage({
      pageIndex: 0,
      pageSize: this.pageable.pageSize,
      length: this.pageable.length,
    });
  }
}
