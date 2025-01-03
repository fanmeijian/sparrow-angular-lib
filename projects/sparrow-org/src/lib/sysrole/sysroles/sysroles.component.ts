import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SysroleService } from '@sparrowmini/org-api';
import { map, switchMap, tap, zip } from 'rxjs';
import { SysroleCreateComponent } from '../sysrole-create/sysrole-create.component';
import { SysrolePermissionComponent } from '../sysrole-permission/sysrole-permission.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataPermissionGrantComponent } from '../../data-permission/data-permission-grant/data-permission-grant.component';
import { HttpClient } from '@angular/common/http';
import { ReportTemplateCreateComponent } from '../../report/report-template-create/report-template-create.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSort, SortDirection } from '@angular/material/sort';

@Component({
  selector: 'lib-sysroles',
  templateUrl: './sysroles.component.html',
  styleUrls: ['./sysroles.component.css'],
})
export class SysrolesComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort;
  users: any[] = [];
  dataSource = new MatTableDataSource<any>();
  pageable = {
    pageIndex: 0,
    pageSize: 10,
    length: 0,
    sort: ['createdDate,desc'],
  };

  displayedColumns = ['seq', 'name', 'code', 'users', 'actions'];

  constructor(
    private sysroleService: SysroleService,
    private dialog: MatDialog,
    private snack: MatSnackBar,
    private http: HttpClient,
    private sanitizer: DomSanitizer
  ) { }
  ngAfterViewInit(): void {
    this.onPageChange(this.pageable);
  }

  filters: any[] = [];
  ngOnInit(): void {

  }

  applyFilter() {
    this.onPageChange({ pageIndex: 0, pageSize: this.pageable.pageSize });
  }

  onPageChange(event: any) {
    // console.log(event);
    this.dataSource = new MatTableDataSource<any>();
    this.pageable.pageIndex = event.pageIndex;
    this.pageable.pageSize = event.pageSize;
    this.sysroleService
      .sysroles(this.filters, this.pageable.pageIndex, this.pageable.pageSize)
      .pipe(
        tap((res) => (this.pageable.length = res.totalElements!)),
        map((res: any) => res.content),
        switchMap((sysroles: any[]) =>
          zip(
            ...sysroles.map((sysrole) =>
              this.sysroleService.sysroleUsers(sysrole.id).pipe(
                map((m) =>
                  Object.assign({}, sysrole, {
                    users: m.content?.map((u) => u.id?.username),
                  })
                )
              )
            )
          )
        )
      )
      .subscribe((res) => {
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.sort = this.sort;
      });
  }

  new() {
    this.dialog
      .open(SysroleCreateComponent)
      .afterClosed()
      .subscribe((result) => {
        if (result) this.ngOnInit();
      });
  }

  delete(sysrole: any) {
    this.sysroleService.deleteSysroles([sysrole.id]).subscribe(() => {
      this.snack.open('删除成功！', '关闭');
    });
  }

  edit(sysrole: any) {
    this.dialog
      .open(SysroleCreateComponent, { data: sysrole })
      .afterClosed()
      .subscribe((result) => {
        if (result) this.onPageChange(this.pageable);
      });
  }

  remove(user: any, sysrole: any) {
    this.sysroleService.removeSysroleUsers([user], sysrole.id).subscribe(() => {
      this.snack.open('移除成功！', '关闭');
      this.ngOnInit();
    });
  }

  openPermission(sysrole: any) {
    this.dialog
      .open(SysrolePermissionComponent, { data: sysrole, width: '80%' })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.ngOnInit();
        }
      });
  }

  openDataPermission(sysrole: any) {
    this.dialog
      .open(DataPermissionGrantComponent, {
        data: sysrole,
        width: '80%',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result) {
          this.ngOnInit();
        }
      });
  }

  newReport() {
    this.dialog.open(ReportTemplateCreateComponent);
  }

  hhh: any
  exportReport() {
    // this.http
    //   .get(
    //     'http://localhost:4421/org-service/reports/ff8080818f320131018f320f03b30002/export?type=HTML',
    //     { responseType: 'blob' }
    //   )
    //   .subscribe((res) => {
    //     // var downloadURL = URL.createObjectURL(res);
    //     // window.open(downloadURL);
    //     // var reader = new FileReader();
    //     // reader.onload = function () {
    //     //   alert(reader.result);
    //     // };
    //     // reader.readAsText(res);
    //     res.text().then(text=>{
    //       this.hhh=this.sanitizer.bypassSecurityTrustHtml(text);
    //     })
    //   });
  }
}
