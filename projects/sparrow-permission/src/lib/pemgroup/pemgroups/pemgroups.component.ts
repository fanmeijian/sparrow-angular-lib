import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import {
  PemgroupService,
  ScopeService,
  SysroleService,
} from "@sparrowmini/permission-api";
import { tap, map, switchMap, zip, of, combineLatest } from "rxjs";
import { ScopeCreateComponent } from "../../scope/scope-create/scope-create.component";
import { ScopePermissionComponent } from "../../scope/scope-permission/scope-permission.component";
import { PemgroupCreateComponent } from "../pemgroup-create/pemgroup-create.component";
import { PemgroupMemberComponent } from "../pemgroup-member/pemgroup-member.component";

@Component({
  selector: "lib-pemgroups",
  templateUrl: "./pemgroups.component.html",
  styleUrls: ["./pemgroups.component.css"],
})
export class PemgroupsComponent implements OnInit {
  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  total: number = 0;
  displayedColumns = ["seq", "name", "code", "users", "sysroles", "actions"];

  constructor(
    private scopeService: PemgroupService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private sysroleService: SysroleService
  ) {}

  ngOnInit(): void {
    this.onPage(this.pageable);
  }

  new() {
    this.dialog.open(PemgroupCreateComponent);
  }

  delete(sysrole: any) {
    this.scopeService.deleteGroup(sysrole.id).subscribe(() => {
      this.snack.open("删除成功！", "关闭");
    });
  }

  edit(sysrole: any) {
    this.dialog
      .open(PemgroupCreateComponent, { data: sysrole })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.ngOnInit();
        }
      });
  }

  remove(user: any, sysrole: any) {
    this.scopeService.addGroupMembers([user], "", sysrole.id).subscribe(() => {
      this.snack.open("移除成功！", "关闭");
      this.ngOnInit();
    });
  }

  openPermission(sysrole: any) {
    this.dialog.open(PemgroupMemberComponent, { data: sysrole });
  }

  onPage(page: PageEvent) {
    this.pageable.pageIndex = page.pageIndex;
    this.pageable.pageSize = page.pageSize;
    this.dataSource = new MatTableDataSource<any>();
    this.scopeService
      .groups(this.pageable.pageIndex, this.pageable.pageSize)
      .pipe(
        tap((t) => (this.pageable.length = t.totalElements!)),
        map((res: any) => res.content),
        switchMap((sysroles: any[]) =>
          zip(
            ...sysroles.map((group) => {
              const $users = this.scopeService
                .groupMembers(group.id, "USER")
                .pipe(
                  map((m) =>
                    m.content && m.content.length > 0
                      ? m.content?.map((a) => a.id.username)
                      : m.content
                  )
                );
              const $sysroles = this.scopeService
                .groupMembers(group.id, "SYSROLE")
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
                  Object.assign({}, group, {
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
        this.dataSource = new MatTableDataSource<any>(res);
      });
  }
}
