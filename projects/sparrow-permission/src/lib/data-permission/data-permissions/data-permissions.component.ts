import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { DataPermissionService, SysroleService } from '@sparrowmini/org-api';
import { map, switchMap, tap, zip } from 'rxjs';

@Component({
  selector: 'lib-data-permissions',
  templateUrl: './data-permissions.component.html',
  styleUrls: ['./data-permissions.component.css'],
})
export class DataPermissionsComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  pageable = { pageIndex: 0, pageSize: 10, length: 0 };

  displayedColumns = ['id','name', 'remark'];

  constructor(
    private dataPermissionService: DataPermissionService,
    private sysroleService: SysroleService,
    private dialog: MatDialog,
    private snack: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.onPageChange(this.pageable);
  }

  onPageChange(event: any) {
    this.dataPermissionService
      .dataPermissions(event.page, event.size)
      .pipe(
        tap((t) => (this.pageable.length = t.totalElements!)),
        map((m) => m.content),
        switchMap((m: any) =>
          zip(
            ...m.map((a: any) =>
              this.dataPermissionService
                .dataPermission(a.id)
                .pipe(map((r) => Object.assign({}, a, r)))
            )
          )
        )
      )
      .subscribe((res: any) => {
        this.dataSource = new MatTableDataSource<any>(res);
        // console.log(res);
      });
  }
}
